import axios from "axios";

const  BASE_URL = 'http://192.168.0.154:8765'

export const ApiService = {
    async fetching(url){
        const response = await axios.get(`${BASE_URL}/${url}`)
        return response.data
    }
}