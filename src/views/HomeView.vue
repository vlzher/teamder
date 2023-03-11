<template>
  <div class="container !w-3/4">
    <CreateProjectCard class="w-full" />
    <Projects :projects="projects" @search="(val) => searchQueryChanged(val)" />
    <Pagination
      :page="page"
      :first="isFirstPage"
      :last="isLastPage"
      :totalPages="totalPages"
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
import type { Project } from "@/types/api";
const route = useRoute();
const router = useRouter();
const page = ref(0);
const totalPages = ref(0);
const isLastPage = ref(false);
const isFirstPage = ref(false);
const projects = ref<Project[]>([]);
const searchQuery = ref("");
function searchQueryChanged(searchQuery1: string) {
  pushWithQuery({ searchQuery: searchQuery1, page: 1 });
  page.value = 1;
  searchQuery.value = searchQuery1;
  setUpVariables();
}
function pageChanged(page1: string | number) {
  page.value = +page1;
  pushWithQuery({ page: page1 });
}
async function setUpVariables() {
  await getProjects(page.value - 1, searchQuery.value).then((res) => {
    projects.value = res.content;
    isLastPage.value = res.last;
    isFirstPage.value = res.first;
    totalPages.value = res.totalPages;
  });
}
onMounted(() => {
  if (!route.query.page) {
    pageChanged(1);
  } else if (+route.query.page < 1) {
    pageChanged(1);
  } else {
    page.value = +route.query.page;
  }
});
watch(page, () => {
  setUpVariables().then(() => {
    if (!route.query.page) {
      return;
    }
    if (+route.query.page < 1) {
      pageChanged(1);
    }
    if (+route.query.page > totalPages.value) {
      pageChanged(totalPages.value);
    }
  });
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
