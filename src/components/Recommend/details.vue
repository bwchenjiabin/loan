<template>
    <div class="box">
       <div class="title"> 
           <router-link to="/Nolanding"><i><img src="../../../static/img/返回.png" alt=""></i></router-link><span class="my">推荐</span>
            <span class="geren">乐先花</span>
            <i class="zf"><img src="../../../static/img/share_icon.png" alt=""></i>
       </div>
       <div class="img-box">
           <i class="tit-img"><img src="../../../static/img/default_avatar.png" alt=""></i>
           <h4>乐先花-极速下款</h4>
           <span class="Success">成功率99%</span>
           <span class="complete">261251人已完成借款</span>
           <span class="star"><i>★</i>不需抵押</span>
           <span class="stare"><i>★</i>不需芝麻分</span>
           <img src="../../../static/img/card_bg.png" alt="">
       </div>
       <div class="cont">
           <ul>
               <li class="list">
                    <a href="javascript:;">
                        <i><img src="../../../static/img/limit_icon.png" alt=""></i>
                        <span>预估额度</span>
                        <span class="number">35000</span>
                    </a>
                </li> 
                  <li class="list">
                    <a href="javascript:;">
                        <i><img src="../../../static/img/time_icon.png" alt=""></i>
                        <span>放款时间</span>
                        <span class="number">3分钟</span>
                    </a>
                </li> 
                  <li class="list">
                    <a href="javascript:;">
                        <i><img src="../../../static/img/lilv_icon.png" alt=""></i>
                        <span>日利率</span>
                        <span class="number">0.05%</span>
                    </a>
                </li> 
                  <li class="list">
                    <a href="javascript:;">
                        <i><img src="../../../static/img/overdue_icon.png" alt=""></i>
                        <span>还款期限</span>
                        <span class="number">7天</span>
                    </a>
                </li> 
           </ul>
       </div>
       <div class="introduce">
           <i></i><h5>产品介绍</h5>
       </div>
       <div class="neirong">
           <span>乐先花</span>
           <p>乐先花是一款1000-5000额度的信用贷款产品，快达两小时放款。轻轻松松，贷款成功。</p>
       </div>
       <div class="introduce">
           <i></i><h5>审核方式</h5>
       </div>
       <div class="neirong">
            <ul>
                <li>
                    还款方式：<span>到期还款</span>
                </li>
                <li>
                    平均放款：<span>50000</span>
                </li>
                <li>
                    审核周期：<span>当天审核</span>
                </li>
                 <li>
                    审核方式：<span>线上审核</span>
                </li>
                 <li>
                    放款时间：<span>当天放款</span>
                </li>
            </ul>  
       </div> 
       <div class="introduce">
           <i></i><h5>申请流程</h5>
       </div>
       <div class="process">
            <ul>
               <li class="list">
                    <a href="javascript:;">
                        <i><img src="../../../static/img/flow_overdue_icon.png" alt=""></i>
                        <span>注册</span>
                    </a>
                </li> 
                <div class="jianju"></div>
                  <li class="list">
                    <a href="javascript:;">
                        <i><img src="../../../static/img/flow_application_icon.png" alt=""></i>
                        <span>申请</span>
                    </a>
                </li> 
                <div class="jianju"></div>                
                  <li class="list">
                    <a href="javascript:;">
                        <i><img src="../../../static/img/flow_auditing_icon.png" alt=""></i>
                        <span>审核</span>
                    </a>
                </li> 
                <div class="jianju"></div>                
                  <li class="list">
                    <a href="javascript:;">
                        <i><img src="../../../static/img/flow_ loan_icon.png" alt=""></i>
                        <span>放款</span>
                    </a>
                </li> 
           </ul>
       </div>
       <div class="footer">
           - 到底了-
       </div>
       <button>立即申请</button>
    </div>
