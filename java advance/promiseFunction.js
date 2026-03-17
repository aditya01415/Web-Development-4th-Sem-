let promise = new Promise(function(resolve, reject) {
    let success = false;

    setTimeout(function() {
        if (success) {
            resolve("task done");
        } else {
            reject("task failed");
        }
    }, 2000);
});

promise.then(function(result) {
    console.log(result);
}).catch(function(error) {
    console.log(error);
});