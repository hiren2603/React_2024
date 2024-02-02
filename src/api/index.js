import { api } from "../conf"

   export const fetchProducts = async()=>{
    try{
        const response = await fetch(`${api}/products`)
        return response.json()
    }catch(error){
        console.log(error)
    }
   } 
   
   export const fetchUsers = async()=>{
    try{
        const response = await fetch(`${api}/users`)
        return response.json()
    }catch(error){
        return error
    }
   }

   export const LoginUser = async(username, password)=>{
    try{
        const response = await fetch(`${api}/auth/login`, 
        {method: 'post', 
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            username: username,
            password: password})
       })
       return response.json()
    }catch(error){
        return error
    }
   }
