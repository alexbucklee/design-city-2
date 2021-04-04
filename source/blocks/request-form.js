// Добавить маску для телефона

let phoneInput = document.getElementById("phone-number");

let im = new Inputmask("+7-999-999-99-99");
im.mask(phoneInput);

let requestForm = document.querySelector('.request-form');
let submitButton = document.querySelector('.request-form__button');
let inputFields = document.querySelectorAll('.request-form__input');

// Проверить номер телефона

function validatePhone(phoneValue) {
    let regex = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
    return regex.test(phoneValue);
}

inputFields.forEach((item) =>
    item.addEventListener('keyup', function() {
        let phoneValue = phoneInput.value;
        let nameLength = document.getElementById('name').value.length;
        let phoneLength = phoneInput.value.length;
    
        if (nameLength && phoneLength && validatePhone(phoneValue)) {
            submitButton.removeAttribute("disabled", "disabled")
        } else {
            submitButton.setAttribute("disabled", "disabled")
        }
    })
)

submitButton.addEventListener('click', function(e) {
    e.preventDefault();
    fetch('php/telegram.php', {
        method: 'POST',
        body: new FormData(requestForm)
    })
    document.querySelector('.cta__form').style.visibility = 'hidden';
    document.querySelector('.cta__form-done').style.display = 'flex';
})

