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
export const createLinkToken= (createLinkTokenRequestDto,token) => {
    const headers = {
        'Authorization': 'Bearer ' + token
      }
    return axios.post('http://localhost:8080/api/plaid/create-link-token',createLinkTokenRequestDto,{
        headers:headers
    })
}
export const setAccessToken =(setAccessTokenDto,jwt) =>{
    const headers = {
        'Authorization': 'Bearer ' + jwt
      }
    return axios.post('http://localhost:8080/api/plaid/set-access-token',setAccessTokenDto,{
        headers:headers
    })
}

export const exchangeAccessToken =(exchangeAcceessTokenDto,jwt) => {
    const headers = {
        'Authorization': 'Bearer ' + jwt
      }
    return axios.post('http://localhost:8080/api/plaid/exchange-access-token',exchangeAcceessTokenDto,{
        headers:headers
    })
}

export const setAccountStatus = (username,jwt) => {
    const headers = {
        'Authorization': 'Bearer ' + jwt
      }
    return axios.post(`http://localhost:8080/api/users/${username}`,{},{
        headers:headers
    })
}
export const getAccountBalances = (username,jwt) => {
    console.log("username",username,"jwt",jwt)
    const headers = {
        'Authorization': 'Bearer ' + jwt
      }
    return axios.get(`http://localhost:8080/api/plaid/accounts/${username}`,{
        headers:headers
    })
}

export const getTransactions = (username,jwt) => {
    console.log("username",username,"jwt",jwt)
    const headers = {
        'Authorization': 'Bearer ' + jwt
      }
    return axios.get(`http://localhost:8080/api/finance/transactions/${username}`,{
        headers:headers
    })
}