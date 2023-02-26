<template>
  <nav
    class="flex items-center w-full h-16 bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700"
  >
    <div
      class="h-full w-full px-16 flex flex-wrap items-center justify-between"
    >
      <div class="flex">
        <a href="#" class="flex items-center">
          <img
            src="../../../assets/logo.png"
            class="h-6 mr-3 sm:h-10"
            alt="Teamder Logo"
          />
          <div
            class="self-center w-1/4 text-2xl font-semibold whitespace-nowrap dark:text-white"
          >
            Teamder
          </div>
        </a>
        <ul
          class="flex flex-col p-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
        >
          <li class="ml-4">
            <a
              href="#"
              class="block text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              aria-current="page"
              >Explore</a
            >
          </li>
          <li>
            <a
              href="#"
              class="block text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >Dashboard</a
            >
          </li>
        </ul>
      </div>
      <MenuDropDown />
    </div>
  </nav>
</template>
<script setup lang="ts">
import MenuDropDown from "@/components/core/navbar/MenuDropDown.vue";
</script>
