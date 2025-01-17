<template>
  <div class="portfolio-info-card">[照片]</div>
</template>

<script>
export default {
  name: "PortfolioInfoCard",
};
</script>

<style scoped>
.portfolio-info-card {
  font-weight: bold;
  border: 1px solid #ccc;
  text-align: center;
  display: grid;
  place-items: center;
  padding: 16px;
  border-radius: 8px;
  background-color: gray;
  width: 150px;
  height: 150px;
  top: 200;
  left: 200;
}
</style>
