<template>
    <div id="loop">
        <!-- 循环框架组件 -->
        <Carousel v-model="value1" :radius-dot="true"  autoplay>
            <div v-for="(item,index) in imgArr" :key="index">
                <CarouselItem>
                    <div class="demo-carousel">
                        <img :src="item" alt="">
                    </div>
                </CarouselItem>
            </div>
        </Carousel>
    </div>
</template>

<script>
export default {
    name:'loop',
    props:['imgArr','arr'],
    data(){
        return{
            aee:[],
            value1:0,
            imgSrc:require('../../assets/logo.png')
        }
    },
    methods:{
        filterLoopItem(item){
            if(item == 'number'){
                this.aee.push(...item)
            }else{
                this.aee.push(...item)
            }
        }
    }

}
</script>

<style lang="less">
#loop{
    width: 100%;
    height: 1rem;
    text-align: center;
    img{
        height: 1.5rem;
    }
}
</style>