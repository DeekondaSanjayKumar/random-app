import React, { useEffect, useState } from 'react';
import {CircularProgress} from '@mui/material';


const FirstFetch = () => {
    const url = 'https://5d76bf96515d1a0014085cf9.mockapi.io/product';

    const[users,setUsers] = useState([])
    const[loading, setLoading] = useState(false)
    const[isError, setIsError] = useState({
        errorIs: false,
        msg: ''
    })
    const fetchHandle = async(url)=>{
        setLoading(true)
        setIsError({
            errorIs: false,
            msg:''
        })
        try {
            const response = await fetch(url)
            const data = await response.json()
            setUsers(data)
            setLoading(false)
            setIsError({
                errorIs: false,
                msg:''
            })
        } catch (error) {
            setLoading(false)
            setIsError({
                errorIs: true,
                msg: error.message || 'Something went wrong please try again later'
            })
            
        }
       
        
    }

    useEffect(()=>{
        fetchHandle(url)
    },[])

    if(loading){
        return(
            <CircularProgress />
        )
    }
    if(isError.errorIs){
        return(
            <h1>{isError.msg}</h1>
        )
    }
    
  return (
    <div>
        <ul style={{listStyle:'none',display:'grid', gridTemplateColumns:'repeat(5, 150px)'}}>
            {
                users.map((item)=>{
                    return(
                        <li key={item.id}>
                        <div>
                            <img src={item.preview} alt="product" width={150} />
                        </div>
                        <div>
                            <h4>{item.brand}</h4>
                            <p>{item.name}</p>
                            <p style={{fontSize:'10px'}}>{item.description}</p>
                            <p>{item.price}</p>
                        </div>
                        </li>
                    )
                })
            }
        </ul>
    </div>
  )
}

export default FirstFetch;