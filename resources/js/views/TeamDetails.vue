<template>
  <div>
    <b-alert v-if="error" show variant="danger" dismissible>
      {{ error }}
    </b-alert>

    <div v-if="team">
      <div class="d-flex justify-content-between align-items-center">
        <h2>Team: {{ team.name }}</h2>

        <div>
          <b-button
            variant="success"
            :to="{ name: 'TeamEdit', params: { id: team.id } }"
          >
            Edit
          </b-button>

          <b-button variant="light" :to="{ name: 'Teams' }">
            Back
          </b-button>
        </div>
      </div>

      <h3>Players</h3>
      <b-table :fields="playerFields" :items="team.players" hover>
        <template v-slot:cell(created_at)="{ item }">
          {{ formatDate(item.created_at) }}
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
      error: null,
      playerFields: [
        { key: 'id', label: 'ID' },
        { key: 'first_name', label: 'First Name' },
        { key: 'last_name', label: 'Last Name' },
        { key: 'created_at', label: 'Created At' },
      ],
    }
  },

  created() {
    this.loadData()
  },

  methods: {
    formatDate,

    async loadData() {
      try {
        const { data } = await fetchTeam(this.$route.params.id)

        this.team = data.data
      } catch (error) {
        this.error = error.response.data.message || error.message
      }
    },
  },
}
</script>
