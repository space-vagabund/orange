<template>
  <div class="loginPage">
    <LoginBanner />
    <div class="loginBlock">
      <LoginForm />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { LoginForm, LoginBanner } from "./widgets";

export default defineComponent({
  name: "login-page",
  components: {
    LoginBanner,
    LoginForm,
  },
  data() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
.loginPage {
  min-height: 100vh;
  display: flex;
  align-items: center;
  .loginBlock {
    flex-basis: 40%;
    padding-left: 16px;
    padding-right: 16px;
  }
}
</style>
