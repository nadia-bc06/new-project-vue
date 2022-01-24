<template>
  <v-app id="app">
    <the-header v-if="isAuthenticated"></the-header>

    <v-spacer></v-spacer>

    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue';
import { store } from '@/store';
import { computed } from '@vue/composition-api';

export default {
  components: {
    TheHeader,
  },

  setup() {
    const isAuthenticated = computed(() => !!store.getters['token']);

    return {
      isAuthenticated,
    };
  },
};
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
