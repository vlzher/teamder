<template>
  <div class="create-container">
    <div class="create-title">Create a new project or join an existing one</div>
    <div class="create-button-zone">
      <div class="button-zone">
        <img :style="{marginLeft: '10px', marginRight:'10px'}" src="@/assets/create.svg" alt="" />
        Create a new project
      </div>
    </div>
  </div>
</template>

<style scoped>
.create-container {
  margin-top: 50px;
  width: max(60%,300px);
  height: 230px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: white;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding:40px;
  border-radius: 12px;
}
.create-title{
  font-size: max(2cqi, 15px);
  width:100%;
  height:70%;
  display:flex;
  align-items: center;
}
.create-button-zone{
  width:100%;
  height: 30%;
  display:flex;
  justify-content: left;
  align-items: center;
}
.button-zone{
  width:max(25%,200px);
  background: #5850ec;
  border-radius: 8px;
  height:50px;
  display: flex;
  align-items: center;
  color:white;
  cursor: pointer;
}
</style>
