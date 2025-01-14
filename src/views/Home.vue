<template>
  <div class="home">
    <section class="pro-section">
      <div class="img-placeholder">
        <PorfolioInfoCard></PorfolioInfoCard>
      </div>
      <div class="pro-info">
        <h1>王曉明</h1>
        <h2>XiaoMing Wang</h2>
        <div class="tags">
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
          </ul>
        </div>
      </div>
    </section>
    <BlogInfoCard></BlogInfoCard>
  </div>
</template>

<script>
import BlogContent from '../components/Blog/BlogContent.vue'
import BlogInfoCard from '../components/Blog/BlogInfoCard.vue'
import PorfolioInfoCard from '../components/PorfolioInfoCard.vue'
export default {
  name: "Home",
  components: {
    BlogInfoCard,
    BlogContent,
    PorfolioInfoCard
  }
}
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 800px;
  margin: 0 auto;
}

.pro-section {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
  margin: 20px 0;
}

.img-placeholder {
  display: flex;
  align-items: center;
  justify-content: center;
}

.pro-info .tags {
  display: flex;
  gap: 5px;
  padding: 0;
  background: none;
  justify-content: center;
  margin: 0;
}

.blogcontent {
  display: flex;
  gap: 5px;
  padding: 0;
  margin: 0;
  list-style: none;
}

.content-item {
  background-color: none;
  border-radius: 20px;
  padding: 10px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

BlogInfoCard {
  margin: 20px auto;
  max-width: 800px;
  width: 100%;
}
</style>
