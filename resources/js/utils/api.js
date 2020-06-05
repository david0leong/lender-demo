import axios from 'axios'

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
