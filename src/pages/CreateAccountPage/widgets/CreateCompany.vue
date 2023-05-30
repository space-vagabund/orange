<template>
  <v-card width="346" class="mx-auto createCompany widget">
    <WidgetTitle value="Create Company" />
    <TextField label="Company name" />
    <PasswordInput />
  </v-card>
</template>

<script lang="ts">
import { PasswordInput, WidgetTitle, TextField } from "@/ui";
import { defineComponent } from "vue";

export default defineComponent({
  name: "create-company-form",
  components: {
    PasswordInput,
    WidgetTitle,
    TextField,
  },
});
</script>

<style lang="scss" scoped></style>
