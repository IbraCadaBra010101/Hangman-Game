// Callback
const getDataCallback = (callback) => {
    setTimeout(() => {
        callback(undefined, 'dummy data!');
    }, 2000);
};

getDataCallback((err, data) => {
    if (data) {
        console.log(data);
    } else if (err) {
        console.log(err)
    }
});

// Promise
// the promise constructor
// function expects a
// single argument
const myPomise = new Promise((resolve, reject) => {

    setTimeout(() => {
        // resolve('This is the promise data')
        reject('error');
    }, 2000)
});

myPomise.then((data) => {
    console.log(data);
}, (error) => {
    console.log(error)
});










