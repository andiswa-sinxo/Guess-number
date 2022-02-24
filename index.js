let randomNumber = Math.ceil((Math.random() * 100))

const guess_number = document.querySelector(".guess_number")
const btn = document.querySelector(".btn")
const message = document.querySelector(".message")
const errorMsg = document.querySelector(".errorMsg")


function guessBtnClicked(){
    const guessedNo = Number(guess_number.value);
console.log(randomNumber)

    if(guessedNo < 1 || guessedNo > 100){
        errorMsg.innerHTML = "Please choose a number between 1 and 100"
        errorMsg.classList.add("errorColour");
        setTimeout(function(){
            errorMsg.innerHTML = ""
        }, 2000);
    }else if (guessedNo < randomNumber){ 
        errorMsg.innerHTML = "Your guess is too low";
        errorMsg.classList.add("errorColour");
        setTimeout(function(){
            errorMsg.innerHTML = "";
        }, 2000);

    }else if (guessedNo > randomNumber){
        errorMsg.innerHTML = "Your guess is too high";
        errorMsg.classList.add("errorColour");
        setTimeout(function(){
            errorMsg.innerHTML = "";
        }, 2000);

     }else{
          message.innerHTML = `Correct, the secret number is ${guessedNo} !!!`;
        //   message.classList.add("message")
          randomNumber = Math.ceil((Math.random() * 100))
          setTimeout(function(){
            message.innerHTML = "";
        }, 5000);

          setTimeout(function(){
            message.innerHTML = "New game has started!!";
            // message.classList.add("message")

        }, 3000);
    }

}

// function refresh(){
//     location.reload()
// }


btn.addEventListener('click', guessBtnClicked)


