"use strict"

var notAllGood = true;

//Define a Promise
var fetchSomeData = new Promise( ( resolve, reject) => {
    
    if(!notAllGood) {
        reject("Error fething data");
    }
    
    resolve( {
        id: 1,
        message: 'nice work!',
    }

        )
} );


// Comsume promise
fetchSomeData.then(fetchedData => {
    console.log('then' , fetchedData)
    
}).catch(err => {
    console.error('catch:', err);
})