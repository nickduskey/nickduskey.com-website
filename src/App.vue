<template>
  <div id="app"><Terminal /></div>
</template>

<script>
import Terminal from './components/Terminal.vue';

export default {
  name: 'app',
  components: {
    Terminal,
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=VT323');
body {
  color: #12d11f;
  background-color: #090f01;
  font-family: 'VT323', monospace;
  font-size: 1em;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
#app {
  margin-top: 20px;
}
</style>
