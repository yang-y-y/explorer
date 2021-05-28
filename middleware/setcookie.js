// 在每个路由改变时被调用 nuxt.config.js配置
export default function ({ isHMR, app, store, $cookies,route, params, error, redirect, req }) {
    let cookieTheme = $cookies.get('theme') || ''
    if (cookieTheme && cookieTheme !== store.state.theme) {
        store.commit('changeTheme', cookieTheme)
    }

}