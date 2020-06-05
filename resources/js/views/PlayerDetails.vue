<template>
  <div>
    <b-alert v-if="error" show variant="danger" dismissible>
      {{ error }}
    </b-alert>

    <div v-if="player">
      <div class="d-flex justify-content-between align-items-center">
        <h2>Player: {{ name }}</h2>

        <div>
          <b-button
            variant="success"
            :to="{ name: 'PlayerEdit', params: { id: player.id } }"
          >
            Edit
          </b-button>

          <b-button variant="light" :to="{ name: 'Players' }">
            Back
          </b-button>
        </div>
      </div>

      <h3>Team: {{ teamName }}</h3>
    </div>
  </div>
</template>

<script>
import { fetchPlayer } from '../utils/api'

export default {
  name: 'PlayerDetails',

  data() {
    return {
      player: null,
      error: null,
    }
  },

  computed: {
    firstName() {
      return _.get(this.player, ['first_name'])
    },

    lastName() {
      return _.get(this.player, ['last_name'])
    },

    name() {
      return [this.firstName, this.lastName].join(' ')
    },

    teamName() {
      return _.get(this.player, ['team', 'name'])
    },
  },

  created() {
    this.loadData()
  },

  methods: {
    async loadData() {
      try {
        const { data } = await fetchPlayer(this.$route.params.id)

        this.player = data.data
      } catch (error) {
        this.error = error.response.data.message || error.message
      }
    },
  },
}
</script>
