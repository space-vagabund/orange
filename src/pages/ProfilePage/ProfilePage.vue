<template>
  <div>
    <PageHeader />
    <div class="pageContentContainer profilePage">
      <ControlsBlock />
      <UserInformation />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { PageHeader } from "@/components";
import { UserInformation, ControlsBlock } from "./widgets";
</script>

<style lang="scss" scoped>
.profilePage {
  padding-top: 100px;
  display: flex;
  gap: 20px;
  margin: 0 auto;
}
</style>
