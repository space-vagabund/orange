<template>
  <v-card width="346" class="mx-auto forgotPasswordFormContainer widget">
    <v-form class="formCard">
      <div class="wrapperTitle">
        <WidgetTitle value="Forgot Password" />
      </div>
      <TextField
        label="Username"
        :value="username"
        :onChange="onUsernameInputChange"
      />
      <TextField
        label="New password"
        :value="newPassword"
        :onChange="onNewPasswordInputChange"
      />
      <TextField
        label="Repeat new password"
        :value="confirmPassword"
        :onChange="onConfirmPasswordInputChange"
      />
      <div class="formSubmitBtn">
        <ButtonComponent title="Save" size="large" :onClick="submitForm" />
      </div>
    </v-form>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { WidgetTitle, TextField, ButtonComponent } from "@/ui";
import { mapGetters } from "vuex";

export default defineComponent({
  name: "forgot-password-form",
  components: {
    WidgetTitle,
    TextField,
    ButtonComponent,
  },
  computed: {
    ...mapGetters({
      username: "forgotPasswordPage/getUsername",
      newPassword: "forgotPasswordPage/getNewPassword",
      confirmPassword: "forgotPasswordPage/getConfirmPassword",
    }),
  },
  methods: {
    onUsernameInputChange(value: string) {
      this.$store.commit("forgotPasswordPage/setFormValue", {
        key: "username",
        value,
      });
    },
    onNewPasswordInputChange(value: string) {
      this.$store.commit("forgotPasswordPage/setFormValue", {
        key: "newPassword",
        value,
      });
    },
    onConfirmPasswordInputChange(value: string) {
      this.$store.commit("forgotPasswordPage/setFormValue", {
        key: "confirmPassword",
        value,
      });
    },
    submitForm() {
      this.$store.dispatch("forgotPasswordPage/submitForgotPasswordData");
    },
  },
});
</script>

<style lang="scss" scoped>
.formCard {
  .textField {
    width: 100%;
  }
  .formSubmitBtn {
    margin-top: 32px;
  }
  .wrapperTitle {
    display: flex;
    justify-content: flex-start;
    width: 100%;
  }
}
</style>
