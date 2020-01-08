<template>
    <div id="index">
        <!-- 轮播图 -->
        <loop :imgArr="imgArr"/>
        <!-- 轮播导航 -->
        <div class="nav">
            <dl>
               <dt><img :src="imgs" alt=""></dt> 
               <dd>京东超市</dd>
            </dl>
            <dl>
               <dt><img :src="imgs" alt=""></dt> 
               <dd>京东超市</dd>
            </dl>
            <dl>
               <dt><img :src="imgs" alt=""></dt> 
               <dd>京东超市</dd>
            </dl>
            <dl>
               <dt><img :src="imgs" alt=""></dt> 
               <dd>京东超市</dd>
            </dl>
            <dl>
               <dt><img :src="imgs" alt=""></dt> 
               <dd>京东超市</dd>
            </dl>
            <dl>
               <dt><img :src="imgs" alt=""></dt> 
               <dd>京东超市</dd>
            </dl>
            <dl>
               <dt><img :src="imgs" alt=""></dt> 
               <dd>京东超市</dd>
            </dl>
            <dl>
               <dt><img :src="imgs" alt=""></dt> 
               <dd>京东超市</dd>
            </dl>
            <dl>
               <dt><img :src="imgs" alt=""></dt> 
               <dd>京东超市</dd>
            </dl>
            <dl>
               <dt><img :src="imgs" alt=""></dt> 
               <dd>京东超市</dd>
            </dl>
        </div>
        <!-- 京东快报 -->
        <div class="jd-fast">
            <span>京东</span>
            <span>快报</span>
            <span>雪山旗舰店入驻京东全球购</span>
            <span>更多</span>
        </div>
        <!-- 京东秒杀 -->
        <div class="jd-miao">
            <div class="jd-miao-top">
                <img src="../../../public/img-jd-miao/闹钟.png" alt="">
                <span>京东秒杀</span>
                <span>14点场</span>
                <span class="jd-miao-left"><span>51慢行快秒好货</span><img src="../../../public/img-jd-miao/箭头.png" alt=""></span>
            </div>
            <div class="jd-miao-nav">
                <dl>
                    <dt><img :src="imgA" alt=""></dt>
                    <dd>￥4898</dd>
                    <dd>￥5620</dd>
                </dl>
                <dl>
                    <dt><img :src="imgA" alt=""></dt>
                    <dd>￥4898</dd>
                    <dd>￥5620</dd>
                </dl>
                <dl>
                    <dt><img :src="imgA" alt=""></dt>
                    <dd>￥4898</dd>
                    <dd>￥5620</dd>
                </dl>
                <dl>
                    <dt><img :src="imgA" alt=""></dt>
                    <dd>￥4898</dd>
                    <dd>￥5620</dd>
                </dl>
            </div>
        </div>
        <!-- 秒杀之下轮播 -->
        <loop :imgArr="imgArr"/>
        <!-- 发现好货 -->
        <div class="jd-goodshop">
            <div class="jd-goodshop-left">
                <dl>
                    <dd>发现好货</dd>
                    <dd>发现品质生活</dd>
                    <dt><img src="../../assets/logo.png" alt=""></dt>
                </dl>
                <dl>
                    <dd>发现好货</dd>
                    <dd>发现品质生活</dd>
                    <dt><img src="../../assets/logo.png" alt=""></dt>
                </dl>
            </div>
            <div class="jd-goodshop-right">
                <dl>
                    <dd>发现好货</dd>
                    <dd>发现品质生活</dd>
                    <dt><img src="../../assets/logo.png" alt=""></dt>
                </dl>
                <dl>
                    <dd>发现好货</dd>
                    <dd>发现品质生活</dd>
                    <dt><img src="../../assets/logo.png" alt=""></dt>
                </dl>
                <dl>
                    <dd>发现好货</dd>
                    <dd>发现品质生活</dd>
                    <dt><img src="../../assets/logo.png" alt=""></dt>
                </dl>
                <dl>
                    <dd>发现好货</dd>
                    <dd>发现品质生活</dd>
                    <dt><img src="../../assets/logo.png" alt=""></dt>
                </dl>
            </div>
        </div>
        <!-- 爱生活 -->
        <div class="jd-lovehuo">
            爱生活
        </div>
        <div class="jd-huiguang">
            <dl class="jd-hui">
                <dd>会逛</dd>
                <dd>2020流行趋势</dd>
                <dt><img src="../../assets/logo.png" alt=""></dt>
                <dt><img src="../../assets/logo.png" alt=""></dt>
            </dl>
            <dl class="jd-hui">
                <dd>会逛</dd>
                <dd>2020流行趋势</dd>
                <dt><img src="../../assets/logo.png" alt=""></dt>
                <dt><img src="../../assets/logo.png" alt=""></dt>
            </dl>
            <dl class="jd-hui">
                <dd>会逛</dd>
                <dd>2020流行趋势</dd>
                <dt><img src="../../assets/logo.png" alt=""></dt>
                <dt><img src="../../assets/logo.png" alt=""></dt>
            </dl>
            <dl class="jd-hui">
                <dd>会逛</dd>
                <dd>2020流行趋势</dd>
                <dt><img src="../../assets/logo.png" alt=""></dt>
                <dt><img src="../../assets/logo.png" alt=""></dt>
            </dl>
        </div>
        
        <div class="jd-huinav">
            <dl class="jd-hui-dl">
                <dd>京东体育</dd>
                <dd>明天穿什么</dd>
                <dt><img src="../../assets/logo.png" alt=""></dt>
            </dl>
            <dl class="jd-hui-dl">
                <dd>京东体育</dd>
                <dd>明天穿什么</dd>
                <dt><img src="../../assets/logo.png" alt=""></dt>
            </dl>
            <dl class="jd-hui-dl">
                <dd>京东体育</dd>
                <dd>明天穿什么</dd>
                <dt><img src="../../assets/logo.png" alt=""></dt>
            </dl>
            <dl class="jd-hui-dl">
                <dd>京东体育</dd>
                <dd>明天穿什么</dd>
                <dt><img src="../../assets/logo.png" alt=""></dt>
            </dl>
        </div>
        <loop :imgArr="imgArr"/>

        <div class="jd-lovehuo-2">
            品质时尚
        </div>
        <div class="jd-huiguang">
            <dl class="jd-hui">
                <dd>会逛</dd>
                <dd>2020流行趋势</dd>
                <dt><img src="../../assets/logo.png" alt=""></dt>
                <dt><img src="../../assets/logo.png" alt=""></dt>
            </dl>
            <dl class="jd-hui">
                <dd>会逛</dd>
                <dd>2020流行趋势</dd>
                <dt><img src="../../assets/logo.png" alt=""></dt>
                <dt><img src="../../assets/logo.png" alt=""></dt>
            </dl>
            <dl class="jd-hui">
                <dd>会逛</dd>
                <dd>2020流行趋势</dd>
                <dt><img src="../../assets/logo.png" alt=""></dt>
                <dt><img src="../../assets/logo.png" alt=""></dt>
            </dl>
            <dl class="jd-hui">
                <dd>会逛</dd>
                <dd>2020流行趋势</dd>
                <dt><img src="../../assets/logo.png" alt=""></dt>
                <dt><img src="../../assets/logo.png" alt=""></dt>
            </dl>
        </div>

        <div class="jd-huinav">
            <dl class="jd-hui-dl">
                <dd>京东体育</dd>
                <dd>明天穿什么</dd>
                <dt><img src="../../assets/logo.png" alt=""></dt>
            </dl>
            <dl class="jd-hui-dl">
                <dd>京东体育</dd>
                <dd>明天穿什么</dd>
                <dt><img src="../../assets/logo.png" alt=""></dt>
            </dl>
            <dl class="jd-hui-dl">
                <dd>京东体育</dd>
                <dd>明天穿什么</dd>
                <dt><img src="../../assets/logo.png" alt=""></dt>
            </dl>
            <dl class="jd-hui-dl">
                <dd>京东体育</dd>
                <dd>明天穿什么</dd>
                <dt><img src="../../assets/logo.png" alt=""></dt>
            </dl>
        </div>
        <loop :imgArr="imgArr"/>
      <div class="jd-lovehuo-3">
            为您推荐
        </div>
        <!-- footer底部 -->
        <div class="jd-footer">
            <dl>
                <dt><img :src="imgfooter" alt=""></dt>
                <dd>潜行者游戏背光发光牧马人机械键盘鼠标有线网吧电...</dd>
                <dd><span>￥28.50</span><span>看相似</span></dd>
            </dl>
            <dl>
                <dt><img :src="imgfooter" alt=""></dt>
                <dd>潜行者游戏背光发光牧马人机械键盘鼠标有线网吧电...</dd>
                <dd><span>￥28.50</span><span>看相似</span></dd>
            </dl>
            <dl>
                <dt><img :src="imgfooter" alt=""></dt>
                <dd>潜行者游戏背光发光牧马人机械键盘鼠标有线网吧电...</dd>
                <dd><span>￥28.50</span><span>看相似</span></dd>
            </dl>
            <dl>
                <dt><img :src="imgfooter" alt=""></dt>
                <dd>潜行者游戏背光发光牧马人机械键盘鼠标有线网吧电...</dd>
                <dd><span>￥28.50</span><span>看相似</span></dd>
            </dl>
            <dl>
                <dt><img :src="imgfooter" alt=""></dt>
                <dd>潜行者游戏背光发光牧马人机械键盘鼠标有线网吧电...</dd>
                <dd><span>￥28.50</span><span>看相似</span></dd>
            </dl>
            <dl>
                <dt><img :src="imgfooter" alt=""></dt>
                <dd>潜行者游戏背光发光牧马人机械键盘鼠标有线网吧电...</dd>
                <dd><span>￥28.50</span><span>看相似</span></dd>
            </dl>
        </div>




    </div>
