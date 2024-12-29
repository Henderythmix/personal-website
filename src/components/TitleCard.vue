<template>
  <div class="title-card">
    <div class="picture"></div>
    <div class="text">
      <div class="intro">My name is</div>
      <div class="name">Roberto Selles</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  @use '@/assets/vars';

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
    background-image: url('@/assets/portrait.jpg');
    background-size: cover;
    background-position: center;
    border-radius: 100%;
  }

  .name {
    font-size: 2.8rem;
    font-weight: bold;
    background: linear-gradient(to top, vars.$dark-green, vars.$light-green);
    @include vars.grad-text;
  }

  .intro {
    font-size: 1.5rem;
  }

  @media only screen and (max-width: 450px) {
    .title-card {
      flex-direction: column;
    }

    .text {
      align-items: center;
    }
  }

</style>