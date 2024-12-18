let button = document.querySelector(".button");
let input = document.querySelector(".input");
let output = document.querySelector(".output");
let copyButton = document.querySelector(".copy-button");

button.addEventListener('click', function () {
    let inputValue = input.value;

    // Экранируем только необработанные амперсанды
    let replacedText = inputValue.replace(/&(?!amp;)/g, '&amp;');
    output.textContent = replacedText;
});

copyButton.addEventListener('click', function () {
    navigator.clipboard.writeText(output.value || output.textContent);
});
