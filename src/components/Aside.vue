<script setup>
// import { computed } from 'vue'

const props = defineProps({
  titlelist: Object
})

const isSubtitle = (content) => {
  const temp = {}
  for (let key in content) {
    if (isNaN(+key)) {
      temp[key] = content[key]
    }
  }
  return temp
}
</script>

<template>
  <aside>
    <div class="return" @click="$router.push('/')"><div class="return-button">返回首页</div></div>
    <div class="aside-content" ref="asideRef">
      <div class="aside-title" v-for="(item, key) in titlelist" :key="key">
        <a class="aside-content-item" :href="'#' + key">
          {{ key }}
        </a>
        <a
          class="aside-content-item-sub"
          v-for="(subitem, subkey) in isSubtitle(item)"
          :key="subkey"
          :href="'#' + subkey"
          >{{ subkey }}</a
        >
      </div>
    </div>
  </aside>
</template>

<style lang="less" scoped>
aside {
  min-width: 130px;

  display: flex;
  flex-direction: column;
  gap: 10px;

  .return {
    height: 30px;
    padding: 0 5px;
    border-radius: 10px;
    background-color: rgba(255, 241, 222, 0.2);

    display: flex;
    align-items: center;

    .return-button {
      width: 100%;
      border-radius: 5px;
      background-color: rgba(4, 0, 255, 0.38);

      display: flex;
      justify-content: center;

      font-size: 13px;

      cursor: pointer;

      &:hover {
        box-shadow: 0px 0px 10px 1px gray inset;
      }
    }
  }

  .aside-content {
    padding: 10px 5px;
    border-radius: 10px;
    background-color: rgba(255, 241, 222, 0.2);

    display: flex;
    flex-direction: column;
    gap: 10px;

    position: sticky;
    top: 40px;

    .aside-title {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;

      .aside-content-item {
        width: 100%;
        height: 30px;
        border-radius: 5px;
        background-color: rgb(10, 86, 153);

        display: flex;
        justify-content: center;
        align-items: center;

        text-decoration: none;

        cursor: pointer;

        &:hover {
          box-shadow: 0px 0px 10px 1px gray inset;
        }
      }

      .aside-content-item-sub {
        width: 70%;
        height: 30px;
        border-radius: 5px;
        background-color: rgb(10, 86, 153);

        display: flex;
        justify-content: center;
        align-items: center;

        text-decoration: none;

        cursor: pointer;

        &:hover {
          box-shadow: 0px 0px 10px 1px gray inset;
        }
      }
    }
  }
}
</style>
