<template>
  <teams-table :teams="teams"></teams-table>
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
