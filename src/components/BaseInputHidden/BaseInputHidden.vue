<script lang="ts">
import { defineComponent } from 'vue'
import { useField } from 'vee-validate'
export default defineComponent({
  props: {
    initialValue: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const { value, errorMessage, handleChange } = (useField as Function)(props.name, 'required', { initialValue: props.initialValue })
    return { value, errorMessage, handleChange }
  },
  render: () => null
})
</script>
