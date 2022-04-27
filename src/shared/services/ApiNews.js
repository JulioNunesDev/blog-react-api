import axios from 'axios'



const ApiKey= import.meta.env.VITE_SOME_KEY

export const ApiTopNews = axios.create({
baseURL: `https://newsapi.org/v2/top-headlines?country=br&apiKey=${ApiKey}`



})