<template>
  <nav aria-label="Page navigation example" class="mt-5">
    <ul class="inline-flex -space-x-px">
      <li
        v-for="paginationPage in paginationPages"
        @click="changePage(paginationPage)"
      >
        <router-link :to="{ params: { page: page } }">
          <a
            href="#"
            :class="[
              paginationPage === 'Next'
                ? 'rounded-r-lg'
                : paginationPage === 'Previous'
                ? 'rounded-l-lg'
                : '',
            ]"
            class="px-3 py-2 ml-0 leading-tight border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >{{ paginationPage }}</a
          >
        </router-link>
      </li>
    </ul>
  </nav>
</template>
<script setup>
import { computed, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
const route = useRoute();
const router = useRouter();
const page = ref(+route.query.page || 0);
const paginationPages = computed(() => {
  return ["Previous", page.value + 1, page.value + 2, page.value + 3, "Next"];
});
function changePage(paginationPage) {
  if (paginationPage === "Previous") {
    if (page.value) {
      page.value--;
    }
  } else if (paginationPage === "Next") {
    page.value++;
  } else {
    page.value = paginationPage - 1;
  }
}
function pushWithQuery(query) {
  router.push({
    query: {
      ...route.query,
      ...query,
    },
  });
}

watch(page, (currentValue) => {
  pushWithQuery({ page: currentValue });
});
</script>
