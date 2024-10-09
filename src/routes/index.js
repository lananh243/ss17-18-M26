import AboutPage from "@/views/AboutPage.vue";
import ContactPage from "@/views/ContactPage.vue";
import Feedback from "@/views/Feedback.vue";
import HomePage from "@/views/HomePage.vue";
import ProfilePage from "@/views/ProfilePage.vue";
import UserPage from "@/views/UserPage.vue";

import { createRouter, createWebHistory } from "vue-router";

// B1 : Định nghĩa danh sách các route
const router = createRouter({
  history: createWebHistory(),
  scrollBehavior(to, from, savedPosition) {
    // Nếu vị trí cuộn đã được lưu, trả về vị trí đó
    if (savedPosition) {
      return savedPosition;
    }

    // Cuộn về đầu trang khi điều hướng tới trang PostNotFound.vue
    if (to.name === "PostNotFound") {
      return { top: 0, behavior: "smooth" };
    }

    // Cuộn đến giữa trang khi điều hướng tới PostDetail.vue
    if (to.name === "PostDetail") {
      return { top: window.innerHeight / 2, behavior: "smooth" };
    }

    // Cuộn về đầu trang trong các trường hợp khác
    return { top: 0, behavior: "smooth" };
  },
  routes: [
    // {
    //   path: "/",
    //   alias: ["/home", "/home-page", "/trang-chu"],
    //   component: import(/* webpackChunkName: "home" */ "@/views/HomePage.vue"),
    //   name: "home",
    // },
    {
      path: "/about",
      component: import(
        /* webpackChunkName: "about" */ "@/views/AboutPage.vue"
      ),
      name: "about",
    },
    // {
    //   path: "/contact",
    //   component: import(
    //     /* webpackChunkName: "contact" */ "@/views/ContactPage.vue"
    //   ),
    //   name: "contact",
    //   redirect: "/feedback",
    // },
    {
      path: "/feedback",
      component: import(
        /* webpackChunkName: "feedback" */ "@/views/Feedback.vue"
      ),
      name: "feedback",
    },
    {
      path: "/user/:id",
      component: import(/* webpackChunkName: "user" */ "@/views/UserPage.vue"),
      name: "userPage",
      redirect: (to) => `/profile/${to.params.id}`,
    },
    {
      path: "/profile/:id",
      component: import(
        /* webpackChunkName: "profile" */ "@/views/ProfilePage.vue"
      ),
      name: "profilePage",
    },
    {
      path: "/list-product",
      component: import(
        /* webpackChunkName: "listProduct" */ "@/views/ListProduct.vue"
      ),
      name: "listProduct",
    },
    {
      path: "/:pathMatch(.*)*",
      component: import(
        /* webpackChunkName: "notFound" */ "@/views/NotFound.vue"
      ),
      name: "notFound",
    },
    // {
    //   path: "/admin",
    //   component: import(
    //     /* webpackChunkName: "admin" */ "@/views/AdminIndex.vue"
    //   ),
    //   name: "admin",
    //   beforeEnter: (to, from, next) => {
    //     const isAuthentacation = true;
    //     if (isAuthentacation) {
    //       // Cho phép chuyển vào trang admin
    //       next();
    //     } else {
    //       next("/");
    //     }
    //   },
    //   children: [
    //     {
    //       path: "manager-user",
    //       component: import(
    //         /* webpackChunkName:"managerUser" */ "@/views/ManagerUser.vue"
    //       ),
    //       name: "managerUser",
    //     },
    //     {
    //       path: "manager-product",
    //       component: import(
    //         /* webpackChunkName:"managerProduct" */ "@/views/ManagerProduct.vue"
    //       ),
    //       name: "managerProduct",
    //     },
    //   ],
    // },
    {
      path: "/",
      component: import(
        /* webpackChunkName: "home" */ "@/components/Baitap/Home.vue"
      ),
      name: "home",
    },
    {
      path: "/about",
      component: import(
        /* webpackChunkName: "about" */ "@/components/Baitap/About.vue"
      ),
      name: "about",
    },
    {
      path: "/contact",
      alias: ["/get-in-touch"],
      component: import(
        /* webpackChunkName: "contact" */ "@/components/Baitap/Contact.vue"
      ),
    },
    {
      path: "/search",
      component: import(
        /* webpackChunkName: "search" */ "@/components/Baitap/Search.vue"
      ),
    },
    {
      path: "/:pathMatch(.*)*",
      component: import(
        /* webpackChunkName: "notFound" */ "@/components/Baitap/NotFound.vue"
      ),
      name: "notFound",
    },
    {
      path: "/login",
      component: import(
        /* webpackChunkName: "login" */ "@/components/Baitap/Login.vue"
      ),
    },
    {
      path: "/dashboard",
      component: import(
        /* webpackChunkName: "dashboard" */ "@/components/Baitap/Dashboard.vue"
      ),
      name: "dashboard",
      beforeEnter: (to, from, next) => {
        const isLoggedIn = false;
        if (isLoggedIn) {
          // Cho phép chuyển vào trang admin
          next();
        } else {
          next("/login");
        }
      },
    },
    {
      path: "/admin",
      component: import(
        /* webpackChunkName: "admin" */ "@/components/Baitap/Admin.vue"
      ),
      name: "admin",
      children: [
        {
          path: "manager-user",
          component: import(
            /* webpackChunkName:"user" */ "@/components/Baitap/Users.vue"
          ),
          name: "user",
        },
        {
          path: "manager-product",
          component: import(
            /* webpackChunkName:"product" */ "@/components/Baitap/Products.vue"
          ),
          name: "product",
        },
        {
          path: "manager-setting",
          component: import(
            /* webpackChunkName:"setting" */ "@/components/Baitap/Settings.vue"
          ),
          name: "setting",
        },
      ],
    },
    {
      path: "/post",
      name: "listPost",
      component: import(
        /* webpackChunkName:"listPost" */ "@/components/Baitap/ListPost.vue"
      ),
    },
    {
      path: "/post/:id",
      name: "postDetail",
      component: import(
        /* webpackChunkName:"postDetail" */ "@/components/Baitap/PostDetail.vue"
      ),
    },
    {
      path: "/:pathMatch(.*)*",
      component: import(
        /* webpackChunkName: "postNotFound" */ "@/components/Baitap/PostNotFound.vue"
      ),
      name: "postNotFound",
    },
    {
      path: "/list-product",
      component: import(
        /* webpackChunkName: "listProduct" */ "@/components/Baitap/ListProduct.vue"
      ),
      name: "listProduct",
    },
    {
      path: "/product-detail/:id",
      component: import(
        /* webpackChunkName: "productDetail" */ "@/components/Baitap/ProductDetail.vue"
      ),
      name: "productDetail",
    },
  ],
});
export default router;
