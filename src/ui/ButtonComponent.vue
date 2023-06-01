<template>
  <v-btn :size="size" @click="onClick" class="submitBtn" rounded="xs">
    {{ title }}
  </v-btn>
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
    onClick: {
      type: Function,
      required: false,
    },
  },
});
</script>

<style lang="scss" scoped></style>
