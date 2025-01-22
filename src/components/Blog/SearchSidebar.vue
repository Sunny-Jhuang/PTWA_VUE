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
                <BlogContent v-for="(item, index) in bContent1" :key="index" :title="item.title"></BlogContent>
                </li>
                <li class="content-item">
                <BlogContent v-for="(item, index) in bContent2" :key="index" :title="item.title"></BlogContent>
                </li>
                <li class="content-item">
                <BlogContent v-for="(item, index) in bContent3" :key="index" :title="item.title"></BlogContent>
                </li>
                <li class="content-item">
                <BlogContent v-for="(item, index) in bContent4" :key="index" :title="item.title"></BlogContent>
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
  },
  data () {
    return {
      bContent1: [
        {
          title: "[新聞資訊]"
        }
      ],
      bContent2: [
        {
          title: "[教學指南]"
        }
      ],
      bContent3: [
        {
          title: "[觀點評論]"
        }
      ],
      bContent4: [
        {
          title: "[休閒娛樂]"
        }
      ]
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
