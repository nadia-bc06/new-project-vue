<template>
  <v-container style="margin-top: 50px">
    <v-row class="justify-center">
      <v-col cols="6">
        <h1>Register now!</h1>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field
            v-model="name"
            :rules="nameRules"
            label="Name"
            required
          ></v-text-field>

          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>

          <v-select
            v-model="select"
            :items="items"
            :rules="[(v) => !!v || 'Item is required']"
            label="Gender"
            required
          ></v-select>

          <v-text-field
            v-model="password"
            :rules="passwordRules"
            label="Password"
            required
          ></v-text-field>

          <v-btn color="error" class="mr-4" @click="reset"> Reset Form </v-btn>

          <v-btn color="primary" @click="submitRegister"> Submit </v-btn>
        </v-form>
        <span
          >Already Register? <router-link to="/login">Go to login!</router-link>
        </span>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    name: "",
    nameRules: [(v) => !!v || "Name is required"],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    select: null,
    items: ["Male", "Female", "Other"],
    password: "",
    passwordRules: [(v) => !!v || "Password is required"],
  }),

  methods: {
    reset() {
      this.$refs.form.reset()
    },
    submitRegister() {
      const isValid = this.$refs.form.validate()
      if (isValid) {
        let users = JSON.parse(localStorage.getItem("users")) || []
        let user = {
          name: this.name,
          email: this.email,
          gender: this.select,
          password: this.password,
        }
        let index = users.findIndex((user) => user.email === this.email)
        if (index == -1) {
          users.push(user)
          localStorage.setItem("users", JSON.stringify(users))
          alert("Register successfully")
          this.$router.push("/login")
        }else {
          alert('User da ton tai')
        }
      }
    },
  },
}
</script>

<style lang="scss" scoped></style>
