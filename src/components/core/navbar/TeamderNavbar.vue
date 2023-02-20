<template>
  <nav
    class="flex items-center w-full h-20 bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700"
  >
    <div
      class="h-full w-full px-16 flex flex-wrap items-center justify-between"
    >
      <a href="#" class="flex items-center">
        <img
          src="../../../assets/logo.png"
          class="h-6 mr-3 sm:h-10"
          alt="Teamder Logo"
        />
        <span
          class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
          >Teamder</span
        >
      </a>
      <MenuDropDown />
    </div>
  </nav>
</template>
<script setup lang="ts">
import MenuDropDown from "@/components/core/navbar/MenuDropDown.vue";
</script>
