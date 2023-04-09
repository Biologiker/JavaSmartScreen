<template>
  <index />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import index from './components/index/index.vue';
import weatherWidget from './components/weatherWidget/weatherWidget.vue';

export default defineComponent({
  name: 'App',
  components: {
    index,
    weatherWidget,
  }
});
</script>

<style lang="scss" src="./App.scss"/>