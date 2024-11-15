document.getElementById('shapeForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const shape = document.getElementById('shape').value;
    const index = document.getElementById('index').value;
    const light = document.getElementById('light').value;
    const background = document.getElementById('background').checked ? 'no-bg' : 'bg';
    const wireframe = document.getElementById('wireframe').checked ? 'wireframe' : 'solid';

    const imagePath = `images/${shape}_${index}_${light}_${background}_${wireframe}.png`;

    document.getElementById('shapeImage').src = imagePath;
    document.getElementById('shapeImage').alt = `${shape} image with index ${index}, ${light} light, ${background}, and ${wireframe}`;
});