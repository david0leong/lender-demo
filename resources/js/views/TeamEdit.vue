<template>
  <div>
    Edit Team
  </div>
</template>

<script>
import { fetchTeam } from '../utils/api'
import { formatDate } from '../utils/formatters'

export default {
  name: 'TeamEdit',

  data() {
    return {
      team: null,
    }
  },

  created() {
    this.loadData()
  },

  methods: {},
}
</script>
