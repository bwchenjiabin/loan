<template>
    <div>
        <div class="box">
            <div class="header">
                <router-link to="/Notice"><div class="news"><img src="../../../static/img/message_icon.png" alt=""></div></router-link>
                <div class="Photo"><router-link to="/data"><i><img src="../../../static/img/default_avatar.png" alt=""></i></router-link></div>
                <i class="img-phone"><img src="../../../static/img/cellphone_icon.png" alt=""></i><span class="phone">150****3215</span>
            </div>
            <div class="content">
                <ul>
                    <router-link to="/data"><li class="list">
                        <i><img src="../../../static/img/personal_icon.png" alt=""></i>
                        个人资料
                       <i class="into"><img src="../../../static/img/arrow_icon.png" alt=""></i>
                    </li></router-link>
                    <router-link to="/service"><li class="list">
                        <i><img src="../../../static/img/customer_service_icon.png" alt=""></i>
                        联系客服
                        <i class="into"><a href="javascript:;"><img src="../../../static/img/arrow_icon.png" alt=""></a></i>
                    </li></router-link>
                    <router-link to="/Help"><li class="list">
                        <i><img src="../../../static/img/help_icon.png" alt=""></i>
                        帮助中心
                        <i class="into"><a href="javascript:;"><img src="../../../static/img/arrow_icon.png" alt=""></a></i>
                    </li></router-link>
                    <router-link to="/feedback"><li class="list">
                        <i><img src="../../../static/img/view_icon.png" alt=""></i>
                        意见反馈
                        <i class="into"><a href="javascript:;"><img src="../../../static/img/arrow_icon.png" alt=""></a></i>
                    </li></router-link>
                    <router-link to="/About"><li class="list">
                        <i><img src="../../../static/img/aboutus_icon.png" alt=""></i>
                        关于我们
                        <i class="into"><a href="javascript:;"><img src="../../../static/img/arrow_icon.png" alt=""></a></i>
                    </li></router-link>
                    <router-link to="/Set"><li class="list">
                        <i><img src="../../../static/img/setup_icon.png" alt=""></i>
                        设置
                        <i class="into"><img src="../../../static/img/arrow_icon.png" alt=""></i>
                    </li></router-link>
                </ul>
            </div>
        </div>
        <navbar></navbar>
    </div>
</template>
<script>
import navbar from '@/components/tab/navbar.vue'
export default {
    components:{
        navbar
    },
    methods:{
        getdata () {
      let url = "foreign/my?pkId="+31
      this.$axios.post(url)
        .then(res => {
         console.log(res.data)
         if (res.data.code == true) {
             let phone = res.data.data.phoneNum;
             let myphone = phone.substr(3, 4);
             let lphone = phone.replace(myphone, "****");
             $(".phone").text(lphone)
                }
            })
        },
    },
    created(){
        this.getdata()
    }
}
</script>
<style scoped>
html{background: #f6f7f9;}
.box{background: #f6f7f9;width: 100%;height: 100%;}
.header{background: url(../../../static/img/me_bg.png)no-repeat; background-size: 100% 100%;    width: 100%;height: 11rem; position: relative;}
.header a{display: inline-block;width: 1.5rem;height: 1.5rem;position: absolute;top: 1rem;right: 1rem;}.header a img{width: 100%;height: 100%;}
.Photo i{width: 3.5rem;height: 3.5rem;position: absolute;top: 3rem;right: 17rem;}.Photo i img{width: 100%;height: 100%;}
.username{font-size:20px;font-family:PingFang-SC-Bold;font-weight:bold;color:rgba(255,255,255,1);position: absolute;top: 4rem;left: 7rem;}
.phone{font-size:16px;font-family:PingFangSC-Regular;font-weight:400;color:rgba(255,255,255,1);line-height:70px;position: absolute;top: 3.5rem;left: 8rem;}
.img-phone{width: 0.8rem;height: 1.3rem;position: absolute;top: 5rem;left: 6.5rem;}.img-phone img{width: 100%;height: 100%;}
.list{background:rgba(255,255,255,1);padding: .7rem;margin: .5rem 0 .5rem 0;display: flex;align-items: center;font-size:14px;font-family:PingFang-SC-Bold;font-weight:bold;color:rgba(11,26,74,1);position: relative;}
.list i{width: 1.5rem;height: 1.5rem;display: inline-block;padding-right: 1rem;}.list i img{width: 100%;height: 100%;}
.list .into{width: .5rem;height: 1rem;display: inline-block;position: absolute;top: 35%;right: .5rem;}
.list a{display: inline;}
</style>
