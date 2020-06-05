<template>
  <div>
    <div class="d-flex justify-content-between align-items-center mb-3">
      <h2>Teams</h2>

      <b-button variant="success" :to="{ name: 'TeamAdd' }">
        Add a team
      </b-button>
    </div>
    <teams-table :teams="teams"></teams-table>
  </div>
</template>

<script>
import { fetchTeams } from '../utils/api'
import TeamsTable from '../components/TeamsTable'

export default {
  name: 'Teams',

  components: {
    TeamsTable,
  },

  data() {
    return {
      teams: [],
    }
  },

  created() {
    this.loadData()
  },

  methods: {
    async loadData() {
      const { data } = await fetchTeams()

      this.teams = data.data
    },
  },
}
</script>
