<template>
  <transition name="bannerShow">
    <div class="bannerBlock" v-if="startAnimation">
      <div class="content">
        <div
          class="goBackWrapper"
          @click="goToSignInPage"
          v-if="page !== 'login'"
        >
          <BackBtn />
        </div>
        <div class="wrapper animate__animated animate__fadeIn">
          <h1>Orange</h1>
          <WelcomeIco v-if="page === 'createAccount'" />
          <BoardIco v-else />
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import type { PropType } from "vue";
import { BackBtn, WelcomeIco, BoardIco } from "@/ui";

export default defineComponent({
  name: "LoginBanner",
  components: {
    BackBtn,
    WelcomeIco,
    BoardIco,
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
  display: flex;
  justify-content: center;
  flex-basis: 60%;
  height: 100vh;
  position: relative;
  background-image: url(../assets/dddepth-139.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  h1 {
    font-size: 120px;
    cursor: default;
  }
  .content {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .goBackWrapper {
      position: absolute;
      top: 5%;
      left: 5%;
      z-index: 99;
      cursor: pointer;
    }
    .wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 20px;
    }
  }
  .bannerImg {
    width: 300px;
  }
}
</style>
