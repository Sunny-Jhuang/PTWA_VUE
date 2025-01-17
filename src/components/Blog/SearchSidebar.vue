<template>
    <div class="blogSidebar">
        <div class="search">
            <input type="text" placeholder="搜尋文章..." />
            <button class="icon-search" @click.prevent="toPage">🔍</button>
        </div>
        <div class="categories">
            <h2>[文章分類]</h2>
            <ul class="blogcontent">
                <li class="content-item">
                <BlogContent></BlogContent>
                </li>
                <li class="content-item">
                <BlogContent></BlogContent>
                </li>
                <li class="content-item">
                <BlogContent></BlogContent>
                </li>
                <li class="content-item">
                <BlogContent></BlogContent>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import BlogContent from '../Blog/BlogContent.vue'
export default {
  name: "BlogSidebar",
  components: {
    BlogContent
  },
  methods: {
    toPage () {
      this.$router.push('/blogSearch')
    }
  }
}
</script>

<style scoped>
.blogSidebar {
  background-color: #fff8dc;
  padding: 20px;
}

.search {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.search input {
  flex: 1;
  padding: 5px 10px;
  border: 1px solid #ccc;
  border-radius: 4px 0 0 4px;
}

.search button {
  padding: 5px 10px;
  background-color: gray;
  color: white;
  border: none;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
}

.categories h2 {
  text-align: center;
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 10px;
}

.categories ul {
  list-style: none;
  padding: 0;
}

.categories li {
  margin-bottom: 10px;
}
</style>
