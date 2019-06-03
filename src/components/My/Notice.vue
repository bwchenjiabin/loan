<template>
    <div class="box">
       <div class="title"> 
           <i v-on:click="back"><img src="../../../static/img/返回.png" alt=""></i><span class="my"></span>
            <span class="geren">公告</span>
       </div>
       <div class="content">
           <ul>
               <li class="list">
                    <div class="left"><i><img src="../../../static/img/20171115847167488 拷贝.png" alt=""></i></div>
                    <div class="right">
                        <span class="tit">重磅：史上最强小额贷款对接活动来袭！</span>
                        <p class="txt">所有的光芒与精彩。都需要时间才能被看到！上同城约单，随时随地约定您的精彩！</p>
                        <span class="time">23小时前</span>
                    </div>
               </li>
               <li class="list">
                    <div class="left"><i><img src="../../../static/img/20171115847167488 拷贝.png" alt=""></i></div>
                    <div class="right">
                        <span class="tit">重磅：史上最强小额贷款对接活动来袭！</span>
                        <p class="txt">所有的光芒与精彩。都需要时间才能被看到！上同城约单，随时随地约定您的精彩！</p>
                        <span class="time">23小时前</span>
                    </div>
               </li>
           </ul>
       </div>
    </div>
</template>
<script>
export default {
    methods:{
        back(){
        this.$router.go(-1);//返回上一层
    },
    }
}
</script>
<style scoped>
html,body{background: #f6f7f9;width: 100%;height: 100%;}
/* .box{background: #f6f7f9;width: 100%;height: 100%;} */
i{display: inline-block;}
.my{font-size:16px;font-family:PingFang-SC-Bold;font-weight:bold;color:rgba(100,111,147,1);}
.geren{font-size:18px;font-family:PingFang-SC-Bold;font-weight:bold;color:rgba(44,66,141,1);position: absolute;left: 45%;}
.title{width: 100%;height: 4rem;border-bottom: 1px solid #AFB4CA;background: #fff;display: flex;align-items: center;position: relative;}
.title i{width: 1.5rem;height: 1.5rem;display: inline-block;padding-left: 1rem;} .title i img{width: 100%;height: 100%;}
.left{width: 20%;height: 100%;display: inline-block;}
.content ul li p{display: inline-block;font-size:12px;font-family:PingFang-SC-Regular;font-weight:400;color:rgba(100,111,147,1);margin: 0;}.content i{width: 3rem;height: 3rem;}.content i img{width: 100%;height: 100%;}
.content ul li .tit{display: inline-block;font-size:14px;font-family:PingFang-SC-Regular;font-weight:400;color:rgba(51,51,51,1);padding-bottom: .5rem}
.content .time{font-size:12px;font-family:PingFang-SC-Regular;font-weight:400;color:rgba(153,153,153,1);display: inline-block;padding-top: .5rem}
.content .list{display: inline-block;background: #fff;padding: 1.5rem 1rem 1rem 1rem;margin-bottom: .5rem}.content .right{width: 80%;float: right;}
</style>
