import { extend, setInteractionMode } from 'vee-validate'
import { required } from 'vee-validate/dist/rules'

setInteractionMode('eager')

extend('required', {
  ...required,
  message: 'This field is required',
})
