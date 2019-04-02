class Hangman {
    constructor(word, numberOfGuesses) {
        this.word = word.toLowerCase().split('');
        this.remainingGuesses = numberOfGuesses;
        this.guessedLetters = [];
        this.status = 'playing';
    }

    isPlaying() {
        const finished = this.word.every(letter =>
            (this.guessedLetters.includes(letter) || letter === ' '));
        if (this.remainingGuesses === 0) {
            this.status = 'failed';
        } else if (finished) {
            this.status = 'finished';
        } else {
            this.status = 'playing';
        }
    }

    static getStatus() {
        if (game1.status === 'playing') {
            remaining_guesses.innerText = 'Go on! You have ' + game1.remainingGuesses + ' guesses left';
        }
        if (game1.status === 'finished') {
            remaining_guesses.innerText = 'Congratulations! You solved the puzzle!'
        }
        if (game1.status === 'failed') {
            remaining_guesses.innerText = 'You failed to solve the puzzle. The correct answer is ' + game1.word.join('');

        }
    }

    getPuzzle() {
        let puzzle = '';
        this.word.forEach(letter => {
            if (this.guessedLetters.includes(letter) || letter === ' ') {
                puzzle += letter;
            } else {
                puzzle += '*';
            }
        });
        return puzzle;
    }

    makeAGuess(char) {
        char = char.toLowerCase();

        const uniqeGuess = !this.guessedLetters.includes(char);
        const isWrongGuess = !this.word.includes(char);
        if (uniqeGuess) {
            this.guessedLetters.push(char);
        }
        if (isWrongGuess && uniqeGuess) {
            this.remainingGuesses--;
        }
        this.isPlaying();
    }

}
