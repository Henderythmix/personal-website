<script setup>
import TitleCard from '@/components/TitleCard.vue'
import LinkPage from '@/components/LinkPage.vue';
</script>

<template>
  <main>
    <div style="height:80px;"></div>
    <TitleCard />

    <div class="box-container">
      <h1>My CVs</h1>
      <div class="grid">
        <LinkPage title="Engineering" link="/engineer" icon="bi-code-slash" />
      </div>
    </div>

    <div class="box-container">
      <h1>My Content</h1>
      <div class="grid">
        <LinkPage title="Games" link="https://henderythmix.itch.io" icon="bi-controller" />
        <LinkPage title="Music" link="https://soundcloud.com/henderythmix" icon="bi-music-note" /> 
        <LinkPage title="Github" link="https://github.com/Henderythmix" icon="bi-github" />
        <LinkPage title="Twitch" link="https://twitch.tv/henderythmix" icon="bi-twitch" />
      </div>
    </div>

    <div class="box-container">
      <h1>Social Media</h1>
      <div class="grid">
        <LinkPage title="Linkedin" link="https://www.linkedin.com/in/roberto-selles/" icon="bi-linkedin" />
        <LinkPage title="Mastodon" link="https://mastodon.gamedev.place/@hrmx" rel="me" icon="bi-mastodon" />
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
  @use '@/assets/vars';

  h1 {
    text-align: center;
  }

  .box-container {
    width: 300px;
  }
</style>
