<template>
  <TeamderNavbar />
  <RouterView />
  <MegaMenu />
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
import TeamderNavbar from "@/components/core/navbar/TeamderNavbar.vue";
import MegaMenu from "@/components/core/mega-menu/MegaMenu.vue";
</script>

<style lang="scss"></style>
