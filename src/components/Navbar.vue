<template>
  <nav class="teal lighten-2">
    <div class="nav-wrapper">
      <router-link to="/" class="brand-logo">ticket</router-link>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <router-link
          tag="li"
          to="/"  
          exact
          active-class="active"
        >
          <a href="#">create</a>
        </router-link>
        <router-link
          tag="li"
          to="/list"  
          active-class="active"
        >
          <div v-if="tickets.length" class="count">{{tickets.length}}</div>
          <a href="#l">list</a>
        </router-link>
      </ul>
    </div>
  </nav>
</template>
<script>
export default {
  computed: {
    tickets() {
      return this.$store.getters.tickets
    }
  }
}
</script>

<style lang="scss" scoped>
  nav{
    padding: 0 2rem;
    li{
      position: relative;
    }
    .count{
      position: absolute;
      top: -15px;
      right: 10px;
      color: #ec8f86;
      font-weight: bold;
      font-size: 16px;
    }
  }
</style>
