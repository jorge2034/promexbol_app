import LmePage from "src/pages/LmePage.vue";
import QuienesSomosPage from "src/pages/QuienesSomosPage.vue";
import ContactoPage from "src/pages/ContactoPage.vue";
import IndexPageVue from "src/pages/IndexPage.vue";
const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "/", component: IndexPageVue },
      { path: "/lme", component: LmePage },
      { path: "/quienes-somos", component: QuienesSomosPage },
      { path: "/contacto", component: ContactoPage },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
