<script setup lang="ts">
import { useGameStore } from "../stores/game";
const store = useGameStore()
</script>

<template>
  <div class="board">
    <div class="square" v-for="(value, index) in store.boardState.flat()" :key="index">
      {{ value }}
    </div>
  </div>
</template>

<style scoped>
  .board {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(5, 1fr);
    justify-items: stretch;
    gap: 15px;
    max-width: 800px;
    margin: 0 auto 30px;
    width: 40vh;
    height: 40vh;
  }

  .square {
    border: 1px solid #000;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.8em;
  }
</style>