<template>
  <nav aria-label="Page navigation example" class="mt-5">
    <ul class="inline-flex -space-x-px">
      <li
        :class="[
          first
            ? 'first:opacity-50 first:cursor-not-allowed first:cursor-pointer'
            : last
            ? 'last:opacity-50 last:cursor-not-allowed last:cursor-pointer'
            : '',
          paginationPage === '...' ? 'cursor-default' : 'cursor-pointer',
        ]"
        v-for="paginationPage in paginationPages"
        @click="changePage(paginationPage)"
      >
        <router-link :to="{ params: { page: page } }">
          <div
            class="px-3 py-2 ml-0 leading-tight border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            {{ paginationPage }}
          </div>
        </router-link>
      </li>
    </ul>
  </nav>
</template>
<style scoped>
li:first-child div {
  border-top-left-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
}
li a {
  all: unset;
}
li:last-child div {
  border-top-right-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
}
</style>
<script setup lang="ts">
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
  totalPages: {
    type: Number,
    required: true,
  },
});
const emit = defineEmits(["pageChanged"]);
const paginationPages = computed(() => {
  const paginationPages: (number | string)[] = [];

  if (props.totalPages <= 1) {
    return paginationPages;
  }

  if (props.first) {
    paginationPages.push("Previous");
    paginationPages.push(1);
    if (props.totalPages > 1) {
      paginationPages.push(2);
    }
    if (props.totalPages > 2) {
      paginationPages.push(3);
    }
    if (props.totalPages > 3) {
      paginationPages.push("...");
      paginationPages.push(props.totalPages);
    }
    paginationPages.push("Next");
  } else if (props.last) {
    paginationPages.push("Previous");
    if (props.totalPages > 3) {
      paginationPages.push(1);
      paginationPages.push("...");
    }
    if (props.totalPages > 2) {
      paginationPages.push(props.totalPages - 2);
    }
    if (props.totalPages > 1) {
      paginationPages.push(props.totalPages - 1);
    }
    paginationPages.push(props.totalPages);
    paginationPages.push("Next");
  } else {
    paginationPages.push("Previous");
    if (props.page > 2) {
      paginationPages.push(props.page - 2);
    }
    if (props.page > 1) {
      paginationPages.push(props.page - 1);
    }
    paginationPages.push(props.page);
    if (props.page < props.totalPages - 1) {
      paginationPages.push(props.page + 1);
    }
    if (props.page < props.totalPages - 2) {
      paginationPages.push(props.page + 2);
    }
    paginationPages.push("Next");
  }

  return paginationPages;
});
function changePage(paginationPage: string | number) {
  if (props.page < 1 || paginationPage === "...") return;
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
