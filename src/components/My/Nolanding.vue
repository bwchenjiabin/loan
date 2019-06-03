<template>
    <div>
        <div class="box">
            <div class="header">
                 <router-link to="/Notice"><div class="news"><img src="../../../static/img/message_icon.png" alt=""></div></router-link>
                <router-link to="/register"><div class="Photo"><i><img src="../../../static/img/default_avatar.png" alt=""></i></div></router-link>
                <div class="land"><router-link to="/register">立即登录/注册</router-link></div>
            </div>
            <div class="content">
                <ul>
                    <router-link to="/register"><li class="list">
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
                    <router-link to="/register"><li class="list">
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
    }
}
</script>
<style scoped>
.land{width: 35%; position: absolute;top: 5rem;left: 6rem;}
.land a{font-size:14px;font-family:PingFang-SC-Bold;font-weight:bold;color:rgba(255,255,255,1);}
.news a{display: inline;}
html{background: #f6f7f9;}
.box{background: #f6f7f9;width: 100%;height: 100%;}
.header{background: url(../../../static/img/me_bg.png)no-repeat; background-size: 100% 100%;    width: 100%;height: 11rem; position: relative;}
.news{display: inline-block;width: 1.5rem;height: 1.5rem;position: absolute;top: 1rem;right: 1rem;}.news  img{width: 100%;height: 100%;}
.Photo i{width: 3.5rem;height: 3.5rem;position: absolute;top: 4rem;left: 2rem;}.Photo i img{width: 100%;height: 100%;}
.username{font-size:16px;font-family:PingFang-SC-Bold;font-weight:bold;color:rgba(255,255,255,1);position: absolute;top: 5rem;left: 7rem;}
.list{background:rgba(255,255,255,1);padding: .7rem;margin: .5rem 0 .5rem 0;display: flex;align-items: center;font-size:14px;font-family:PingFang-SC-Bold;font-weight:bold;color:rgba(11,26,74,1);position: relative;}
.list i{width: 1.5rem;height: 1.5rem;display: inline-block;padding-right: 1rem;}.list i img{width: 100%;height: 100%;}
.list .into{width: .5rem;height: 1rem;display: inline-block;position: absolute;top: 35%;right: .5rem;}
.list a{display: inline;}
</style>