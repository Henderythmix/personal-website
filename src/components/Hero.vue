<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue';

const instance = ref(null);

const mouseMove = (e) => {
  instance.value.style.transform = `translate(${- e.clientX / 30}px, ${- e.clientY / 30}px)`
}

onMounted(() => {
  window.addEventListener('mousemove', mouseMove);
})

onBeforeUnmount(() => {
  window.removeEventListener('mousemove', mouseMove);
});
</script>

<template>
  <div class="hero" ref="instance">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>

.hero {
  height: 100dvh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

</style>