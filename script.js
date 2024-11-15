document.addEventListener('DOMContentLoaded', function() {
    const shapeForm = document.getElementById('shapeForm');
    const shapeImage = document.getElementById('shapeImage');

    function updateImage() {
        const shape = document.getElementById('shape').value;
        const index = document.getElementById('index').value.padStart(4, '0');
        const light = document.getElementById('light').value === 'distant' ? 'distant' : 'spot';
        const background = document.getElementById('background').checked ? 'NoBackground' : 'Background';
        const wireframe = document.getElementById('wireframe').checked ? 'openGL' : '';

        let imagePath = `images/${shape}_${light}_${background}_v01.${index}.png`;
        if (wireframe) {
            imagePath = `images/${shape}_${wireframe}_v01.${index}.png`;
        }

        shapeImage.src = imagePath;
        shapeImage.alt = `${shape} image with ${light} light, ${background}, and ${wireframe ? 'wireframe' : 'solid'}`;
    }

    shapeForm.addEventListener('input', updateImage);
    shapeForm.addEventListener('change', updateImage);

    // Call updateImage once to set the initial image
    updateImage();
});