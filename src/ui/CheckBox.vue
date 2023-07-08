<template>
  <label>
    <input type="checkbox" :checked="props.checked" @click="toggleState" />
    <span class="checkbox" />
  </label>
</template>

<script lang="ts" setup>
import { PropType } from "vue";

const props = defineProps({
  checked: {
    type: Boolean,
    required: true,
  },
  toggleState: {
    type: Function as PropType<any>,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
label {
  display: block;
  width: 25px;
  height: 25px;
  cursor: pointer;
  input {
    position: absolute;
    transform: scale(0);
    &:checked ~ .checkbox {
      transform: rotate(45deg);
      width: 15px;
      margin-left: 10px;
      border-color: #24c78e;
      border-top-color: transparent;
      border-left-color: transparent;
      border-radius: 0;
    }
  }
  .checkbox {
    display: block;
    width: inherit;
    height: inherit;
    border: 3px solid #434343;
    border-radius: 6px;
    transition: all 0.375s;
  }
}
</style>
