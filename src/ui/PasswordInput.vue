<template>
  <div class="wrapperPasswordInput">
    <v-text-field
      :value="value"
      @input="handleChange"
      :type="type"
      label="Password"
      variant="underlined"
      required
      clearable
    />
    <span class="inputIcon material-icons-outlined" @click="toggleInputType">
      remove_red_eye
    </span>
  </div>
</template>

<script lang="ts">
import { PropType, defineComponent } from "vue";

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
    keyValue: {
      type: String as PropType<"password" | "companyPassword">,
      required: true,
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
        this.onChange({ value: data, key: this.keyValue });
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
}
</style>
