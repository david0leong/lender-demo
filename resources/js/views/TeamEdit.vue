<template>
  <b-card title="Edit Team">
    <b-alert v-if="error" show variant="danger" dismissible>
      {{ error }}
    </b-alert>

    <team-form
      v-if="team"
      :defaultValue="team"
      @submit="onSubmit"
      @cancel="onCancel"
    ></team-form>
  </b-card>
</template>

<script>
import { fetchTeam, updateTeam } from '../utils/api'
import TeamForm from '../components/TeamForm'

export default {
  name: 'TeamEdit',

  components: {
    TeamForm,
  },

  data() {
    return {
      team: null,
      error: '',
    }
  },

  created() {
    this.loadData()
  },

  methods: {
    async loadData() {
      try {
        const { data } = await fetchTeam(this.$route.params.id)

        this.team = data.data
      } catch (error) {
        this.error = error.response.data.message || error.message
      }
    },

    async onSubmit(payload) {
      try {
        await updateTeam(this.team.id, payload)

        this.$router.push({ name: 'TeamDetails', params: { id: this.team.id } })
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
