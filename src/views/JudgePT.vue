<template>
    <div class="blogsearch">
        <SearchSidebar></SearchSidebar>
        <div class="content">
          <button class="backblog">
              <BackBlog></BackBlog>
          </button>
          <div class="photo-gallery">
              <div class="photo-item" v-for="article in articles" :key="article.id">
                  <div class="photo-placeholder" @click="openModal(article)">
                      <span><img :src="resolvePhotoPath(article.photo)" alt="article-title"></span>
                  </div>
                  <div class="photo-title">[{{ article.title }}]</div>
              </div>
          </div>
          <ArticleModal @close="closeModal" v-if="showModal" :article="selectedArticle" :resolvePhotoPath="resolvePhotoPath"></ArticleModal>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import ArticleModal from '../components/Blog/ArticleModal.vue'
import BackBlog from '../components/Blog/BackBlog.vue'
import SearchSidebar from '../components/Blog/SearchSidebar.vue'
import articles from '../assets/Articles.json'
export default {
  name: 'BlogSearch',
  components: {
    ArticleModal,
    BackBlog,
    SearchSidebar
  },
  methods: {
    openModal (article) {
      this.selectedArticle = article
      this.showModal = true
    },
    closeModal () {
      this.showModal = false,
      this.selectedArticle = null
    },
    resolvePhotoPath (photo) {
      try {
        return new URL(`../assets/img/${photo.split('/').pop()}`, import.meta.url).href
      } catch (error) {
        console.error('Image not found: ', photo)
        return ''
      }
    }
  },
  data () {
    return {
      showModal: false,
      articles
    }
  },
  created () {
    axios.get('http://localhost:3000/judge').then(response => {
      this.articles = response.data
    }).catch(error => {
      console.log('There was an error: '+error)
    })
  }
}
</script>

<style scoped>
.blogsearch {
  display: flex;
  flex: 1;
  height: 100vh;
}

SearchSidebar {
  margin-left: 300px;
  flex: 1;
  padding: 20px;
  overflow-y: auto;
}

.content {
  flex: 1;
  background-color: white;
  padding: 20px;
}

.backblog {
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-bottom: 20px;
}

.photo-gallery {
  flex: 1;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin-left: 2rem;
  justify-content: center;
}

.photo-item {
  text-align: center;
  align-items: center;
  display: flex;
  flex-direction: column;
}

.photo-placeholder img {
  border-radius: 10px;
  width: 200px;
  height: 200px;
  object-fit: cover;
}

.photo-title {
  margin-top: 0.5rem;
  font-size: 1rem;
  color: #333;
  font-weight: bold;
}
</style>
