import { route } from 'quasar/wrappers'
import { createRouter,createWebHistory} from 'vue-router'
import routes from './routes'

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */



const router =createRouter({
    history:createWebHistory(),
    routes 
})
export default router;