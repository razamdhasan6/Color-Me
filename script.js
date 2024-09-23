const btns = document.querySelectorAll('.button');
const userChoice = document.querySelector('input');
const colorMe = document.querySelector('.color-me');


colorMe.addEventListener('click', () => {
    let userInput = parseInt(userChoice.value, 10);

    if (isNaN(userInput)) {
        btns.forEach(btn => {
            btn.style.backgroundColor = "";
        })
    }
    if (userInput < 0) {
        userInput = 1;
    }
    else if (userInput > 9){
        userInput = 9;
    }

    userChoice.value = userInput;
    let userValueORbtnValue_IsMatch = false;
    btns.forEach(btn => {
        let btnValue = parseInt(btn.textContent);
        if (userInput > 0 & userInput <= 9) {
            if (userInput === btnValue) {
                btn.style.backgroundColor = "green";
                userValueORbtnValue_IsMatch = true;
            } 
            else {
                btn.style.backgroundColor = "";
            }
        }
    })
    if (userValueORbtnValue_IsMatch) {
        userChoice.value = "";
    }
})