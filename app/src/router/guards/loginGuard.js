import { store } from '@/store'

export default (to, from, next) => {
	const token = store.getters['token']
	if (token) {
		next()
	} else next('/login')
}
