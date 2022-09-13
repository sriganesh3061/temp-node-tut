const {readFile,writeFile}=require('fs');
console.log('Starting with task');
readFile('./content/first.txt','utf-8',(err,result)=>{
    if(err){
        console.log('Error');
        return;
    }
    const first=result;
    readFile('./content/second.txt','utf-8',(err,result)=>{
        if(err){
            console.log('Error');
            return;
        }
        const second=result;
    writeFile('./content/result-asyncro.txt',`Here is the result: ${first},${second}`,(err,result)=>{
        if(err){
            console.log(err);
            return;
        }
        console.log('Done with the task ');
    });
    })
    })

    console.log('Starting new task');