<template>
  <v-footer app dark padless>
    <v-card class="flex" flat tile>
      <v-card-text class="teal text-center">
        <strong class="subheading"
          >Get connected with us on social networks!</strong
        >
      </v-card-text>

      <v-card-text class="py-2 white--text text-center">
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: "TheFooter",
}
</script>

<style lang="scss" scoped>

</style>
