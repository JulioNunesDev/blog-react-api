import axios from 'axios'


const ApiKey = import.meta.env.VITE_SOME_KEY

const ApiCategory = axios.create({
    baseURL: `https://newsapi.org/v2/top-headlines?country=br&category=technology&apiKey=${ApiKey}`
}) 