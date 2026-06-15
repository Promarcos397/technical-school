const fs = require('fs');
const path = require('path');

const walkSync = (dir, filelist = []) => {
    fs.readdirSync(dir).forEach(file => {
        const filepath = path.join(dir, file);
        if (fs.statSync(filepath).isDirectory()) {
            filelist = walkSync(filepath, filelist);
        } else {
            if (filepath.endsWith('.jsx')) {
                filelist.push(filepath);
            }
        }
    });
    return filelist;
};

const files = walkSync(path.join(__dirname, 'src'));

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    
    // First, remove the redundant RTL/LTR utility combos
    content = content.replace(/rtl:text-right\s+ltr:text-left/g, 'text-start');
    content = content.replace(/md:rtl:text-right\s+md:ltr:text-left/g, 'md:text-start');
    content = content.replace(/lg:rtl:text-right\s+lg:ltr:text-left/g, 'lg:text-start');
    
    content = content.replace(/rtl:md:text-right\s+ltr:md:text-left/g, 'md:text-start');
    content = content.replace(/rtl:lg:text-right\s+ltr:lg:text-left/g, 'lg:text-start');

    // Remove text-right combined with ltr/rtl from the string entirely if it was redundant
    // e.g. "text-center md:text-right rtl:md:text-right ltr:md:text-left" -> "text-center md:text-start"
    content = content.replace(/md:text-right\s+md:text-start/g, 'md:text-start');
    content = content.replace(/lg:text-right\s+lg:text-start/g, 'lg:text-start');
    content = content.replace(/text-right\s+text-start/g, 'text-start');

    // Finally replace raw right alignments with logical start alignments
    content = content.replace(/(?<!-)\btext-right\b/g, 'text-start');
    content = content.replace(/\bmd:text-right\b/g, 'md:text-start');
    content = content.replace(/\blg:text-right\b/g, 'lg:text-start');
    content = content.replace(/\bsm:text-right\b/g, 'sm:text-start');

    // Also replace raw left alignments if they are meant to be trailing edges. 
    // Wait, let's just leave text-left alone unless it's explicitly part of a combo, 
    // because text-left in Arabic might be intended (like email fields).
    // Let's replace pr-6 with pe-6 (padding-inline-end) or ps-6 (padding-inline-start)?
    // In Hero.jsx it's "lg:pr-6 text-center lg:text-right". In RTL, right padding is start padding. So ps-6.
    // Let's just fix text alignment first, which is the most jarring.

    fs.writeFileSync(file, content, 'utf8');
});

console.log('Done replacing text-right with text-start');
