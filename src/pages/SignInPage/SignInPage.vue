<template>
  <div class="signInPage">
    <PageBanner :page="'createAccount'" />
    <div class="signInBlock">
      <SignInForm />
      <div class="bottomLinkContainer">
        <RouterLink :to="linkToCreateAccount" class="link">
          Don't have account? Create Account.
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { SignInForm } from "./widgets";
import { PageBanner } from "@/components";
import { APP_ROUTERS } from "@/constants";

export default defineComponent({
  name: "login-page",
  components: {
    PageBanner,
    SignInForm,
  },
  data() {
    return {
      linkToCreateAccount: APP_ROUTERS.CREATE_ACCOUNT,
      startAnimation: false,
    };
  },
});
</script>

<style lang="scss" scoped>
.signInPage {
  min-height: 100vh;
  display: flex;
  align-items: center;
  .signInBlock {
    flex-basis: 40%;
    padding-left: 16px;
    padding-right: 16px;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }
  .bottomLinkContainer {
    position: absolute;
    bottom: 5%;
    .link {
      text-decoration: none;
      color: #325279;
    }
  }
}
</style>
