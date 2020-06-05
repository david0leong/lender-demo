<template>
  <b-card title="Add Player">
    <b-alert v-if="error" show variant="danger" dismissible>
      {{ error }}
    </b-alert>

    <player-form @submit="onSubmit" @cancel="onCancel"></player-form>
  </b-card>
</template>

<script>
import { createPlayer } from '../utils/api'
import PlayerForm from '../components/PlayerForm'

export default {
  name: 'PlayerAdd',

  components: {
    PlayerForm,
  },

  data() {
    return {
      error: '',
    }
  },

  methods: {
    async onSubmit(newPlayer) {
      try {
        const { data } = await createPlayer(newPlayer)

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
