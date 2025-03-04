<script setup>
  import { supabase } from '@/lib/supabase';
  import { onMounted, ref } from 'vue';
  import showdown from 'showdown';

  const dataRef = ref([]);
  const articleContent = ref('Content Unavailable');
  const articleName = ref('');
  const articleDate = ref('');
  const currentID = new URLSearchParams(window.location.search).get('id'); 

  onMounted(async () => {    
    const { data, error } = await supabase.from('articles').select('*');

    const file = await supabase.storage.from('markdown-blogs').getPublicUrl(data[currentID].file);
    console.log(file.data.publicUrl);

    const response = await fetch(file.data.publicUrl);
    const text = await response.text();

    let converter = new showdown.Converter();
    articleContent.value = converter.makeHtml(text);
    articleName.value = data[currentID].name;
    articleDate.value = data[currentID].published;

    dataRef.value = data.reverse();
  })

  function loadArticle(articleID) {
    window.location.href = `/blog?id=${articleID}`
  }
</script>

<template>
  <div style="height:80px;"></div>
  <div class="grid">
    <div class="box-container" id="article-list">
      <h1>Articles</h1>
      <div v-for="article in dataRef" class="article-list-box" :key="article.id">
        <div @click="loadArticle(article.id)" >{{ article.name }}</div>
      </div>
    </div>
    <div class="box-container" id="article">
      <div id="article-header">
        <h1>{{ articleName }}</h1>
        <div id="date-data">Publish Date: {{ articleDate }}</div>
      </div>
      <div class="markdown" v-html="articleContent"></div>
    </div>
  </div>
</template>

<style scoped lang="scss">

.grid {
  display: grid;
  grid-template-columns: auto auto;
  width: 90%;
  margin: 0 auto;
}

#article {

  #article-header {
    border-bottom: 2px solid #8884;
    padding-bottom: 1rem;
  }

  h1 {
    margin-bottom: 0.5rem;
  }

  #date-data {
    margin-left: 2rem;
    color: #888;
  }
}

.box-container {
  padding: 1rem;
  display: block;
}

#article-list {
  padding: 1rem 0;
  height: 100%;
}

// every second element
.article-list-box:nth-child(even) {
  background-color: #fff2;
}

.article-list-box {
  padding: 0.5rem;

  *:hover {
    text-decoration: underline;
    cursor: pointer;
  }
}

@media only screen and (max-width: 600px) {
  .grid {
    grid-template-columns: auto;

    #article-list {
      width: calc(100% - 20px);
      order: 1;
    }
  }
}

</style>