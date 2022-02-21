let randomNumber = Math.ceil((Math.random() * 100))

const guess_number = document.querySelector(".guess_number")
const btn = document.querySelector(".btn")
const message = document.querySelector(".message")


function guessBtnClicked(){
    const guessNo = Number(guess_number.value);

    if (guessNo < randomNumber){ 
        message.innerHTML = "Your guess is too low";
    }else if (guessNo > randomNumber){
        message.innerHTML = "Your guess is too high";
    }else {
        message.innerHTML = "Correct, the secret number is ${guessedNo}";
    }

    setTimeout(function(){
        message.innerHTML = "";
    }, 2000);
}


btn.addEventListener('click', guessBtnClicked)
