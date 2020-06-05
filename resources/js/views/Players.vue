<template>
  <div>
    <div class="d-flex justify-content-between align-items-center mb-3">
      <h2>Players</h2>

      <b-button variant="success" :to="{ name: 'PlayerAdd' }">
        Add a player
      </b-button>
    </div>

    <b-table :fields="fields" :items="players" hover>
      <template v-slot:cell(team)="{ item: player }">
        <b-link
          v-if="player.team"
          :to="{ name: 'TeamDetails', params: { id: player.team.id } }"
        >
          {{ player.team.name }}
        </b-link>
      </template>

      <template v-slot:cell(created_at)="{ item: player }">
        {{ formatDate(player.created_at) }}
      </template>

      <template v-slot:cell(action)="{ item: player }">
        <b-button
          variant="info"
          :to="{ name: 'PlayerDetails', params: { id: player.id } }"
        >
          View
        </b-button>

        <b-button
          variant="primary"
          :to="{ name: 'PlayerEdit', params: { id: player.id } }"
        >
          Edit
        </b-button>
      </template>
    </b-table>
  </div>
</template>

<script>
import { fetchPlayers } from '../utils/api'
import { formatDate } from '../utils/formatters'

export default {
  name: 'Players',
  data() {
    return {
      players: [],
      fields: [
        { key: 'id', label: 'ID' },
        { key: 'first_name', label: 'First Name' },
        { key: 'last_name', label: 'Last Name' },
        { key: 'team', label: 'Team' },
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
      const { data } = await fetchPlayers()

      this.players = data.data
    },
  },
}
</script>
