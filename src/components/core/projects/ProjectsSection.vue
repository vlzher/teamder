<template>
  <div class="cont1 flex flex-col w-full h-3/4">
    <div
      class="flex w-full h-20 px-14 items-center bg-white border-gray border-b-2"
    >
      <span class="items-center mr-12 text-2xl text-black-700 font-bold"
        >Projects</span
      >
      <SearchBar />
    </div>
    <ProjectSection v-for="project in projects" :name="project.name" />
  </div>
</template>
<script setup lang="ts">
import ProjectSection from "@/components/core/projects/ProjectSection.vue";
import SearchBar from "@/components/core/search/SearchBar.vue";
import { getProjects } from "@/api/api";
import { watch, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
const route = useRoute();
const router = useRouter();
const page = ref(router.currentRoute.params?.page || 0);
const projects = ref(getProjects(page.value, 4));
watch(router.currentRoute, (currentValue) => {
  page.value = currentValue.params.page;
  projects.value = getProjects(page.value, 4);
});
</script>
<style scoped>
.cont1 {
  box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.15);
}
</style>
