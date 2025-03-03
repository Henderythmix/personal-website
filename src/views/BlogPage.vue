<script setup>
  import { supabase } from '@/lib/supabase';
  import { onMounted, ref } from 'vue';

  const dataRef = ref([]);
  const articleContent = ref('Content Unavailable');
  const articleName = ref('');
  const currentID = new URLSearchParams(window.location.search).get('id'); 

  onMounted(async () => {    
    const { data, error } = await supabase.from('articles').select('*');

    const file = await supabase.storage.from('markdown-blogs').getPublicUrl(data[currentID].file);
    console.log(file.data.publicUrl);

    const response = await fetch(file.data.publicUrl);
    const text = await response.text();

    articleContent.value = text;
    articleName.value = data[currentID].name;

    dataRef.value = data.reverse();
  })

  function loadArticle(articleID) {
    window.location.href = `/blog?id=${articleID}`
  }
</script>

<template>
  <div style="height:80px;"></div>
  <div class="grid">
    <div class="articles">
      <div v-for="article in dataRef" :key="article.id">
        <div onclick="loadArticle(article.id)">{{ article.name }}</div>
      </div>
    </div>
    <div class="content">
      <h1>{{ articleName }}</h1>
      <div>{{ articleContent }}</div>
    </div>
  </div>
</template>