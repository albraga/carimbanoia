import Vue from 'vue'
import VueRouter from 'vue-router'
import About from '../components/About.vue'
import Home from '../components/Home.vue'
import Jspdfjs from '../components/Jspdfjs.vue'
import inext from '../i18next-cfg'

const { author, aboutAuthor } = inext('pt')

Vue.use(VueRouter)

export default new VueRouter({
	routes: [
		{
			path: '/',
			component: Home
		},
		{
			path: '/about',
			component: About,
			props: { author, aboutAuthor }
		},
		{
			path: '/jspdfjs',
			component: Jspdfjs
		}
	]
})
