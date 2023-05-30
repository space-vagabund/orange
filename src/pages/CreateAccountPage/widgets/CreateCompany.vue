<template>
  <v-card width="346" class="mx-auto createCompany">
    <WidgetTitle value="Create Company" />
    <v-text-field
      label="Company name"
      variant="underlined"
      required
      clearable
    />
    <PasswordInput />
  </v-card>
</template>

<script lang="ts">
import { PasswordInput, WidgetTitle } from "@/ui";
import { defineComponent } from "vue";

export default defineComponent({
  name: "create-company-form",
  components: {
    PasswordInput,
    WidgetTitle,
  },
});
</script>

<style lang="scss" scoped>
.createCompany {
  padding: 16px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em,
    rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
    rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
  h1 {
    margin-bottom: 8px;
  }
}
</style>
