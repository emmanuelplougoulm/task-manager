<!-- src/layouts/MainLayout.vue -->
<template>
  <div class="main-layout">
    <Navbar />
    <Sidebar />
    <main>
      <slot />
      <!-- use it to place your page content  -->
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
// import Navbar from '@/components/Navbar.vue'
// import Sidebar from '@/components/Sidebar.vue'
// import Footer from '@/components/Footer.vue'
</script>
