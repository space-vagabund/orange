<template>
  <v-card width="346" class="mx-auto createUser widget">
    <WidgetTitle :value="title" />
    <TextField
      :value="username"
      :onChange="onUsernameChange"
      label="Username"
    />
    <PasswordInput :value="userPassword" :onChange="onPasswordChange" />
  </v-card>
</template>

<script lang="ts">
import { PasswordInput, WidgetTitle, TextField } from "@/ui";
import { defineComponent } from "vue";
import { mapGetters } from "vuex";

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
    return {};
  },
  methods: {
    onUsernameChange(value: string) {
      this.$store.commit("createAccountPage/setFormValue", {
        key: "username",
        value,
      });
    },
    onPasswordChange(value: string) {
      this.$store.commit("createAccountPage/setFormValue", {
        key: "password",
        value,
      });
    },
  },
  computed: {
    ...mapGetters({
      username: "createAccountPage/getUsername",
      userPassword: "createAccountPage/getUserPassword",
    }),
  },
});
</script>

<style lang="scss" scoped></style>
