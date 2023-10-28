import axios from 'axios';

const baseURL = 'https://todo-app-backend-94be.onrender.com/'

export const getAllTodo = (setToDo) => {
    axios.get(baseURL).then(({ data }) => {
        console.log('data', data)
        setToDo(data)
    })
}
