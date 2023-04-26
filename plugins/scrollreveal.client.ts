import scrollReveal from 'scrollreveal'

export default defineNuxtPlugin((nuxtApp) => {
      return {
        provide: {
            scrollReveal: scrollReveal()
        }
      }
})