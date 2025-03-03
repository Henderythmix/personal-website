<script setup>
  import { supabase } from '@/lib/supabase';
  import { onMounted, ref } from 'vue';

  const dataRef = ref([]);

  onMounted(async () => {    
    const { data, error } = await supabase.from('articles').select('*');

    dataRef.value = data;
  })
</script>

<template>
  <div></div>
  <div v-for="article in dataRef" :key="article.id">
    <div>{{ article.name }}</div>
  </div>
</template>