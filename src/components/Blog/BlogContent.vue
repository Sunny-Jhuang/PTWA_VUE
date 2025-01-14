<template>
  <div class="blog-content">blog標籤</div>
</template>

<script>
export default {
  name: "BlogContent",
  props: {
    title: {
      type: String,
      default: "Blog Title"
    }
  }
};
</script>

<style scoped>
.blog-content {
  background-color: #e0e0e0;
  padding: 5px 10px;
  border-radius: 10px;
  font-size: 14px;
  margin: 0;
  text-align: center;
  line-height: 1.5;
}
</style>
