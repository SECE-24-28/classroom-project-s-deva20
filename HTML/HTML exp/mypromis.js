let myPromise=new Promise((resolve,reject)=>{
      let istrue=true
      if(istrue)
      {
         resolve()
      }
      else{
         reject()
      }
})

myPromise.then(success)
.catch(fail)

function success(){
    console.log("done")
}

function fail(){
    console.log("not done")
}