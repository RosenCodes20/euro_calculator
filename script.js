document.addEventListener('DOMContentLoaded', () => {
    let button =  document.getElementById("button");

    button.addEventListener("click", (event) => {
        event.preventDefault();
        let select = document.getElementById('euroLv');

        if (select.value == "Евро") {
            
        } else if (select.value == "Лева") {

        }
    })
})