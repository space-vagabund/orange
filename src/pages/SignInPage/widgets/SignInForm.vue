<template>
  <div class="container">
    <v-card width="346" class="mx-auto signInFormWrapper">
      <v-form @submit.prevent="onSubmit">
        <h1>Sign in</h1>
        <v-text-field
          label="Username"
          variant="underlined"
          required
          clearable
        />
        <PasswordInput />
        <div class="wrapperControls">
          <v-btn size="large" type="submit">Sign In</v-btn>
          <div class="rememberCheckbox">
            Remember me
            <CheckBox />
          </div>
        </div>
      </v-form>
    </v-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { CheckBox, PasswordInput } from "@/ui";

export default defineComponent({
  name: "login-form",
  components: {
    CheckBox,
    PasswordInput,
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
.container {
  .signInFormWrapper {
    padding: 16px;
  }
}
.signInFormWrapper {
  padding: 20px h1 {
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
