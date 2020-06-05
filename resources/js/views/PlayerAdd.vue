<template>
  <b-card title="Add Player">
    <b-alert v-if="error" show variant="danger" dismissible>
      {{ error }}
    </b-alert>

    <player-form
      :teamOptions="teamOptions"
      @submit="onSubmit"
      @cancel="onCancel"
    ></player-form>
  </b-card>
</template>

<script>
import { fetchTeams, createPlayer } from '../utils/api'
import PlayerForm from '../components/PlayerForm'

export default {
  name: 'PlayerAdd',

  components: {
    PlayerForm,
  },

  data() {
    return {
      teamOptions: [],
      error: '',
    }
  },

  created() {
    this.loadData()
  },

  methods: {
    async loadData() {
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
    },

    async onSubmit(payload) {
      try {
        const { data } = await createPlayer(payload)

        this.$router.push({
          name: 'PlayerDetails',
          params: { id: data.data.id },
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
