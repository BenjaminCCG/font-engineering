<template>
  <div>{{ userStore.name }}</div>
  <span>asdas</span>
  {{ abc }} {{ b }}
</template>

<script setup lang="ts">
import useUserStore from '@/store/user.ts';
import { ref } from 'vue';
const userStore = useUserStore();
const abc = ref(1);
const b = ref(2);
</script>
