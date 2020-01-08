<template>
    <div id="tuijiefenlei">
        <!-- 头部广告 -->
        <img class="headerImg" :src="imgsrc" alt="">
        <!-- 标题 -->
        <div class="bt">
            专场推荐
        </div>
        <div class="zctj">
            <dl>
                <dt><img :src="imgsrc" alt=""></dt>
                <dd>厨房电器超级品类日</dd>
                <dd></dd>
            </dl>
            <dl>
                <dt><img :src="imgsrc" alt=""></dt>
                <dd>厨房电器超级品类日</dd>
                <dd></dd>
            </dl>
            <dl>
                <dt><img :src="imgsrc" alt=""></dt>
                <dd>厨房电器超级品类日</dd>
                <dd></dd>
            </dl>
        </div>
           <!-- 标题 -->
        <div class="bt">
            热门分类
        </div>
        <div class="footer">
            <dl>
               <dt><img :src="imgsrc" alt=""></dt> 
               <dd>手机</dd>
            </dl>
            <dl>
               <dt><img :src="imgsrc" alt=""></dt> 
               <dd>手机</dd>
            </dl>
            <dl>
               <dt><img :src="imgsrc" alt=""></dt> 
               <dd>手机</dd>
            </dl>
            <dl>
               <dt><img :src="imgsrc" alt=""></dt> 
               <dd>手机</dd>
            </dl>
            <dl>
               <dt><img :src="imgsrc" alt=""></dt> 
               <dd>手机</dd>
            </dl>
            <dl>
               <dt><img :src="imgsrc" alt=""></dt> 
               <dd>手机</dd>
            </dl>
            <dl>
               <dt><img :src="imgsrc" alt=""></dt> 
               <dd>手机</dd>
            </dl>
            <dl>
               <dt><img :src="imgsrc" alt=""></dt> 
               <dd>手机</dd>
            </dl>
            <dl>
               <dt><img :src="imgsrc" alt=""></dt> 
               <dd>手机</dd>
            </dl>
        </div>
    </div>
</template>

<script>
export default {
    name:'tuijiefenlei',
    data(){
        return{
            imgsrc:require('../../assets/logo.png'),
        }
    }
}
</script>

<style lang="less">
    #tuijiefenlei{
        width: 100%;
        height: 100%;
    }
    .headerImg{
        width: 100%;
        height: .9rem;
        background: white;
    }
    .bt{
        width: 100%;
        height: .32rem;
        line-height: .32rem;
        font-weight: 600;
    }
    .zctj{
        width: 100%;
        height: 1.33rem;
        background: white;
        display: flex;
        justify-content: space-around;
        text-align: center;
        dl{
            width: 33.5%;
            height: 1.33rem;
        }
        dt img{
            width: 80%;
            height: .8rem;
        }
    }
    .footer{
        width: 100%;
        height: 3.72rem;
        background: white;
        display: flex;
        justify-content: space-between;
        flex-wrap:wrap;
        dl{
            width: 33%;
            height: 1.01rem;
            text-align: center;
        }
        dt img{
            width: 80%;
            height: .7rem;
        }
    }

</style>