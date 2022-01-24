<template>
  <div class="mt-5">
    <h1>User Info</h1>
    <v-row class="justify-center">
      <v-col cols="6">
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field
            v-model="name"
            :rules="nameRules"
            label="Name"
            :disabled="!isEdit"
            required
          ></v-text-field>

          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            :disabled="!isEdit"
            required
          ></v-text-field>

          <v-select
            v-model="gender"
            :items="items"
            :rules="[(v) => !!v || 'Item is required']"
            label="Gender"
            :disabled="!isEdit"
            required
          ></v-select>
        </v-form>
        <br />
        <v-btn
          class="mb-2"
          type="button"
          :color="isEdit ? 'success' : 'primary'"
          @click="onEdit"
        >
          {{ isEdit ? "Save changes" : "Edit info" }}</v-btn
        >

        <router-link style="display: block" to="/change-password"
          >Wanna change password?
        </router-link>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { ref } from "@vue/composition-api"
export default {
  setup(_, { root, refs }) {
    const user = root.$store.getters.user

    const valid = ref(true)
    const name = ref(user.name)
    const nameRules = [(v) => !!v || "Name is required"]
    const email = ref(user.email)
    const emailRules = [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ]
    const gender = ref(user.gender)
    const items = ["Male", "Female", "Other"]

    const isEdit = ref(false)

    const onEdit = () => {
      if (isEdit.value) {
        isEdit.value = false
        doneEditInfo()
      } else isEdit.value = true
    }

    const doneEditInfo = () => {
      const isValid = refs.form.validate()

      if (isValid) {
        let updatedUser = {
          id: user.id,
          name: name.value,
          email: email.value,
          gender: gender.value,
        }
        root.$store.dispatch("updateInfo", updatedUser)
      } else {
        isEdit.value = true
      }
    }

    return {
      user,
      isEdit,
      onEdit,
      valid,
      name,
      nameRules,
      email,
      emailRules,
      gender,
      items,
    }
  },
}
</script>

<style lang="scss" scoped>
::v-deep .v-input--is-disabled input, .v-select .v-select__selection--disabled {
  color: rgba(0, 0, 0, 0.87);
}

::v-deep .theme--light.v-select .v-select__selection--disabled {
  color: rgba(0, 0, 0, 0.87);
}
</style>
