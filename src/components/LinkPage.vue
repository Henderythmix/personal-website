<script setup>
  const props = defineProps(['title', 'link', 'icon', 'rel'])
</script>

<template>
  <div class="link-card">
    <a :href="props.link" :rel="props.rel">
      <div class="icon">
        <i :class="props.icon"></i>
      </div>
      <div class="title">
        {{ title }}
      </div>
    </a>
  </div>
</template>

<style scoped lang="scss">
  @use '@/assets/vars';

  .link-card {
    width: 100%;
    height: 100%;

    &:hover {
      @include vars.box-hover;
    }

    @include vars.box;
  
    a {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      text-decoration: none;
      color: white;
    }

    .icon {
      font-size: 48px;
      padding: 10px;
    }
  }
</style>