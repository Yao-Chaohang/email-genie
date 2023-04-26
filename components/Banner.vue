<template>
    <div class="banner">
        <div class="banner-main">
            <h2 class="animate__animated animate__pulse">Make all your cold email wishes come true with EmailGenie</h2>
            <span class="describe">Simply input your desired intent and any relevant information, and EmailGenie does the rest.</span>
            <button>Start Writing For Free</button>
            <span class="hint">No credit card required</span>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.banner {
    height: 530px;
    background-image: url("@/assets/image/banner.png");
    background-size: 100% 100%;
    .banner-main {
        padding: 130px 150px;
        margin: 0 auto;
        text-align: center;
        display: flex;
        flex-direction: column;
        h2 {
            color: #FFFFFF;
            font-size: 52px;
            margin-bottom: 38px;
        }
        .describe,
        .hint {
            color: #D6D6D6;
        }
        .describe {
            margin: 0 auto 58px auto;
            width: 600px;
            display: block;
            font-size: 22px;
        }
        button {
            width: 260px;
            height: 60px;
            border: none;
            background-color: $btn-bg-color;
            margin: 0 auto 38px auto;
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