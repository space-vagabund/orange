<template>
  <v-card width="346" class="mx-auto createUser widget">
    <WidgetTitle :value="title" />
    <TextField
      :value="username"
      :onChange="onChange"
      :keyValue="'username'"
      label="Username"
    />
    <PasswordInput
      :value="userPassword"
      :keyValue="'password'"
      :onChange="onChange"
    />
  </v-card>
</template>

<script lang="ts">
import { PasswordInput, WidgetTitle, TextField } from "@/ui";
import { defineComponent } from "vue";
import { mapGetters } from "vuex";

type onChangePropsType = {
  key: "username" | "password";
  value: string;
};

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
    onChange(props: onChangePropsType) {
      this.$store.commit("createAccountPage/setFormValue", props);
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
