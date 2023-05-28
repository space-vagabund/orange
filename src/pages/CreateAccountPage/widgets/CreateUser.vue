<template>
  <v-card width="346" class="mx-auto createUser">
    <h1>{{ title }}</h1>
    <v-text-field label="username" variant="underlined" required clearable />
    <v-text-field
      label="password"
      variant="underlined"
      required
      clearable
      type="password"
    />
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "create-user-form",
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      username: "",
      password: "",
    };
  },
});
</script>

<style lang="scss" scoped>
.createUser {
  padding: 16px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em,
    rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
    rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
}
</style>
