<template>
  <div>
    <PageHeader />
    <div class="pageContentContainer profilePage">
      <ControlsBlock />
      <AccountDetails :profileData="userData" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useStore } from "vuex";
import { PageHeader } from "@/components";
import { AccountDetails, ControlsBlock } from "./widgets";
import { RootStateType } from "@/app/store";

const { profilePage: { userData } } = useStore().state as RootStateType;

</script>

<style lang="scss" scoped>
.profilePage {
  padding-top: 80px;
  display: flex;
  gap: 60px;
  margin: 0 auto;
}
</style>
