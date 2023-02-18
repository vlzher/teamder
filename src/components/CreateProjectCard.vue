<template>
  <TheCard class="w-full flex ml-auto flex-col" style="max-width: 100%">
    <div class="font-semibold">Create a new project</div>
    <p class="font-normal">
      Here are the biggest enterprise technology acquisitions of 2021 so far, in
      reverse chronological order.
    </p>
    <Button class="mt-4">Create new project</Button>
  </TheCard>
</template>
<script setup lang="ts">
import { Button, TheCard } from "flowbite-vue";
</script>
<style scoped lang="scss">
@use "../styles/styles" as *;
</style>
