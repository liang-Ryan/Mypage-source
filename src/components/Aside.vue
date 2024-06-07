<script setup></script>

<template>
  <div class="aside-content">
    <div class="aside-item" v-for="item in 10" :key="item">1</div>
  </div>
</template>

<style scoped>
.aside-content {
  width: 200px;
  padding: 10px 5px;
  background-color: rgb(255, 241, 222);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
  position: sticky;
  left: 0;

  .aside-item {
    width: 200px;
    height: 30px;
    background-color: antiquewhite;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      cursor: pointer;
      box-shadow: 0px 0px 10px 1px gray inset;
      > span {
        transform: scale(95%, 95%);
      }
    }
  }
}
</style>
