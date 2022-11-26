const userText = document.querySelector('input');
const duplicateField = document.querySelector('#duplicateField');
const button = document.querySelector('button')

userText.addEventListener('keydown', function(){
    duplicateField.textContent = userText.value;
}
)

button.addEventListener('click', function(event){
    event.preventDefault();
    console.log(duplicateField.textContent);
    duplicateField.textContent = '';
    userText.value = '';
}
)