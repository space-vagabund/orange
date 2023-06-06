<template>
  <div class="container">
    <v-card width="346" class="mx-auto signInFormWrapper widget">
      <v-form @submit.prevent="onSubmit">
        <WidgetTitle value="Sign in" />
        <TextField
          :value="username"
          :onChange="onUsernameChange"
          :keyValue="'username'"
          :errorMessage="isError && !username.length ? 'Required' : ''"
          label="Username"
        />
        <PasswordInput
          :keyValue="'password'"
          :value="password"
          :onChange="onPasswordChange"
          :errorMessage="isError && !password.length ? 'Required' : ''"
        />
        <RouterLink :to="pathToForgotPasswordPage" class="toForgotPasswordPage">
          Forgot password
        </RouterLink>
        <div class="wrapperControls">
          <CustomLoader v-if="isLoading" />
          <ButtonComponent
            v-else
            title="Sign in"
            size="large"
            :onClick="onSubmit"
          />
          <div class="rememberCheckbox">
            Remember me
            <CheckBox />
          </div>
        </div>
        <ErrorMessage v-if="isRequestError" />
      </v-form>
    </v-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
  CheckBox,
  PasswordInput,
  WidgetTitle,
  ButtonComponent,
  TextField,
  CustomLoader,
  ErrorMessage,
} from "@/ui";
import { APP_ROUTERS } from "@/constants";
import { mapGetters } from "vuex";

export default defineComponent({
  name: "login-form",
  components: {
    CheckBox,
    PasswordInput,
    WidgetTitle,
    ButtonComponent,
    TextField,
    CustomLoader,
    ErrorMessage,
  },
  data() {
    return {
      pathToForgotPasswordPage: APP_ROUTERS.FORGOT_PASSWORD,
      isLoading: false,
      isError: false,
      isRequestError: false,
    };
  },
  methods: {
    onSubmit() {
      console.log(this.username, this.password);
      if (!this.username || !this.password) {
        this.$data.isError = true;

        return;
      }

      this.$data.isLoading = true;
      this.$store.dispatch("signInPage/submitUserData").then((response) => {
        setTimeout(() => {
          if (response.data.data.length === 1) {
            this.$store.commit("signInPage/clearFormFields");
            this.$router.push(APP_ROUTERS.DASHBOARD);
          } else {
            console.log("LOGIN ERROR", response.data.error);
            this.$data.isRequestError = true;
          }
          this.$data.isLoading = false;
        }, 1000);
      });
    },
    clearErrorsState() {
      this.$data.isError = false;
      this.$data.isRequestError = false;
    },
    onUsernameChange(value: string) {
      this.clearErrorsState();
      this.$store.commit("signInPage/setFormValue", { key: "username", value });
    },
    onPasswordChange(value: string) {
      this.clearErrorsState();
      this.$store.commit("signInPage/setFormValue", { key: "password", value });
    },
  },
  computed: {
    ...mapGetters({
      username: "signInPage/getUsername",
      password: "signInPage/getPassword",
    }),
  },
});
</script>

<style lang="scss">
.container {
  .signInFormWrapper {
    padding: 32px 16px;
  }
}
.signInFormWrapper {
  padding: 20px;
  h1 {
    margin-bottom: 16px;
  }
  .toForgotPasswordPage {
    color: #325279;
    margin-top: 16px;
    text-decoration: none;
    display: inline-block;
  }
  .wrapperControls {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    margin-top: 32px;
    .rememberCheckbox {
      display: flex;
      align-items: center;
      gap: 10px;
    }
  }
}
</style>
