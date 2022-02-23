let randomNumber = Math.ceil((Math.random() * 100))

const guess_number = document.querySelector(".guess_number")
const btn = document.querySelector(".btn")
const message = document.querySelector(".message")


function guessBtnClicked(){
    const guessedNo = Number(guess_number.value);

    if (guessedNo < randomNumber){ 
        message.innerHTML = "Your guess is too low";

        setTimeout(function(){
            message.innerHTML = "";
        }, 2000);

    }else if (guessedNo > randomNumber){
        message.innerHTML = "Your guess is too high";
        setTimeout(function(){
            message.innerHTML = "";
        }, 2000);
    }else {
          message.innerHTML = `Correct, the secret number is ${guessedNo} !!!`;
          randomNumber = Math.ceil((Math.random() * 100))
          setTimeout(function(){
            message.innerHTML = "";
        }, 5000);

          setTimeout(function(){
            message.innerHTML = "New game has started!!";
        }, 3000);
        
    } 

}


btn.addEventListener('click', guessBtnClicked)


