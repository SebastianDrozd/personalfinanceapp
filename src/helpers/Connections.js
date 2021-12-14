import axios from 'axios'

export const SignupUser = (signUpDto) => {
    return axios.post('http://localhost:8080/api/public/signup',signUpDto)
}
export const loginuser = (loginUserDto) => {
    return axios.post('http://localhost:8080/api/public/signin',loginUserDto)
}

export const validateToken = (token) => {
    const headers = {
        'Authorization': 'Bearer ' + token
      }
    return axios.post('http://localhost:8080/api/public/verify',{},{
      headers: headers
    })
}