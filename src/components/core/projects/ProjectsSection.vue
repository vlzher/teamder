<template>
  <div class="cont1 flex flex-col w-full h-3/4">
    <div
      class="flex w-full h-20 px-14 items-center bg-white border-gray border-b-2"
    >
      <span class="items-center mr-12 text-2xl text-black-700 font-bold"
        >Projects</span
      >
      <SearchBar @search="(val) => $emit('search', val)" />
    </div>
    <ProjectSection
      v-for="project in projects"
      :name="project.name"
      :key="project.id"
      :shortDescription="project.shortDescription"
      :teamSize="project.teamSize"
      :occupiedPlaces="project.occupiedPlaces"
      :openedRoles="project.openedRoles"
    />
  </div>
</template>
<script setup lang="ts">
import type { Project } from "@/types/api";
import ProjectSection from "@/components/core/projects/ProjectSection.vue";
import SearchBar from "@/components/core/search/SearchBar.vue";
import type { PropType } from "vue";
defineProps({
  projects: {
    type: Array as PropType<Project[]>,
    required: true,
  },
});
</script>
<style scoped>
.cont1 {
  box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.15);
}
</style>
