import axios from 'axios';
import { getAllTodo } from './getAllTodo';

const baseURL = 'https://todo-app-backend-94be.onrender.com/'

export const addTodo = (text, setText, setToDo) => {
    axios.post(`${baseURL}save`, { text }).then((data) => {
        console.log('data', data)
        setText('')
        getAllTodo(setToDo)
    })
}
