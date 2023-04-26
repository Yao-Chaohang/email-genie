<template>
    <div class="home">
        <Banner />
        <h2 class="subject-title">How it works?</h2>
        <template v-for="(item, index) in showCardList" :key="item.title">
            <ShowCard :title="item.title" :img-url="item.imgUrl" :index="index + 1" />
        </template>
    </div>
</template>

<script setup>
    const showCardList = [
        {
            title: 'Simply Search or select the type of email you want to write',
            imgUrl: '/show-card-image/show-card-1.png'
        },
        {
            title: 'Fill out the necessary details for better response from AI',
            imgUrl: '/show-card-image/show-card-2.png'
        },
        {
            title: 'Choose the best response according to yor requirements',
            imgUrl: '/show-card-image/show-card-3.png'
        }
    ]
</script>

<style lang="scss" scoped>
.home {
    min-width: 1100px;
    .subject-title {
        font-size: 48px;
        text-align: center;
        margin: 60px 0;
    }
}
</style>