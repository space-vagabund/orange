<template>
  <div class="widgetContainer controlsBlock">
    <img
      class="userAvatar"
      src="../../../assets/account-avatar-profile-user-9.svg"
      alt="user avatar"
    />
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.controlsBlock {
  position: relative;
  flex-basis: 40%;
  min-width: 374px;
  .userAvatar {
    width: 120px;
    height: 120px;
    position: absolute;
    left: 50%;
    top: -60px;
    transform: translateX(-50%);
  }
}
</style>
