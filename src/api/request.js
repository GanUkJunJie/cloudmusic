import axios from 'axios'

export function request(config) {
    const a = axios.create({
        baseURL: '/api',
        timeout: 20000
    })

    a.interceptors.request.use(
        config => {
            return config
        },
        error => {
            console.log(error);
        }
    )

    a.interceptors.response.use(
        response => {
            return response.data
        },
        error => {
            console.log(error);
        }
    )

    return a(config)
}

