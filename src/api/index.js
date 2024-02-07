import { api } from "../conf"
import { useAuth } from "../hooks/useAuth"


   export const fetchProducts = async()=>{
    try{
        const response = await fetch(`${api}/products`)
        return response.json()
    }catch(error){
        return error
    }
   }
   
   export const getProductDetails = async(id)=>{
    console.log(id)
    try {
        const response = await fetch(`${api}/products/${id}`)
        return response.json()
    } catch (error) {
        return error
    }
   }
   
   export const fetchUsers = async(limit, skip)=>{
    const token = JSON.parse(localStorage.getItem('token')); 
    if(token){
        try{
            const response = await fetch(`${api}/users?limit=${limit}&skip=${skip}`)
            return response.json()
        }catch(error){
            return error
        }
    }else{
        return null
    }
   }

   export const LoginUser = async(username, password)=>{
    try{
        const response = await fetch(`${api}/auth/login`, 
        {method: 'post', 
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            username: username,
            password: password,
            expiresInMins: 60
        })
       })
       return response.json()
    }catch(error){
        return error
    }
   }

   export const getCurrentUser = async()=>{
    const token = JSON.parse(localStorage.getItem('token'));    
   if(token){
    try{
        const response = await fetch(`${api}/auth/me`,{
            method: "GET",
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        return response.ok
    }catch(error){
        return error
    }
   }else{
     return false
   }
}

export const pagination = async()=>{
    try {
        const response = fetch(`${api}/users?limit=${limit}&skip=${skip}`)
        return response.json()
    } catch (error) {
        return error
    }

} 