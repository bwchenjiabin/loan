<template>
<div>
  <div class="box">
    <div class="title" style="position:fixed;">应急大师</div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide one">
          <a href="javascript:;">
          <img src="../../../static/img/banner.png" alt="">
          </a>
        </div>  
         <div class="swiper-slide one">
          <a href="javascript:;">
          <img src="../../../static/img/banner.png" alt="">
          </a>
        </div>  
         <div class="swiper-slide one">
          <a href="javascript:;">
          <img src="../../../static/img/banner.png" alt="">
          </a>
        </div>  
    </div>
     <div class="swiper-pagination"></div>  
  </div>
  <div class="menu">
    <ul>
      <li class="list">
        <a href="javascript:;">
          <i><img src="../../../static/img/icon1.png" alt=""></i>
          <span>小额极速</span>
        </a>
      </li>
      <li class="list">
        <a href="javascript:;">
          <i><img src="../../../static/img/icon2.png" alt=""></i>
          <span>最新口子</span>
        </a>
      </li>
      <li class="list">
        <a href="javascript:;">
          <i><img src="../../../static/img/icon3.png" alt=""></i>
          <span>大额低息</span>
        </a>
      </li>
      <li class="list">
        <a href="javascript:;">
          <i><img src="../../../static/img/icon4.png" alt=""></i>
          <span>急速下款</span>
        </a>
      </li>
    </ul>
  </div>
  <div class="Notice">
    <i><img src="../../../static/img/形状 97.png" alt=""></i>
  <ul id="con1" ref="con1" :class="{anim:animate==true}">
    <li v-for='(item,index) in items' :key = "index">{{item.name}}</li>
  </ul>
</div>
  <div class="Advertisement">
    <div class="swiper-container-a">
    <div class="swiper-wrapper">
        <div class="swiper-slide item"><img src="../../../static/img/广告一 拷贝.png" alt=""></div>
        <div class="swiper-slide item"><img src="../../../static/img/广告一.png" alt=""></div>
    </div>
  </div>
  </div>
  <div class="Recommend">
    <h4>今日推荐</h4>
    <router-link to="/Recommend">查看更多</router-link>
  </div>
  <div class="cont">
    <ul>
      <a href="javascript:;">
      <li class="entry">
        <div class="img-box">
        <i><img src="../../../static/img/20171115847167488 拷贝.png" alt=""></i>
        </div>
        <div class="info">
            <div class="top">
                <h4 class="tit">乐先花</h4>
              <i><img src="../../../static/img/HOT.png" alt=""></i>
              <p class="txt">花钱就找乐先花，10秒就拿3000元</p>
              <button>立即申请</button></div>
            <div class="bottom">
              <div>
                <p>预估额度</p>
                <span>1000-8000</span>
              </div>
                            <div>
                <p>期数范围</p>
                <span>7-14</span><span class="em">天</span>
              </div>
                            <div>
                <p>今日申请</p>
                <span>71252165</span><span class="em">人</span>
              </div>
            </div>
        </div>
      </li>
      </a>
       <a href="javascript:;">
        <li class="entry">
        <div class="img-box">
        <i><img src="../../../static/img/图层 1 拷贝.png" alt=""></i>
        </div>
        <div class="info">
            <div class="top">
                <h4 class="tit">天天花</h4>
              <i><img src="../../../static/img/NEW.png" alt=""></i>
              <p class="txt">花钱就找乐先花，10秒就拿3000元</p>
              <button>立即申请</button></div>
            <div class="bottom">
              <div>
                <p>预估额度</p>
                <span>1000-8000</span>
              </div>
                            <div>
                <p>期数范围</p>
                <span>7-14</span><span class="em">天</span>
              </div>
                            <div>
                <p>今日申请</p>
                <span>71252165</span><span class="em">人</span>
              </div>
            </div>
        </div>
      </li>
      </a>
       <a href="javascript:;">
        <li class="entry">
        <div class="img-box">
        <i><img src="../../../static/img/出钱快.png" alt=""></i>
        </div>
        <div class="info">
            <div class="top">
                <h4 class="tit">出钱快</h4>
              <i><img src="../../../static/img/HOT.png" alt=""></i>
              <p class="txt">花钱就找乐先花，10秒就拿3000元</p>
              <button>立即申请</button></div>
            <div class="bottom">
              <div>
                <p>预估额度</p>
                <span>1000-8000</span>
              </div>
                            <div>
                <p>期数范围</p>
                <span>7-14</span><span class="em">天</span>
              </div>
                            <div>
                <p>今日申请</p>
                <span>71252165</span><span class="em">人</span>
              </div>
            </div>
        </div>
      </li>
      </a>
    </ul>
  </div>
  </div>
    <navbar></navbar>
  </div>
</template>
<script>
import Swiper from 'swiper'; 
import 'swiper/dist/css/swiper.min.css';
import navbar from '@/components/tab/navbar.vue'
export default {
    data() {
      return {
        animate:false,
        items:[  
        {name:"恭喜高女士成功借款xxxx元。"},
        {name:"恭喜王女士成功借款xxxx元。"},
        {name:"恭喜陈先生成功借款xxxx元。"},
        {name:"恭喜高先生成功借款xxxx元。"},
        ],
      }
    },
    created(){
      setInterval(this.scroll,3000)
    },
    methods:{
  scroll(){
    var  con1 = this.$refs.con1;
    // con1.style.marginTop='-1rem';
    this.animate=!this.animate;
    var that = this; 
    setTimeout(function(){
    // var  con1 = this.$refs.con1;
        that.items.push(that.items[0]);
        that.items.shift();
        // con1.style.marginTop='0rem';
        that.animate=!that.animate;  
    },500);
  }
  },
    components: {
			navbar	
		},
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    mounted() {
var mySwiper = new Swiper('.swiper-container', {
  autoplay: {
    delay: 5000,//1秒切换一次
  },
  direction: 'horizontal',   //水平滑动                 
  centeredSlides: true,              //居中展示                        
  spaceBetween:20,           //间距20px
  slidesPerView:'auto',            //显示多少个
pagination: {
    el: '.swiper-pagination',
  },
});
var mySwiper = new Swiper('.swiper-container-a',{
slidesPerView : 3,
// slidesOffsetBefore : -60,
  direction: 'horizontal',   //水平滑动                                   
  spaceBetween:'6%',           //间距20px
  slidesPerView:'auto',            //显示多少个
})
    },
  }
