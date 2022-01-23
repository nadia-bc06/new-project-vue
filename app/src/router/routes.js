import Todos from "./../components/Todos.vue"
import User from "./../components/User.vue"
import LogIn from "./../components/LogIn.vue"
import Register from "./../components/Register.vue"
import loginGuard from "./guards/loginGuard"
import ChangePassword from "./../components/ChangePassword"

export const routes = [
  {
    path: "/",
    redirect: "/todos",
  },
  {
    path: "/todos",
    name: "Todos",
    component: Todos,
    beforeEnter: loginGuard
  },

  {
    path: "/user",
    name: "User",
    component: User,
    beforeEnter : loginGuard
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/login",
    name: "LogIn",
    component: LogIn,
  },
  {
    path: "/change-password",
    name: "ChangePassword",
    component: ChangePassword,
    beforeEnter : loginGuard
  },
]