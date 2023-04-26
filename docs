# Nuxt3中添加滚动动画
### 安装插件
```bash
npm install scrollreveal
```

### 配置插件
```ts
import scrollReveal from 'scrollreveal'

export default defineNuxtPlugin((nuxtApp) => {
      return {
        provide: {
            scrollReveal: scrollReveal()
        }
      }
})
```

### 添加ts声明文件
global.d
写入包名  declare module "scrollreveal"

### 相关页面
```vue
<script setup>
onMounted(() => {
  if (process.client) {
    retScroll($scrollReveal)
  }
})

const retScroll = (data) => {
  data.reveal('#reveal-top', {
    // 动画的时长
    duration: 800,
    // 延迟时间
    delay: 300,
    // 动画开始的位置，'bottom', 'left', 'top', 'right'
    origin: 'bottom',
    // 回滚的时候是否再次触发动画
    reset: false,
    // 延时执行方式（always（一直延时执行），once（只延时执行一次），onload（只在加载时延时执行））
    // // useDelay: 'onload',
    // 在移动端是否使用动画
    mobile: true,
    // 滚动的距离，单位可以用%，rem等
    distance: '10px',
    // 其他可用的动画效果
    opacity: 0.01,
    // 执行速度 线性函数啥的
    easing: 'cubic-bezier(0.5, 0, 0, 1)',
    // 执行方式（缩放）
    scale: 0.9,
    // 使用执行之前的回调函数
    beforeReveal: function (ele) {
      //    console.log(1);
    },
  })
}
</script>
```

参考文章：https://www.cnblogs.com/liyunq/p/17071574.html