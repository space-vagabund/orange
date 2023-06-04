<template>
  <v-card width="346" class="mx-auto createCompany widget">
    <WidgetTitle value="Create Company" />
    <TextField
      :value="companyName"
      :onChange="onCompanyNameChange"
      label="Company name"
    />
    <PasswordInput :value="companyPassword" :onChange="onPasswordChange" />
  </v-card>
</template>

<script lang="ts">
import { PasswordInput, WidgetTitle, TextField } from "@/ui";
import { defineComponent } from "vue";
import { mapGetters } from "vuex";

export default defineComponent({
  name: "create-company-form",
  components: {
    PasswordInput,
    WidgetTitle,
    TextField,
  },
  methods: {
    onCompanyNameChange(value: string) {
      this.$store.commit("createAccountPage/setFormValue", {
        key: "companyName",
        value,
      });
    },
    onPasswordChange(value: string) {
      this.$store.commit("createAccountPage/setFormValue", {
        key: "companyPassword",
        value,
      });
    },
  },
  computed: {
    ...mapGetters({
      companyName: "createAccountPage/getCompanyName",
      companyPassword: "createAccountPage/getCompanyPassword",
    }),
  },
});
</script>

<style lang="scss" scoped></style>
