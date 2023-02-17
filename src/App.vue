<template>
  <TeamderNavbar />
  <RouterView />
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
import TeamderNavbar from "@/components/core/navbar/TeamderNavbar.vue";
</script>

<style lang="scss">
@import "input.css";
.centered {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
