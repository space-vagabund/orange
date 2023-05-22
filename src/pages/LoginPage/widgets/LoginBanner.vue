<template>
  <div class="bannerBlock">
    <div class="wrapperImage">
      <img src="../../../assets/banner_login.jpg" alt="banner" />
    </div>
    <div class="blocks">
      <div class="block block1" />
      <div class="block block2" />
      <div class="block block3" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "LoginBanner",
});
</script>

<style lang="scss" scoped>
.bannerBlock {
  flex-basis: 60%;
  height: 100vh;
  position: relative;
  .wrapperImage {
    width: 100%;
    height: 100%;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-position: 10% 100%;
      object-fit: cover;
    }
  }
  .blocks {
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
    right: 50%;
    bottom: 0;
    .block {
      width: 200px;
      height: 200px;
      background-color: transparent;
      z-index: 9;
      overflow: hidden;
      &::before {
        content: "";
        position: absolute;
        background: transparent;
        z-index: -1;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        box-shadow: inset 0 0 2000px rgba(241, 241, 241, 0.9);
        filter: blur(10px);
        margin: -20px;
      }
    }
    .block1 {
      position: absolute;
      right: -130px;
      top: 10%;
    }
    .block2 {
      position: absolute;
      right: 70px;
      top: 37.5%;
      background-color: transparent;
    }
    .block3 {
      position: absolute;
      right: -130px;
      top: 64.5%;
      background-color: transparent;
    }
  }
}
</style>
