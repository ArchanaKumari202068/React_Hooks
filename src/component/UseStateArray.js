import React, { useState } from 'react'

const UseStateArray = () => {
    const bioData = [
        {
            id:0,myName: "Archana Bhardwaj", age : 20
        },{
            id:1,myName: "Madhu Priya", age : 18
        }, {
            id :2, myName: "Dimpi",age:27
        }

    ]
    const [myArray, setmyArray] = useState(bioData)

    const clearArray=()=>{
        setmyArray([]);
        console.log("check")

    }  
    return (
    <>
        {
            myArray.map((curElm) => { return <h1 className='h1style' key = {curElm.id}> Name: {curElm.myName} & Age :{curElm.age}</h1>})
        }
        <button className="btn" onClick={clearArray}>Clear</button>

        {/* <h1 className='h1style'>Name:Archana Bhardwaj & Age :20</h1> */}
    </>
  )
}

export default UseStateArray