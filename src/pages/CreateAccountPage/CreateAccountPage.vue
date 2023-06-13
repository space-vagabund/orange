<template>
  <div class="createAccountPage">
    <PageBanner :page="'createAccount'" />
    <div class="contentBlock">
      <v-form>
        <v-card max-width="444" class="formCard widgetContainer">
          <CreateCompany
            @clearErrorState="clearErrorState"
            :isError="isError"
          />
          <div class="createUserWrapper">
            <CreateUser
              @clearErrorState="clearErrorState"
              :isError="isError"
              :title="'Company admin'"
            />
          </div>
          <CustomLoader v-if="isLoading" />
          <ButtonComponent
            v-else
            :onClick="onClick"
            size="default"
            title="Create company"
          />
          <ErrorMessage v-if="isRequestError" />
        </v-card>
      </v-form>
    </div>
  </div>
  <SuccessPopup
    :clearIsRequestSuccessState="clearIsRequestSuccessState"
    :isRequestSuccess="isRequestSuccess"
    :title="'Account created!'"
  />
  <ErrorPopup
    :clearIsRequestErrorState="clearIsRequestErrorState"
    :isRequestError="isRequestError"
  />
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { CreateCompany, CreateUser } from "./widgets";
import { ErrorPopup, PageBanner, SuccessPopup } from "@/components";
import { ButtonComponent, CustomLoader, ErrorMessage } from "@/ui";
import { mapGetters } from "vuex";

export default defineComponent({
  name: "create-account-page",
  components: {
    PageBanner,
    CreateCompany,
    CreateUser,
    ButtonComponent,
    CustomLoader,
    ErrorMessage,
    SuccessPopup,
    ErrorPopup,
  },
  props: {
    page: String as PropType<"login" | "createAccount">,
  },
  data() {
    return {
      isLoading: false,
      isError: false,
      isRequestError: false,
      isRequestSuccess: false,
    };
  },
  computed: {
    ...mapGetters({
      companyName: "createAccountPage/getCompanyName",
      companyPassword: "createAccountPage/getCompanyPassword",
      username: "createAccountPage/getUsername",
      userPassword: "createAccountPage/getUserPassword",
    }),
  },
  methods: {
    clearErrorState() {
      this.$data.isError = false;
      this.$data.isRequestError = false;
    },
    onClick() {
      if (
        !this.companyName ||
        !this.companyPassword ||
        !this.username ||
        !this.userPassword
      ) {
        this.$data.isError = true;
        return;
      }

      this.$data.isLoading = true;
      this.$store
        .dispatch("createAccountPage/submitUserData")
        .then((response) => {
          setTimeout(() => {
            if (response.error) {
              console.log("CREATE ACCOUNT ERROR", response);
              this.$data.isRequestError = true;
            } else {
              console.log("trigger");
              this.$store.commit("createAccountPage/clearFormFields");
              this.$data.isRequestSuccess = true;
            }
            this.$data.isLoading = false;
          }, 1000);
        });
    },
    clearIsRequestSuccessState() {
      this.$data.isRequestSuccess = false;
    },
    clearIsRequestErrorState() {
      this.$data.isRequestError = false;
    },
  },
});
</script>

<style lang="scss" scoped>
.createAccountPage {
  min-height: 100vh;
  display: flex;
  align-items: center;
  .contentBlock {
    flex-basis: 40%;
    padding-left: 16px;
    padding-right: 16px;
    display: flex;
    justify-content: center;
    position: relative;
  }
  .createUserWrapper {
    margin-top: 32px;
    margin-bottom: 24px;
  }
  .formCard {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
