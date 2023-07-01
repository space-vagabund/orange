<template>
  <header class="pageHeader">
    <div class="pageContentContainer">
      <div class="pageHeaderContent">
        <div>
          <AppLogo />
        </div>
        <div>navigation</div>
        <div>
          <RouterLink :to="profileLink">
            <img
              class="userProfileIco"
              src="../assets/user-profile.svg"
              alt="user profile"
            />
          </RouterLink>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
import { AppLogo } from "@/ui";
import { APP_ROUTERS } from "@/constants";

const profileLink = APP_ROUTERS.PROFILE;
</script>

<style lang="scss" scoped>
.pageHeader {
  width: 100%;
  background: #fcda96;
  display: flex;
  justify-content: center;
  padding: 16px 0 18px;
}

.pageHeaderContent {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.userProfileIco {
  width: 44px;
  height: 44px;
}
</style>
