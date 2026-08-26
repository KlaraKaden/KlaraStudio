
<script setup lang="ts">
  import "~/assets/style.css";
  useHead({
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/KlaraStudio/favicon.ico' }]
  })
  import HeaderComp from '~/components/headerComp.vue'
  import FooterComp from '~/components/footerComp.vue'
</script>


<template>
  <NuxtLayout>
    <div class="layout-container">
      <HeaderComp />
      <div class="content">
          <NuxtPage />
      </div>
      <FooterComp />
    </div>
  </NuxtLayout>
</template>

<style>
  body {
    margin: 0;
  }

  .layout-container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    width: 100%;
}
.content {
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  justify-content: center;
  align-items: center;
  align-content: center;
}
</style>