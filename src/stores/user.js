import { ref, computed, inject } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useUserStore = defineStore('user', () => {
  const $cookies = inject('$cookies')
  const current = ref(null)
  const token = ref($cookies.get('jwt_token'))
  const connected = computed(() => token.value != null && current.value != null)

  if (token.value != undefined && token.value != '') {
    refreshUser()
  }

  async function login(username, password) {
    token.value = (
      await axios.post(`${window.VITE_BACKEND_URL}/Auth/login`, {
        login: username,
        password,
      })
    ).data.token
    $cookies.set('jwt_token', token.value)
    await refreshUser()
  }

  async function loginOtp(username, password, code) {
    token.value = (
      await axios.post(`${window.VITE_BACKEND_URL}/Auth/login-otp`, {
        login: username,
        password,
        code,
      })
    ).data.token
    $cookies.set('jwt_token', token.value)
    await refreshUser()
  }

  async function register(username, password, email, first_name, last_name) {
    token.value = (
      await axios.post(`${window.VITE_BACKEND_URL}/Auth/register`, {
        login: username,
        password,
        email,
        firstName: first_name,
        lastName: last_name,
      })
    ).data.token
    $cookies.set('jwt_token', token.value)
    await refreshUser()
  }

  async function logout() {
    token.value = null
    current.value = null
    $cookies.set('jwt_token', undefined)
  }

  async function refreshUser() {
    try {
      current.value = (
        await axios.get(`${window.VITE_BACKEND_URL}/User/me`, {
          headers: {
            Authorization: `Bearer ${token.value}`,
          },
          withCredentials: true,
        })
      ).data
    } catch (err) {
      token.value = null
      $cookies.set('jwt_token', undefined)
      throw err
    }
  }

  async function deleteClient(id){
    await axios.delete(`${window.VITE_BACKEND_URL}/CompteClients/${id}`, {
      headers: {
        Authorization: `Bearer ${token.value}`,
      },
      withCredentials: true,
    });
  }

  return { current, token, connected, login, loginOtp, register, logout, deleteClient }
})
