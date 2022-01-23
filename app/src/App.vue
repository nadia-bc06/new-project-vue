<template>
  <v-app id="app">
    <the-header></the-header>
    <div id="nav">
      <!-- <router-link to="/">Home</router-link> | -->
      <!-- <router-link to="/about">About</router-link> -->
    </div>
    <v-spacer></v-spacer>

    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>

    <!-- <the-footer></the-footer> -->
  </v-app>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue"
// import TheFooter from "./components/TheFooter.vue"
export default {
  components: {
    TheHeader,
    // TheFooter,
  },
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
