// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ['@/assets/styles/reset.css'],
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