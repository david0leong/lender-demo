<template>
  <b-card title="Edit Player">
    <b-alert v-if="error" show variant="danger" dismissible>
      {{ error }}
    </b-alert>

    <player-form
      v-if="player"
      :defaultValue="player"
      :teamOptions="teamOptions"
      @submit="onSubmit"
      @cancel="onCancel"
    ></player-form>
  </b-card>
</template>

<script>
import { fetchTeams, fetchPlayer, updatePlayer } from '../utils/api'
import PlayerForm from '../components/PlayerForm'

export default {
  name: 'PlayerEdit',

  components: {
    PlayerForm,
  },

  data() {
    return {
      player: null,
      teamOptions: [],
      error: '',
    }
  },

  created() {
    this.loadTeams()
    this.loadPlayer()
  },

  methods: {
    async loadTeams() {
      try {
        const { data } = await fetchTeams()

        this.teamOptions = [
          {
            value: null,
            text: 'Please select a team',
          },
          ...data.data.map(team => ({
            value: team.id,
            text: team.name,
          })),
        ]
      } catch (error) {
        this.error = error.response.data.message || error.message
      }
    },

    async loadPlayer() {
      try {
        const { data } = await fetchPlayer(this.$route.params.id)

        this.player = data.data
      } catch (error) {
        this.error = error.response.data.message || error.message
      }
    },

    async onSubmit(payload) {
      try {
        const { data } = await updatePlayer(this.player.id, payload)

        this.$router.push({
          name: 'PlayerDetails',
          params: { id: this.player.id },
        })
      } catch (error) {
        this.error = error.response.data.message || error.message
      }
    },

    onCancel() {
      this.$router.push({ name: 'Players' })
    },
  },
}
</script>
