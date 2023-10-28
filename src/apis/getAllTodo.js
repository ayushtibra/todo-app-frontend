import axios from 'axios';

const baseURL = 'https://todo-app-3ml2.onrender.com/'

export const getAllTodo = (setToDo) => {
    axios.get(baseURL).then(({ data }) => {
        console.log('data', data)
        setToDo(data)
    })
}
