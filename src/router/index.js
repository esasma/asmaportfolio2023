import { createRouter, createWebHistory } from "vue-router";
import AccueilView from "../views/AccueilView.vue";
import WorkView from "../views/WorkView.vue";
import ContactView from "../views/ContactView.vue";
import EcarvtcWork from "../views/EcarvtcWork.vue";
import PageNotFound from "../views/404.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", name: "Accueil", component: AccueilView },
    { path: "/contact", name: "Contact", component: ContactView },
    { path: "/work", name: "Work", component: WorkView },
    { path: "/ecarvtcwork", name: "Ecarvtc", component: EcarvtcWork },
    { path: '/:pathMatch(.)', name: '404', component: PageNotFound },

    // ici les autre routes
  ],
});

router.afterEach(() => {
  window.scrollTo(0, 0);
});

export default router;

