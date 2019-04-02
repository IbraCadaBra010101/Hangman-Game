const puzzle_div = document.querySelector('#puzzle');
const remaining_guesses = document.querySelector('#guesses');
const game1 = new Hangman('car parts', 2);

remaining_guesses.innerText = 'You have ' + game1.remainingGuesses + ' guesses left';
puzzle_div.innerText = game1.getPuzzle();

window.addEventListener('keypress', function guessing(e) {
    const guess = e.key;
    if (game1.status === 'playing') {
        game1.makeAGuess(guess);
        puzzle_div.innerText = game1.getPuzzle();
        Hangman.getStatus();
    }
});

getPuzzle('2',(error, puzzle) => {
    if (error) {
        console.log(`Error: ${error}`);
    } else {
        console.log(`Puzzle is ${puzzle}`);
    }
});


// getCountry('MX', (error, data) => {
//     if (data) {
//         console.log(data.name);
//     } else if (error) {
//         console.log(error);
//     }
// });
