<template>
    <div class="app-header">
        <section class="header-left">
            <div class="logo">
                <h1>EmailGenie</h1>
                <div class="bg"></div>
            </div>
            <div class="menu">
                <ul>
                    <li>About</li>
                    <li>Resources</li>
                    <li>Pricing</li>
                </ul>
            </div>
        </section>
        <section class="header-right">
            <ul>
                <li>Log In</li>
                <li><button>Get Started —— It's Free</button></li>
            </ul>
        </section>
    </div>
</template>

<style lang="scss" scoped>
.app-header {
    padding: 0 68px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 90px;
    background-color: $header-bg-color;
    .header-left {
        display: flex;
        .logo {
            margin-right: 28px;
            position: relative;
            top: 10px;
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
                background-image: linear-gradient(to right, #139EBC , #A013BC);
            }
        }
        .menu{
            height: 100%;
            ul {
                li {
                    height: 100%;
                    display: flex;
                    align-items: center;
                    margin-right: 20px;
                    color: #fff;
                    float: left;
                }
            }
        }
    }
    .header-right {
        display: flex;
        ul {
            li {
                height: 100%;
                display: flex;
                align-items: center;
                color: #fff;
                float: left;
                margin-left: 20px;
                button {
                    width: 240px;
                    height: 50px;
                    color: #fff;
                    background-color: #139EBC;
                    border: none;
                    border-radius: 8px;
                    font-size: 18px;
                }
            }
        }
    }
}
</style>