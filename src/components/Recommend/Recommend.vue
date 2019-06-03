<template>
    <div>
        <div class="box">
            <div class="title">
                贷款大全
                <i><img src="../../../static/img/share_icon.png" alt=""></i>
            </div>

            <div class="banner">

              
                <!-- <div class="swiper-container">
                <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item,index) in lunbo" :key = "index">
                <a href="javascript:;">
                    <h4>「新品推荐」</h4>
                    <p>快至三分钟放款</p>
                    <a href="javascript:;"></a><img src="../../../static/img/recommend_banner.png" alt="">
                </a>
                </div>  
                </div>
                </div><br> -->

                 <div class="swiper-container">
                <div class="swiper-wrapper">
                <div class="swiper-slide">
                <a href="javascript:;">
                    <h4>「新品推荐」</h4>
                    <p>快至三分钟放款</p>
                    <a href="javascript:;"></a><img src="../../../static/img/recommend_banner.png" alt="">
                </a>
                </div>  
                </div>
                </div><br>
            </div>
            <div class="text">同时申请4家以上产品，下款率达95%!</div>
            <div class="cont">
                <ul v-for="(item,index) in list"
            :key = "index">  
                    <li class="list">
                        <div class="top">
                            <div class="head">   
                            <i><img :src="item.proLogo" alt=""></i>
                            <h4>{{item.goodsName}}</h4>
                            <div class="red " id="haha" >  
                                <span style="color:red;" v-if="item.hotNewTagName == 'HOT'">HOT</span>
                                <span style="color:blue;" v-if="item.hotNewTagName == 'NEW'">NEW</span>
                            </div>
                            <!-- <em class="blue">{{item.hotNewTagName}}</em> -->
                            <a href="javascript:;" class="Apply">
                                立即申请
                            </a>
                            </div>
                            <div class="Label" v-for="(item,index) in picArr" :key = "index">
                              <span v-if="item[i] == '三分钟审批' " style="color:red;border:1px solid red;border-radius:16px;font-size:12px;">{{item[i]}}</span>
                              <span v-if="item[i] == '无回访' " style="color:blue;border:1px solid blue;border-radius:16px;font-size:12px;">{{item[i]}}</span>
                              <span v-if="item[i] == '低利息' " style="color:green;border:1px solid green;border-radius:16px;font-size:12px;">{{item[i]}}</span>
                                    <!-- <span style="color:red;border:1px solid red;border-radius:16px;font-size:12px;" v-if="item.shopTag.split(',')[0] == '三分钟审批'">{{item.shopTag.split(',')[0]}}</span>
                                    <span style="color:blue;border:1px solid blue;border-radius:16px;font-size:12px;" v-if="item.shopTag.split(',')[0] == '无回访'">{{item.shopTag.split(',')[0]}}</span>
                                    <span style="color:green;border:1px solid green;border-radius:16px;font-size:12px;" v-if="item.shopTag.split(',')[0] == '低利息'">{{item.shopTag.split(',')[0]}}</span>
                                    <span style="color:red;border:1px solid red;border-radius:16px;font-size:12px;" v-if="item.shopTag.split(',')[1] == '三分钟审批'">{{item.shopTag.split(',')[1]}}</span>
                                    <span style="color:blue;border:1px solid blue;border-radius:16px;font-size:12px;" v-if="item.shopTag.split(',')[1] == '无回访'">{{item.shopTag.split(',')[1]}}</span>
                                    <span style="color:green;border:1px solid green;border-radius:16px;font-size:12px;" v-if="item.shopTag.split(',')[1] == '低利息'">{{item.shopTag.split(',')[1]}}</span>
                                    <span style="color:red;border:1px solid red;border-radius:16px;font-size:12px;" v-if="item.shopTag.split(',')[2] == '三分钟审批'">{{item.shopTag.split(',')[2]}}</span>
                                    <span style="color:blue;border:1px solid blue;border-radius:16px;font-size:12px;" v-if="item.shopTag.split(',')[2] == '无回访'">{{item.shopTag.split(',')[2]}}</span>
                                    <span style="color:green;border:1px solid green;border-radius:16px;font-size:12px;" v-if="item.shopTag.split(',')[2] == '低利息'">{{item.shopTag.split(',')[2]}}</span>      -->
                            </div>
                        </div>
                        <div class="bottom">
                            <div class="val">
                            <div>
                                <p>预估额度</p>
                                <span>{{item.forecastLines}}</span>
                            </div>
                            <div>
                                <p>期数范围</p>
                                <span>{{item.returnMoneyTime}}</span>
                                <!-- <em>天</em> you r -->
                            </div>
                            <div>
                                <p>今日申请</p>
                                <span>{{item.applyPeopleNum}}</span><em>人</em>
                            </div>
                            </div>
                             <div class="footer" v-if="item.lateWeekTagName == '最新一周浏览量'">
                            <i><img src="../../../static/img/crown_icon.png" alt=""></i>
                            <p class="Lll">{{item.lateWeekTagName}}<em>TOP1</em></p>
                            </div>
                            <div class="footer" v-if="item.lateWeekTagName == ''" style="display:none;">
                             <i><img src="../../../static/img/crown_icon.png" alt=""></i>
                            <p class="Lll">{{item.lateWeekTagName}}<em>TOP1</em></p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <navbar></navbar>
    </div>
