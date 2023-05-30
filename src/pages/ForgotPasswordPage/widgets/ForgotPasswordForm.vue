<template>
  <v-card
    width="346"
    class="mx-auto forgotPasswordFormContainer widgetContainer"
  >
    <v-form class="formCard">
      <div class="wrapperTitle">
        <WidgetTitle value="Forgot Password" />
      </div>
      <v-text-field
        class="textField"
        label="Username"
        variant="underlined"
        required
        clearable
      />
      <v-text-field
        class="textField"
        label="New password"
        variant="underlined"
        required
        clearable
      />
      <v-text-field
        class="textField"
        label="Repeat new password"
        variant="underlined"
        required
        clearable
      />
      <v-btn class="formSubmitBtn"> Save </v-btn>
    </v-form>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { WidgetTitle } from "@/ui";

export default defineComponent({
  name: "forgot-password-form",
  components: {
    WidgetTitle,
  },
});
</script>

<style lang="scss" scoped>
.formCard {
  padding: 32px 16px;
  width: 346px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px,
    rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px,
    rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
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
