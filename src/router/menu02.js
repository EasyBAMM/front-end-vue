// 라우트 분리방법
export default [
  {
    path: "/menu02/exam01expressions",
    component: () =>
      import(/* webpackChunkName: "menu02" */ "../views/menu02/Exam01Expressions.vue"),
  },
  {
    path: "/menu02/exam02directives",
    component: () =>
      import(/* webpackChunkName: "menu02" */ "../views/menu02/Exam02Directives.vue"),
  },
  {
    path: "/menu02/exam03attrbinding",
    component: () =>
      import(/* webpackChunkName: "menu02" */ "../views/menu02/Exam03AttrBinding.vue"),
  },
  {
    path: "/menu02/exam04formbinding",
    component: () =>
      import(/* webpackChunkName: "menu02" */ "../views/menu02/Exam04FormBinding.vue"),
  },
  {
    path: "/menu02/exam05forrepeatbinding",
    component: () =>
      import(/* webpackChunkName: "menu02" */ "../views/menu02/Exam05ForRepeatBinding.vue"),
  },
  {
    path: "/menu02/exam06computedbinding",
    component: () =>
      import(/* webpackChunkName: "menu02" */ "../views/menu02/Exam06ComputedBinding.vue"),
  },
  {
    path: "/menu02/exam07template",
    component: () => import(/* webpackChunkName: "menu02" */ "../views/menu02/Exam07Template"),
  },
];
