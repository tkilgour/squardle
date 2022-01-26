<script setup lang="ts">
import GameInput from './components/GameInput.vue'
import GameBoard from "./components/GameBoard.vue";
</script>

<template>
  <h1>Squardle</h1>
  <GameBoard />
  <GameInput />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
