console.log('Here are all the available people:', people);

// Set global personToClick
let personToClick;

$(document).ready(onReady);

function onReady() {

    // Set event listener for guess
    $(document).on('click', 'img', onGuess);

    // Append divs to DOM upon load
    for (let person of people) {
        $('.container').append(`
        <div>
            <img src="https://github.com/${person.githubUsername}.png?size=250" data-name="${person.name}"/>
        </div>
    `)
    }

    // Start game
    playGuessWho();
} // end onReady

// Declare randomNumber
function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
} // end randomNumber


// Declare playGuessWho
function playGuessWho() {
    // Generate random number
    let num = randomNumber(0, people.length - 1)
    console.log(num);
    // Use random number to pick random player name
    personToClick = people[num].name;

    // Alert user about person to click
    $('#guessName').html(`${personToClick}?`);
} // end playGuessWho


// Declare onGuess
function onGuess() {
    // If guess is correct....
    if ($(this).data('name') === personToClick) {
        alert(`Correct!`);
        
        // Restart game
        playGuessWho();
    }
    // If guess is wrong....
    else {
        alert(`Wrong! Guess again.`);
    }
} // end onGuess