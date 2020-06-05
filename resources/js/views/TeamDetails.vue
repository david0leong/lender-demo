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
      <players-table :players="team.players"></players-table>
    </div>
  </div>
</template>

<script>
import { fetchTeam } from '../utils/api'
import PlayersTable from '../components/PlayersTable'

export default {
  name: 'TeamDetails',

  components: {
    PlayersTable,
  },

  data() {
    return {
      team: null,
      error: null,
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
  },
}
</script>
