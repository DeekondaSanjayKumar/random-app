import React, { useState, useEffect } from "react";
import '../index.css';
import {CircularProgress} from '@mui/material';

const URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

const CockTail = () =>{
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(false)
    const [isError, setIsError] = useState(false)
    const [drink, setDrink] = useState('')

    const fetchData = async (url)=>{
        setLoading(true)
        setIsError(false)
        try {
            const response = await fetch(url)
            const {drinks} = await response.json()
            setUsers(drinks)
            setLoading(false)

        } catch (error) {
            setLoading(false)
            setIsError(true)

        }
        
    }

    useEffect(() => {
        let currentUrl = `${URL}${drink}`
        fetchData(currentUrl)
    }, [drink])

    

    if(isError){
        return(
            <h1>Something went wrong please try agian</h1>
        )
    }
    
    return(
        <>
        <form>
        <input type="text" name="drinkName" placeholder="Search Drnink" id="drinkName" value={drink} onChange={(e)=>{
            setDrink(e.target.value) 
        }} />
        </form>
        <hr />
        {
            loading && !isError && <CircularProgress/>
        }
        <div className="main-div">
            
            {
                users.map((item)=>{
                    const {idDrink,strDrinkThumb, strDrink, strInstructions} = item
                    return(
                        <div className='child-div' key={idDrink}>
                            <img src={strDrinkThumb} alt={strDrink} width={'150px'}/>
                            <h1>{strDrink}</h1>
                            <p>{strInstructions}</p>
                        </div>
                    )
                })
            }
        </div>
        </>
    )
}

export default CockTail;