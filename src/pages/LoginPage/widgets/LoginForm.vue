<template>
  <v-sheet width="346" class="mx-auto loginForm">
    <v-form @submit.prevent="onSubmit">
      <h1>Log in</h1>
      <v-text-field label="Username" required clearable />
      <v-text-field label="password" required clearable />
      <div class="wrapperControls">
        <v-btn size="large" type="submit">Login</v-btn>
        <div class="rememberCheckbox">
          Remember me
          <CheckBox />
        </div>
      </div>
    </v-form>
  </v-sheet>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { CheckBox } from "@/ui";

export default defineComponent({
  name: "login-form",
  components: {
    CheckBox,
  },
  data() {
    return {
      needSaveData: false,
    };
  },
  methods: {
    onSubmit() {
      console.log("submit");
    },
  },
});
</script>

<style lang="scss">
.loginForm {
  h1 {
    font-size: 65px;
    display: inline-block;
    margin-bottom: 24px;
    color: #325279;
  }
  .wrapperControls {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    .rememberCheckbox {
      display: flex;
      align-items: center;
      gap: 10px;
    }
  }
}
</style>
