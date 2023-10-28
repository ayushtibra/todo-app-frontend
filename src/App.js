import { useEffect, useState } from "react";
import TodoList from "./components/TodoList";
import { getAllTodo } from "./apis/getAllTodo";
import { addTodo } from "./apis/addTodo";
import { updateTodo } from "./apis/updateTodo";
import { deleteTodo } from "./apis/deleteTodo";

function App() {
  const [toDo, setToDo] = useState([])
  const [text, setText] = useState('')
  const [isUpdate, setIsUpdate] = useState(false)
  const [todoId, setTodId] = useState('')

  useEffect(() => {
    getAllTodo(setToDo)
  }, [])

  const handleClick = () => {
    isUpdate ? updateTodo(todoId, text, setText, setIsUpdate, setToDo) : addTodo(text, setText, setToDo)
  }

  const handleUpdateTodo = (id, text) => {
    setIsUpdate(true);
    setText(text);
    setTodId(id)
  }

  const handleUDeleteTodo = (id) => {
    deleteTodo(id, setToDo)
  }

  return (
    <div className="App">
      <div className='container'>
        <h1>ToDo App</h1>

        <div className='top'>
          <input type='text' placeholder='Add Todos..' value={text} onChange={(e) => setText(e.target.value)} />
          <div className='add' onClick={handleClick}>{isUpdate ? 'Update' : 'Add'}</div>
        </div>

        <div className='list'>
          {toDo?.map((item, index) => (
            <TodoList key={item._id} text={item.text} updateTodo={() => handleUpdateTodo(item._id, item.text)} deleteTodo={() => handleUDeleteTodo(item._id)} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
