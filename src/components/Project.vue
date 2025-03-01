<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue';

const props = defineProps(['title', 'link', 'date'])

const instance = ref(null);
const referencePoint = ref(null);

const handleScroll = () => {
  let average = referencePoint.value.getBoundingClientRect().top + (instance.value.getBoundingClientRect().height) / 2;

  let inBounds = average < window.innerHeight - 30 && average > 30
  if (inBounds) {
    instance.value.classList.remove('top');
    instance.value.classList.remove('bottom');
    return;
  }

  if (average < window.innerHeight / 2) {
    instance.value.classList.add('top');
  } else {
    instance.value.classList.add('bottom');
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
})
</script>

<template>
  <div class="box-wrapper">
    <div id="reference-point" ref="referencePoint"></div>
    <div class="box-container" ref="instance">
      <h1>{{ props.title }}</h1>
      <div>{{ props.date }}</div>
      <p><slot></slot></p>
      <a :href="props.link">More</a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/vars';

.top {
  transform: translateY(-25vh) translateZ(0);
  opacity: 0;
}

.bottom {
  transform: translateY(25vh) translateZ(0);
  opacity: 0;
}

.box-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: max-content;
  will-change: transform;
}

p {
  text-align: center;
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