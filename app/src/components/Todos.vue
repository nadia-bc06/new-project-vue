<template>
  <v-container>
    <h1 class="mt-10">My Todo List</h1>
    <v-row class="justify-center">
      <v-col cols="6">
        <!-- input task -->
        <todo-input></todo-input>

        <!-- task list -->
        <v-list class="task-list">
          <v-list-item
            class="task-item"
            v-for="(task, index) in filteredTasks"
            :key="task.id"
          >
            <todo-item
              :task="task"
              :index="index"
              @removeTask="removeTask"
              @doneEditTask="doneEditTask"
            ></todo-item>
          </v-list-item>
        </v-list>
        <!-- filter -->
        <todo-filter></todo-filter>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { computed } from "@vue/composition-api"
import TodoItem from "./TodoItem.vue"
import TodoInput from "./TodoInput.vue"
import TodoFilter from "./TodoFilter.vue"

export default {
  components: {
    TodoItem,
    TodoInput,
    TodoFilter,
  },

  setup(_, { root }) {
    const filteredTasks = computed(function () {
      return root.$store.getters.filteredTasks
    })

    return {
      filteredTasks,
    }
  },
}
</script>

<style lang="scss" scoped>
.task-item {
  display: flex;
  justify-content: space-between;
}
</style>
