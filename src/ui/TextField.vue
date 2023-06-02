<template>
  <v-text-field
    :label="label"
    :value="value"
    @input="handleChange"
    class="textField"
    variant="underlined"
    required
    clearable
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
  },
  data() {
    return {};
  },
  methods: {
    handleChange({ data }: any) {
      if (this.onChange) {
        this.onChange(data);
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
