<template>
  <nav class="navbar navbar-expand-lg navbar-light" style="background-color: #d59752;">
    <div class="container-fluid">
      <a class="navbar-brand" href="#" style="font-weight: bold;">[xxx 的個人網站]</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav ms-auto" style="font-weight: bold;">
          <li class="nav-item d-none d-lg-block">
            <router-link class="nav-link" :to="{ path: '/home' }">[首頁]</router-link>
          </li>
          <li class="nav-item d-none d-lg-block">
            <router-link class="nav-link" :to="{ path: '/blog' }">[部落格]</router-link>
          </li>
          <li class="nav-item dropdown d-lg-none">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">選單</a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <router-link class="dropdown-item" :to="{ path: '/home' }">[首頁]</router-link>
              </li>
              <li>
                <router-link class="dropdown-item" :to="{ path: '/blog' }">[部落格]</router-link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
export default {
  methods: {
    home() {
      this.$router.push('/home');
    },
    blog() {
      this.$router.push('/blog');
    },
  },
};
</script>
