<template>
  <div class="input-zone">
    <input
      type="text"
      v-model="text"
      placeholder="Search for project by keywords(project role, technology, project subject)"
    />
    <img src="@/assets/lupa.svg" alt="zalupa" />
  </div>
</template>

<script lang="ts">
export default {
  name: "SearchBar",
  data() {
    return {
      text: "",
    };
  },
};
</script>
<style scoped>
.input-zone {
  margin-top: 30px;
  height: 80px;
  width: max(300px,60%);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0 15 0 10;

}
input{
  outline: 0;
  border: 0;
  width:max(90%, 260px);
  padding:20px;
  font-size: max(8px, 1.5cqi);

}
img{
  width: 35px;
  height: 35px;
  cursor: pointer;
}
</style>
