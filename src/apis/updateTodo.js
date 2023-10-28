import axios from 'axios';
import { getAllTodo } from './getAllTodo';

const baseURL = 'https://todo-app-3ml2.onrender.com/'

export const updateTodo = (todoId, text, setText, setIsUpdate, setToDo) => {
    axios.post(`${baseURL}update`, { _id: todoId, text }).then((data) => {
        console.log('data', data)
        setText('')
        setIsUpdate(false)
        getAllTodo(setToDo)
    })
}
