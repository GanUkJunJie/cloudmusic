import axios from 'axios'

export function backRequest(config) {
    const a = axios.create({
        baseURL: '/back',
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

