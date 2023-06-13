<template>
  <div class="back-btn animate__animated animate__bounceInLeft">
    <span class="material-icons-outlined">arrow_back_ios</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "back-btn",
});
</script>

<style lang="scss" scoped>
.back-btn {
  width: 50px;
  height: 50px;
  border-radius: 54% 46% 70% 30% / 70% 71% 29% 30%;
  background: #fff;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
