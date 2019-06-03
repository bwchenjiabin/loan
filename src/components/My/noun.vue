<template>
    <div class="box">
       <div class="title"> 
           <router-link to="/Help"><i><img src="../../../static/img/微信图片_20190528150040.png" alt=""></i></router-link><span class="my">帮助中心</span>
            <span class="geren">名词解释</span>
       </div>
       <div class="content">
          <h3>什么是贷款超市？</h3>
          <p>“贷款超市”一词是对行业内的人说的，简单的理解类似于手机上的应用商店，是一个通过“应用商店”下载注册贷款软件，给其他现金贷平台导量的平台。换句话说，贷款超市是连接贷款用户与现金贷平台的产品，所有业务都是基于这个关系。</p>
       </div>
       <div class="footer">
           <p>温馨提示：如您有任何问题
            请联系客服热线<span>15535375129</span></p>
            
       </div>
    </div>
</template>
<script>
export default {

}
</script>
<style scoped>
html,body{background: #f6f7f9;width: 100%;height: 100%;}
.box{background: #f6f7f9;width: 100%;height: 100%;}
i{display: inline-block;}
.my{font-size:16px;font-family:PingFang-SC-Bold;font-weight:bold;color:rgba(100,111,147,1);padding-left: .5rem;padding-top: .2rem;}
.geren{font-size:18px;font-family:PingFang-SC-Bold;font-weight:bold;color:rgba(44,66,141,1);position: absolute;left: 45%;}
.title{width: 100%;height: 4rem;border-bottom: 1px solid #AFB4CA;background: #fff;display: flex;align-items: center;position: relative;}
.title i{display: inline-block;padding-left: 1rem;padding-top: .4rem; width: 0.75rem;height: 1.2rem;} .title i img{width: 100%;height: 100%;}
.content{padding: 1rem 1.5rem 1rem 1.5rem;margin-top: .5rem;margin-bottom: .5rem;background: #fff;}.content h3{font-size:18px;font-family:PingFang-SC-Bold;font-weight:bold;color:rgba(11,26,74,1);}
.content p{font-size:14px;font-family:PingFang-SC-Bold;font-weight:bold;color:rgba(100,111,147,1);line-height: 1.8rem;}
.footer{padding: 1rem 1.5rem 1rem 1.5rem;background: #fff;}.footer p{font-size:14px;font-family:PingFang-SC-Bold;font-weight:bold;color: #A7A7A7;width: 12rem;line-height: 1.5rem;}
.footer span{color: #2C428D}
</style>
