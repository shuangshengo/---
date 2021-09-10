<template>
  <div id="app">
    <Home />
  </div>
</template>

<script>
import Home from "./components/Home"
export default {
  components: {
    Home
  }
}
</script>

<style lang="less">
body,html{
        width: 100%;
        height: 100%;
        margin: 0;
        background-color: gainsboro;
    }
    #app{
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      flex-direction: column;
    }
</style>
