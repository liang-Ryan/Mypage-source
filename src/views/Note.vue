<script setup></script>

<template>
  <header></header>
  <div class="note-contain">
    <Nav></Nav>
    <div class="content">
      <Aside></Aside>
      <article>contain</article>
    </div>
  </div>
</template>

<style scoped>
.note-contain {
  padding: 30px 10px 0;
  display: flex;
  flex-direction: column;

  .content {
    display: flex;
  }
}
</style>
