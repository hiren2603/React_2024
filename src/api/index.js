import { api } from "../conf"
import { useAuth } from "../hooks/useAuth"

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

   export const getCurrentUser = async()=>{
    const token = await JSON.parse(localStorage.getItem("token"));
   if(token){
    try{
        const response = await fetch(`${api}/auth/me`,{
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        })
        return response.status
    }catch(error){
        return error
    }
   }else{
     return "Please Login"
   }
        
    
   }