<template>
  <div>
    <button id='buttonfirst' >Generators</button>
    <button id='button' >Upgrades</button>
    <button id='button' >Settings</button>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
  #container {
    display:flex; 
    flex-direction: row; 
    justify-content: center; 
    align-items: center;
  }
  #button {
    height: 100%;
    margin-left: 3%;
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
  #buttonfirst {
    height: 100%;
    cursor: pointer;
    transition-duration: 0.2s;
    --background-color: white;
    background-color: var(--background-color);
    color: black;
  }
  #buttonfirst:hover {
    background-color: black;
    color: white;
  }
</style>