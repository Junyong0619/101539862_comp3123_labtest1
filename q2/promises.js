//Q2: JunyongChoi (101539862)

const resolvedPromise = (ms, res) => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(res){
                resolve ("{message: 'delayed success!'}")
            } else{
                reject("{error: 'delayed exception!'}")
            }
        },ms);
    })
}

const rejectedPromise = (ms, res) => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(res){
                resolve ("{message: 'delayed success!'}")
            } else{
                reject("{error: 'delayed exception!'}")
            }
        },ms);
    })
}

resolvedPromise(500, true)
    .then((msg)=>console.log(msg))
    .catch((err)=> console.log(err))

rejectedPromise(500, false)
    .then((msg)=>console.log(msg))
    .catch((err)=>console.log(err))