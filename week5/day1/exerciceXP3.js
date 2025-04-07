const resolved = Promise.resolve(3);
resolved.then(value => console.log(value));

const rejected = Promise.reject("Boo!");
rejected.catch(error => console.log(error));
