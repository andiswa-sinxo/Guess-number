let randomNumber = Math.ceil((Math.random() * 100))

const guess_number = document.querySelector(".guess_number")
const btn = document.querySelector(".btn")
const message = document.querySelector(".message")
const errorMsg = document.querySelector(".errorMsg")

const guessBtnClicked = () => {
    
    const guessedNo = Number(guess_number.value);

console.log(randomNumber)

    if(guessedNo < 1 || guessedNo > 100){
        errorMsg.innerHTML = "Please choose a number between 1 and 100"
        errorMsg.classList.add("errorColour");
        setTimeout(() => {
            errorMsg.innerHTML = ""
        }, 2000);
    }else if (guessedNo < randomNumber){ 
        errorMsg.innerHTML = "Your guess is too low";
        errorMsg.classList.add("errorColour");
        setTimeout(() => {
            errorMsg.innerHTML = ""
        }, 2000);

    }else if (guessedNo > randomNumber){
        errorMsg.innerHTML = "Your guess is too high";
        errorMsg.classList.add("errorColour");
        setTimeout(function(){
            errorMsg.innerHTML = "";
        }, 2000);

     }else{
          message.innerHTML = `Correct, the secret number is ${guessedNo} !!!`;
        
          randomNumber = Math.ceil((Math.random() * 100))
          setTimeout(() => {
            errorMsg.innerHTML = ""
        }, 5000);

        setTimeout(() => {
            errorMsg.innerHTML = "New game has started!!"
        }, 3000);
    }

}




btn.addEventListener('click', guessBtnClicked)


