import React, { useState } from "react";

const FormHandle = ()=>{
    const user={
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword:''
    }

    const [info, setInfo] = useState(user)
    console.log(info)
   
    const formChange=(e)=>{
        const {name,value} = e.target
        setInfo({...info, [name]:value})


    }
    const formSubmit=(e)=>{
        e.preventDefault();
        const {firstName,lastName,email,password,confirmPassword} = info
        const userObj={
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            confirmPassword: confirmPassword
        }
        setInfo(user)
        console.log(userObj)
        localStorage.setItem('item', JSON.stringify(userObj))
       
    }

    return(
        <>
        <div className="formData">
            <form onSubmit={formSubmit}>
                <div>
                <label htmlFor="firstName">Firstname:</label>
                <input type="text" name="firstName" id="firstName" placeholder="Enter First Name" onChange={formChange} value={info.firstName}/>
                </div>
                <div>
                <label htmlFor="lastName">LastName:</label>
                <input type="text" name="lastName" id="lastName" placeholder="Enter Last Name" onChange={formChange} value={info.lastName}/>
                </div>
                <div>
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" id="email" placeholder="Enter email" onChange={formChange} value={info.email}/>
                </div>
                <div>
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" id="password" placeholder="Enter Password"onChange={formChange} value={info.password} required/></div>
                <div>
                <label htmlFor="confirmPassword">confirmPassword:</label>
                <input type="password" name="confirmPassword" id="confirmPassword" placeholder="confirmPassword" onChange={formChange} value={info.confirmPassword} required/>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
        </>
    )
}

export default FormHandle;

/* import { useState } from 'react'

const App = () => {
	const [value, setValue] = useState(localStorage.getItem('inputValue') || '')

	const handleChange = (e) => {
		setValue(e.target.value)
		localStorage.setItem('inputValue', e.target.value)
	}

	return (
		<div>
			<input
				data-testid="input-id"
				type="text"
				value={value}
				onChange={handleChange}
			/>
		</div>
	)
}

export default App
 */