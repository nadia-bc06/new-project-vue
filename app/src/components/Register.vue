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
            v-model="gender"
            :items="items"
            :rules="[(v) => !!v || 'Item is required']"
            label="Gender"
            required
          ></v-select>

          <v-text-field
            v-model="password"
            :rules="passwordRules"
            label="Password"
            type="password"
            required
          ></v-text-field>
          <br>

          <v-btn color="error" class="mr-4" @click="reset"> Reset Form </v-btn>

          <v-btn color="primary" @click="submitRegister"> Submit </v-btn>
        </v-form><br>
        <span
          >Already Register? <router-link to="/login">Go to login!</router-link>
        </span>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { ref } from "@vue/composition-api"
export default {
  setup(_, { refs, root }) {
    const valid = ref(true)
    const name = ref("")
    const nameRules = [(v) => !!v || "Name is required"]
    const email = ref("")
    const emailRules = [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ]
    const gender = ref(null)
    const items = ["Male", "Female", "Other"]
    const password = ref("")
    const passwordRules = [(v) => !!v || "Password is required"]

    const reset = () => {
      refs.form.reset()
    }

    const submitRegister = () => {
      const isValid = refs.form.validate()
      if (isValid) {
        let users = JSON.parse(localStorage.getItem("users")) || []
     
        let user = {
          name: name.value,
          email: email.value,
          gender: gender.value,
          password: password.value,
        }
        let index = users.findIndex((user) => user.email === email.value)
        if (index == -1) {
          root.$store.dispatch("register", user)

          alert("Register successfully")
        } else {
          alert("User da ton tai")
        }
      }
    }
    return {
      valid,
      name,
      nameRules,
      email,
      emailRules,
      gender,
      items,
      password,
      passwordRules,
      reset,
      submitRegister,
    }
  },
}
</script>

<style lang="scss" scoped></style>
