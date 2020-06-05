<template>
  <div>
    <div v-if="error">
      <b-alert show variant="danger" dismissible>
        {{ error }}
      </b-alert>
    </div>

    <div v-if="team">
      <b-table :fields="fields" :items="teams" hover>
        <template v-slot:cell(action)="team">
          <b-button :to="{ name: 'TeamDetails', params: { id: team.id } }">
            View
          </b-button>
        </template>
      </b-table>
    </div>
  </div>
</template>

<script>
import { fetchTeam } from '../utils/api'
import { formatDate } from '../utils/formatters'

export default {
  name: 'TeamDetails',

  data() {
    return {
      team: null,
    }
  },

  created() {
    this.loadData()
  },

  methods: {
    async loadData() {
      try {
        const { data } = await fetchTeam()
        this.team = data.data
      } catch (error) {
        this.error = error.response.data.message || error.message
      }
    },
  },
}
</script>
