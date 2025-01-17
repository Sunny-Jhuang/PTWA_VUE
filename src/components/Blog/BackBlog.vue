<template>
    <div class="backblog">
        <h2 @click.prevent="goBack">⬅️ 離開搜尋頁面</h2>
    </div>
</template>

<script>
export default {
  name: 'BackBlog',
  methods: {
    goBack () {
      this.$router.push('/blog')
    }
  }
}
</script>

<style scoped>
.backblog h2 {
  font-weight: bold;
}
</style>
