<template>
    <div class="show-card">
        <div class="show-card-main">
            <div class="serial-number">{{ index }}</div>
            <h2>{{ title }}</h2>
        </div>
        <img :src="imgUrl" alt="not found" class="product-image" />
    </div>
</template>

<script setup>
const { $scrollReveal } = useNuxtApp()

defineProps({
    title: String,
    index: Number,
    imgUrl: String
})

onMounted(() => {
    if (process.client) {
        retScroll($scrollReveal)
    }
})

const retScroll = (data) => {
    data.reveal('.product-image', {
        duration: 300,
        delay: 100,
        origin: 'bottom',
        reset: false,
        mobile: true,
        distance: '10px',
        opacity: 0.01,
        easing: 'cubic-bezier(0.5, 0, 0, 1)',
        scale: 0.9,
        beforeReveal: function (e) {
        },
    })
}
</script>

<style lang="scss" scoped>
.show-card {
    margin: 0 auto 90px auto;
    box-sizing: border-box;
    .show-card-main {
        display: flex;
        justify-content: center;
        margin-bottom: 50px;

        .serial-number {
            margin-right: 12px;
            width: 35px;
            height: 35px;
            border-radius: 50%;
            text-align: center;
            line-height: 35px;
            color: #fff;
            background-image: linear-gradient(to right, #139ebc, #a013bc);
        }

        h2 {
            width: 600px;
            font-size: 28px;
        }
    }

    img {
        width: 80%;
        display: block;
        margin: 30px auto;
    }
}
</style>

<!-- 移动端样式 -->
<style lang="scss" scoped>
@media all and (max-width: 750px) {
    .show-card {
        padding: 0 20px;
        margin: 0 auto 20px auto;
        .show-card-main {
            margin-bottom: 20px;
            .serial-number {
                width: 43px;
                height: 25px;
                line-height: 25px;
            }

            h2 {
                font-size: 18px;
            }
        }
    }
}
</style>
