import React, {useReducer, useEffect, useState} from "react";
import './todo.css';
import { AiFillDelete, AiFillEdit } from "react-icons/ai";

const reducer = (state, action) => {
    if(action.type === 'ADD_TODO'){
        return{
            ...state,
            userData: [
                ...state.userData,
                {
                id: crypto.randomUUID(),
                task: action.payload
            }]
        }
    }
    if(action.type === 'DELETE_TODO'){
        const newUser = state.userData.filter((item)=> item.id !== action.payload);
        return{
            ...state,
            userData: newUser
        }
    }
    if(action.type === 'EDIT_TODO'){
        const updateUser = state.userData.map((item)=>{
            if(item.id === action.payload.id){
                return {
                    id: action.payload.id,
                    task: action.payload.task
                }
            } else {
                return item;
            }
        })
        return{
            ...state,
            userData: updateUser,
        }
    }

}
const TodoMaker = () =>{
    const intialState = {
        userData: [],
        isEditing: { status: false, task:''}
    };

const [state, dispatch] = useReducer(reducer, intialState, ()=>{
    const localValues= JSON.parse(localStorage.getItem('TODO'))
    return localValues ? localValues : intialState;
})
const [newTodo, setNewTodo] = useState('')

useEffect(()=>{
    localStorage.setItem('TODO', JSON.stringify(state))
},[state])

const formSubmit= (e) =>{
    e.preventDefault();
    newTodo !== '' && (
    dispatch({
        type: 'ADD_TODO',
        payload: newTodo
       }) )
    setNewTodo('')
    
}
const todoDetails = (e)=>{
   
   setNewTodo(
     e.target.value
   )
}
const handleDelete = (id)=>{
    dispatch({type: 'DELETE_TODO', payload: id})
}
const handleEdit = (id,task)=>{
    setNewTodo(task)
    
    dispatch({type: 'EDIT_TODO', payload: {id:id,task:newTodo}})
}
 
    return(
        <>
        <div className="home">
            <div className="todo-screen">
                <form>
                    <input type="text" placeholder="Enter task details..." name="task-details" id='task-details' onChange={todoDetails} value={newTodo} />
                    <button type="submit" id="submit-button" onClick={formSubmit}>ADD</button>
                </form>
                <hr />
                <div className="todo-list">
                   {state.userData.length === 0 ? 'There are no todos....' : state.userData.map((item)=>{
                    const {id, task} = item
                    return(
                        <div key={id} className="todo-check">
                            <input type="checkbox" name="" id= {id} />
                            <label htmlFor={id}>{task}</label>
                            <span onClick={() => handleEdit(id,task)}><AiFillEdit/></span>
                            <span onClick={()=> handleDelete(id)}><AiFillDelete/></span>
                        </div>
                    )
                   })}
                </div>
            </div>
        </div>
        </>
    )
}

export default TodoMaker;