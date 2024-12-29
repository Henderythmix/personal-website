<template>
  <div class="hero">
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