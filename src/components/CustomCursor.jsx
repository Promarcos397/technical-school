import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const updateMousePosition = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e) => {
            // Check if we are hovering over clickable elements
            if (
                e.target.tagName.toLowerCase() === 'button' ||
                e.target.tagName.toLowerCase() === 'a' ||
                e.target.closest('button') ||
                e.target.closest('a') ||
                e.target.classList.contains('cursor-pointer')
            ) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', updateMousePosition);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);

    // Don't render generic cursor on touch devices
    if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
        return null;
    }

    return (
        <>
            <motion.div
                className="fixed top-0 left-0 w-4 h-4 bg-teal-900 rounded-full mix-blend-exclusion pointer-events-none z-[100] transform -translate-x-1/2 -translate-y-1/2"
                animate={{
                    x: mousePosition.x - 8,
                    y: mousePosition.y - 8,
                    scale: isHovering ? 2.5 : 1,
                    opacity: isHovering ? 0.5 : 1
                }}
                transition={{ type: "tween", ease: "backOut", duration: 0.05 }}
            />
            <motion.div
                className="fixed top-0 left-0 w-10 h-10 border border-teal-900/30 rounded-full pointer-events-none z-[99] transform -translate-x-1/2 -translate-y-1/2"
                animate={{
                    x: mousePosition.x - 20,
                    y: mousePosition.y - 20,
                    scale: isHovering ? 1.5 : 1,
                    backgroundColor: isHovering ? 'rgba(16, 185, 129, 0.1)' : 'transparent',
                    borderColor: isHovering ? 'rgba(16, 185, 129, 0.5)' : 'rgba(10, 37, 39, 0.3)'
                }}
                transition={{ type: "tween", ease: "easeOut", duration: 0.1 }}
            />
        </>
    );
};

export default CustomCursor;
