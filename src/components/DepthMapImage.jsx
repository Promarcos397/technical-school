import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

const vertexShader = `
varying vec2 vUv;
void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const fragmentShader = `
uniform sampler2D tOriginal;
uniform sampler2D tDepth;
uniform vec2 uMouse;
varying vec2 vUv;

void main() {
    // Read the depth from the depth map (0.0 to 1.0)
    // We assume white (1.0) is closer to camera, black (0.0) is further
    vec4 depthData = texture2D(tDepth, vUv);
    
    // Scale depth effect. 0.05 is the intensity of the parallax displacement
    float depth = depthData.r; 
    
    // Calculate displacement based on mouse position and depth
    // The further from center uMouse is, the more shift we apply
    // We multiply by depth so closer pixels move more than background
    // Reduced from 0.05 to 0.015 for a very subtle, elegant effect
    vec2 displacement = uMouse * depth * 0.015;
    
    // Sample the original color image, shifted by the displacement
    vec4 color = texture2D(tOriginal, vUv + displacement);
    
    gl_FragColor = color;
}
`;

const DepthMapImage = ({ imageSrc, depthSrc, alt, className }) => {
    const containerRef = useRef(null);
    const canvasRef = useRef(null);
    const [texturesLoaded, setTexturesLoaded] = useState(false);

    // Store refs to cleanup 
    const sceneRef = useRef(null);
    const rendererRef = useRef(null);
    const materialRef = useRef(null);

    useEffect(() => {
        if (!containerRef.current || !canvasRef.current) return;

        // Setup Three.js Scene
        const scene = new THREE.Scene();
        sceneRef.current = scene;

        // Orthographic camera because we're just doing 2D manipulation on a flat plane
        const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

        const renderer = new THREE.WebGLRenderer({
            canvas: canvasRef.current,
            alpha: true,
            antialias: true
        });
        rendererRef.current = renderer;

        const updateSize = () => {
            if (!containerRef.current) return;
            const { clientWidth, clientHeight } = containerRef.current;
            renderer.setSize(clientWidth, clientHeight);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // cap at 2 for performance
        };
        updateSize();
        window.addEventListener('resize', updateSize);

        // Load Textures
        const textureLoader = new THREE.TextureLoader();

        const uniforms = {
            tOriginal: { value: null },
            tDepth: { value: null },
            uMouse: { value: new THREE.Vector2(0, 0) },
        };

        const material = new THREE.ShaderMaterial({
            vertexShader,
            fragmentShader,
            uniforms,
            transparent: true,
        });
        materialRef.current = material;

        // Plane covering the entire orthographic camera view
        const geometry = new THREE.PlaneGeometry(2, 2);
        const mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);

        // Promise to load both images before rendering
        Promise.all([
            new Promise((resolve) => textureLoader.load(imageSrc, resolve)),
            new Promise((resolve, reject) => {
                textureLoader.load(depthSrc, resolve, undefined, reject);
            }).catch(() => {
                // Return a dummy small blank texture if depth map missing (fail gracefully)
                return new THREE.DataTexture(new Uint8Array([0, 0, 0, 255]), 1, 1, THREE.RGBAFormat);
            })
        ]).then(([originalTex, depthTex]) => {
            // Fix texture orientations for standard web display
            originalTex.generateMipmaps = false;
            originalTex.minFilter = THREE.LinearFilter;
            depthTex.generateMipmaps = false;
            depthTex.minFilter = THREE.LinearFilter;

            material.uniforms.tOriginal.value = originalTex;
            material.uniforms.tDepth.value = depthTex;
            setTexturesLoaded(true);
        });

        // Mouse tracking for fluid displacement
        let targetMouse = new THREE.Vector2(0, 0);
        let currentMouse = new THREE.Vector2(0, 0);

        const onMouseMove = (e) => {
            if (!containerRef.current) return;
            const bounds = containerRef.current.getBoundingClientRect();
            // Normalize mouse position between -1 and 1
            const x = ((e.clientX - bounds.left) / bounds.width) * 2 - 1;
            const y = -((e.clientY - bounds.top) / bounds.height) * 2 + 1;
            targetMouse.set(x, y);
        };

        const onMouseLeave = () => {
            // Reset back to center smoothly when mouse leaves
            targetMouse.set(0, 0);
        };

        containerRef.current.addEventListener('mousemove', onMouseMove);
        containerRef.current.addEventListener('mouseleave', onMouseLeave);

        // Animation Loop for smoothing (Interpolation/Lerp)
        let animationFrameId;
        const render = () => {
            animationFrameId = requestAnimationFrame(render);

            // Lerp current mouse towards target mouse (0.05 is smoothing speed)
            currentMouse.lerp(targetMouse, 0.05);
            material.uniforms.uMouse.value.copy(currentMouse);

            renderer.render(scene, camera);
        };
        render();

        // Cleanup
        return () => {
            window.removeEventListener('resize', updateSize);
            if (containerRef.current) {
                containerRef.current.removeEventListener('mousemove', onMouseMove);
                containerRef.current.removeEventListener('mouseleave', onMouseLeave);
            }
            cancelAnimationFrame(animationFrameId);
            geometry.dispose();
            material.dispose();
            renderer.dispose();
        };
    }, [imageSrc, depthSrc]);

    return (
        <div ref={containerRef} className={`relative w-full h-full overflow-hidden ${className || ''}`}>
            {/* Fallback image shown while textures load or if WebGL fails */}
            {!texturesLoaded && (
                <img
                    src={imageSrc}
                    alt={alt}
                    className="absolute inset-0 w-full h-full object-cover"
                />
            )}
            <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{ opacity: texturesLoaded ? 1 : 0, transition: 'opacity 0.5s' }} />
        </div>
    );
};

export default DepthMapImage;
