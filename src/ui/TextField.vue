<template>
  <v-text-field
    :label="label"
    :value="value"
    :messages="''"
    @input="handleChange"
    class="textField"
    variant="underlined"
    required
    clearable
    :error-messages="errorMessage"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "text-field",
  props: {
    label: {
      type: String,
      required: true,
    },
    className: {
      type: String,
      required: false,
    },
    value: {
      type: String,
      required: false,
    },
    onChange: {
      type: Function,
      required: false,
    },
    errorMessage: {
      type: String,
      required: false,
    },
  },
  data() {
    return {};
  },
  methods: {
    handleChange(event: any) {
      console.log("event", event.target.value);
      if (this.onChange) {
        this.onChange(event.target.value);
      }
    },
  },
});
</script>

<style lang="scss" scoped>
.textField {
  width: 100%;
}
</style>
