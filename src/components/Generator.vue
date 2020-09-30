<template>
<div id='gen'>
  <h2>Generator {{ level }}</h2>
  <h2 style='margin-left:5%;'>{{ amount }}</h2>
  <button id='button' @click='increment'>Cost: {{ cost }}</button>
</div>
</template>

<script>
export default {
  name: 'Generator',
  props: {
    level: Number
  },
  data: function () {
    return {
      amount: 0,
      mult: 1
    }
  },
  computed: {
    cost: function () {
      if(this.amount == 0) {
        return 0
      }
      return Math.pow(2, this.amount)
    }
  },
  methods: {
    increment () {
      this.$parent.moneyQueue.enqueue(-1 * this.cost)
      this.amount++;
      this.$parent.genPerSecond = this.amount * this.mult
    }
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
}
</style>