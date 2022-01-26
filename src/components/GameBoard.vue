<script setup lang="ts">
</script>

<template>
  <div class="board">
    <div class="square" v-for="n in 25" :key="n"></div>
  </div>
</template>

<style scoped>
  .board {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    justify-items: stretch;
    gap: 15px;
    max-width: 800px;
    margin: 0 auto;
    width: 40vh;
    height: 40vh;
  }

  .square {
    border: 1px solid #000;
  }
</style>