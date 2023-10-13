<template>
    <h1>Message!</h1>
    <ul>
        <li v-if="messages.value.length > 0" v-for="message in messages">ID: {{ message.id }} Message: {{ message.message }} </li>
    </ul>
    <form action="">
        <input type="text" v-model="message">
        <button type="submit" @click.prevent="sendMessage">Send</button>
    </form>
</template>

<script setup>
import { io } from 'socket.io-client';
import { ref,onMounted } from 'vue';
import { useSocketStore } from '../stores/socket'

const store = useSocketStore();
const messages = ref([])
const message = ref('');
// const socket =  io('http://localhost:5000');
//     socket.on("connect",() => {
//         console.log(`you connected with id ${socket.id}`);
    
//     });
//     socket.on('receive-message',(message,id)=>{
//         messages.value.push({id:id, message:message})
//     });
const sendMessage = () => {
    store.sendMessage(message.value)
    message.value =''
};
onMounted(()=>{
    store.connect();
    store.receiveMessage()
    console.log(store.connected);
    messages.value = store.messages

});
</script>












<style scoped>
h1,li{
    font-size: large;
    color: white;
}
</style>