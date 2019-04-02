const getPuzzle =(wordCount)





















const getPuzzle = (callback) => {
    const request = new XMLHttpRequest();
    request.addEventListener('readystatechange', function () {
        if (this.readyState === 4 && this.status === 200) {
            const data = JSON.parse(this.responseText);
            callback(undefined, data.puzzle);
        } else if (this.readyState === 4) {

            callback(this.status + ' Unable to fetch data!', undefined);
        }
    });
    request.open('GET',
        'http://puzzle.mead.io/puzzle?wordCount=3', true);
    request.send();
};






