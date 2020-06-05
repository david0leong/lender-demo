<template>
  <b-table :fields="fields" :items="teams" hover>
    <template v-slot:cell(action)="team">
      <b-button :to="{ name: 'TeamDetails', params: { id: team.id } }">
        View
      </b-button>
    </template>
  </b-table>
</template>

<script>
import { fetchTeams } from '../utils/api'
import { formatDate } from '../utils/formatters'

export default {
  name: 'Teams',

  data() {
    return {
      teams: [],
      fields: [
        { key: 'id', label: 'ID' },
        { key: 'name', label: 'Name' },
        { key: 'created_at', label: 'Created At' },
        'action',
      ],
    }
  },

  created() {
    this.loadData()
  },

  methods: {
    async loadData() {
      const { data } = await fetchTeams()

      this.teams = data.data.map(team => ({
        ...team,
        created_at: formatDate(team.created_at),
      }))
    },
  },
}
</script>
