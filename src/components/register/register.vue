<template>
    <div class="box">
        <div class="header">
            <div class="logo">
                <i><img src="../../../static/img/login_logo.png" alt=""></i>
            </div>
        </div>
        <div class="content">
            <div class="inp">
               <i><img src="../../../static/img/phone-icon.png" alt=""></i> <input v-model="newPhone" type="number" placeholder="请输入手机号" id="phone" oninput="if(value.length>11)value=value.slice(0,11)" >
            </div>
             <div class="inp">
               <i><img src="../../../static/img/identifying-icon.png" alt=""></i> <input type="text" placeholder="请输入验证码" v-model="one">
               <span class="phonee" v-if="!sendMsgDisabled" @click="send(),getdataa()">获取验证码</span>
               <span class="phonee" v-if="sendMsgDisabled">{{time+'s'}}</span>
            </div>
            <button @click="goAddressDtail();getdata()">一键登录/注册</button>
            <p class="Agreement">点击注册，即表示您已同意 <a href="javascript:;">《鹦鹉服务协议》</a></p>
        </div>
        <div class="land"><router-link to="/Land">账号密码登录</router-link></div>
    </div>    
</template>
<script>
export default {
    data(){
        return{
            newPhone:'',
            time: 60, // 发送验证码倒计时
            sendMsgDisabled: false,
            one:''
        }
    },
    methods:{
      goAddressDtail() {
        if (this.newPhone.length<1) {
            layer.msg("请输入手机号");
            return;
        }
        const self = this;
        if (!(/^1[34578]\d{9}$/.test(self.newPhone))) {
            layer.msg("电话号码格式错误");
            return;
        }
        if (this.one.length<1) {
            layer.msg("请输入验证码");
            return;
        } 
      },
    getdata () {
      let url = "foreign/register?phoneNum="+this.newPhone+"&code="+this.one+"&regeditClient="+2+"&belongProvince="+'山西'+"&belongCity="+'太原'+"&sourceAddress="+'应急大师'
      this.$axios.post(url)
        .then(res => {
         console.log(res.data)
         if (res.data.code == true) {
          this.$router.replace('/My');    //需要执行
         }
        })
    },
    getdataa () {
      let url = "foreign/generate?phoneNum="+this.newPhone
      this.$axios.post(url)
        .then(res => {
         console.log(res.data)
        })
        .catch(function (error) {
        console.log(error);
        })
    },


send() {
    if (this.newPhone.length<1) {
        layer.msg("请输入手机号");
        return;
    }
    let me = this;
    me.sendMsgDisabled = true;
    let interval = window.setInterval(function() {
     if ((me.time--) <= 0) {
      me.time = 60;
      me.sendMsgDisabled = false;
      window.clearInterval(interval);
     }
    }, 1000);
   },
}
}
</script>
<style scoped>
*{margin: 0;padding: 0;}
html,body{background: #fff;}.box{background: #fff;}
.header{background: url(../../../static/img/top-bgm.png)no-repeat;width: 100%;height: 16rem;background-size: 100% 100%;display: flex;justify-content: center;align-items: center;}
.logo{display: inline-block;}.logo i{width: 8rem;height: 8rem;}.logo i img{width: 100%;height: 100%;}
.content{padding: .5rem 3rem 1rem 3rem}.content .inp{border-bottom: 1px solid #D6D6D6;padding: 1rem 0 .5rem 0;height: 2rem; position: relative;margin-bottom: 1rem;}.content .inp input{border: none;width: 85%;height: 100%;float: right;outline: none;background-color: rgba(0, 0, 0, 0);}
.inp i{width: 2rem;height: 2rem;z-index: 9;display: inline-block;} .inp i img{width: 100%;height: 100%;}.inp span{position: absolute;top: 1.3rem;right: 0;z-index: 10;font-size:16px;font-family:SourceHanSansCN-Regular;font-weight:400;color:rgba(44,66,141,1);}
.content button{width: 100%;height: 2.5rem;border:none;outline: none; padding: .5rem;background:linear-gradient(90deg,rgba(0,186,255,1),rgba(0,96,255,1));box-shadow:0px 3px 27px 0px rgba(0,100,255,0.41);border-radius:10px;font-size:15px;font-family:PingFang-SC-Bold;font-weight:bold;color:rgba(255,255,255,1); }
.Agreement{font-size: 12px;padding-top: 1rem;text-align: center;}.Agreement a{color: #FF5D00}
.land{width: 100%;text-align: center;padding-top: 2rem;}
.land a{font-size:14px;font-family:PingFang-SC-Regular;font-weight:400;color:rgba(100,111,147,1);}
.inp input::-webkit-input-placeholder{color:rgba(175,180,202,1);}
</style>
