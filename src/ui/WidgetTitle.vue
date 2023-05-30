<template>
  <span class="widgetTitle">{{ value }}</span>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "widget-title",
  props: {
    value: {
      type: String,
      required: true,
    },
  },
  data() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
.widgetTitle {
  margin-bottom: 16px;
  font-family: "Kaushan Script", "Raleway", sans-serif;
  color: #1a1109;
  font-size: 36px;
  font-weight: bold;
  display: inline-block;
}
</style>
