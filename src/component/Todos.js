import React from 'react';
import './todos.css';
import { useDispatch, useSelector } from 'react-redux';
import { Icon } from 'react-icons-kit';
import { pencil } from 'react-icons-kit/fa/pencil';
import { trash } from 'react-icons-kit/fa/trash';
import { removeTodo, handleCheck } from '../redux/todo-redux/actions';

const Todos = ({ handleEdit, editForm }) => {
    const todos = useSelector((state) => state.oprationsReducer);
    console.log(todos);

    const dispatch = useDispatch();
    return (
        <div className='todos'>
            {
                todos.map((todo) => (
                    <>
                        <div className='check' key={todo.id}>
                            {editForm === false && (
                                <input type='checkbox' checked={todo.completed} onChange={() => dispatch(handleCheck(todo.id))}></input>
                            )}
                            <p className='p1' style={todo.completed === true ? { textDecoration: 'line-through' } : { textDecoration: 'none' }}> {todo.todo}</p>
                        </div>
                        <div>
                            {editForm === false && (
                                <>
                                    <span onClick={() => handleEdit(todo)}><Icon icon={pencil}></Icon> </span>
                                    <span onClick={() => dispatch(removeTodo(todo.id))}><Icon icon={trash} /> </span>
                                </>
                            )}
                        </div>
                    </>
                ))
            }
        </div>

    )
}

export default Todos;
