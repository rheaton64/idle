<template>
  <div>
    <h2>Incremental Game v{{ version }}</h2>
    <h1>{{ this.$store.state.money }}</h1>
    <Generator :level='1'></Generator>
  </div>
</template>

<script>
import Generator from './Generator.vue'

export default {
  name: 'Game',
  components: {
    Generator
  },
  data: function() {
    return {
      version: '0.0.1'
    }
  }
}
</script>

<style scoped>

</style>