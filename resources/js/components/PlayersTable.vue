<template>
  <b-table :fields="fields" :items="players" hover>
    <template v-slot:cell(created_at)="{ item }">
      {{ formatDate(item.created_at) }}
    </template>
  </b-table>
</template>

<script>
import { formatDate } from '../utils/formatters'

export default {
  name: 'Players',

  props: {
    players: {
      type: Array,
      default: [],
    },
  },

  data() {
    return {
      fields: [
        { key: 'id', label: 'ID' },
        { key: 'first_name', label: 'First Name' },
        { key: 'last_name', label: 'Last Name' },
        { key: 'created_at', label: 'Created At' },
      ],
    }
  },

  methods: {
    formatDate,
  },
}
</script>
