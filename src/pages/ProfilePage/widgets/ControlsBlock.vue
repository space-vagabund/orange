<template>
  <div
    class="widgetContainer animate__animated animate__bounceInLeft controlsBlock"
  >
    <img
      class="userAvatar"
      src="../../../assets/account-avatar-profile-user-9.svg"
      alt="user avatar"
    />
    <div class="controls">
      <ButtonComponent title="Edit" :onClick="onEdit" size="large" />
      <ButtonComponent title="Delete" :onClick="onDelete" size="large" />
      <ButtonComponent title="Log out" :onClick="onLogOut" size="large" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";
import { ButtonComponent } from "@/ui";
import ProfileApi from "../api";
import { APP_ROUTERS } from "@/constants";

const router = useRouter();

const props = defineProps({
  userId: {
    type: String,
    required: true,
  },
  companyId: {
    type: String,
    required: true,
  },
});

const Api = new ProfileApi(props.companyId, props.userId);

const onEdit = () => {
  console.log("onEdit");
};

const onDelete = () => {
  console.log("onDelete");
};

const onLogOut = () => {
  Api.logOut().then(() => router.push(APP_ROUTERS.SIGN_IN));
};
</script>

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
  .controls {
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding-top: 44px;
  }
}
</style>
