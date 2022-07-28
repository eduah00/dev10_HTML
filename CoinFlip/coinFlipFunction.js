let guess;
let convertToHT 
function get_prediction(val) {
    guess = val;
    let div = document.querySelector(".container");
    let pToReplace = div.getElementsByTagName("p")[0];
    let displayGuess = document.createElement("p");
    if (guess == "Heads") {
        displayGuess.innerHTML = "You guessed Heads";
        div.replaceChild(displayGuess, pToReplace);
    }
    else {
        displayGuess.innerHTML = "You guessed Tails";
        div.replaceChild(displayGuess, pToReplace);
    }
}



function coin_flip() {
    let results;
    for (let i = 0; i < 1; i++) {
        results = Math.trunc(Math.random() * 2) ;
        console.log(results);
        check_results(results);
    }

}

function check_results(outcome) {
    let div = document.querySelector(".container");
    let pToReplace = div.getElementsByTagName("p")[1];
    let displayOutcome = document.createElement("p");
    if (outcome == 0) {
        convertToHT = "Heads"
        displayOutcome.innerHTML = "The coin flips and comes up Heads";
        div.replaceChild(displayOutcome, pToReplace);
        return_results();
        //Add code to display result
    }
    else {
        convertToHT = "Tails"
        displayOutcome.innerHTML = "The coin flips and comes up Tails";
        div.replaceChild(displayOutcome, pToReplace);
        return_results();
        //Add code to display result
    }
}

function return_results() {
    let div = document.querySelector(".container");
    let pToReplace = div.getElementsByTagName("p")[2];
    let displayResults = document.createElement("p");
    if (guess == convertToHT) {
        displayResults.innerHTML = "Good Guess!";
        div.replaceChild(displayResults, pToReplace);
        // console.log(displayResults.innerText);
        // console.log(displayResults.innerHTML);
        // console.log(displayResults.childNodes);
    }
    else {
        displayResults.innerHTML = "Try Again!";
        div.replaceChild(displayResults, pToReplace);
        // console.log(displayResults.innerText);
        // console.log(displayResults.innerHTML);
        // console.log(displayResults.childNodes);
    }
}