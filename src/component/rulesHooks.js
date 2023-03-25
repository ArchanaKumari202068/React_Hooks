//1. Always write it inside the component or function
//2 component name must be in PascalCase (first letter should be uppercase)
//3. we can directly import or we can directly write it using React.hookName.
//4. Dont call Hooks inside loops ,conditions ,or nested functions.

import React, { useState } from 'react'

const RulesHooks = () => {
    const [myName,setMyName]=useState('Archana Bhardwaj');
  return (
    <div>
        <h1>{myName}</h1>
    </div>
  )
}

export default RulesHooks
