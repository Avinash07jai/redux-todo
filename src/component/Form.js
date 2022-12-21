import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo, handleEditSubmit } from '../redux/todo-redux/actions';

const Form = ({editForm, editTodo , cancelUpdate}) => {
    const dispatch = useDispatch();

    const [todoValue, setTodoValue] = useState('');

    const [editValue, setEditValue]= useState('');
    useEffect (() =>{
        setEditValue(editTodo.todo);
    },[editTodo]);

    const handleSubmit = (e) => {
        e.preventDefault();
        let date = new Date();
        let time = date.getTime();
        let todoObj = {
            id : time,
            todo : todoValue,
            completed : false
        }
        setTodoValue('');
        dispatch(addTodo(todoObj))
    }

    const editSubmit = (e) =>{
        e.preventDefault();
        let editedObj ={
            id: editTodo.id,
            todo: editValue,
            completed: false
        }
        dispatch(handleEditSubmit(editedObj))
    }
  return (
    <>
    {editForm===false?(
          <form onSubmit={handleSubmit}>
              <label>Add Your Todo</label><br/>
              <input type='text' value={todoValue} onChange={(e) => setTodoValue(e.target.value)} />
              <button type='submit' className='button' >Add</button>
          </form>
    ):(
              <form onSubmit={editSubmit}>
                  <label>Update Your Todo</label>
                  <input type='text' value={editValue||""} onChange={(e) => setEditValue(e.target.value)} />
                  <button type='submit' className='button' >Update</button>

                  <button type='button' onClick={cancelUpdate} >Back</button>
              </form>
    ) }
    </>  
  );
};

export default Form;
