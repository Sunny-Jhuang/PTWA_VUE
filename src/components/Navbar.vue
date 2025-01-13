<template>
    <nav class="navbar navbar-expand-lg navbar-light" style="background-color: #d59752;">
        <div class="container-fluid">
            <a class="navbar-brand" href="#" style="font-weight: bold;">[莊上儀 的個人網站]</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav ms-auto" style="font-weight: bold;">
                  <li class="nav-item">
                    <a class="nav-link" href="#" @click.prevent="home">[首頁]</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#" @click.prevent="blog">[部落格]</a>
                  </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
  methods: {
    home () {
      this.$router.push('/home')
    },
    blog () {
      this.$router.push('/blog')
    }
  }
}
</script>
