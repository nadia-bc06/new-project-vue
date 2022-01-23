<template>
  <v-container style="margin-top: 50px">
    <v-row class="justify-center">
      <v-col cols="6">
        <h1>Login</h1>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>

          <v-text-field
            v-model="password"
            :rules="passwordRules"
            type="password"
            label="Password"
            required
          ></v-text-field>

          <v-btn color="error" class="mr-4" @click="reset"> Reset Form </v-btn>

          <v-btn color="primary" @click="login"> Go </v-btn>
        </v-form>
        <span
          >Not register yet?
          <router-link to="/register">Register now!</router-link></span
        >
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    valid: true,

    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    password: "",
    passwordRules: [(v) => !!v || "Password is required"],
  }),

  methods: {
    reset() {
      this.$refs.form.reset()
    },
    login() {
      const isValid = this.$refs.form.validate()
      if (isValid) {
        let users = JSON.parse(localStorage.getItem("users"))
        if (users) {
          if (users.length > 0) {
            let index = users.findIndex((user) => user.email === this.email)
            if (index !== -1) {
              if (users[index].password === this.password) {
                alert("Login thanh cong")
                let token = users[index].password
                localStorage.setItem("token", JSON.stringify(token))
                localStorage.setItem("user", JSON.stringify(users[index]))
                this.$router.push("/todos")
              }else alert("Wrong login password")
            }
          }
        } else {
          alert("Ban chua dang ky");
          this.$router.push('/register')
          } 
          
      }
    },
  },
}
</script>

<style lang="scss" scoped></style>
