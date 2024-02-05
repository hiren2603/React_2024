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
            password: password,
            expiresInMins: 120
        })
       })
       return response.json()
    }catch(error){
        return error
    }
   }

   export const getCurrentUser = async()=>{
    const token = localStorage.getItem('token');
   if(token){
    try{
        const response = await fetch(`${api}/auth/me`,{
            method: "GET",
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTUsInVzZXJuYW1lIjoia21pbmNoZWxsZSIsImVtYWlsIjoia21pbmNoZWxsZUBxcS5jb20iLCJmaXJzdE5hbWUiOiJKZWFubmUiLCJsYXN0TmFtZSI6IkhhbHZvcnNvbiIsImdlbmRlciI6ImZlbWFsZSIsImltYWdlIjoiaHR0cHM6Ly9yb2JvaGFzaC5vcmcvSmVhbm5lLnBuZz9zZXQ9c2V0NCIsImlhdCI6MTcwNzE0MDUxMiwiZXhwIjoxNzA3MTQ3NzEyfQ.6zxVUiV2YVK32Mp2Sdks_RtepOlqOzRh8PomiQWGakM'
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

export const pagination = async()=>{
    try {
        const response = fetch(`${api}/users?limit=${limit}&skip=${skip}`)
        return response.json()
    } catch (error) {
        return error
    }

} 