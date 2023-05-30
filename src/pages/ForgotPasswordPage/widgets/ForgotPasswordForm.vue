<template>
  <v-card
    width="346"
    class="mx-auto forgotPasswordFormContainer widgetContainer"
  >
    <v-form class="formCard">
      <div class="wrapperTitle">
        <WidgetTitle value="Forgot Password" />
      </div>
      <TextField label="Username" />
      <TextField label="New password" />
      <TextField label="Repeat new password" />
      <v-btn class="formSubmitBtn"> Save </v-btn>
    </v-form>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { WidgetTitle, TextField } from "@/ui";

export default defineComponent({
  name: "forgot-password-form",
  components: {
    WidgetTitle,
    TextField,
  },
});
</script>

<style lang="scss" scoped>
.formCard {
  .textField {
    width: 100%;
  }
  .formSubmitBtn {
    margin-top: 32px;
  }
  .wrapperTitle {
    display: flex;
    justify-content: flex-start;
    width: 100%;
  }
}
</style>
