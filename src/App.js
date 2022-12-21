import './App.css';
import Todos from './component/Todos';
import Form from './component/Form';
import { useDispatch, useSelector } from 'react-redux';
import { deleteAll } from './redux/todo-redux/actions';
import { useState } from 'react';

function App() {
  const dispatch = useDispatch();

  const todos = useSelector((state) => state.oprationsReducer);

  const [editForm, setEditForm] = useState(false);

  const [editTodo, setEditTodo] = useState('');

  const handleEdit = (todo) =>{
    setEditForm(true);
    setEditTodo(todo);
  }

  const cancelUpdate = () =>{
    setEditForm(false);
  }
  return (
    <div className="App">
      <h1>Todo App Using Redux</h1>
      <Todos handleEdit={handleEdit} editForm={editForm} />
      <Form editForm={editForm} editTodo={editTodo} cancelUpdate={cancelUpdate} />
      {todos.length > 0 && (
        <button className='button' onClick={() => dispatch(deleteAll())}>Delete All</button>
      )
      }
    </div>
  );
}

export default App;
