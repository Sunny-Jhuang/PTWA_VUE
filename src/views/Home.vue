<template>
  <div class="home">
    <section class="pro-section">
      <div class="img-placeholder">
        <span><img src="../assets/大頭貼.jpg" alt="大頭貼"></span>
      </div>
      <div class="pro-info">
        <h1>莊上儀</h1>
        <h2>ShangYi Jhuang</h2>
        <div class="tags">
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
          </ul>
        </div>
      </div>
    </section>
    <BlogInfoCard v-for="(item, index) in infoCard" :key="index" :title="item.title" :content="item.content"></BlogInfoCard>
  </div>
</template>

<script>
import BlogContent from '../components/Blog/BlogContent.vue'
import BlogInfoCard from '../components/Blog/BlogInfoCard.vue'
export default {
  name: "Home",
  components: {
    BlogInfoCard,
    BlogContent
  },
  data () {
    return {
      infoCard: [
        {
          title: "The Importance of Reading",
          content: "Reading is one of the most valuable habits a person can develop. Books allow us to gain knowledge, experience new worlds, and explore ideas beyond our imagination. Whether it’s fiction or nonfiction, reading helps improve vocabulary, comprehension, and creativity. In today's digital world, spending time with a book can also reduce stress and improve focus. Even reading for just 20 minutes a day can make a significant difference in one's personal growth. So, next time you have a free moment, grab a book and let it take you on a journey."
        },
        {
          title: "A Day at the Beach",
          content: "Yesterday, I spent the entire day at the beach with my family. The sky was clear, and the ocean waves were gentle, perfect for swimming and playing. We brought snacks, built sandcastles, and enjoyed the warmth of the sun. By the afternoon, we sat on the shore and watched the sunset, painting the sky with shades of orange and purple. It was a peaceful moment that reminded me of how simple joys can bring so much happiness. The sound of the waves and laughter made it a day to remember."
        },
        {
          title: "Why Exercise is Essential",
          content: "Exercise plays a vital role in maintaining a healthy lifestyle. Regular physical activity helps keep the body strong, improves heart health, and boosts energy levels. It also has positive effects on mental health, reducing stress and enhancing mood. Activities like walking, running, or practicing yoga can be done anywhere and don’t require special equipment. Consistency is the key—just 30 minutes a day can make a big difference. A healthier body and mind lead to a happier and more fulfilling life."
        },
        {
          title: "My Favorite Season",
          content: "Autumn is my favorite season of the year. The weather becomes cooler, the air feels crisp, and the leaves on trees turn beautiful shades of red, orange, and yellow. I love taking walks in the park and hearing the crunch of fallen leaves beneath my feet. Autumn also brings cozy sweaters, warm drinks like hot chocolate, and the excitement of holidays like Halloween and Thanksgiving. It’s a season of change, beauty, and comfort, and I look forward to it every year."
        },
        {
          title: "The Benefits of Learning a New Language",
          content: "Learning a new language can open doors to new opportunities and experiences. It allows you to connect with people from different cultures, understand their traditions, and see the world from a new perspective. Being bilingual or multilingual can improve memory, problem-solving skills, and even career prospects. With modern technology, learning a new language has become more accessible than ever. Whether it’s for travel, work, or personal growth, the benefits of language learning are truly limitless."
        }
      ],
      bContent1: [
        {
          title: "工程師"
        }
      ],
      bContent2: [
        {
          title: "崑科大資工系"
        }
      ],
      bContent3: [
        {
          title: "後端"
        }
      ]
    }
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

.img-placeholder img {
  width: 150px;
  height: 155px;
  border-radius: 10px;
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
