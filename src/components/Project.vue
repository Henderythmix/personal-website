<script setup>
const props = defineProps(['title', 'link', 'date'])
</script>

<template>
  <div class="box-container">
    <h1>{{ props.title }}</h1>
    <div>{{ props.date }}</div>
    <p><slot></slot></p>
    <a :href="props.link">More</a>
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/vars';

.box-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: max-content;
}

p {
  text-indent: 4rem;
  padding: 0.5rem;
}

a {
  background: linear-gradient(vars.$light-green, vars.$dark-green);
  padding: 1rem;
  margin: 0.5rem;
  border-radius: vars.$corner-radius;
  display: inline-block;

  &:hover {
    background: linear-gradient(vars.$light-blue, vars.$dark-blue);
    transform: scale(1.1);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  &:active {
    transform: scale(0.9);
    box-shadow: 0px 0px 4px rgba(255, 255, 255, 1);
  }
}
</style>