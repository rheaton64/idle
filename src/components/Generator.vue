<template>
<div>
  <h2>Generator {{ level }}</h2>
  <button @click='increment'></button>
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
  methods: {
    increment () {
      this.$store.commit('increment', 1)
    }
  }
}
</script>

<style scoped>

</style>