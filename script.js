document.addEventListener('DOMContentLoaded', () => {
    let button =  document.getElementById("button");

    button.addEventListener("click", (event) => {
        event.preventDefault();
        let select = document.getElementById('euroLv');
        let form = document.getElementById('form');
        select.remove();
        button.remove();

        if (select.value == "Евро") {
            let newFormInput = document.createElement('input');
            let newButton = document.createElement('button');

            newFormInput.id = 'euroInput';
            newFormInput.placeholder = 'Въведете цена в евро';
            newFormInput.type = 'text';

            newButton.textContent = 'Пресметни';

            form.appendChild(newFormInput);
            form.appendChild(newButton);
        } else if (select.value == "Лева") {
            
        }
    })
})