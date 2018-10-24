function addPromise(a, b) {
    return new Promise(function(resolve, reject) {
        if (typeof a === 'number' && typeof b === 'number') {
            resolve(a+b);
        } else {
            reject("One of the parameters is not a number");
        }
    });
}

eror

function addNumbers(a, b) {
    addPromise(a,b).then(function(result) {
        console.log(result);
    }, function(err) {
        console.log(err);
    });
}

addNumbers("a", 9);
addNumbers(5, 6);
addNumbers(4, "ba;llz");
addNumbers("twat", "balls");
