let button = document.querySelector(".button");
let input = document.querySelector(".input");
let output = document.querySelector(".output");

button.addEventListener('click', function (e) {
    let inputValue = input.value;
    let replacedText = inputValue.replace(/&/g, '&amp;')
    output.textContent = replacedText;
});
