//Global variables
let maxNum, genNum;

function check_limit(prompt) {
    let valid_input = false;
    let input;

    while (!valid_input) {
        input = window.prompt(prompt);
        maxNum = Math.round(Number(input));

        if (maxNum != NaN && maxNum > 0 ) {
            valid_input = true;
        }
    }
    document.getElementById("something").innerHTML = `Guess a number between 1 and ${maxNum}`;
    //console.log(`Your max number is ${maxNum}`);
    return maxNum;

}

function generateNum(num) {
    let maxNum = num;
    genNum = Math.floor(Math.random() * maxNum) + 1;
    //console.log(`Your generated number is ${genNum}`);
    return genNum;
    
}

function validateGuess(num) {
    let userGuess = Number(num);
    let div = document.querySelector(".container");
    let pToReplace = div.getElementsByTagName("p")[0];
    let displayResults = document.createElement("p");
    //console.log(`Your guess number from validateGuess is ${userGuess}`);
    
    if (isNaN(userGuess)) {
        displayResults.innerHTML = "Your guess is not a number. Try Again";
        div.replaceChild(displayResults, pToReplace);
        //console.log("Guess is NaN and not a number")
    }
    else if(userGuess < 1) {
        displayResults.innerHTML = "Your guess is below the minimum.<br>Try Again";
        div.replaceChild(displayResults, pToReplace);
        //console.log("Guess is not in range")
    }
    else if(userGuess > maxNum) {
        displayResults.innerHTML = "Your guess is above the maximum.<br>Try Again";
        div.replaceChild(displayResults, pToReplace);
        //console.log("Guess is not in range")
    }
    //add condition to check if guess is duplicate
    else if(preventDupes(userGuess)) {
        displayResults.innerHTML = "You already tried this number <br>Try Again";
        div.replaceChild(displayResults, pToReplace);
        //console.log("Guess is duplicate")
    }
    else {
        trackGuess(userGuess); //Send user guess if it pass reqs to track guess function
        checkGuess(userGuess); //Send user guess if it pass reqs  to track guess function
    }
}

let guessTracker = [];
function trackGuess(num) {
    let userGuess = num;
    //console.log("Code has entered track guess")
    guessTracker.push(userGuess);
    //console.log(guessTracker)
    return guessTracker;
}

//return a boolean 
function preventDupes(num) {
    let userGuess = num; 
    for(let i = 0; i < guessTracker.length; i++) {
        if (userGuess == guessTracker[i]) {
            return true
        }
    }
    return false
}

function checkGuess(num) {
    let userGuess = num;
    let div = document.querySelector(".container");
    let pToReplace = div.getElementsByTagName("p")[0];
    let displayResults = document.createElement("p");
    //console.log(`Your guess number is ${userGuess}`);

    if(userGuess == genNum){
        displayResults.innerHTML = `You got it!<br> It took you ${guessTracker.length} times.<br>You guessed ${guessTracker.join(", ")}.`;
        div.replaceChild(displayResults, pToReplace);
    }
    else if(userGuess < genNum) {
        displayResults.innerHTML = "No, try a higher number.";
        div.replaceChild(displayResults, pToReplace);
    }
    else if(userGuess > genNum) {
        displayResults.innerHTML = "No, try a lower number.";
        div.replaceChild(displayResults, pToReplace);
    }
}


