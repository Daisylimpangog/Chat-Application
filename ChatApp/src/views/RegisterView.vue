<template>
  <div class="form">
    <h1>Register Here!!</h1>
    <form name="registration" >
      <input v-model="fullname" type="text" name="Fullname" placeholder="Fullname"  autocomplete="on"/>
      <input v-model="username" type="text" name="username" placeholder="username"  autocomplete="on"/>
      <input v-model="email" type="Email" name="Email" placeholder="Email"  autocomplete="on"/>
      <input v-model="password" type="password" name="password" placeholder="Password"  autocomplete="on"/>

      <div class="birthday-input">
        <label  for="birthday">Birthday:</label>
        <input v-model="birthday" type="date" name="birthday" id="birthday"  />
      </div>
      <br />
      <div class="genderlabel">
        <span for="gender-male">Gender:</span>
        <input v-model="gender" type="radio" name="gender" value="male" id="male"  />
        <label for="male">Male</label>
        <input  v-model="gender" type="radio" name="gender" value="female" id="gender-female"  />
        <label for="gender-female">Female</label>
      </div>
      <br>
    </form>
    <div class="buttons">
 
        <router-link to="/login"><span>Back</span></router-link>
       <button @click="handleSubmit">Register</button>
      </div>
  </div>
</template>

<script setup>
import {ref} from 'vue'
import { useAuthStore } from '../stores/auth';
import { useRouter } from "vue-router";

const router = useRouter()
const store = useAuthStore()

// register

const fullname = ref('')
const username = ref('')
const email = ref('')
const password = ref('')
const birthday = ref('')
const gender = ref('')



const handleSubmit = async()=>{

  if(valudateInputs()){

    alert('Please provide credentials')
    return;
  }

  const credentials = {
    user_name:username.value,
    fullname:fullname.value,
    email:email.value,
    password:password.value,
    birthday:birthday.value,
    gender:gender.value
  }

  await store.registerAccount(credentials)
  if(store.isSuccess){
    alert('Successfully Registered!')
    router.push({name:'login'})
  }else{
    alert('Something went wrong')
  }
}

const valudateInputs = ()=>{
  let isError = false

  if(fullname.value == ''){
    isError = true
  }
  if(username.value == ''){
    isError = true
  }
  if(email.value == ''){
    isError = true
  }
  if(password.value == ''){
    isError = true
  }
  if(birthday.value == ''){
    isError = true
  }
  if(gender.value == ''){
    isError = true
  }



  return isError
}

</script>




<style scope>
.buttons{
  display: flex;
  justify-content: space-between;
}


.birthday-input {
  position: relative;
  color: white;
  font-size: 20px;
}

.genderlabel {
  color: white;
  font-size: 20px;
}
.form {
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(115, 23, 172, 0.7091211484593838) 36%,
    rgba(0, 212, 255, 1) 100%
  );
  color: gray;
  padding: 50px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  margin: 0 auto;
  text-align: center;
  width: 500px;
  height: 440px;
  box-shadow: 4px 3px 3px 3px;
}

.form h1 {
  font-size: 35px;
  margin: 0 0 20px;
  color: white;
}

/* Style form inputs */
.form input[type="text"],
.form input[type="email"],
.form input[type="password"] {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: none;
  border-radius: 5px;
}

/* Style radio button container */
.form div {
  text-align: left;
}

/* Style radio buttons and labels */
.form input[type="radio"] {
  margin-right: 5px;
}

/* Style labels associated with radio buttons */
.form label[for="male"],
.form label[for="female"] {
  font-weight: normal;
}

.form label[for="male"]::before,
.form label[for="female"]::before {
  content: "\00a0\00a0\00a0";
  color: black;
}

/* Style the submit button */
a,button {
  margin-top: 5px;
  background-color: #ff6f61;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}
 span{
  text-decoration: none;
  color: white;
}
a:hover,button:hover{
  background-color: blue;

}
</style>
