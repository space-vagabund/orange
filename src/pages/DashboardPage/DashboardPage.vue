<template>
  <div class="dashboardPage">
    <PageHeader />
  </div>
</template>

<script lang="ts">
import { PageHeader } from "@/components";
import { defineComponent } from "vue";

export default defineComponent({
  name: "dashboard-page",
  components: {
    PageHeader,
  },
  setup() {},
});
</script>

<style lang="scss" scoped>
.dashboardPage {
}
</style>
