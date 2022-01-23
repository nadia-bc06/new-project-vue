<template>
  <div>
    <v-text-field
      label="Enter your task"
      required
      v-model="newTask"
      @keyup.enter="addTask"
    ></v-text-field>
    <v-btn color="primary" class="mr-4" @click="addTask"> Add Task </v-btn>
  </div>
</template>

<script>
import { ref } from "@vue/composition-api"

export default {
  name: "TodoInput",
  setup(_, { root }) {
    const newTask = ref("")
    const newTaskId = ref(3)

    function addTask() {
      if (newTask.value.trim().length === 0) {
        return
      }
      root.$store.dispatch("addNewTask", {
        id: newTaskId.value,
        title: newTask.value,
        isDone: false,
        isEditing: false,
      })
      newTask.value = ""
      newTaskId.value++
    }

    return {
      newTask,
      addTask,
    }
  },
}
</script>

<style lang="scss" scoped></style>
