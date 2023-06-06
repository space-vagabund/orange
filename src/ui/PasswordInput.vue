<template>
  <div class="wrapperPasswordInput">
    <v-text-field
      :value="value"
      :type="type"
      :error-messages="errorMessage"
      @input="handleChange"
      label="Password"
      variant="underlined"
      required
      clearable
    />
    <span
      class="inputIcon material-icons-outlined"
      :class="errorMessage ? 'error' : ''"
      @click="toggleInputType"
    >
      remove_red_eye
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "password-input",
  props: {
    value: {
      type: String,
      required: false,
    },
    onChange: {
      type: Function,
      required: false,
    },
    errorMessage: {
      type: String,
      required: false,
    },
  },
  data() {
    return {
      type: "password" as "password" | "default",
    };
  },
  methods: {
    toggleInputType() {
      this.type = this.type === "password" ? "default" : "password";
    },
    handleChange({ data }: any) {
      if (this.onChange) {
        this.onChange(data);
      }
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
  .error {
    color: rgb(var(--v-theme-error));
  }
}
</style>
