import axios from 'axios'

// http://10.0.1.103:3000

const api = axios.create({
    baseURL: 'http://10.0.1.103:3000'
})

export default api