<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
  },
  setup(_, {root}) {
    console.log(root.$route);
    // const route = root.$route

    // const router = root.$router
    return {}
  }
}
</script>
