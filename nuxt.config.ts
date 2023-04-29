// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
        }
    },
    css: [
        '@/assets/styles/reset.css',
        '@/assets/styles/animate.css',
        '@/assets/icon-font/iconfont.css',
        "bootstrap/dist/css/bootstrap.min.css"
    ],
    modules: [
        '@vant/nuxt'
    ],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@import "assets/styles/global.scss";'
                }
            }
        }
    }
})