</template>
<script>
import navbar from '@/components/tab/navbar.vue'
import Swiper from 'swiper'; 
import 'swiper/dist/css/swiper.min.css';
export default {
  data () {
    return {
      count:{},
      list:{},
      lunbo:{},
    }
  },
    components:{
        navbar
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      },
      picArr:function(){
          return this.count.split(',')
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
});
    },
created () {
    // this.getdata();   
    // this.getlist();
  },
methods: {
    async getdata () {
      const {data: res} = await this.$axios.post('foreign/home/rImgs?platformType=1', {
      })
        this.lunbo = res.data
        console.log(this.lunbo)
    },
    async getlist () {
      const {data: res} = await this.$axios.post('foreign/recommend/list?from=0&size=10', {
      })
        this.list = res.data
        this.count = res.data.shopTag
        console.log(this.list)
    },
  },
}
</script>
<style scoped>
body{background: #f6f7f9;}
.box{background: #f6f7f9;}
.title{text-align: center;width: 100%;height: 3rem;font-size:18px;font-family:PingFang-SC-Bold;font-weight:bold;color:rgba(44,66,141,1);line-height: 2.5rem;background: #fff;z-index: 999;position: fixed; top: 0;}
.banner{margin-top: 3rem;width: 100%; height: auto;display: flex;background: #f6f7f9;}
.swiper-slide{width: 93%;height:6rem; position: relative;}
.swiper-slide h4{position: absolute;top: 1.5rem;left: 3rem;color: #fff;margin: 0}
.swiper-slide img{width: 100%;height: 100%;}
.swiper-slide a{display: block;}
.swiper-slide p{position: absolute;margin: 0;font-size:12px;font-family:DengXian-Light;font-weight:300;color:rgba(255,255,255,1);top: 3rem;left: 3rem;}
.title i{width: 1.5rem;height: 1.5rem;position: absolute;right: 1rem;top: 1rem}.title i img{width: 100%;height: 100%;} 
.text{background: #f6f7f9;width: 100%;height: 3rem;text-align: center;line-height: 3rem;font-size:12px;font-family:PingFang-SC-Bold;font-weight:bold;color:rgba(44,66,141,1);}
.cont{height: auto;   margin-bottom: 18%;}
.list{padding: 1rem 1rem 1rem 1rem;background:rgba(255,255,255,1);border-radius:10px;margin: .5rem}
.list i{width:2rem;height: 2rem;display: inline-block} .list i img{width: 100%;height: 100%;}
.top{padding:.5rem 1rem 2rem 1rem;border-bottom: 1px solid #EAEAEA;position: relative;}
.Apply{position: absolute;right: 0; font-size:14px;font-family:PingFang-SC-Bold;font-weight:bold;color:rgba(47,92,247,1);}
.top h4{font-size:20px;font-family:PingFang-SC-Bold;font-weight:bold;color:rgba(44,66,141,1);padding-left: 1rem;padding-right: 1rem;margin: 0;}
.red{font-family:Verdana;font-weight:400;color:rgba(226,2,0,1);font-size: 14px}
.blue{font-family:Verdana;font-weight:400;color:rgba(3,133,255,1);font-size: 14px}
.val{padding: .5rem;display: flex} .val div{width:33.333%;height: auto; float: left;}.val p{display: inline;font-size:12px;font-family:PingFang-SC-Light;font-weight:300;color:#AFB4CA;}
.val span{display: table-cell;font-size:16px;font-family:UniformCondensed-Medium;font-weight:normal;color:rgba(195,14,12,1);}.bottom em{display: table-cell;font-size:13px;font-family:UniformCondensed-Medium;font-weight:normal;color:rgba(195,14,12,1);}
.Label{font-size: 12px;position: absolute;top: 3rem;left: 3rem;}
.head{display: flex;justify-content: start;align-items: center;}
.Label span{padding: .1rem .5rem .1rem .5rem}
.Label .red{border:1px solid rgba(255,92,81,1);border-radius:16px;font-size:12px;font-family:PingFang-SC-Light;font-weight:300;color:#FF5C51;}
.Label .blue{border:1px solid #0095FF;border-radius:16px;font-size:12px;font-family:PingFang-SC-Light;font-weight:300;color:#0095FF;}
.Label .green{border:1px solid #24A700;border-radius:16px;font-size:12px;font-family:PingFang-SC-Light;font-weight:300;color:#24A700;}
.footer em{font-size:14px;font-family:PingFang-SC-Light;font-weight:300;color:#DB0200;float: right;}
.footer p{font-size:14px;font-family:PingFang-SC-Light;font-weight:300;color:rgba(11,26,74,1);display: inline;margin: 0}
.footer{padding: .5rem;display: flex;align-items: center;border-top: 1px solid #EAEAEA;}.footer img{width: 100%;height: 100%;}.footer i{width: 1rem;height: 1rem;margin-right: 0.5rem;margin-bottom: .3rem;}
</style>