</template>

<script>
//引入轮播图组件
import loop from '../../components/common/loop'
export default {
    name:'index',
    //注册组件
    components:{
        loop
    },
    data(){
        return{
            // value1:0,
            imgs:require("../../assets/logo.png"),
            imgArr:[require('../../assets/logo.png'),require('../../assets/logo.png'),require('../../assets/logo.png'),require('../../assets/logo.png')],
            imgA:require('../../assets/logo.png'),
            imgfooter:require('../../../public/img-main/59e42741N6ff7f008.jpg')
        }
    }    
}
</script>

<style lang="less">
#index{
    width: 100%;
    height: 100%;
}
.nav{
    width: 100%;
    height: 1.62rem;
    background: white;
    margin-top: .5rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap:wrap; 
}
.nav dl{
    width: 20%;
    height: .57rem;
    text-align: center;
    font-size: 16px;
    dt{
        height: .4rem;
    }
    dt img{    
        width: .4rem;
        height: .4rem;
    }
    dd{
        font-size: 12px;
    }
}
.jd-fast{
    width: 100%;
    height: .4rem;
    line-height: .4rem;
    color: rgba(51, 51, 51, 1);
    font-size: 13px;
    text-align: left;
    font-family: PingFangSC-regular;
    span:nth-child(1){
        padding: .1rem;
    }
    span:nth-child(2){
        color: white;
    }
    span:nth-child(3){
    padding: 0 .4rem 0 .1rem;
    border-right: 1px slategray solid ;
    }
    span:nth-child(4){
    padding-left: .1rem;

    }
}
.jd-miao{
    width: 100%;
    height: 1.58rem;
    background: white;
    .jd-miao-top{
        width: 100%;
        height: .32rem;
    }
    .jd-miao-top img:nth-child(1){
        width: .20rem;
        height: .20rem;
        vertical-align: middle;
    };
    .jd-miao-top span:nth-child(2){
        font-size: 12px;
        line-height: .32rem;
        color: #F13737
    };
    .jd-miao-left{
        color: #f13737;
        float: right;
        line-height: .32rem;
        img{
            width: .2rem;
            height: .2rem;
            vertical-align: middle;
        }
    }
}
.jd-miao-nav{
    width: 100%;
    height: 1.26rem;
    display: flex;
    justify-content: space-around;
    text-align: center;
    dl{
        width: 25%;
        height: 1.26px;
    }
    dt img{
        width: 80%;
        height: .78rem;
    }
    dd:nth-child(2){
        color: #f13737;
    }
    dd:nth-child(3){
        color: #ccc;
    }
}
.jd-goodshop{
    margin-top: .5rem;
    .jd-goodshop-left{
        width: 1.87rem;
        height: 2.4rem;
        float: left;
        dl{
            width: 100%;
            height: 1.2rem;
        }
        dt img{
            width: 100%;
            height: .72rem;
        }
    }
    .jd-goodshop-right{
        width: 1.86rem;
        height: 2.4rem;
        float: left;
        text-align: center;
        dl{
            width: .93rem;
            height: 1.2rem;
            float: left;
        }
        dt img{
            width: 100%;
            height: .72rem;
        }
    }   
}
.jd-lovehuo{
    width: 100%;
    height: .5rem;
    // background: red;    
    margin-top: 2.8rem;
    line-height: .5rem;
    text-align: center;
    font-size: 14px;
    background: white;
}
.jd-huiguang{
    width: 100%;
    height: 2.4rem;
    display: flex;
    background: white;
    justify-content: space-between;
    flex-wrap:wrap; 
    .jd-hui{
        width: 50%;
        height: 1.2rem;
        color: black;
        border: solid 1px #ccc;
    }
    dt{
        width: 50%;
        float: left;
    }
    dt img{
        width: 90%;
        height: 0.6rem;
        float: left;
        margin-top: .1rem;
    }
}
.jd-huinav{
    width: 100%;
    height: 1.2rem;
    display: flex;
    justify-content: space-between;
    .jd-hui-dl{
        width: 25%;
        height: 1.2rem;
        border: solid 1px #ccc;
        dt img{
            width: 100%;
            height: .72rem;
        }
    }
}
.jd-lovehuo-2{
    width: 100%;
    height: .5rem;
    // background: red;    
    margin-top: .5rem;
    line-height: .5rem;
    text-align: center;
    font-size: 14px;
    background: white;
}
.jd-lovehuo-3{
    width: 100%;
    height: .5rem;
    margin-top: .6rem;  
    // margin-bottom: .5rem;
    line-height: .5rem;
    text-align: center;
    font-size: 14px;
    background: white;
}
//底部
.jd-footer{
    width: 100%;
    height: 7.83rem;
    display: flex;
    flex-wrap:wrap; 
    margin-bottom: .6rem;
    dl{
        width: 50%;
        height: 2.61rem;
        border: solid 1px #ccc;
    }
    dt{
        text-align: center;
    }
    dt img{
        width: 1.68rem;
        height: 1.68rem;
    }
    dd:nth-child(2){
        color: black;
    }
    dd:nth-child(3){
        margin-top: .15rem;
    }
    span:first-child{
        color: #F13737;
        padding-left: .1rem;
    }
    span:last-child{
        float: right;
        padding-right: .1rem;
    }   
}
</style>