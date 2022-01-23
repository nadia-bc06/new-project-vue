<template>
  <v-row>
    <v-col cols="2" class="task-item-status">
      <input type="checkbox" v-model="task.isDone" />
    </v-col>

    <v-col cols="5" class="task-item-content">
      <span
        class="task-item-label"
        v-if="!task.isEditing"
        :class="{ done: task.isDone }"
        >{{ task.title }}</span
      >
      <input
        class="task-item-edit"
        @keyup.enter="doneEditTask(task)"
        @blur="doneEditTask(task)"
        v-model="task.title"
        v-focus="task.isEditing"
        v-else
      />
    </v-col>

    <v-col cols="5" class="task-item-controls">
      <v-btn color="primary" class="mr-2" @click="editTask(task)">Edit</v-btn>
      <v-btn color="error" @click="removeTask(index)">Del</v-btn>
    </v-col>
  </v-row>
</template>

<script>
import { ref } from "@vue/composition-api"

export default {
  name: "TodoItem",
  props: ["task", "index"],
  directives: {
    focus: {
      inserted: function (el) {
        el.focus()
      },
    },
  },
  setup(props, { root }) {
    const { task, index } = props
    const { id, isDone, title, isEditing } = task

    const beforeEditVal = ref("")

    function editTask(task) {
      beforeEditVal.value = task.title
      task.isEditing = true
    }


    function doneEditTask(task) {
      if (title.trim().length === 0) {
        task.title = beforeEditVal.value
        return
      }
       task.isEditing = false
     
      root.$store.dispatch("updateTask", {
          id : task.id,
          title: task.title,
          isDone : task.isDone,
          isEditing: task.isEditing
       
      });
    }

    function removeTask(index) {
      root.$store.dispatch("removeTask", index)
    }

    return {
      task,
      index,
      id,
      title,
      isDone,
      isEditing,
      removeTask,
      editTask,
      doneEditTask,
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
