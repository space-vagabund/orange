<template>
  <v-dialog
    :modelValue="isRequestError"
    transition="dialog-bottom-transition"
    width="auto"
  >
    <div class="popupBlock error">
      <div class="popupBlock_title">Error</div>
      <span class="popupBlock_message">Please, change data and try again </span>
      <img
        class="popupBlock_img"
        src="../assets/undraw_warning_re_eoyh.svg"
        alt=""
      />
      <ButtonComponent :onClick="goToSignInPage" :title="'Ok'" size="large" />
    </div>
  </v-dialog>
</template>

<script lang="ts">
import { ButtonComponent } from "@/ui";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    ButtonComponent,
  },
  props: {
    isRequestError: {
      type: Boolean,
      required: true,
    },
    clearIsRequestErrorState: {
      type: Function,
      required: true,
    },
  },
  name: "error-popup",
  methods: {
    goToSignInPage() {
      this.clearIsRequestErrorState();
    },
    clearIsSuccess() {
      this.$emit("clearIsSuccess");
    },
  },
});
</script>

<style scoped lang="scss">
.popupBlock.error {
  height: 350px;
  .popupBlock_title {
    font-weight: 600;
  }
}
</style>
