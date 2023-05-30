<template>
  <div class="forgotPasswordPage">
    <PageBanner :page="'createAccount'" />
    <div class="forgotPasswordBlock">
      <ForgotPasswordForm />
    </div>
  </div>
</template>

<script lang="ts">
import { PageBanner } from "@/components";
import { defineComponent, PropType } from "vue";
import { ForgotPasswordForm } from "./widgets";

export default defineComponent({
  name: "forgot-password-page",
  components: {
    PageBanner,
    ForgotPasswordForm,
  },
  props: {
    page: String as PropType<"login" | "createAccount">,
  },
});
</script>

<style lang="scss" scoped>
.forgotPasswordPage {
  min-height: 100vh;
  display: flex;
  align-items: center;
  .forgotPasswordBlock {
    flex-basis: 40%;
    padding-left: 16px;
    padding-right: 16px;
    display: flex;
    justify-content: center;
    position: relative;
  }
  .createUserWrapper {
    margin-top: 32px;
  }
  .formCard {
    padding: 32px 16px;
    max-width: 444px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px,
      rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px,
      rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
    .formSubmitBtn {
      margin-top: 32px;
    }
  }
}
</style>
