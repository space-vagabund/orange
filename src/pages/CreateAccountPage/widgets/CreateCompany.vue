<template>
  <v-card width="346" class="mx-auto createCompany widget">
    <WidgetTitle value="Create Company" />
    <TextField
      :value="companyName"
      :onChange="onCompanyNameChange"
      label="Company name"
      :errorMessage="isError && !companyName.length ? 'Required' : ''"
    />
    <PasswordInput
      :value="companyPassword"
      :onChange="onPasswordChange"
      :errorMessage="isError && !companyPassword.length ? 'Required' : ''"
    />
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
  props: {
    isError: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    onCompanyNameChange(value: string) {
      this.$emit("changeErrorState");
      this.$store.commit("createAccountPage/setFormValue", {
        key: "companyName",
        value,
      });
    },
    onPasswordChange(value: string) {
      this.$emit("changeErrorState");
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
