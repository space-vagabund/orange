<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { APP_ROUTERS, LOCAL_STORAGE_KEYS } from './constants';

export default defineComponent({
  name: 'App',
  mounted() {
    const userSessionIsActive = localStorage.getItem(LOCAL_STORAGE_KEYS.USER_SESSION_KEY);

    if(!userSessionIsActive){
      this.$router.push(APP_ROUTERS.LOGIN)
    } else {
      this.$router.push(APP_ROUTERS.DASHBOARD)
    }

  }
});
</script>
