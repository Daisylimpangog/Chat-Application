import axios from "axios";


const api = axios.create({
    baseURL: 'http://localhost:5000'
})

api.interceptors.request.use((config) => {
    if(localStorage.getItem('token')){
        const token = localStorage.getItem('token');
        config.headers.Authorization = token;
    }
    return config;
}, (error) => {
    // console.log(error)
    return Promise.reject(error);
});





export default api



