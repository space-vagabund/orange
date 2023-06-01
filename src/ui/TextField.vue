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
import type { PropType } from "vue";

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
    keyValue: {
      type: String as PropType<
        "username" | "password" | "companyName" | "companyPassword"
      >,
      required: true,
    },
  },
  data() {
    return {};
  },
  methods: {
    handleChange({ data }: any) {
      if (this.onChange) {
        this.onChange({ value: data, key: this.keyValue });
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
