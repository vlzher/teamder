<template>
  <div class="header">
    <div class="logo unselectable">
      <img src="@/assets/logo.png" alt="logo" />
    </div>
    <Menu />
  </div>
</template>
<script lang="ts">
import Menu from "@/components/MainPage/MenuSection.vue";
export default {
  name: "Header",
  components: {
    Menu,
  },
};
</script>
<style scoped>
.header {
  width: 100vw;
  height: 60px;
  background-color: #ffffff;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px 0 20px;
}
.logo {
  width: 50px;
  height: 50px;
  cursor: pointer;
}
img {
  max-width: 100%;
  max-height: 100%;
  user-select: none;
}
</style>
