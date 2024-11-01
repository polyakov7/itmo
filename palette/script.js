let selectedColor = '';

function setColor(element) {
    selectedColor = window.getComputedStyle(element).backgroundColor;
}

function colorSquare(element) {
    if (selectedColor) {
        element.style.backgroundColor = selectedColor;
    }
}