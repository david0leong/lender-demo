<template>
  <validation-observer ref="observer" v-slot="{ invalid, handleSubmit }">
    <b-form @submit.prevent="handleSubmit(onSubmit)">
      <input-text
        rules="required"
        label="Name:"
        name="Name"
        v-model="value.name"
        placeholder="Enter name"
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
  name: 'TeamForm',

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
      this.value = _.pick(this.defaultValue, ['name'])
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
