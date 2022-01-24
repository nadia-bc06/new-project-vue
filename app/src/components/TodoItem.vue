<template>
  <v-row>
    <v-col cols="2" class="task-item-status">
      <input
        type="checkbox"
        v-model="isDone"
        @change="checkStatus($event, index)"
      />
    </v-col>

    <v-col cols="5" class="task-item-content">
      <input class="task-item-edit" v-model="taskTitle" :disabled="!isEdit" />
    </v-col>

    <v-col cols="5" class="task-item-controls">
      <v-btn color="primary" class="mr-2" @click="editTask">{{
        !isEdit ? "Edit" : "Save"
      }}</v-btn>
      <v-btn color="error" @click="removeTask(index)">Del</v-btn>
    </v-col>
  </v-row>
</template>

<script>
import { ref } from "@vue/composition-api"

export default {
  name: "TodoItem",

  props: ["task", "index"],

  setup(props, { root }) {
    const isEdit = ref(false)
    const { task } = props
    const taskTitle = ref(task.title)
    const isDone = ref(task.isDone)

    const beforeEditVal = ref("")

    function editTask() {
      if (isEdit.value) {
        isEdit.value = false
        doneEditTask()
      } else {
        beforeEditVal.value = taskTitle.value
        isEdit.value = true
      }
    }

    const saveTask = () => {
      isEdit.value = false
    }

    const doneEditTask = () => {
      root.$store.dispatch("updateTask", {
        id: task.id,
        title: taskTitle,
        isDone: isDone,
      })
    }

    const checkStatus = ($event, index) => {
      let updatedStatus = $event.target.checked
      root.$store.dispatch("updateCheckStatus", {
        index,
        updatedStatus,
      })
    }

    const removeTask = (index) => {
      root.$store.dispatch("removeTask", index)
    }

    return {
      isDone,
      removeTask,
      editTask,
      doneEditTask,
      isEdit,
      saveTask,
      taskTitle,
      checkStatus,
    }
  },
}
</script>

<style lang="scss" scoped>
.task-item-content {
  text-align: left;
  .task-item-edit {
    &:focus {
      outline: none;
    }
  }
  .done {
    text-decoration: line-through;
  }
}
</style>
