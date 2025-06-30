<script setup lang="ts">
import { ref } from "vue";

const object = ref<{ x: number; y: number }>({ x: 45, y: 55 });
</script>

<template>
  <main>
    {{ object.x }}
  </main>
</template>
