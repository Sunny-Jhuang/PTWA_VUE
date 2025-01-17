<template>
  <div class="blog">
    <SearchSidebar></SearchSidebar>
  </div>
</template>

<script>
import SearchSidebar from '../components/Blog/SearchSidebar.vue'
export default {
  name: "Blog",
  components: {
    SearchSidebar
  }
};
</script>

<style scoped>
.blog {
  display: flex;
  height: 100vh;
}

.blog > SearchSidebar {
  margin-left: 300px;
  flex: 1;
  padding: 20px;
  overflow-y: auto;
}
</style>
