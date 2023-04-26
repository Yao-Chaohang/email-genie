<template>
    <div class="app-footer">
        <div class="logo">
            <h1>EmailGenie</h1>
            <div class="bg"></div>
        </div>

        <div class="footer-nav">
            <ul v-for="(list, listIdx) in footerNavList" :key="listIdx">
                <li v-for="(nav, navIdx) in list" :key="navIdx" :class="{headline: nav.type === 'headline'}">{{ nav.label }}</li>
            </ul>
        </div>
    </div>
</template>

<script setup>
    const footerNavList = [
        [
            {
                label: 'Product',
                type: 'headline'
            },
            {
                label: 'Pricing',
                type: 'nav'
            },
            {
                label: 'EmailGenie Reviews',
                type: 'nav'
            },
            {
                label: 'Alternatives',
                type: 'nav'
            },
            {
                label: 'Templates',
                type: 'nav'
            },
            {
                label: 'Write ini 25+ Languages',
                type: 'nav'
            },
            {
                label: 'Use Free AI Tools',
                type: 'nav'
            },
            {
                label: 'Copy.ai Promos',
                type: 'nav'
            }
        ],
        [
            {
                label: 'Company',
                type: 'headline'
            },
            {
                label: 'Blog',
                type: 'nav'
            },
            {
                label: 'Carrers',
                type: 'nav'
            },
            {
                label: 'Community',
                type: 'nav'
            },
            {
                label: 'Creator Programs',
                type: 'nav'
            },
            {
                label: 'Twitter',
                type: 'nav'
            },
            {
                label: 'Linkedin',
                type: 'nav'
            },
            {
                label: 'Affiliate Program',
                type: 'nav'
            }
        ],
        [
            {
                label: 'Support',
                type: 'headline'
            },
            {
                label: 'Weekly Demos',
                type: 'nav'
            },
            {
                label: 'Contact Us',
                type: 'nav'
            },
            {
                label: 'report a Bug',
                type: 'nav'
            },
            {
                label: 'Report an Outage',
                type: 'nav'
            },
            {
                label: 'request a New Feature',
                type: 'nav'
            }
        ],
        [
            {
                label: 'Use Cases',
                type: 'headline'
            },
            {
                label: 'For Students',
                type: 'nav'
            },
            {
                label: 'For Recruiters',
                type: 'nav'
            },
            {
                label: 'for Email Marketers',
                type: 'nav'
            },
            {
                label: 'for Freelancer',
                type: 'nav'
            },
            {
                label: 'For Content Creator',
                type: 'nav'
            },
            {
                label: 'For Bloggers',
                type: 'nav'
            },
            {
                label: 'For Employee',
                type: 'nav'
            }
        ]
    ]
</script>

<style lang="scss" scoped>
.app-footer {
    padding: 80px 120px;
    background-color: #2C2C2C;
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
    .footer-nav {
        margin-top: 50px;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        color: #D6D6D6;
        ul {
            li {
                margin: 14px;
                font-size: 14px;
            }
        }
        .headline {
            color: #ffffff;
            font-size: 16px;
            margin-bottom: 28px;
        }
    }
}
</style>