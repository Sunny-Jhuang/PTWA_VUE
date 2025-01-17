<template>
    <div class="blogsearch">
        <SearchSidebar></SearchSidebar>
        <div class="content">
          <button class="backblog">
              <BackBlog></BackBlog>
          </button>
          <div class="photo-gallery">
              <div class="photo-item">
                  <div class="photo-placeholder" @click="showModal">
                      <PorfolioInfoCard></PorfolioInfoCard>
                  </div>
                  <div class="photo-title">[照片標題]</div>
              </div>
              <div class="photo-item">
                  <div class="photo-placeholder" @click="showModal">
                      <PorfolioInfoCard></PorfolioInfoCard>
                  </div>
                  <div class="photo-title">[照片標題]</div>
              </div>
          </div>
          <ArticleModal ref="articleModal" @click="closeModal"></ArticleModal>
        </div>
    </div>
</template>

<script>
import PorfolioInfoCard from '../components/PorfolioInfoCard.vue'
import ArticleModal from '../components/Blog/ArticleModal.vue'
import BackBlog from '../components/Blog/BackBlog.vue'
import SearchSidebar from '../components/Blog/SearchSidebar.vue'
export default {
  name: 'BlogSearch',
  components: {
    PorfolioInfoCard,
    ArticleModal,
    BackBlog,
    SearchSidebar
  },
  methods: {
    showModal () {
      this.$refs.articleModal.showModal()
    },
    closeModal () {
      this.$refs.articleModal.hideModal()
    }
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

PorfolioInfoCard {
  width: 100%;
  max-height: 300px;
  object-fit: contain;
}

.photo-title {
  margin-top: 0.5rem;
  font-size: 1rem;
  color: #333;
  font-weight: bold;
}
</style>
