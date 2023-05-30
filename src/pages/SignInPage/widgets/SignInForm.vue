<template>
  <div class="container">
    <v-card width="346" class="mx-auto signInFormWrapper widgetContainer">
      <v-form @submit.prevent="onSubmit">
        <WidgetTitle value="Sign in" />
        <v-text-field
          label="Username"
          variant="underlined"
          required
          clearable
        />
        <PasswordInput />
        <RouterLink :to="pathToForgotPasswordPage" class="toForgotPasswordPage">
          Forgot password
        </RouterLink>
        <div class="wrapperControls">
          <ButtonComponent title="Sign in" size="large" />
          <div class="rememberCheckbox">
            Remember me
            <CheckBox />
          </div>
        </div>
      </v-form>
    </v-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { CheckBox, PasswordInput, WidgetTitle, ButtonComponent } from "@/ui";
import { APP_ROUTERS } from "@/constants";

export default defineComponent({
  name: "login-form",
  components: {
    CheckBox,
    PasswordInput,
    WidgetTitle,
    ButtonComponent,
  },
  data() {
    return {
      needSaveData: false,
      pathToForgotPasswordPage: APP_ROUTERS.FORGOT_PASSWORD,
    };
  },
  methods: {
    onSubmit() {
      console.log("submit");
    },
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
    margin: 12px 0;
    text-decoration: none;
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
