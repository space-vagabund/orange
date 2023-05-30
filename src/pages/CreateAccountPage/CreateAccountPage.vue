<template>
  <div class="createAccountPage">
    <PageBanner :page="'createAccount'" />
    <div class="createAccountBlock">
      <v-form>
        <v-card max-width="444" class="formCard widgetContainer">
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
    position: relative;
  }
  .createUserWrapper {
    margin-top: 32px;
  }
  .formCard {
    display: flex;
    flex-direction: column;
    align-items: center;
    .formSubmitBtn {
      margin-top: 32px;
    }
  }
}
</style>
