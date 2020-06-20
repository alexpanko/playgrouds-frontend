import axios from 'axios'

class AuthService {
    constructor() {
        let service = axios.create({
            // baseURL: 'http://localhost:4000/',
            baseURL: process.env.REACT_APP_BASE_URL,
            withCredentials: true
        })
        this.service = service
    }

    signup = (username, password) => {
        return this.service.post('/auth/signup', {username, password})
        .then(response => response.data)
    }

    login = (username, password) => {
        return this.service.post('/auth/login', {username, password})
        .then(response => response.data)
    }

    logout = () => {
        return this.service.get('/auth/logout', {})
        .then(response => response.data)
    }

    isAuthenticated = () => {
        return this.service.get('/auth/isLoggedIn')
        .then(response => response.data)
    }

}

export default AuthService