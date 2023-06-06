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
        :errorMessage="isError && !username.length ? 'Required' : ''"
      />
      <TextField
        label="New password"
        :value="newPassword"
        :onChange="onNewPasswordInputChange"
        :errorMessage="isError && !newPassword.length ? 'Required' : ''"
      />
      <TextField
        label="Repeat new password"
        :value="confirmPassword"
        :onChange="onConfirmPasswordInputChange"
        :errorMessage="isError && !confirmPassword.length ? 'Required' : ''"
      />
      <div class="formSubmitBtn">
        <CustomLoader v-if="isLoading" />
        <ButtonComponent
          v-else
          title="Save"
          size="large"
          :onClick="submitForm"
        />
      </div>
    </v-form>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { WidgetTitle, TextField, ButtonComponent, CustomLoader } from "@/ui";
import { mapGetters } from "vuex";
import { APP_ROUTERS } from "@/constants";

export default defineComponent({
  name: "forgot-password-form",
  components: {
    WidgetTitle,
    TextField,
    ButtonComponent,
    CustomLoader,
  },
  data() {
    return {
      isLoading: false,
      isError: false,
    };
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
      this.clearIsErrorState();
      this.$store.commit("forgotPasswordPage/setFormValue", {
        key: "username",
        value,
      });
    },
    onNewPasswordInputChange(value: string) {
      this.clearIsErrorState();
      this.$store.commit("forgotPasswordPage/setFormValue", {
        key: "newPassword",
        value,
      });
    },
    onConfirmPasswordInputChange(value: string) {
      this.clearIsErrorState();
      this.$store.commit("forgotPasswordPage/setFormValue", {
        key: "confirmPassword",
        value,
      });
    },
    clearIsErrorState() {
      this.$data.isError = false;
    },
    submitForm() {
      if (!this.username || !this.newPassword || !this.confirmPassword) {
        this.$data.isError = true;
        return;
      }
      this.$data.isLoading = true;
      this.$store
        .dispatch("forgotPasswordPage/submitForgotPasswordData")
        .then((response) => {
          setTimeout(() => {
            if (response.status === 200) {
              this.$store.commit("forgotPasswordPage/clearFormFields");
              this.$router.push(APP_ROUTERS.SIGN_IN);
            } else {
              console.log("forgot password error", response);
            }
            this.$data.isLoading = false;
          }, 1000);
        });
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
