<template>
  <div class="recipe-layout">
    <slot />
  </div>
</template>

<script setup>
import '~/assets/recipes.css'
</script>

<style scoped>
.recipe-layout {
  padding-top: 4rem;
}
</style>
