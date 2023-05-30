<template>
  <transition name="bannerShow">
    <div class="bannerBlock" v-if="startAnimation">
      <div class="wrapperImage">
        <div
          class="goBackWrapper"
          @click="goToSignInPage"
          v-if="page !== 'login'"
        >
          <BackBtn />
        </div>
        <h1>Orange</h1>
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
import { BackBtn } from "@/ui";

export default defineComponent({
  name: "LoginBanner",
  components: {
    BackBtn,
  },
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
  methods: {
    goToSignInPage() {
      this.$router.back();
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
  background: rgb(119, 44, 4);
  background: linear-gradient(
    90deg,
    rgba(119, 44, 4, 1) 0%,
    rgba(246, 119, 0, 1) 31%,
    rgba(248, 245, 243, 1) 100%
  );
  .goBackWrapper {
    position: absolute;
    top: 5%;
    left: 5%;
    z-index: 9999;
    cursor: pointer;
  }
  h1 {
    position: absolute;
    z-index: 2;
    top: 50%;
    font-size: 120px;
    left: 50%;
    transform: translate(-50%, -50%);
    cursor: default;
  }
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
      animation: block1 9s linear infinite;
    }
    .block2 {
      position: absolute;
      right: 70px;
      top: 37.5%;
      background-color: transparent;
      animation: block2 7.5s linear infinite;
    }
    .block3 {
      position: absolute;
      right: -130px;
      top: 60%;
      background-color: transparent;
      animation: block3 5s linear infinite;
    }
  }

  @keyframes block1 {
    0% {
      top: 5%;
      opacity: 0;
    }
    50% {
      top: 15%;
      transform: scale(0.5);
      opacity: 1;
    }
    100% {
      top: 5%;
      opacity: 0;
    }
  }

  @keyframes block2 {
    0% {
      right: 70px;
      transform: scale(0.5);
      opacity: 0;
    }
    50% {
      right: 150px;
      transform: scale(1.2);
      opacity: 1;
    }
    100% {
      right: 70px;
      transform: scale(0.5);
      opacity: 0;
    }
  }

  @keyframes block3 {
    0% {
      top: 55%;
      transform: scale(1);
      opacity: 1;
    }
    50% {
      top: 45%;
      transform: scale(0.5);
      opacity: 0;
    }
    100% {
      top: 55%;
      transform: scale(1);
      opacity: 1;
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
