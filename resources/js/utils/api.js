import axios from 'axios'

axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'

const token = document.head.querySelector('meta[name="csrf-token"]')

if (token) {
  axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content
} else {
  console.error(
    'CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token'
  )
}

const axiosInstance = axios.create({
  withCredentials: true,
  baseURL: '/api',
  headers: {
    Accept: 'application/json',
  },
})

export const fetchTeams = () => axiosInstance.get('/teams')
export const createTeam = payload => axiosInstance.post('/teams', payload)
export const fetchTeam = id => axiosInstance.get(`/teams/${id}`)
export const updateTeam = (id, payload) =>
  axiosInstance.patch(`/teams/${id}`, payload)

export const fetchPlayers = () => axiosInstance.get('/players')
export const createPlayer = payload => axiosInstance.post('/players', payload)
export const fetchPlayer = id => axiosInstance.get(`/players/${id}`)
export const updatePlayer = (id, payload) =>
  axiosInstance.patch(`/players/${id}`, payload)
