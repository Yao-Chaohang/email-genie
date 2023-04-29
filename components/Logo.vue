<template>
    <div class="logo" @click="() => router.push('/')">
        <h1>EmailGenie</h1>
        <div class="bg"></div>
    </div>
</template>

<script setup>
    const router = useRouter()
</script>

<style lang="scss" scoped>
.logo {
    // margin: 0 28px;
    position: relative;
    top: 10px;
    cursor: pointer;

    h1 {
        position: absolute;
        top: -26px;
        left: -28px;
        font-size: 32px;
        margin: 0;
        color: #fff;
    }

    .bg {
        width: 180px;
        height: 20px;
        background-image: linear-gradient(to right, #139EBC, #A013BC);
    }
}
</style>

<!-- 移动端样式 -->
<style lang="scss" scoped>
@media all and (max-width: 750px) {
    .logo {
        h1 {
            font-size: 22px;
        }
        .bg {
            width: 100px;
            height: 10px;
        }
    }
}
</style>