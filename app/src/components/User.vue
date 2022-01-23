<template>
  <div >
    <h1>User Info</h1>
    <v-row  class="justify-center">
      <v-col cols="6">
        <v-list >
          <v-list-item>Name:{{ user.name }} </v-list-item>
          <v-list-item>Email: {{ user.email }}</v-list-item>
          <v-list-item>Gender: {{ user.gender }} </v-list-item>
        </v-list>
          <router-link to="/change-password"
            >Wanna change password?
          </router-link>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: JSON.parse(localStorage.getItem('user'))
    }
  },
  
}
</script>

<style lang="scss" scoped></style>
