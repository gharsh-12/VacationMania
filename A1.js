// function multiply(x,y)
// {
//     return x*y;
// }
// function square(x)
// {
//     return multiply(x,x);
// }
// function istrue(a,b,c)
// {
//     return square(a)+square(b)===square(c);
// }
// istrue(3,4,5)
// var i,second=1000;
// for(i=0;i<100;i++)
// {
// setTimeout(()=>{
//   document.body.style.backgroundColor='red';
// },second);
// second+=1000;
// setTimeout(()=>{
//   document.body.style.backgroundColor='orange';
// },second);
// second+=1000;
// setTimeout(()=>{
//   document.body.style.backgroundColor='yellow';
// },second);
// second+=1000;
// }
const delayedColor = (color,delay) => {
   return new Promise((resolve,reject)=>{
        setTimeout(() => {
          document.body.style.backgroundColor=color;
          resolve();
        }, (delay));
   })
}
// delayedColor('red',1000)
//    .then(()=>delayedColor('orange',1000))
//    .then(()=>delayedColor('yellow',1000))
//    .then(()=>delayedColor('green',1000))
//    .then(()=>delayedColor('blue',1000))
//    .then(()=>delayedColor('indigo',1000))
//    .then(()=>delayedColor('violet',1000))

// async function rainbow()
// {
//   await delayedColor('red',1000)
//   await delayedColor('orange',1000)
//   await delayedColor('yellow',1000)
//   await delayedColor('green',1000)
//   await delayedColor('blue',1000)
//   await delayedColor('indigo',1000)
//   await delayedColor('violet',1000)
//   return "All Done";
// }   
// rainbow()
// .then((msg)=>{
//   console.log('End');
//   console.log(msg);
// })


// const req=new XMLHttpRequest();
// req.onload = function(){
//   console.log("WORKED");
//   const data=JSON.parse(this.responseText);
//   console.log(data.name);
// }
// req.onerror = function(){
//   console.log("ERROR");
//   console.log(this);
// }
// req.open("GET","https://swapi.dev/api/people/1/");
// req.send(); 



// fetch("https://swapi.dev/api/people/1/")
// .then((res)=>{
//    console.log("YESSS",res);
//    return res.json();
// })
// .then((data)=>{
//   console.log(data);
// })
// .catch((e)=>{
//   console.log("STOPP",e)
// })

const getabc = async(id) =>{
  try{
  const res=await axios.get(`https://swapi.dev/api/people/${id}/`);
  console.log(res.data);
  }
  catch(e){
     console.log("ERROR");
  }
} 
getabc(6);