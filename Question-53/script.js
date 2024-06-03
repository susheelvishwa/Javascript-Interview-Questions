const myPromise = new Promise((resolve, reject) => {
  // Simulate an asynchronous operation
    setTimeout(() => {
    // You can change `true` to `false` to test the 'catch' block
    if (true) {
        resolve("Success!");
    } else {
        reject("Error!");
    }
    }, 1000);
});

myPromise
    .then((result) => {
    console.log(result); // This will log "Success!" if the promise is resolved
    })
    .catch((error) => {
    console.error(error); // This will log "Error!" if the promise is rejected
    });
