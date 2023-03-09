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
            class="px-3 py-2 ml-0 leading-tight border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >{{ paginationPage }}</a
          >
        </router-link>
      </li>
    </ul>
  </nav>
</template>
<style scoped>
li:first-child a {
  border-top-left-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
}
li:last-child a {
  border-top-right-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
}
</style>
<script setup>
import { computed } from "vue";
const props = defineProps({
  page: {
    type: Number,
    required: true,
  },
  last: {
    type: Boolean,
    required: true,
  },
  first: {
    type: Boolean,
    required: true,
  },
});
const emit = defineEmits(["pageChanged"]);
const paginationPages = computed(() => {
  if (props.last) {
    return ["Previous", props.page - 2, props.page - 1, +props.page];
  }
  if (props.first) {
    return [+props.page, props.page + 1, props.page + 2, "Next"];
  }
  return ["Previous", +props.page - 1, +props.page, +props.page + 1, "Next"];
});
function changePage(paginationPage) {
  if (props.page < 1) return;
  if (paginationPage === "Previous") {
    if (props.page === 1) return;
    emit("pageChanged", +props.page - 1);
  } else if (paginationPage === "Next") {
    emit("pageChanged", +props.page + 1);
  } else {
    emit("pageChanged", +paginationPage);
  }
}
</script>
