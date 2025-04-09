function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}
//This function returns a promise that will be resolved after 2 seconds with the value "resolved".



async function asyncCall() {
    console.log('calling');
    let result = await resolveAfter2Seconds();
    console.log(result);
}

asyncCall();
// This function is asynchronous:

// It displays "calling" immediately in the console.

// It waits for 2 seconds (thanks to await) until resolveAfter2Seconds() is resolved.

// Then, it displays "resolved".

//output:
// calling  
// (wait for 2 seconds)  
// resolved