</template>
<script>
export default {

}
</script>
<style scoped>
html{background: #d0d5df;}
.box{background: #f6f7f9;width: 100%;height: 100%;}
i{display: inline-block;}
.my{font-size:16px;font-family:PingFang-SC-Bold;font-weight:bold;color:rgba(100,111,147,1);}
.geren{font-size:18px;font-family:PingFang-SC-Bold;font-weight:bold;color:rgba(44,66,141,1);position: absolute;left: 40%;}
.title{width: 100%;height: 4rem;border-bottom: 1px solid #AFB4CA;background: #fff;display: flex;align-items: center;position: fixed;z-index: 999;top: 0;margin-bottom: 2rem}
.title i{width: 1.5rem;height: 1.5rem;display: inline-block;padding-left: 1rem;} .title i img{width: 100%;height: 100%;}
.title .zf{width: 1.5rem;height: 1.5rem;position: absolute;right: 1rem;top: 1.5rem}.title .zf img{width: 100%;height: 100%;}
.img-box{width: 93%;height: 7rem;margin: .5rem auto;position: relative;margin-top: 5rem}.img-box img{width: 100%;height: 100%;}
.img-box h4{font-size:18px;font-family:PingFang-SC-Bold;font-weight:bold;color:rgba(255,255,255,1);position: absolute;top: 0;left: 4rem;}
.img-box .tit-img{width:2.5rem;height: 2.5rem;position: absolute;top: 2rem;left: 1rem;}
.Success{position: absolute;top: 3.5rem;left: 4rem;font-size:14px;font-family:PingFang-SC-Light;font-weight:300;color:rgba(255,255,255,1);}
.complete{position: absolute;top: 2rem;left: 15rem;font-size:13px;font-family:PingFang-SC-Light;font-weight:300;color:rgba(255,255,255,1);}
.star{font-size:12px;font-family:PingFang-SC-Light;font-weight:300;color:rgba(255,255,255,1);position: absolute;top: 5.5rem;left: 4rem;}
.stare{font-size:12px;font-family:PingFang-SC-Light;font-weight:300;color:rgba(255,255,255,1);position: absolute;top: 5.5rem;left: 9rem;}
.cont{padding: 1rem;background: #fff;margin-bottom: 1rem}
.cont ul{display: flex;}.list{height: auto;text-align: center;flex: 1;font-size:13px;font-family:PingFang-SC-Light;font-weight:300;color:rgba(100,111,147,1);}
.list i{width: 2.5rem;height: 2.5rem;display: block;margin: auto;}
.list i img{width:100%;height: 100%;}
.list span{display: block;padding-top: .5rem;font-family:PingFang-SC-Bold;font-weight:bold;color:rgba(44,66,141,1);}
.list .number{font-size:16px;font-family:PingFang-SC-Light;font-weight:300;color:rgba(195,2,0,1);}
.introduce{padding: 1rem;position: relative;}
.introduce h5{display: inline;padding-left: 1rem;font-size: 16px;}
.introduce i{padding: .5rem 0rem .5rem .3rem;background: #F5C53C;position: absolute;top: 1.2rem}
.neirong{padding: .5rem 2rem 1rem 2rem ;background: #fff;}.neirong span{font-size:15px;font-family:PingFang-SC-Bold;font-weight:bold;color:rgba(11,26,74,1);}
.neirong p{font-size:14px;font-family:PingFang-SC-Light;font-weight:300;color:rgba(100,111,147,1);}
.neirong ul li{color: #646F93;font-size: 14px;padding-bottom: .5rem;}.neirong ul li span{color: #0B1A4A;}
.process{padding: 1.5rem;}
.process ul{display: flex;}.process ul li{flex: 1}
.jianju{width: 1rem;height: 1px; background: #2C428D;margin-top: 1.5rem;}
.footer{width: 100%;height: 3rem;text-align: center;line-height: 3rem;font-size:14px;font-family:PingFang-SC-Light;font-weight:300;color:rgba(167,167,167,1);}
.box button{width: 100%;height: 3rem;background: #BB0200;font-size:16px;font-family:PingFang-SC-Bold;font-weight:bold;color:rgba(255,255,255,1);border: none;outline: none;}
</style>