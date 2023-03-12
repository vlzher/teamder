<template>
  <div
    class="group p-10 pr-10 mt-3 flex justify-center items-center w-full h-3/5 border-gray border-b-2"
  >
    <div class="w-1/3 h-full flex flex-col">
      <div class="w-full h-1/4 text-bold text-black-800 text-2xl">
        {{ name }}
      </div>
      <div class="w-full h-3/4 items-center pt-5">
        <div
          class="w-fit h-fit px-4 py-1 text-xs rounded-full flex items-center justify-center bg-[#EDEDED] text-[#000000]-500"
        >
          {{ occupiedPlaces }}/{{ teamSize }}
        </div>
      </div>
    </div>
    <div class="pl-6 w-3/4 h-full flex flex-col">
      <div class="w-full h-10 flex flex-row items-center">
        <div class="w-fit h-fit text-black text-xs text-opacity-70">
          {{ shortDescription }}
        </div>
      </div>
      <div class="mt-2 w-60 h-15 flex space-x-4">
        <div
          v-for="role in openedRoles"
          class="whitespace-nowrap w-fit h-fit px-2 py-1 text-xs rounded-md justify-center items-center bg-[#E1EFFE] text-[#1E429F]"
        >
          {{ role }}
        </div>
      </div>
    </div>
    <div class="w-1/3 h-full flex items-center mb-2">
      <div class="w-full h-full relative flex items-center justify-end">
        <div
          class="w-10 h-10 bg-white rounded-full absolute border flex items-center justify-center"
          v-for="(avatarURL, id) in avatarURLs"
          :style="{
            marginRight: id * 30 + 40 + 'px',

            zIndex: -id,
          }"
        >
          <div
            class="w-full h-full rounded-full bg-cover bg-center"
            :style="{
              backgroundImage: avatarURL
                ? `url(${avatarURL})`
                : `url('src/assets/avatar.png')`,
            }"
          ></div>
        </div>
        <div
          class="w-5 h-8 opacity-10 group-hover:opacity-90 absolute ease-linear duration-100 bg-cover bg-[url('../assets/nextVector.svg')] cursor-pointer"
        />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import type { PropType } from "vue";

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  shortDescription: {
    type: String,
    required: true,
  },
  teamSize: {
    type: Number,
    required: true,
  },
  occupiedPlaces: {
    type: Number,
    required: true,
  },
  openedRoles: {
    required: true,
    type: Array as PropType<string[]>,
  },
  avatarURLs: {
    required: true,
    type: Array as PropType<string[]>,
  },
});
console.log(props.avatarURLs);
</script>
