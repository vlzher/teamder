<template>
  <div class="container !w-3/4">
    <CreateProjectCard class="w-full" />
    <Input placeholder="Search for projects" class="w-full" />
  </div>
</template>
<script setup lang="ts">
import CreateProjectCard from "@/components/CreateProjectCard.vue";
import { Input } from "flowbite-vue";
</script>
<style scoped lang="scss">
@use "../styles/styles" as *;
</style>
