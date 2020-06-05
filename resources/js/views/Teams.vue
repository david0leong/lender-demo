<template>
  <div>
    <div class="d-flex justify-content-between align-items-center mb-3">
      <h2>Teams</h2>

      <b-button variant="success" :to="{ name: 'TeamAdd' }">
        Add a team
      </b-button>
    </div>

    <b-table :fields="fields" :items="teams" hover>
      <template v-slot:cell(created_at)="{ item: team }">
        {{ formatDate(team.created_at) }}
      </template>

      <template v-slot:cell(action)="{ item: team }">
        <b-button
          variant="info"
          :to="{ name: 'TeamDetails', params: { id: team.id } }"
        >
          View
        </b-button>

        <b-button
          variant="primary"
          :to="{ name: 'TeamEdit', params: { id: team.id } }"
        >
          Edit
        </b-button>
      </template>
    </b-table>
  </div>
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
    formatDate,

    async loadData() {
      const { data } = await fetchTeams()

      this.teams = data.data
    },
  },
}
</script>
