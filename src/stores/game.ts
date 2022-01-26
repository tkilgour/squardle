import { defineStore, acceptHMRUpdate } from "pinia";

export const useGameStore = defineStore('game', {
  state: () => ({
    answer: 49284,
    guessIsSquare: null as boolean | null,
    currentGuess: new Array(5).fill(null) as string[],
    guessHistory: []
  }),

  getters: {
    currentGuessNumber(state): number | null {
      if (this.currentGuess.every(val => val === null)) return null
      return Number(this.currentGuess.join(''))
    },

    boardState(state) {
      const futureGuesses = new Array(4 - this.guessHistory.length).fill(new Array(5).fill(null))
      return [...state.guessHistory, state.currentGuess, ...futureGuesses]
    }
  },

  actions: {
    updateCurrentGuess(guess: number) {
      const guessArr = guess.toString().split('')
      this.currentGuess = [...guessArr, ...new Array(this.currentGuess.length - guessArr.length).fill(null)]
      this.guessIsSquare = null
    },
    
    checkGuess(guess: number) {
      if (guess.toString().length !== 5) throw 'Not a five digit number'

      if (Math.sqrt(guess) % 1 !== 0) {
        this.guessIsSquare = false
      } else {
        this.guessHistory.push([...this.currentGuess])
        this.currentGuess.fill(null)
      }
    }
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useGameStore, import.meta.hot))
}