</script>
<style scoped>
.box{width: 100%;height: 100%;background: #fff;}
 li{list-style: none;}
 ul{list-style: none;}
a{text-decoration: none;}
*{margin: 0;padding: 0;}
.title{text-align: center;width: 100%;height: 3rem;font-size:18px;font-family:PingFang-SC-Bold;font-weight:bold;color:rgba(44,66,141,1);line-height: 3rem;background: #fff;z-index: 999;top: 0}
.swiper-slide{width: 93%;height: 11rem;}
.swiper-slide img{width: 100%;height: 100%;}
.swiper-slide a{display: block;}
.menu{width: 100%;height: auto;display: block}
.menu ul{width:100%;height: auto;display: flex}
.list{height: auto;float: left;margin: 1rem;text-align: center;flex: 1;font-size: 12px;}
.list i{width: 3.5rem;height: 3.5rem;display: block;margin: auto;}
.list i img{width:100%;height: 100%;}
.list a{display: block;}
.list span{display: block;padding-top: .5rem;font-family:PingFang-SC-Bold;font-weight:bold;color:rgba(44,66,141,1);}
.Notice{height: 1.5rem;border-bottom: 1px solid #000;margin: 1rem 1rem .5rem 1rem;overflow:hidden;  transition: all 0.5s;}
.Notice i{display: block;width: 1rem;height: 1rem;float: left;line-height: 1.8rem}
.Notice img{width: 100%;height: 100%;}
.Notice ul li{display: inline-block;font-size:13px;font-family:PingFang-SC-Light;font-weight:300;color:rgba(100,111,147,1);padding-left: 1rem;height: 1rem;}
.anim{transition: all 0.5s;}
.item{width: 50%;height: 5rem;}.item img{width: 100%;height: 100%;}
.swiper-container-a{overflow: hidden}
.swiper-container{margin-top: 3rem}
.Recommend{height: 2rem;margin: 1rem 1rem .5rem 1rem;line-height: 2rem;}
.Recommend h4{display: inline;}
.Recommend a{float: right;display: inline; font-family:PingFang-SC-Bold;font-weight:bold;color:rgba(44,66,141,1);font-size: 13px;}
.entry{height: 6rem;border-top: 1px solid #EAEAEA;border-bottom: 1px solid #EAEAEA;padding: 1rem 1rem 1rem 1rem;position: relative}
.cont{height: auto;margin-bottom: 18%;}
.cont button{background: url(../../../static/img/btn.png)no-repeat}
.cont a{display: list-item}
.tit{color: #2C428D}
.img-box i{display: inline-block;width: 3rem;height: 3rem;}.cont .img-box{width: 20%;float: left;height: 100%;}.cont i img{width: 100%;height: 100%;}
.cont .info{float: right;width:80%;height: 100%;position: relative;}
.top{width: 100%;height: 50%;}.top h4{display: inline;} .top i{display: inline-block;width: 3rem;height: 1.3rem;position: absolute;left: 3.5rem;} .top i img{width:100%;height: 100%;}
.top p{overflow: hidden;white-space: nowrap;text-overflow: ellipsis;width: 11rem; font-size:12px;font-family:PingFang-SC-Light;font-weight:300;color:rgba(100,111,147,1); display: inline;position: absolute;left: 0;top: 2rem;} .top button{outline: none;float: right;height: 80%;width: 5rem;background-size: 100% 100%; border: 0;font-size:13px;font-family:PingFang-SC-Bold;font-weight:bold;color:rgba(255,255,255,1);}
.bottom{width: 100%;height: 50%;} .bottom div{width:33.333%;height: auto; float: left;}.bottom p{display: inline;font-size:12px;font-family:PingFang-SC-Light;font-weight:300;color:rgba(175,180,202,1);}
.bottom span{padding-top: .5rem;display: table-cell;font-size:14px;font-family:UniformCondensed-Medium;font-weight:normal;color:rgba(195,14,12,1);}.bottom .em{display: table-cell;font-size:12px;font-family:PingFang-SC-Light;font-weight:normal;color:rgba(195,14,12,1);}
@media screen and (device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2){
    .list i{width: 3rem;height: 3rem;}
    .top p{overflow:hidden;white-space:nowrap;text-overflow:ellipsis;width: 8rem;}
    .swiper-container-a .swiper-slide{height: 5rem;}
    .swiper-container .swiper-wrapper{height: 9.5rem;}
}
.swiper-wrapper{width: 100%;}
.Advertisement{margin-left: 1rem;}
.swiper-pagination{bottom: 0;}
.swiper-pagination-bullet {
    width: 20px;
    height: 3px;
    display: inline-block;
    background: #000;
    opacity: .2;
}
@media screen and (device-width: 414px) and (device-height: 736px){
    .one{height: 12rem;}
}
@media screen and (device-width: 411px) and (device-height: 823px){
    .one{height: 12rem;}
}
@media screen and (device-width: 411px) and (device-height: 731px){
    .one{height: 12rem;}
}
</style>

