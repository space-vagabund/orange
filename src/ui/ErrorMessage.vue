<template>
  <div class="errorMessageText">Invalid data</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "error-message-text-block",
});
</script>

<style lang="scss" scoped>
.errorMessageText {
  color: rgb(var(--v-theme-error));
  font-size: 14px;
  display: block;
  text-align: left;
  text-transform: capitalize;
  padding: 18px 0 0;
}
</style>
