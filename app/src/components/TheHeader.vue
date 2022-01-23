<template>
  <v-app-bar
    absolute
    color="#6A76AB"
    dark
    src="https://picsum.photos/1920/1080?random"
    
  >
    <template v-slot:img="{ props }">
      <v-img
        v-bind="props"
        gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
      ></v-img>
    </template>

<div class=" d-flex justify-space-between" style="width:100%">
  <v-app-bar-title>{{ title }}</v-app-bar-title>
      <v-btn class="success" @click="logOut">Log Out</v-btn>

</div>
  

    <template v-slot:extension>
      <v-tabs align-with-title>
        <v-tab
          v-for="menuItem in menuItems"
          :key="menuItem.name"
          :to="menuItem.path"
          >{{ menuItem.name }}</v-tab
        >
      </v-tabs>
    </template>
  
  </v-app-bar>
</template>

<script>
export default {
  name: "TheHeader",
  data() {
    return {
      title: "Welcome to my app",
      menuItems: [
        {
          name: "Todos",
          path: "/todos",
        },
        {
          name: "User",
          path: "/user",
        },
    
      ],
    }
  },
  methods:{
    logOut(){
      let user = localStorage.getItem('user');
      if(user){
        localStorage.removeItem('user');
        localStorage.removeItem('token')
      }

      this.$router.push('/login');
      
    }
  }
}
</script>

<style lang="scss" scoped></style>
