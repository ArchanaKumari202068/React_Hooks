import React from 'react'
import './App.css';
//import RulesHooks from './component/rulesHooks';
import UseStateArray from './component/UseStateArray';

const App = () => {

  // var val = 'Heelloooo';
  // const changeName = ()=>{
  //   val = "Welcome"

//  const [myName,setmyName] =useState("Hello Archana.!");
//   const changeName = ()=>{

//     // let val = myName;
//     // if (val==='Hello Archana.!'){
//     //   setmyName('Welcome.!')
//     // } else{
//     //   setmyName('Hello Archana.!')
//     // }

//     let val = myName;

//     //Ternary operator

//      (val==='Hello Archana.!') ?
//       setmyName('Welcome.!'):setmyName('Hello Archana.!');
//     }

//     // to change after click on button welcome show but if again click the we want to go back
//     //How to Toggle the Data onclick using Hook
//     // setmyName('welcome.!');

  
  
//     console.log(myName);
  return (
    <div>
      {/* JSx{  <h1>{5+5}</h1> } */}
      {/* <h1>{myName}</h1>
      <button className="btn" onClick={changeName} >click me </button> */}
      {/* <RulesHooks /> */}
      < UseStateArray />
    </div>

  )
}

export default App