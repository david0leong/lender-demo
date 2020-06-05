<template>
  <div>
    Add Team
  </div>
</template>

<script>
import { fetchTeam } from '../utils/api'
import { formatDate } from '../utils/formatters'

export default {
  name: 'TeamAdd',

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
