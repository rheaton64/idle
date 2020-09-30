<template>
  <div id='container'>
    <h2>Incremental Game v{{ version }}</h2>
    <h1>{{ this.$store.state.money }}</h1>
    <Generator :level='1'></Generator>
  </div>
</template>

<script>
import Generator from './Generator.vue'
import Queue from '../structures.js'
import { setInterval } from 'timers';

export default {
  name: 'Game',
  components: {
    Generator
  },
  data: function() {
    return {
      version: '0.0.1',
      moneyQueue: new Queue(),
      genPerSecond: 0
    }
  },
  methods: {
    updateGame () {
      if(!this.moneyQueue.isEmpty()) {
        var n = this.moneyQueue.dequeue()
        if(n >= 0) {
          this.$store.commit('increment', n)
        } else {
          this.$store.commit('decrement', n*-1)
        }
      }
      this.$store.commit('increment', this.genPerSecond / 10)
      console.log(this.genPerSecond)
    }
  },
  mounted () {
    setInterval(this.updateGame(), 100)
  }
}
</script>

<style scoped>
  #container {
    width:100%;
  }
</style>