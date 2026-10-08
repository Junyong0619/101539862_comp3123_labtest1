//Q1. Junyong Choi (101539862)
const mixedArray = ['PIZZA',10,true,25,false,'Wings']

const lowerCaseWords = (mixedArray) => {
    return new Promise((resolve, reject)=>{
        if(Array.isArray(mixedArray)){
            resolve(mixedArray.filter((str) => typeof str === 'string').map(str => str.toLowerCase()));
        } else{
            reject("It should be the String type.");
        }
    })

}

lowerCaseWords(mixedArray)
    .then((msg)=>console.log(msg))
    .catch((err)=> console.log(err))