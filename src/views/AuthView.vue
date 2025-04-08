<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '../stores/user.js'
import axios from 'axios'

const router = useRouter()
const userStore = useUserStore()

const credentials = ref({
  username: '',
  password: '',
  email: '',
  first_name: '',
  last_name: '',
  code: undefined,
})

const msg = ref('')
const newUser = ref(false)
const requireOtp = ref(false)

function login() {
  ;(credentials.code == undefined
    ? userStore.login(credentials.value.email, credentials.value.password)
    : userStore.loginOtp(
        credentials.value.username,
        credentials.value.password,
        credentials.value.code,
      )
  )
    .then((res) => {
      router.push({ name: 'home' })
    })
    .catch((err) => {
      if (err.status == 403) {
        msg.value = 'Incorrect credentials!'
      } else {
        msg.value = err.response.data.message
      }
    })
}

function register() {
  userStore
    .register(
      credentials.value.username,
      credentials.value.password,
      credentials.value.email,
      credentials.value.first_name,
      credentials.value.last_name,
    )
    .then((res) => {
      router.push({ name: 'home' })
    })
    .catch((err) => {
      msg.value = err.response.data.message ?? 'An unexpected error occured!'
    })
}
</script>

<template>
  <div class="container">
    <div v-if="!requireOtp" class="login">
      <div class="auth-type-container">
        <p>
          <input type="radio" :value="false" id="not_new" v-model="newUser" checked />
          <label for="not_new" style="border-radius: 5px 0 0 5px">Connexion</label>
        </p>
        <p>
          <input type="radio" :value="true" id="new" v-model="newUser" />
          <label for="new" style="border-radius: 0 5px 5px 0">S'inscrire</label>
        </p>
      </div>

      <div class="container2">
        <p class="error">{{ msg }}</p>
        <p v-if="newUser">
          <label>Username</label>
          <input type="text" name="username" v-model="credentials.username" />
        </p>

        <p>
          <label>Email</label>
          <input type="email" name="email" id="email-field" v-model="credentials.email" />
        </p>

        <p>
          <label>Password</label>
          <input type="password" name="password" v-model="credentials.password" />
        </p>

        <p v-if="newUser">
          <label>First Name</label>
          <input type="text" name="first_name" v-model="credentials.first_name" />
        </p>

        <p v-if="newUser">
          <label>Last Name</label>
          <input type="text" name="last_name" v-model="credentials.last_name" />
        </p>

        <p>
          <button
            v-if="!newUser"
            @click="login()"
            id="login_btn"
            :disabled="credentials.email == '' || credentials.password == ''"
          >
            Login
          </button>
          <button
            v-if="newUser"
            @click="register()"
            :disabled="
              credentials.username == '' ||
              credentials.password == '' ||
              credentials.email == '' ||
              credentials.first_name == '' ||
              credentials.last_name == ''
            "
          >
            Register
          </button>
        </p>
      </div>
    </div>

    <div v-if="requireOtp">
      <input type="text" id="otpcode" v-model="newUser.code" />
      <label for="otpcode">Code OTP</label>
    </div>
  </div>
</template>

<style scoped>
.error {
  color: red;
}

.container {
  display: flex;
  flex-direction: column;
  padding: 10%;
  justify-content: center;
  text-align: center;
}

.container2 {
  display: flex;
  flex-direction: column;
  padding: 5%;
  justify-content: center;
  text-align: center;
  gap: 15px;
}
.login {
  border: 1px solid black;
  padding: 10px;
  border-radius: 5px;
}

.auth-type-container {
  display: flex;
  width: 100%;
  justify-content: center;
  text-align: center;
}

.auth-type-container > p {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.auth-type-container > p > input[type='radio']:hover + label {
  background-color: rgb(230, 230, 230);
}

.auth-type-container > p > input[type='radio']:checked + label {
  background-color: #4733ff;
  color: white;
}

.auth-type-container > p > input[type='radio'] {
  display: none;
}
.auth-type-container > p > label {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 5px;
  cursor: pointer;
  transition: 0.25s;
  background-color: rgb(200, 200, 200);
}

button {
  border: none;
  background-color: #4733ff;
  padding: 10px 20px;
  margin: 15px;
  color: white;
  border-radius: 5px;
  transition: 0.25s;
  cursor: pointer;
}

button:hover:not(:disabled) {
  transform: scale(1.05);
}

button:active:not(:disabled) {
  transform: scale(1.1);
}

button:disabled {
  background-color: rgb(150, 150, 150);
  cursor: not-allowed;
}

input[type='email'],
input[type='password'],
input[type='text'] {
  border-radius: 5px;
  padding: 5px;
  border: 1px solid gray;
  transition: 0.25s;
}

input[type='email']:focus,
input[type='password']:focus,
input[type='text']:focus {
  border-color: #4733ff;
}

.container2 > p {
  text-align: left;
  display: flex;
  flex-direction: column;
}
</style>
