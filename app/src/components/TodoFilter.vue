<template>
  <div class="filter-btns">
    <v-btn
      :class="{ active: filterType === 'all' }"
      @click="changeFilterType('all')"
      >All</v-btn
    >
    <v-btn
      :class="{ active: filterType === 'active' }"
      @click="changeFilterType('active')"
      >Active</v-btn
    >
    <v-btn
      :class="{ active: filterType === 'done' }"
      @click="changeFilterType('done')"
      >Done</v-btn
    >
  </div>
</template>

<script>
import { computed } from "@vue/composition-api"

export default {
  name: "TodoFilter",
  setup(_, { root }) {
    const filterType = computed(function () {
      return root.$store.state.filterType
    })

    function changeFilterType(type) {
      root.$store.dispatch("changeFilterType", type)
    }

    return {
      filterType,
      changeFilterType,
    }
  },
}
</script>

<style lang="scss" scoped>
.filter-btns {
  float: left;
}
.active {
  background-color: salmon !important;
  color: white;
}
</style>
