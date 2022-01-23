<template>
  <v-container style="margin-top: 50px">
    <v-row class="justify-center">
      <v-col cols="6">
        <h1>Change your password</h1>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field
            v-model="oldPassword"
            :rules="passwordRules"
            type="password"
            label="Old password"
            required
          ></v-text-field>
          <v-text-field
            v-model="newPassword"
            :rules="passwordRules"
            type="password"
            label="New password"
            required
          ></v-text-field>

          <v-text-field
            v-model="confirmedPassword"
            :rules="passwordRules"
            type="password"
            label="Enter new password again "
            required
          ></v-text-field>

          <v-btn color="error" class="mr-4" @click="reset"> Reset Form </v-btn>

          <v-btn color="primary" @click="changePassword"> Change </v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      password: JSON.parse(localStorage.getItem("user")).password,
      oldPassword: "",

      newPassword: "",

      confirmedPassword: "",
      passwordRules: [(v) => !!v || "Password is required"],
    }
  },
  methods: {
    changePassword() {
      const isValid = this.$refs.form.validate()
      if (isValid) {
        if (this.password === this.oldPassword) {
          if (this.confirmedPassword === this.newPassword) {
            let user = JSON.parse(localStorage.getItem('user'))
            let email = user.email;
            let updatedUser = {
              ...user,
              password: this.newPassword
            };
            localStorage.setItem('user', JSON.stringify(updatedUser));

            let users = JSON.parse(localStorage.getItem('users'))
            let index = users.findIndex(user => user.email === email);
            if(index !== -1){
              users.splice(index , 1 , updatedUser)
              localStorage.setItem('users' , JSON.stringify(users))
              alert('Password changed successfully');
              this.$router.push('/user')
            }
            
          } else{
            alert("Wrong confirmed password")
            }
          
        } else alert("Wrong old password")
      }
    },
  },
}
</script>

<style lang="scss" scoped></style>
