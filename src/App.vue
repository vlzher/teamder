<template>
  <header-section></header-section>
  <div class="centered">
    <create-section></create-section>
    <search-bar/>
  </div>

</template>


<script lang="ts">

import HeaderSection from "@/components/MainPage/HeaderSection.vue";
import CreateSection from "@/components/MainPage/CreateSection.vue";
import SearchBar from "@/components/MainPage/SearchBar.vue";
export default {
  name:"App",
  components:{
    HeaderSection,
    CreateSection,
    SearchBar,
  }
}
</script>

<style scoped>
  .centered{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>


