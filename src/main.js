import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

import App from "./App.vue";
import MainContent from "./components/MainContent.vue";
import ListaTesteve from "./components/ListaTesteve.vue";
import QuestionIndex from "./components/QuestionIndex.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: MainContent,
      meta: { title: "Welcome!" },
    },
    {
      path: "/test/",
      component: ListaTesteve,
      meta: { title: "Test index" },
    },
    {
      path: "/test/:testId",
      component: QuestionIndex,
      meta: { title: "Question index" },
      props: true,
    },
  ],
});

router.beforeEach(function (to, _2, next) {
  document.title = to.meta.title;
  next();
});

const app = createApp(App);

app.use(router);

app.mount("#app");
