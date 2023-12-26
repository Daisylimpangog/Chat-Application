import {defineStore } from 'pinia'
import { ref } from 'vue'
import { register ,login} from '../http/auth-api'

export const useAuthStore = defineStore('authStore', ()=>{
        const user = ref([])
        const isSuccess = ref(false)


    const loginAccoount = async(credentials)=>{
        const {data} = await login(credentials)
        console.log(data)
        if(data.success){
            isSuccess.value = true
            user.value = data.data
            localStorage.setItem('token', JSON.stringify(data.token))
        }else{
            isSuccess.value = false
        }
    }

    const registerAccount = async(credentials)=>{
        const {data} = await register(credentials)
        if(data.success){
            isSuccess.value = true
        }else{
            isSuccess.value = false
        }

       
    }


        
    return {
        user,
        isSuccess,
        loginAccoount,
        registerAccount
    }
})