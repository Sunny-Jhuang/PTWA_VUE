<template>
  <div class="blog-info-card">
    <br>
    <section class="des-section">
      <h2>{{ this.title }}</h2>
      <hr>
      <p>{{ this.content }}</p>
    </section>
  </div>
</template>

<script>
export default {
  name: "BlogInfoCard",
  props: {
    title: {
      type: String,
      default: "[xxx]"
    },
    content: {
      type: String,
      default: "Lorem ipsum dolor sit amet consectetur. Sem nulla ultricies diam dictum. Tincidunt nisi tincidunt vitae tempor. Dictumst massa sed urna amet augue semper maecenas pellentesque. Posuere diam ut elementum.Lorem ipsum dolor sit amet consectetur. Sem nulla ultricies diam dictum. Tincidunt nisi tincidunt vitae tempor. Dictumst massa sed urna amet augue semper maecenas pellentesque. Posuere"
    }
  }
};
</script>

<style scoped>
.des-section {
  background-color: #fffde6;
  padding: 20px;
  margin: 0 auto;
  max-width: 800px;
  border-radius: 10px;
}

.des-section h2 {
  text-align: left;
  margin: 0 0 10px;
  color: #333;
}

.des-section p {
  text-align: left;
  line-height: 1.6;
  color: #555;
  margin: 10px 0;
}
</style>
