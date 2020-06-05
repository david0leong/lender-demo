<template>
  <b-table :fields="fields" :items="teams" hover>
    <template v-slot:cell(created_at)="{ item }">
      {{ formatDate(item.created_at) }}
    </template>

    <template v-slot:cell(action)="{ item }">
      <b-button
        variant="primary"
        :to="{ name: 'TeamDetails', params: { id: item.id } }"
      >
        View
      </b-button>

      <b-button
        variant="info"
        :to="{ name: 'TeamEdit', params: { id: item.id } }"
      >
        Edit
      </b-button>
    </template>
  </b-table>
</template>

<script>
import { formatDate } from '../utils/formatters'

export default {
  name: 'Players',

  props: {
    teams: {
      type: Array,
      default: [],
    },
  },

  data() {
    return {
      fields: [
        { key: 'id', label: 'ID' },
        { key: 'name', label: 'Name' },
        { key: 'created_at', label: 'Created At' },
        'action',
      ],
    }
  },

  methods: {
    formatDate,
  },
}
</script>
