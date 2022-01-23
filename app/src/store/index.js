import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    user: {},
    filterType: 'all',
    taskList: [
      {
        id: 1,
        title: "An com",
        isEditing: false,
        isDone: true,
      },
      {
        id: 2,
        title: "Hoc Vue",
        isEditing: false,
        isDone: false,
      },
    ],
  },
  getters:{
    allTasks: (state) => state.taskList,
    filteredTasks (state){
      if(state.filterType === 'all'){
        return state.taskList;
      }else if(state.filterType === 'active'){
        return state.taskList.filter(task => !task.isDone);
      }else if(state.filterType === 'done'){
        return state.taskList.filter(task => task.isDone);
      }
      return state.taskList;
    }

  },
  mutations: {
    add_new_task (state , newTask) {
       state.taskList.unshift(newTask)
    },
    change_task_status(state , {index , isDone } ){
        state.taskList[index].isDone = isDone
    },
    remove_task (state , index){
        state.taskList.splice(index,1)
    },
    update_task (state ,   data  ){
        let index = state.taskList.findIndex(task => task.id === data.id);
        state.taskList.splice(index, 1 , {
          id: data.id,
          title: data.title,
          isDone: data.isDone,
          isEditing: data.isEditing
        })
    },
    change_filter_type(state , type){
   
        state.filterType = type
    }
  },
  actions:{
    addNewTask({commit} , newTask){
      commit("add_new_task" , newTask)
    },
    changeTaskStatus({commit} , {index , isDone}){
      commit("change_task_status", {index , isDone})
    },
    removeTask({commit} , index){
      commit("remove_task" , index)
    },
    updateTask({commit} , data ){
      commit("update_task" ,  data  )
    },
    changeFilterType({commit} , type){
      commit("change_filter_type" , type)
    }
  }
})

