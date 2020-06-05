<template>
  <players-table :players="players"></players-table>
</template>

<script>
import { fetchPlayers } from '../utils/api'

import PlayersTable from '../components/PlayersTable'

export default {
  name: 'Players',
  components: {
    PlayersTable,
  },

  data() {
    return {
      players: [],
    }
  },

  created() {
    this.loadData()
  },

  methods: {
    async loadData() {
      const { data } = await fetchPlayers()

      this.players = data.data
    },
  },
}
</script>
