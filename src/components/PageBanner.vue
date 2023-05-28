<template>
  <transition name="bannerShow">
    <div class="bannerBlock" v-if="startAnimation">
      <div class="wrapperImage">
        <img :src="getImageScr" alt="banner" />
      </div>
      <div class="blocks">
        <div class="block block1" />
        <div class="block block2" />
        <div class="block block3" />
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import type { PropType } from "vue";

export default defineComponent({
  name: "LoginBanner",
  props: {
    page: {
      required: true,
      type: String as PropType<"login" | "createAccount">,
    },
  },
  data() {
    return {
      startAnimation: false,
    };
  },
  computed: {
    getImageScr() {
      return require(this.page === "login"
        ? "../assets/banner_login.jpg"
        : "../assets/create_account_banner.jpg");
    },
  },
  mounted() {
    this.startAnimation = true;
  },
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
      animation: block1 3s linear infinite;
    }
    .block2 {
      position: absolute;
      right: 70px;
      top: 37.5%;
      background-color: transparent;
      animation: block2 3s linear infinite;
    }
    .block3 {
      position: absolute;
      right: -130px;
      top: 64.5%;
      background-color: transparent;
      animation: block3 3s linear infinite;
    }
  }

  @keyframes block1 {
    0% {
      top: 8%;
    }
    50% {
      top: 10%;
    }
    100% {
      top: 8%;
    }
  }

  @keyframes block2 {
    0% {
      right: 70px;
    }
    50% {
      right: 100px;
    }
    100% {
      right: 70px;
    }
  }

  @keyframes block3 {
    0% {
      top: 66%;
    }
    50% {
      top: 63%;
    }
    100% {
      top: 66%;
    }
  }
}

.bannerShow-enter-active,
.bannerShow-leave-active {
  transition: opacity 3s ease;
}

.bannerShow-enter-from,
.bannerShow-leave-to {
  opacity: 0;
}
</style>
