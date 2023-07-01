<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { APP_ROUTERS, LOCAL_STORAGE_KEYS } from "../constants";

export default defineComponent({
  name: "App",
  mounted() {
    const userSessionIsActive = localStorage.getItem(
      LOCAL_STORAGE_KEYS.USER_SESSION_KEY
    );

    if (!userSessionIsActive) {
      this.$router.push(APP_ROUTERS.SIGN_IN);
    } else {
      this.$router.push(APP_ROUTERS.DASHBOARD);
    }
  },
});
</script>

<style lang="scss">
@import "./index.scss";
@import "animate.css";
@import url("https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600;700&family=Titillium+Web:wght@200;300;400;700&display=swap");
* {
  font-family: "Raleway", sans-serif;
}
h1,
h2,
h3 {
  font-family: "Kaushan Script", "Raleway", sans-serif;
  color: #1a1109;
}
.pageContentContainer {
  max-width: 1400px;
  width: 100%;
  padding: 0 16px;
}

.widgetContainer {
  padding: 32px 16px !important;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px,
    rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px,
    rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px !important;
  background: #fcda96 !important;
}
.widget {
  padding: 16px !important;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em,
    rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
    rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset !important;
  background: #fff3e0 !important;
}

.popupBlock {
  background: #fff;
  padding: 20px 20px 46px;
  width: 300px;
  height: 300px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  &_title {
    font-size: 24px;
    flex-grow: 1;
  }
  &_message {
    display: inline-block;
    font-size: 16px;
    margin: 14px 0 26px;
  }
  &_img {
    width: 150px;
    margin-bottom: 20px;
  }
}
</style>
