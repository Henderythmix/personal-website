<script setup>
import { RouterLink } from 'vue-router';
import { ref } from 'vue';

const isOpen = ref(false);
</script>

<template>
  <header>
    <div class="navbar">
        <button @click="isOpen = !isOpen"><i class="bi bi-list"></i></button>
        <div class="pages" v-if="isOpen">
          <RouterLink to="/">Links</RouterLink>
          <RouterLink to="/engineer">Engineering</RouterLink>
          <RouterLink to="/music">Musician</RouterLink>
          <RouterLink to="/blog?id=0">Blog</RouterLink>
        </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
  @use '@/assets/vars';

  .navbar {
    display: flex;
    flex-direction: row;
    position: fixed;
    z-index: 10;
  }

  .pages {
    @include vars.box;
    margin: 1rem;
    font-size: 18px;


    display: flex;
    flex-direction: row;
    justify-content: space-evenly;

    a {
      margin: 0 1rem;
    }

  }

  button {
    @include vars.box;

    margin: 1rem;
    padding: 0 0.75rem; 
  
    i {
      font-size: 36px;
    }

    &:hover {
      @include vars.box-hover;
    }
  }

  @media only screen and (max-width: 450px) {
    .navbar {
      flex-direction: column;
      width: calc(100% - 1rem);

      a {
        margin: 0;
      }

      .pages {
        width: calc(100% - 2.5rem);
      }
    } 
  }
</style>