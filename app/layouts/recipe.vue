<template>
  <div class="recipe-layout">
    <slot />
  </div>
</template>

<script setup>
// Import recipe-specific stylesheet only for pages using this layout
import '~/assets/recipes.css'
</script>

<style scoped>
/* Small wrapper rules so recipe pages align with site layout */
.recipe-layout {
  padding-top: 4rem; /* leave space for header */
}
</style>
