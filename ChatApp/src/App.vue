<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>

  
  <!-- <RouterView v-slot="{Component}">
    <transition>
      <component :is="Component"></component>
    </transition>
  
  </RouterView> -->
  <router-view></router-view>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
