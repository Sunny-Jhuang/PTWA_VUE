<template>
  <div class="blog-info-card">
    <img :src="imageSrc" alt="Blog Image" />
    <h2>{{ title }}</h2>
  </div>
</template>

<script>
export default {
  name: "BlogInfoCard",
  props: {
    title: {
      type: String,
      default: "Default Blog Title"
    },
    imageSrc: {
      type: String,
      default: "https://via.placeholder.com/150"
    }
  }
};
</script>

<style scoped>
.blog-info-card {
  border: 1px solid #ccc;
  padding: 16px;
  border-radius: 8px;
}

.blog-info-card img {
  max-width: 100%;
  height: auto;
  border-radius: 4px;
  margin-bottom: 8px;
}
</style>
