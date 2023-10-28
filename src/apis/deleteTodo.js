import axios from "axios";
import { getAllTodo } from "./getAllTodo";

const baseURL = `https://todo-app-3ml2.onrender.com/`

export const deleteTodo = (id, setToDo) => {
    axios.post(`${baseURL}delete`, { _id: id }).then((data) => {
        console.log('data', data)
        getAllTodo(setToDo)
    })
}