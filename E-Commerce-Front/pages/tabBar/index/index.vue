<template>
    <view class="content">
        <view class="top-banner">
            <view class="top-banner-bg" :style="{backgroundColor:topBgColor}">
            </view>
            <swiper class="swiper" :indicator-dots="true" :autoplay="false" :interval="3000" :duration="1000">
                <swiper-item class="swiper-item" v-for="(item, index) in images" :key="index">
                    <view class="swiper-item-content">
                        <image class="swiper-item-content-image" :src="item.src" mode="" />
                    </view>
                </swiper-item>
            </swiper>
        </view>

    </view>
</template>

<script>
    export default {
        data() {
            return {
                images: {},
                topBgColor: ""
            }
        },
        onLoad() {
            this.$http.carouselList({}).then(data => {
                console.log('data', data)
                this.images = data.data
                this.topBgColor = data.data[0].background
            }).catch(error => {})
        },
        methods: {

        }
    }
</script>

<style lang="scss">
    page {
        display: flex;
        flex-direction: column;

    }


    .top-banner {
        position: relative;
        .top-banner-bg {
            position: absolute;
            left: 0;
            right: 0;
            bottom: 20px;
            top: 0;
            background-color: red($color: #000000);
        }

    }

    .swiper {
        margin-left: 5%;
        padding-top: 60px;
        width: 90%;
        height: 200px;

        &-item {
            &-content {
                width: 100%;
                height: 100%;
                overflow: hidden;
                &-image {
                   width: 100%;
                   height: 100%; 
                }
            }

        }
    }
</style>
