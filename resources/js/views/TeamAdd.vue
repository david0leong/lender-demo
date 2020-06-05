<template>
  <b-card title="Add Team">
    <b-alert v-if="error" show variant="danger" dismissible>
      {{ error }}
    </b-alert>

    <team-form @submit="onSubmit" @cancel="onCancel"></team-form>
  </b-card>
</template>

<script>
import { createTeam } from '../utils/api'
import TeamForm from '../components/TeamForm'

export default {
  name: 'TeamAdd',

  components: {
    TeamForm,
  },

  data() {
    return {
      error: '',
    }
  },

  methods: {
    async onSubmit(payload) {
      try {
        const { data } = await createTeam(payload)

        this.$router.push({ name: 'TeamDetails', params: { id: data.data.id } })
      } catch (error) {
        this.error = error.response.data.message || error.message
      }
    },

    onCancel() {
      this.$router.push({ name: 'Teams' })
    },
  },
}
</script>
