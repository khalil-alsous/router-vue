<template>
  <header>
    <div class="container">
      <div class="row align-items-center">
        <h2 class="logo col-sm-6 text-start">logo</h2>
        <div id="nav" class="col-sm-6 text-end">
          <router-link to="/" tag="li"><a href="">Home</a></router-link>
          <router-link to="/blog" tag="li"><a href="">Blog</a></router-link>
          <router-link to="/about" tag="li"><a href="">About</a></router-link>
          <router-link to="/contact" tag="li"
            ><a href="">Contact</a></router-link
          >
        </div>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  name: "Navbar",
};
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
header {
  background-color: #444;
  padding: 5px 0;
  margin-bottom: 20px;
  .container .row {
    .logo {
      color: #94f8ff;
    }
    #nav {
      display: flex;
      list-style: none;
      justify-content: flex-end;
      li {
        a {
          padding: 0 15px;
          color: #fff;
          text-decoration: none;
        }
        &.router-link-exact-active {
          a {
            color: #94f8ff;
          }
        }
      }
    }
  }
}
</style>
