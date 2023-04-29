<template>
    <div class="about">
        <h1>关于我们</h1>
        <h2>作者信息</h2>
        <ul>
            <li>姓名：姚超航</li>
            <li>性别：男</li>
            <li>年龄：23</li>
            <li>职业：前端开发工程师</li>
            <li>爱好：看电影、听音乐、骑行、写代码</li>
            <li>联系电话：19133965998</li>
            <li>个人邮箱：yaochaohang@163.com</li>
            <li>github：<a href="https://github.com/Yao-Chaohang" target="_blank">https://github.com/Yao-Chaohang</a></li>
            <li>照片：<a href="javascript:;" data-bs-toggle="modal" data-bs-target="#staticBackdrop">查看照片</a></li>
        </ul>
        <h2>网站简介</h2>
        <p>
            借助某平台出的UI设计图，我制作了一款时尚大气的网站demo案例，采用Nuxt3作为技术栈，并支持SSR。该网站不仅视觉效果出众，而且对SEO支持
            友好，能够在搜索引擎上获得更高的排名。此外，它还能够兼容各种移动设备，为用户提供无缝的移动端体验。 为了让更多人了解和使用这个开源demo，
            我将它分享在Github上，欢迎大家访问并点赞支持：<a href="https://github.com/Yao-Chaohang/email-genie" target="_blank">https://github.
            com/Yao-Chaohang/email-genie</a>。通过您的支持，我将会不断优化和完善它，为用户提供更好的体验。
            感谢您的耐心阅读，如果您有任何问题或建议，请随时联系我。
        </p>

        <!-- Modal -->
        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="staticBackdropLabel">作者照片</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <img src="@/assets/image/photograph.jpg" alt="作者照片" style="width: 100%;">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    useHead({
        title: 'email-genie | 关于我们',
        meta: [
            { name: 'email-genie', content: 'my email-genie project' }
        ]
    })
</script>

<style lang="scss" scoped>
.about {
    width: 80%;
    margin: 0 auto 90px auto;
    box-sizing: border-box;
    min-height: 500px;
    h1 {
        margin-top: 30px;
        font-size: 38px;
        text-align: center;
        font-weight: bold;
    }
    h2 {
        margin-top: 20px;
        padding: 30px 0;
        font-size: 34px;
    }
    ul,
    li,
    p {
        line-height: 30px;
        font-size: 19px;
    }
}
</style>