<template lang="pug">
  p {{ message }}
</template>

<script setup lang="ts">
import { ref } from "vue";

const message = ref("Hello");
</script>
