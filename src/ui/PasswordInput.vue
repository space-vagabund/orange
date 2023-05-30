<template>
  <div class="wrapperPasswordInput">
    <v-text-field
      label="Password"
      variant="underlined"
      required
      clearable
      :type="type"
    />
    <span class="inputIcon material-icons-outlined" @click="toggleInputType">
      remove_red_eye
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "password-input",
  data() {
    return {
      type: "password" as "password" | "default",
    };
  },
  methods: {
    toggleInputType() {
      this.type = this.type === "password" ? "default" : "password";
    },
  },
});
</script>

<style lang="scss" scoped>
.wrapperPasswordInput {
  position: relative;
  .inputIcon {
    position: absolute;
    z-index: 99;
    top: 30%;
    right: 0;
    cursor: pointer;
  }
}
</style>
