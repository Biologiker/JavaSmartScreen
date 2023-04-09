<template>
  <index />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import index from './components/index/index.vue';

export default defineComponent({
  name: 'App',
  components: {
    index,
  }
});
</script>

<style lang="scss" src="./App.scss"/>