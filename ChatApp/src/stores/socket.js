import { defineStore } from "pinia";
import { ref } from "vue";
import { io } from 'socket.io-client';


export const useSocketStore = defineStore('socketStore',() => {
    const socket =  io('http://localhost:5000');
    const connected = ref(false)
    const messages = ref([])

    const connect = () => {
        socket.on('connect',()=>{
            connected.value = true;
        });
        socket.on('disconnect',()=>{
            connected.value = false;
        });
        socket.on('message',(message)=>{
            message.value = message;
        });
    }
    
    const receiveMessage = ()=>{
        socket.on('receive-message',(message)=>{
            message.value = message;
        });
    }

    const sendMessage = (message) => {
        socket.emit('message', message);
    }


    return {
        connected,messages, connect, sendMessage, receiveMessage
    }
})