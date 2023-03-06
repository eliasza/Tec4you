import axios from 'axios';

const api = axios.create({
    baseURL: "https://covid-19-statistics.p.rapidapi.com/provinces"
    //baseURL: "https://daveloza.vercel.app/api"
});

export default api;