const newLinkText = prompt('Измените текст ссылки<');
const link = document.querySelector('a');
link.textContent = newLinkText;


link.addEventListener('click', function(event) {
    event.preventDefault();
})