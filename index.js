const error = true
function f(){
    return new Promise((resolve,reject)=>{
        if(!error){
            resolve(fetch('https://jsonplaceholder.typicode.com/posts/3')
            .then((data)=>data.json()
            .then((data)=>data)))
        }
        else{
            reject('ERR OCCURED')
        }
    })
}
f()
    .then(data=>console.log(data.title))
    .catch(e=>console.log(e))