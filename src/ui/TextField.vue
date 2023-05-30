<template>
  <v-text-field
    :label="label"
    class="textField"
    variant="underlined"
    required
    clearable
  />
</template>

<script>
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
  },
  data() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
.textField {
  width: 100%;
}
</style>
