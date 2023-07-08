<template>
  <div
    class="widgetContainer animate__animated animate__bounceInRight accountDetails"
  >
    <h1>Account Details</h1>
    <ul class="list">
      <li class="listElement">
        <span class="listElement_title">Username:</span>
        <span class="listElement_body">{{ username }}</span>
      </li>
      <li class="listElement">
        <span class="listElement_title">Password:</span>
        <span class="listElement_body">{{ password }}</span>
      </li>
      <li class="listElement">
        <span class="listElement_title">Role:</span>
        <span class="listElement_body">{{ role }}</span>
      </li>
      <li class="listElement">
        <span class="listElement_title">Company:</span>
        <span class="listElement_body">{{ companyName }}</span>
      </li>
      <li class="listElement">
        <span class="listElement_title">Created:</span>
        <span class="listElement_body">{{ time }}</span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import moment from "moment";
import { PropType } from "vue";
import { IBaseUserData } from "../module/types";

const props = defineProps({
  profileData: {
    type: Object as PropType<IBaseUserData | null>,
    required: true,
  },
});

const { companyName, username, password, role, created } =
  props.profileData as IBaseUserData;

const time = moment(created).format("DD.MM.YYYY");
</script>

<style lang="scss" scoped>
.accountDetails {
  flex-basis: 100%;
  .list {
    margin-top: 20px;
    .listElement {
      width: 50%;
      display: flex;
      justify-content: space-between;
      &_body {
        width: 70%;
      }
    }
  }
}
</style>
