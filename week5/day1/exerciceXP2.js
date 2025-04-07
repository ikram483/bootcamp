const delayedSuccess = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("success");
    }, 4000);
  });
  
  delayedSuccess.then(result => console.log(result));
  