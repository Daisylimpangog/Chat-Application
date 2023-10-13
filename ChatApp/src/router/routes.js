import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import TestView from '../views/TestView.vue'

const routes = [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/login',
            name: 'login',
            component: LoginView
        },    
        {
            path: '/register',
            name: 'register',
            component: RegisterView,
        },
        {
            path: '/test',
            name: 'Test',
            component: TestView,
        }
    ]


export default routes