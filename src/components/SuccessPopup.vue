<template>
  <v-dialog
    :modelValue="isRequestSuccess"
    transition="dialog-bottom-transition"
    width="auto"
  >
    <div class="popupBlock">
      <div class="popupBlock_message">Account created!</div>
      <img
        class="popupBlock_img"
        src="../assets/undraw_powerful_re_frhr.svg"
        alt=""
      />
      <ButtonComponent
        :onClick="goToSignInPage"
        :title="'Return'"
        size="large"
      />
    </div>
  </v-dialog>
</template>

<script lang="ts">
import { APP_ROUTERS } from "@/constants";
import { ButtonComponent } from "@/ui";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    ButtonComponent,
  },
  props: {
    isRequestSuccess: {
      type: Boolean,
      required: true,
    },
    clearIsRequestSuccessState: {
      type: Function,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
  name: "success-popup",
  methods: {
    goToSignInPage() {
      this.clearIsRequestSuccessState();
      this.$router.push(APP_ROUTERS.SIGN_IN);
    },
    clearIsSuccess() {
      this.$emit("clearIsSuccess");
    },
  },
});
</script>

<style scoped lang="scss"></style>
