<template>
    <div class="banner">
        <div class="banner-main">
            <h2 class="animate__animated animate__pulse">Make all your cold email wishes come true with EmailGenie</h2>
            <span class="describe">Simply input your desired intent and any relevant information, and EmailGenie does the rest.</span>
            <button @click="toProduct">Start Writing For Free</button>
            <span class="hint">No credit card required</span>
        </div>
    </div>
</template>

<script setup>
    function toProduct() {
        window.open('http://114.115.166.103:3301')
    }
</script>

<style lang="scss" scoped>
.banner {
    width: 100%;
    padding-top: 100px;
    padding-bottom: 24px;
    background-image: url("@/assets/image/banner.png");
    background-size: 100% 100%;
    .banner-main {
        width: 90%;
        margin: 0 auto;
        text-align: center;
        display: flex;
        flex-direction: column;
        h2 {
            width: 80%;
            margin: 0 auto;
            color: #FFFFFF;
            font-size: 52px;
            margin-bottom: 48px;
        }
        .describe,
        .hint {
            color: #D6D6D6;
        }
        .describe {
            margin: 0 auto 58px auto;
            width: 70%;
            display: block;
            font-size: 22px;
        }
        button {
            width: 260px;
            height: 60px;
            border: none;
            background-color: $btn-bg-color;
            margin: 0 auto 48px auto;
            color: #fff;
            border-radius: 8px;
            &:hover {
                background-color: $btn-hover-color;
            }
            &:active {
                background-color: $btn-bg-color;
            }
        }
    }
}
</style>

<!-- 移动端样式 -->
<style lang="scss" scoped>
@media all and (max-width: 750px) {
    .banner {
        padding: 50px 0 20px 0;
        height: auto;
        .banner-main {
            padding: 0;
            h2 {
                width: 100%;
                font-size: 24px;
                margin-bottom: 28px;
            }
            .describe {
                width: 100%;
                font-size: 17px;
                margin: 0 auto 38px auto;
            }
            button {
                margin: 0 auto 28px auto;
            }
        }
    }
}
</style>