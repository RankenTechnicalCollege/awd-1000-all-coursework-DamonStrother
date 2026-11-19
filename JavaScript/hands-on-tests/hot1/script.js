// Challenge 1: Favorite Movie List

let favoriteMovies = ["Fight Club", "Project X", "Chronicle"];

function addMovie() {

    let movie = document.getElementById("movie").value;

    favoriteMovies.push(movie);

    let output = "";

    for (let i = 0; i < favoriteMovies.length; i++) {
        output += "<li>" + favoriteMovies[i] + "</li>";
    }

    document.getElementById("movieList").innerHTML = output;

}


// Challenge 2 - Age Verification

function verifyAge() {

    let age = document.getElementById("age").value;

    if (age === "" || !Number.isInteger(Number(age))) {
        document.getElementById("ageMessage").innerHTML = "Please enter your age!";
    }

    else if (age < 1 || age > 200) {
        document.getElementById("ageMessage").innerHTML = "Age out of range!";
    }

    else if (age >= 21) {
        document.getElementById("ageMessage").innerHTML = "Welcome to the venue!";
    }

    else {
        document.getElementById("ageMessage").innerHTML = "You're not old enough!";
    }

}


// Challenge 3 - Song Lyrics

function showLyrics() {

    let number = document.getElementById("number").value;

    if (number === "" || isNaN(number)) {
        document.getElementById("lyrics").innerHTML = "Please enter a number, not a word.";
    }

    else if (number == 1) {
        document.getElementById("lyrics").innerHTML = "One is the loneliest number that you'll ever do.";
    }

    else if (number == 2) {
        document.getElementById("lyrics").innerHTML = "Two can be as bad as one. It's the loneliest number since the number one.";
    }

    else if (number == 3) {
        document.getElementById("lyrics").innerHTML = "There is no three.";
    }

    else {
        document.getElementById("lyrics").innerHTML = "You didn't enter a valid number.";
    }

}


// Challenge 4 - Odd Numbers

let oddNumbers = "";

for (let i = 1; i <= 100; i += 2) {
    oddNumbers += i + " ";
}

document.getElementById("oddNumbers").innerHTML = oddNumbers;


// Challenge 5 - Multiples of X

let multiples = "";

for (let i = 15; i <= 100; i += 15) {
    multiples += i + " ";
}

document.getElementById("multiples").innerHTML = multiples;