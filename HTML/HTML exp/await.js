// function display(){
// return new Promise((resolve,reject)=>{
//     let isTrue=false
//     if(isTrue)
//     {
//       resolve(1000)
//     }
//     else 
//       reject("bye")
//   })
//   }
   
// async function show(){
//     try{
//     var res=await display()
//     console.log(res)
//     }
//     catch(q)
//     {
//         console.log(q)
//     }
// }

// show() 

async function createData(){
  try{
    var res=await fetch("https://jsonplaceholder.typicode.com/users",{
      method : "POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({
        name:"deva",
        gender:"male"
      })
    });

    var data= await res.json()
    console.log(data)
  }

  catch(a)
  {
    console.log("failed")
  }
}