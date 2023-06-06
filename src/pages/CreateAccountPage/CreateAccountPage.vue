<template>
  <div class="createAccountPage">
    <PageBanner :page="'createAccount'" />
    <div class="contentBlock">
      <v-form>
        <v-card max-width="444" class="formCard widgetContainer">
          <CreateCompany
            @changeErrorState="changeErrorState"
            :isError="isError"
          />
          <div class="createUserWrapper">
            <CreateUser
              @changeErrorState="changeErrorState"
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
        </v-card>
      </v-form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { CreateCompany, CreateUser } from "./widgets";
import { PageBanner } from "@/components";
import { ButtonComponent, CustomLoader } from "@/ui";
import { APP_ROUTERS } from "@/constants";
import { mapGetters } from "vuex";

export default defineComponent({
  name: "create-account-page",
  components: {
    PageBanner,
    CreateCompany,
    CreateUser,
    ButtonComponent,
    CustomLoader,
  },
  props: {
    page: String as PropType<"login" | "createAccount">,
  },
  data() {
    return {
      isLoading: false,
      isError: false,
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
    changeErrorState() {
      this.$data.isError = false;
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
            } else {
              this.$store.commit("createAccountPage/clearFormFields");
              this.$router.push(APP_ROUTERS.SIGN_IN);
            }
            this.$data.isLoading = false;
          }, 1000);
        });
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
