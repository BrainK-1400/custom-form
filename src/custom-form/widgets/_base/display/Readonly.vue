<template>
  <div class="text-black" style="font-weight:600">
    <template v-if="Array.isArray(text)">
      <a-tag v-for="(tag, index) in text" :key="index">
        {{ tag }}
      </a-tag>
    </template>
    <template v-else>
      {{ text }}
    </template>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  text: string | Array<string>
}>();
</script>
