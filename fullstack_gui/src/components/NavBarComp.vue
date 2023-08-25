<template>
  <nav class="navbar navbar-expand-lg bg-body-dark">
    <div class="container-fluid">
      <a class="navbar-brand" to="/">SNEAKER<span>SYNC</span></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" to="/">Home</router-link>
          </li>
          <li>
            <router-link class="nav-link" to="/about">About</router-link>
          </li>
          <li>
            <router-link class="nav-link" to="/products">Shop</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/contact">Contact</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/admin"></router-link>
          </li>
        </ul>
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <a class="btn btn-primary" type="submit"><i class="bi bi-search"></i></a>
        </form>
      </div>
    </div>
  </nav>
</template>

<script>
export default {

}
</script>

<style scoped>
.navbar{
  background-color: darkgray;
  font-family: monospace;
}
span{
  color: white;
}
.navbar-brand{
  color: blue;
  font-family: 'Courier New', Courier, monospace;
  font-weight: bolder;
}
</style>