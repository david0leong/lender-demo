<template>
  <div>
    Add Team
  </div>
</template>

<script>
import { fetchTeam } from '../utils/api'

export default {
  name: 'TeamAdd',

  data() {
    return {
      team: null,
    }
  },

  created() {
    // this.loadData()
  },

  methods: {},
}
</script>
