<script setup>
import MinimalNavbar from '@/components/MinimalNavbar.vue'
import { RouterView } from 'vue-router'

/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', '/particlesjs-config.json', function() {
  console.log('callback - particles.js config loaded');
});
</script>

<template>
  <MinimalNavbar />
  <RouterView />
  <div class="spacing"></div>
  <footer>
    <div>Website by: Roberto Selles</div>
    <div>Icons designed by Bootstrap Icons</div>
  </footer>
</template>

<style lang="scss">
@use './assets/vars';

body {
  background-color: vars.$background;
  color: white;

  font-family: monospace;
  font-size: 16px;
  max-width: 100vw;
  height: 100%;

  overflow-x: hidden;

  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
}

* {
  transition: all 0.1s ease-in-out;
}

a {
  color: white;
  text-decoration: none;
}

footer {
  display: block;
  width: 100vw;
  height: 1080px;
  background: linear-gradient(to bottom, vars.$background 20%, #0000 50%), url('./assets/FooterImage.png');
  background-size: cover;
  background-position: center bottom;

  position: absolute;
  bottom: 0;
  z-index: -50;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  padding-bottom: 20px;

  div {
    margin: 0.5rem;
    filter: drop-shadow(0px 1px 2px black);
  }
}

.particles-js-canvas-el {
  position: fixed;
  top: 0;
  left: 0;
  z-index: -40;
  filter: blur(4px);
}

main {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.box-container {
  @include vars.box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: fit-content;

  h1 {
    margin: 1rem 2rem;
  }
}

.spacing {
  height: 500px;
  width: 100%;
}

.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: stretch;
}

@media only screen and (max-width: 450px) {
  .grid {
    grid-template-columns: auto;
  }
}
</style>
