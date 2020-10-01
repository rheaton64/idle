<template>
<div id='gen'>
  <h2>Generator {{ level }}</h2>
  <h3 style='margin-left:2%'>{{ getSuppMult() }}x</h3>
  <h2 style='margin-left:5%;'>{{ amount }}</h2>
  <button id='button' :style="`--background-color: ${isAffordableColor}`" @click='increment'>Cost: {{ cost }}</button>
</div>
</template>

<script>
import { mapState } from 'vuex'
import { EventBus } from '../event-bus.js';

export default {
  name: 'Generator',
  props: {
    level: Number,
    costEqBase: Number
  },
  data: function () {
    return {
      amount: 0,
      mult: 1
    }
  },
  computed: {
    cost: function () {
      if(this.amount == 0 && this.level == 1) {
        return 0
      }
      return Math.pow(this.costEqBase, this.amount)
    },
    isAffordable: function () {
      if(this.cost > this.$store.state.money) {
        return false
      }
      return true
    },
    isAffordableColor: function () {
      if(this.isAffordable) {
        return 'gray'
      }
      return 'white'
    },
    ...mapState([
      'mults'
    ])
    
  },
  watch: {
    mults: function() {
      this.updateMultiplier()
    }
  },
  methods: {
    increment () {
      if(!this.isAffordable) {
        return
      }
      this.$parent.moneyQueue.enqueue(-1 * this.cost)
      this.amount++
      this.updateMultipliers()
      this.$parent.updateMultipliers()
    },
    getSuppMult () {
      return this.mults[this.level]
    },
    updateMultipliers () {
      if(this.level != 1) {
        this.$store.commit('editMult', {
          index: this.level-1,
          value: this.amount * this.mult * this.getSuppMult() + 1
        })
      } else {
        this.$store.commit('editMult', {
          index: this.level-1,
          value: this.amount * this.mult * this.getSuppMult() + 1
        })
      }
      
    }
  },
  created () {
    EventBus.$on('update-multipliers', this.updateMultipliers)
  }
}
</script>

<style scoped>
#gen {
  display:flex; 
  flex-direction: row; 
  justify-content: center; 
  align-items: center;
}

#button {
  height: 100%;
  margin-left: 5%;
  cursor: pointer;
  transition-duration: 0.2s;
  --background-color: white;
  background-color: var(--background-color);
  color: black;
}
#button:hover {
  background-color: black;
  color: white;
}
</style>