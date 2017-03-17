export default function(promiseList){
    var finishedPromise=false;
    return new Promise((reslove,reject)=>{
        promiseList.forEach((promise)=>{
            promise.then((...args)=>{
                if(finishedPromise){
                    return
                }
                finishedPromise=true;
                reslove(...args);
            },(...args)=>{
                if(finishedPromise){
                    return
                }
                finishedPromise=true;
                reject(...args);
            });
        });
    });
}