<template>
  <v-card width="346" class="mx-auto createCompany widget">
    <WidgetTitle value="Create Company" />
    <TextField
      :value="companyName"
      :onChange="onChange"
      :keyValue="'companyName'"
      label="Company name"
    />
    <PasswordInput
      :value="companyPassword"
      :keyValue="'companyPassword'"
      :onChange="onChange"
    />
  </v-card>
</template>

<script lang="ts">
import { PasswordInput, WidgetTitle, TextField } from "@/ui";
import { defineComponent } from "vue";
import { mapGetters } from "vuex";

type onChangePropsType = {
  key: "companyName" | "companyPassword";
  value: string;
};

export default defineComponent({
  name: "create-company-form",
  components: {
    PasswordInput,
    WidgetTitle,
    TextField,
  },
  methods: {
    onChange(props: onChangePropsType) {
      this.$store.commit("createAccountPage/setFormValue", props);
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
