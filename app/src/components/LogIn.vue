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
          <br />
          <v-btn color="error" class="mr-4" @click="reset"> Reset Form </v-btn>

          <v-btn color="primary" @click="login"> Go </v-btn> </v-form
        ><br />
        <span
          >Not register yet? 
          <router-link to="/register">Register now!</router-link></span
        >
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import "cxlt-vue2-toastr/dist/css/cxlt-vue2-toastr.css"
import { ref } from "@vue/composition-api"

export default {
  setup(_, { refs, root }) {
    const valid = ref(true)
    const email = ref("")
    const emailRules = [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ]
    const password = ref("")
    const passwordRules = [(v) => !!v || "Password is required"]

    const reset = () => {
      refs.form.reset()
    }

    const login = () => {
      const isValid = refs.form.validate()
      if (isValid) {
        let users = JSON.parse(localStorage.getItem("users"))
        if (users) {
          let user = users.find((user) => user.email === email.value)

          if (user) {
            if (user.password === password.value) {
              root.$store.dispatch("login", { user, token: user.password })

              // this.$toast.success({
              //   title: "Login thanh cong",
              //   message: "Welcome",
              //   position: "top right",
              // })
              alert("login thanh cong")
            } else alert("Wrong login password")
          }
        } else {
          alert("Ban chua dang ky")
          root.$router.push("/register")
        }
      }
    }

    return {
      email,
      emailRules,
      password,
      passwordRules,
      valid,
      reset,
      login,
    }
  },
}
</script>

<style lang="scss" scoped></style>
