<script setup>
  import { Typed } from '@duskmoon/vue3-typed-js';

  const setup = {
    strings: ['Roberto Selles', 'Henderythmix'],
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 5000,
    loop: true,
    showCursor: false,

  }
</script>

<template>
  <div class="title-card">
    <div class="picture"></div>
    <div class="text">
      <div class="intro">My name is</div>
      <div class="name">
        <Typed :options="setup">
          <span class="typing"></span>
        </Typed>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  @use '@/assets/vars';

  .typing {
    height: 2.6rem;
    display: block;
    width: 325px;
    text-align: left;
  }

  .title-card {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    padding: 2rem 0; 
  }

  .text {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .picture {
    width: 8rem;
    height: 8rem;
    background-image: url('https://gravatar.com/avatar/438bbe7beb03b05f61c6b1272dd6cb98cfdc1ef2dc0edac1eccd932169887fa9?s=512');
    background-size: cover;
    background-position: center;
    border-radius: 100%;
  }

  .name {
    font-size: 2.6rem;
    font-weight: bold;
    background: linear-gradient(to top, vars.$dark-green, vars.$light-green);
    @include vars.grad-text;
    text-align: center;
  }

  .intro {
    font-size: 1.5rem;
  }

  @media only screen and (max-width: 450px) {
    .title-card {
      flex-direction: column;
    }

    .typing {
      text-align: center;
    }

    .text {
      align-items: center;
    }
  }

</style>