<template>
  <div class="container !w-3/4">
    <CreateProjectCard class="w-full" />
    <SearchBar />
    <Projects/>
  </div>
</template>
<script setup lang="ts">
import CreateProjectCard from "@/components/CreateProjectCard.vue";
import SearchBar from "@/components/core/search/SearchBar.vue";
import Projects from "@/components/core/projects/Projects.vue";
</script>
<style scoped lang="scss">
@use "../styles/styles" as *;
</style>
