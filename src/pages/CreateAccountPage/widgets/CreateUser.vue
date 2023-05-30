<template>
  <v-card width="346" class="mx-auto createUser widget">
    <WidgetTitle :value="title" />
    <TextField label="Username" />
    <PasswordInput />
  </v-card>
</template>

<script lang="ts">
import { PasswordInput, WidgetTitle, TextField } from "@/ui";
import { defineComponent } from "vue";

export default defineComponent({
  name: "create-user-form",
  components: {
    PasswordInput,
    WidgetTitle,
    TextField,
  },
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

<style lang="scss" scoped></style>
