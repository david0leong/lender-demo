<template>
  <validation-observer ref="observer" v-slot="{ invalid, handleSubmit }">
    <b-form @submit.prevent="handleSubmit(onSubmit)">
      <input-text
        rules="required"
        label="First name:"
        name="First name"
        v-model="value.first_name"
        placeholder="Enter first name"
      />

      <input-text
        rules="required"
        label="Last name:"
        name="Last name"
        v-model="value.last_name"
        placeholder="Enter last name"
      />

      <b-button type="submit" variant="primary" :disabled="invalid">
        Submit
      </b-button>

      <b-button variant="light" @click.prevent="onCancel">
        Cancel
      </b-button>
    </b-form>
  </validation-observer>
</template>

<script>
import { ValidationObserver } from 'vee-validate'
import InputText from './inputs/InputText'

export default {
  name: 'PlayerForm',

  components: {
    ValidationObserver,
    InputText,
  },

  props: {
    defaultValue: {
      type: Object,
      default: () => ({}),
    },
  },

  data: () => ({
    value: {},
  }),

  created() {
    this.updateValue()
  },

  watch: {
    defaultValue() {
      this.updateValue()
    },
  },

  methods: {
    updateValue() {
      this.value = _.pick(this.defaultValue, ['first_name', 'last_name'])
    },

    onSubmit() {
      this.$emit('submit', Object.assign({}, this.value))
    },

    onCancel() {
      this.$emit('cancel')
    },
  },
}
</script>
