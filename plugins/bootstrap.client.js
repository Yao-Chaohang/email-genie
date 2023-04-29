// 参考连接：https://blog.csdn.net/miaowansheng/article/details/128431353
import * as bootstrap from 'bootstrap'

export default defineNuxtPlugin(() => {
    return {
        provide: {
            bootstrap: bootstrap
        }
    }
})