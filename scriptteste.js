function adjustInputWidth(inputElement) {
    const spanElement = inputElement.previousElementSibling;
    spanElement.textContent = inputElement.value;
    inputElement.style.width = `${spanElement.offsetWidth}px`;
}
