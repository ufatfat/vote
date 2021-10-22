import Vue from 'vue'
import Router from 'vue-router'
import Main from "@/containers/Main"
import storage from "@/utils/storage"

Vue.use(Router)

const router = new Router({
    mode: "history",
    // base: process.env.BASE_URL,
    routes: [
        {
            path: "/",
            redirect: "/rule",
            component: Main,
            name: "Main",
            meta: {
                breadcrumb: "首页",
                title: "评图系统",
            },
            children: [
                {
                    path: "sign-in",
                    name: "SignIn",
                    component: () => import("@/views/auth/SignIn"),
                    meta: {
                        title: "评图系统 - 登录",
                    },
                }, {
                    path: "index",
                    component: () => import("@/views/vote/Index"),
                    name: "Index",
                    meta: {
                        title: "评图系统 - 首页",
                        requireSignIn: true,
                    },
                }, {
                    path: "rule",
                    component: () => import("@/views/general/Rule"),
                    name: "Rule",
                    meta: {
                        title: "评图系统 - 评审规则",
                        requireSignIn: true,
                    }
                }, {
                    path: "overview",
                    component: () => import("@/views/vote/Overview"),
                    name: "Overview",
                    meta: {
                        title: "评图系统 - 总览",
                        requireSignIn: true,
                    }
                }, {
                    path: "detail/:workID",
                    component: () => import("@/views/vote/Detail"),
                    name: "Detail",
                    meta: {
                        title: "评图系统 - 详情",
                        requireSignIn: true,
                    }
                }
            ]
        }, {
            path: "*",
            name: "Not Found",
            component: () => {},
            meta: {
                title: "404 Not Found",
            }
        }
    ]
})

router.beforeEach(async (to, from, next) => {
    let token = storage.getItem("userInfo")
    if (to.meta.title) {
        document.title = to.meta.title
    }
    if (to.path === "/sign-in" && token)
        next({
            path: "/index"
        })
    if (to.meta.requireSignIn) {
        if (token) {
            if(Object.keys(from.query).length === 0) {
                next()
            } else {
                let redirect = from.query.redirect
                if (to.path === redirect) {
                    next()
                } else {
                    next({
                        path: redirect
                    })
                }
            }
        } else {
            next({
                path: "/sign-in",
                query: {
                    redirect: to.fullPath,
                },
            })
        }
    } else {
        next()
    }
})

export default router