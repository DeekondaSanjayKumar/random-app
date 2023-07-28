import React, { useState } from 'react';

const user= {
    name: "sanjay",
    age: 24
}
const MyHooks= (props)=>{
    const {name, age} = user
    const [count, setCount] = useState(0)
    const incrementFun = ()=>{
        setCount((prevCount)=>{
            return prevCount + 1;
        })
    }
    const dicrementFun = ()=>{
        if(count < 1 ){
            return 0;
        }
        setCount(count - 1)
    }
    return(
        <>
            <div className="App">
                <h1>{name} is {age}yrs old</h1>
            </div>
            <button onClick={dicrementFun}>-</button>
            <span>{ count }</span>
            <button onClick={incrementFun}>+</button>
        </>
    );
}

export default MyHooks;