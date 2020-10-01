<template>
  <div id='container'>
    <h2>Incremental Game v{{ version }}</h2>
    <h1>{{ money }}</h1>
    <Generator :level='1' :cost-eq-base='2'></Generator>
    <Generator :level='2' :cost-eq-base='3'></Generator>
  </div>
</template>

<script>
import Generator from './Generator.vue'
import Queue from '../structures.js'
import { setInterval } from 'timers';
import { EventBus } from '../event-bus.js';

export default {
  name: 'Game',
  components: {
    Generator
  },
  data: function() {
    return {
      version: '0.0.1',
      moneyQueue: new Queue()
    }
  },
  computed: {
    money: function () {
      return Math.floor(this.$store.state.money * 10) / 10
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
      this.$store.commit('increment', this.calcGenPerSecond() / 20)
    },
    calcGenPerSecond () {
      var val = this.$store.state.mults[0]
      console.log(this.$store.state.mults[0] - 1)
      if(val <= 0) {
        return 0
      }
      return this.$store.state.mults[0] - 1
    },
    updateMultipliers () {
      EventBus.$emit('update-multipliers')
    }
  },
  mounted () {
    setInterval(this.updateGame, 50)
  }
}
</script>

<style scoped>
  #container {
    width:100%;
  }
</style>