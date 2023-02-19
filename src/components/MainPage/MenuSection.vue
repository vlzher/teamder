<template>
  <div
    @click="isClicked = !isClicked"
    :class="!isClicked ? 'menu opened' : 'menu closed'"
  >
    <img
      v-if="isClicked"
      class="unselectable"
      src="@/assets/exit.svg"
      alt="close button"
    />
  </div>
  <div :class="isClicked ? 'menu-content-wrap active' : 'menu-content-wrap'">
    <div class="menu-content">
      <div class="menu-bar">PROFILE</div>
      <div class="menu-bar">DASHBOARD</div>
      <div class="menu-bar">LOGOUT</div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "MenuSection",
  data() {
    return {
      isClicked: false,
    };
  },
};
</script>
<style scoped>
.menu {
  cursor: pointer;
  width: 50px;
  height: 50px;
  background: #ffffff;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.menu.opened {
}
.menu.closed {
  background: #5850ec;
}
.menu-content-wrap.active {
  position: absolute;
  top: 80px;
  right: 30px;
  transform: scale(1);
  transition-timing-function: ease;
}
.menu-content-wrap {
  position: absolute;
  top: -60px;
  right: -80px;
  transform: scale(0);
  transition: 0.3s;
}
.menu-content {
  width: 250px;
  height: 200px;
  background: #5850ec;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10%;
  flex-direction: column;
}
.menu-bar {
  width: 80%;
  height: 25%;
  background: white;
  font-size: 20px;
  margin: 5%;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
</style>
