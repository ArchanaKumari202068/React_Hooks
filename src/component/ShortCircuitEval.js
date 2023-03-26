import React,{useState} from 'react'

const ShortCircuitEvaljs = () => {
  const [demo,setDemo]=useState("");

  return (
    <div>
        <h1 className='h1style'>{demo || 
            <>
            <h1>masst</h1>
            <p>you can do anything</p>
            </>
        }</h1>
        <h1 className="h1style">{demo && "archana"}</h1>
    </div>
  )
}

export default ShortCircuitEvaljs