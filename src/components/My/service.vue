<template>
    <div class="box">
       <div class="title"> 
           <i v-on:click="back"><img src="../../../static/img/微信图片_20190528150040.png" alt=""></i><span class="my"></span>
            <span class="geren">联系客服</span>
       </div>
       <div class="banner">
           <div class="img-box">
                <img src="../../../static/img/cs_banner.png" alt="">
           </div>
       </div>
       <div class="phone">
           <div class="logo-img">
               <i class="logo"><img src="../../../static/img/cs_icon.png" alt=""></i>
           </div>
           <span>24小时全国服务热线</span><br><br>
           <p>800-258-3695</p>
           <a href="tel:800-258-3695" class="dianhua"><i class="jr"><img src="../../../static/img/arrow_icon.png" alt=""></i></a>
       </div>
       <div class="vx">
           <i><img src="../../../static/img/wechat_icon.png" alt=""></i>
           <span class="code">微信号:4894499</span>
       </div>
        <div class="vx">
           <i><img src="../../../static/img/wechat_icon.png" alt=""></i>
           <span class="code">或长按二维码保存至微信中识别</span>
       </div>
        <div class="vx">
           <i><img src="../../../static/img/wechat_icon.png" alt=""></i>
           <div class="ewm">
               <img src="../../../static/img/QRcode.png" alt="">
           </div>
       </div>
    </div>
    
</template>
<script>
export default {
data() {
      return {   

     }
  },
  methods: {
          back(){
        this.$router.go(-1);//返回上一层
    },

  },

}
</script>

<style scoped>
html{background: #d0d5df;}
.box{background: #f6f7f9;width: 100%;height: 100%;}
i{display: inline-block;}
.my{font-size:16px;font-family:PingFang-SC-Bold;font-weight:bold;color:rgba(100,111,147,1);}
.geren{font-size:18px;font-family:SourceHanSansCN-Regular;font-weight:400;color:rgba(11,26,74,1);position: absolute;left: 40%;}
.title{width: 100%;height: 4rem;border-bottom: 1px solid #AFB4CA;background: #fff;display: flex;align-items: center;position: fixed;}
.title i{display: inline-block;padding-left: 1rem;padding-top: .4rem; width: 0.75rem;height: 1.2rem;} .title i img{width: 100%;height: 100%;}
.banner{padding: 1rem;}
.banner .img-box{margin: auto;margin-top: 4rem;}
.banner .img-box img{width: 100%;height: 100%;}.phone{margin: 1rem 1rem 1.5rem 1rem;padding:.5rem;display: flex;align-items: center; background: #fff;position: relative;height: 4rem;}
.phone .logo{width: 2rem;height: 2rem;display: inline-block;} .phone .logo img{width: 100%;height: 100%;}
.logo-img{width: 20%;border-right: 1px solid #ccc;display: inline-block;display: flex;justify-content: center;align-items: center;}.phone p{display: inline;color: #7F7E7E;font-size: 14px;position: absolute;left: 6rem;top: 2rem;}
.phone span{font-size:16px;font-family:Adobe Heiti Std R;font-weight:normal;color:rgba(28,27,27,1);position: absolute;bottom: 2.5rem;left: 6rem;}
.phone .dianhua{width: .8rem;height: 1.3rem;position: absolute;right: 1rem;bottom: 2rem;}.phone .jr{width: .8rem;height: 1.3rem;}.phone .jr img{width: 100%;height: 100%;}.vx{padding:.5rem;display: flex;align-items: center;background: #fff;margin: .5rem}
.vx .code{font-size:14px;font-family:SourceHanSansCN-Regular;font-weight:400;color:rgba(11,26,74,1);padding-left: 2rem;}
.vx i{width: 2rem;height: 2rem;display: inline-block;padding-left: 1rem}.vx i img{width: 100%;height: 100%;}
.vx .ewm{width: 10rem;height: 10rem;padding-left: 2rem} .vx .ewm img{width: 100%;height: 100%;}
</style>
