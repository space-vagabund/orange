<template>
  <div class="createAccountPage">
    <PageBanner :page="'createAccount'" />
    <div class="createAccountBlock">
      <v-form>
        <v-card max-width="444" class="formCard">
          <CreateCompany />
          <div class="createUserWrapper">
            <CreateUser :title="'Company admin'" />
          </div>
          <v-btn class="formSubmitBtn"> Create Company </v-btn>
        </v-card>
      </v-form>
    </div>
  </div>
</template>

<script lang="ts">
import { PageBanner } from "@/components";
import { defineComponent, PropType } from "vue";
import { CreateCompany, CreateUser } from "./widgets";

export default defineComponent({
  name: "create-account-page",
  components: {
    PageBanner,
    CreateCompany,
    CreateUser,
  },
  props: {
    page: String as PropType<"login" | "createAccount">,
  },
});
</script>

<style lang="scss" scoped>
.createAccountPage {
  min-height: 100vh;
  display: flex;
  align-items: center;
  .createAccountBlock {
    flex-basis: 40%;
    padding-left: 16px;
    padding-right: 16px;
    display: flex;
    justify-content: center;
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
