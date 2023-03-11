<template>
  <div class="container !w-3/4">
    <CreateProjectCard class="w-full" />
    <Projects :projects="projects" />
    <Pagination
      :page="page"
      :first="isFirstPage"
      :last="isLastPage"
      @pageChanged="(page1) => pageChanged(page1)"
    />
  </div>
</template>
<script setup lang="ts">
import CreateProjectCard from "@/components/CreateProjectCard.vue";
import Projects from "@/components/core/projects/ProjectsSection.vue";
import Pagination from "@/components/core/pagination/Pagination.vue";
import { onMounted, ref, watch } from "vue";
import { getProjects } from "@/api/api";
import { useRoute, useRouter } from "vue-router";
import type {Project, ProjectResponse} from "@/types/api";
const route = useRoute();
const router = useRouter();
const page = ref(1);
const isLastPage = ref(false);
const isFirstPage = ref(false);
const projects = ref<Project[]>([]);
function pageChanged(page1: string) {
  page.value = +page1;
  pushWithQuery({ page: page1 });
}
function setUpVariables() {
  getProjects(page.value - 1).then((res) => {
    projects.value = res.content;
    isLastPage.value = res.last;
    isFirstPage.value = res.first;
  });
}
onMounted(() => {
  if (page.value < 1 || !page.value) {
    page.value = 1;
    pushWithQuery({ page: 1 });
  }
});
watch(page, () => {
  setUpVariables();
});
function pushWithQuery(query: Record<string, string | number>) {
  router.push({
    query: {
      ...route.query,
      ...query,
    },
  });
}
</script>
<style scoped lang="scss">
@use "../styles/styles" as *;
</style>
