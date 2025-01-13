<template>
  <div class="blog-content">這是blog內文</div>
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

<style scoped></style>
