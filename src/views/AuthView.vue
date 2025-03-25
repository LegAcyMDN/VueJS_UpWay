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
})

const msg = ref('')
const newUser = ref(false)

function login() {
  userStore
    .login(credentials.value.username, credentials.value.password)
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
      msg.value = 'An unexpected error occured!'
    })
}
</script>

<template>
  <div class="container">
    <p>{{ msg }}</p>
    <div class="login">
      <input type="radio" :value="false" id="not_new" v-model="newUser" checked />
      <label for="not_new">I already have an account</label>

      <input type="radio" :value="true" id="new" v-model="newUser" />
      <label for="new">I'm new</label>

      <p v-if="newUser">
        <label>Username</label>
        <input type="text" name="username" v-model="credentials.username" />
      </p>

      <p>
        <label>Password</label>
        <input type="password" name="password" v-model="credentials.password" />
      </p>

      <p v-if="!newUser">
        <label>Email</label>
        <input type="email" name="email" v-model="credentials.email" />
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
          :disabled="credentials.username == '' || credentials.password == ''"
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
</template>

<style scoped></style>
