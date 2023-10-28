import axios from "axios";
import { getAllTodo } from "./getAllTodo";

const baseURL = `https://todo-app-backend-94be.onrender.com/`

export const deleteTodo = (id, setToDo) => {
    axios.post(`${baseURL}delete`, { _id: id }).then((data) => {
        console.log('data', data)
        getAllTodo(setToDo)
    })
}
