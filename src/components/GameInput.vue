<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { computed, ref, watch } from 'vue'
import { useGameStore } from "../stores/game";

const store = useGameStore()

const guess = computed({
  get: () => store.currentGuessNumber,
  set: (val: number) => store.updateCurrentGuess(val)
})
let correct = ref<boolean | null>(null)
const squareRoot = computed(() => Math.sqrt(guess.value))
const { answer } = storeToRefs(store)

watch(guess, () => {
  correct.value = null;
})

</script>

<template>
  <form @submit.prevent="store.checkGuess(guess)">
    <label for="prime-guess">Enter your guess:</label>
    <input v-model="guess" id="prime-guess" type="number" min="10000" max="99999">
    <button :disabled="!guess" type="submit">Check Answer</button>
    <span v-if="correct">✔</span><span v-if="correct === false">✘</span>
  </form>

  <div>
    {{ answer }}
  </div>

  <div v-if="correct === false">
    <h2>Square Root</h2>
    <p>{{ squareRoot }}</p>
  </div>

</template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}

ul {
  padding-left: 0;
}

li {
  list-style-type: none;
}
</style>
