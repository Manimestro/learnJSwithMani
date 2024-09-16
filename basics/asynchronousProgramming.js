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

//* Promises
/*
    async functions returns a Promise object (which contains result in future)  
    we can create promises with async funtions that resolve after sometime or we can create promise with direct values
*/

// resolve immediatly 
let ten = Promise.resolve(10)
ten.then(val=>console.log(val))

// resolve later
// promise constructor takes a function as arg
const setTimeOutAsPromise = new Promise((resolve)=>{
    setTimeout(()=>{
        // console.log("@ 1sec")
        resolve("resolved")
    },5000)
})

// setTimeOutAsPromise.then(res=>{
//      new Promise((resolve)=>{
//         setTimeout(()=>{
//             console.log("@ 1sec")
//             resolve("resolved")
//         },5000)
//     })
// }).then(res=>{
//      new Promise((resolve)=>{
//         setTimeout(()=>{
//             console.log("@ 1sec")
//             resolve("resolved")
//         },5000)
//     })
// }).then(res=>{
//      new Promise((resolve)=>{
//         setTimeout(()=>{
//             console.log("@ 1sec")
//             resolve("resolved")
//         },5000)
//     })
// }).then(res=>{
//     console.log(res)
// })

// we can apply then method to promise multiple times

let fetch =()=> new Promise(resolve=>{
    setTimeout(()=>{
        resolve(JSON.stringify({result:"None"}))
    },1000)
})
fetch().then(data=>{
    return JSON.parse(data) // this is a sync operation but still we can use it as instatly resolved promise
}).then(data=>{
    console.log(data)
})


//* Failure
/*
    If the async operation fails with an expection its hard in callback method to handle 
    we have to pass the error reason to second arg when an expection occurs but in promise method if the promised is failed it will be rejected 
    and rejected reason can be pulled by catch method 
*/

// we can reject a promsie by calling the reject method 

Promise.reject("rejected").then((res)=>{
    console.log(res)
    // this handler wont exicute 
}).catch(err=>{
    console.log(err)
    // this will exicute
})

new Promise((_,reject)=>{
    reject("Reject")
}).then((res) => {
    console.log("🚀 ~ newPromise ~ res:", res)
    // this handler wont exicute 
},err => {
    console.log("🚀 ~ newPromise ~ err:", err)
    // this will exicute
})
// or we can pass the error handler as a second arg to then 

//* Password craker function 
// a password auth model that 
// - accepts 6 digit string 
// - it waits for the next input if prev input is correct
// - it throws error if any digit is wrong in 20ms


class PasswordChecker{
    #password = "189541"
    constructor(){
        this.Index = 0 
    }
    checkDigit(digit){
        return new Promise((res,rej)=>{
           setTimeout(()=>{
            if ((this.#password[this.Index] == digit && this.Index === this.#password.length-1)){
                return res("success")
            }
  
            if (!(this.#password[this.Index] == digit)){
                return rej("Wrong Password")
            }
            this.Index++
           },20) 
        })
    }
}

function EnterPassword(promise, time){
    return new Promise((res,rej)=>{
        promise.then(res,rej)
        setTimeout(()=>{rej("Timeout")}, 50)
    })
}

function crackPassword(){
    console.log("cracking password using rec")
    let passwordChecker =new PasswordChecker()
    function tryDigit(password,digit){
        return EnterPassword(passwordChecker.checkDigit(digit), 50).then(
            res=>{
                return password
            }
        ).catch(err=>{
             if (err == "Timeout"){
                tryDigit(password+digit,0)
            }
            else if (err == "Wrong Password" && digit<9){
                tryDigit(password, digit+1)
            }
            else{
                console.log(err,"err",digit, password)
                throw err
            }
        })
    }
    return tryDigit("",0)
}

// Async functions
async function crackPasswordwithSudoSync(){
    console.log("cracking password using rec")
    let passwordChecker =new PasswordChecker()

    for (let password = "";;){
        for (let digit =0 ; ;digit++){
            try{
                await EnterPassword(passwordChecker.checkDigit(digit), 50)
                return password+=digit
            }catch(err){
                if (err == "Timeout"){
                    password+=digit
                    break
                }
                else if (digit===9){
                    throw err
                }
            }
        }
    }
}
crackPasswordwithSudoSync().then(console.log)

//* Generators
// These are kind of helper function to create iterators 
// yielded value is the value of next method it creates it own internal state to hold iterator object on every yield
// when we yeild, the function will be frozen until we call the next method of that generator
function* powers(n){
    for (let current =n; ; current*=n){
        yield current
        console.log("done",current)
    }
}

const gen = powers(3)

console.log(gen.next()); 
console.log(gen.next());
console.log(gen.next()); 

for (let i of powers(3)){
    if (i>50){
        break
    }
    console.log(i)
}
