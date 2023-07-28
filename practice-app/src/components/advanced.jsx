import React, { useState } from 'react';

const Advanced = () => {
    const myArr=[{
      id: 'asdadasd',
      name: 'sanjay',
      age: 24,
    },
    {
      id:'bfiuahus',
      name: 'kavya',
      age:25
    },
    {
      id:'asfevg',
      name: 'kumar',
      age:24
    }]
    const[user,setUser] = useState(myArr)
    const deleteMe = (comingId)=>{
      const filterData = user.filter((e)=>{
        return e.id !== comingId
      })
      setUser(filterData)
      console.log(filterData)
    }
  return (
    <>
    <ul>
      {user.map((item,index)=>{
        const {name,age,id} = item;
        return(
          <li key={index}>
            <div>my name is {name}</div>
            <div>my age is {age}</div>
            <button onClick={()=> deleteMe(id)}>Delete me</button>
          </li>
        );
      })}
    </ul>
    </>
    
  )
}

export default Advanced;
