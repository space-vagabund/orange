<template>
  <v-btn :size="size" class="submitBtn" rounded="xs">{{ title }}</v-btn>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "button-component",
  props: {
    title: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped></style>
