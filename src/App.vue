<template>
  <div id="app">
    <Navbar></Navbar>
    <section class="content">
      <router-view />
    </section>
  </div>
</template>
<script>
import Navbar from "./components/Navbar.vue";
export default {
  name: "App",
  components: {
    Navbar,
  },
};
</script>

<style></style>
