//! Asynchronicity
/*
    Running the  pragrame while not waiting for I/O operations like reading from disk and network requests 
    while the I/O operation is done parlelly still the programe is able to run instead of waiting 
    waiting for actions to finish is implicit in the synchronous model, while it is explicit—under our control—in the asynchronous one
*/

//* Callbacks
/*
    Passing a cb function as an argument to a anothoer function that do async operation and then calls the fuction after waiting 

 */
    // setTimeout(()=>{
    //     console.log("@ 1sec")
    //     setTimeout(()=>{
    //         console.log("@ 2sec")
    //         setTimeout(()=>{
    //             console.log("@ 3sec")
    //         },1000) 
    //     },1000) 
    // },1000)
// so setTimeout is one of built-in async callback model function but doing so many things will make callback hell