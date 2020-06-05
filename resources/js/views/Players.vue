<template>
  <div>
    <b-table :fields="fields" :items="players"></b-table>
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
        { key: 'created_at', label: 'Created At' },
      ],
    }
  },

  created() {
    this.loadData()
  },

  methods: {
    async loadData() {
      const { data } = await fetchPlayers()

      this.players = data.data.map(player => ({
        ...player,
        created_at: formatDate(player.created_at),
      }))
    },
  },
}
</script>
