<template>
    <div class="box">
       <div class="title"> 
           <!-- <router-link to="/SetPassword"> -->
           <i v-on:click="back"><img src="../../../static/img/返回.png" alt=""></i>
           <!-- </router-link> -->
            <span class="geren">修改新密码</span>
       </div>
       <div class="content">
           <ul>
               <li>
                   <span class="phonea">手机号</span>
                   <span class="number">18310491377</span>
               </li>
               <li>
                   <span class="phone">验证码</span>
                   <input type="text" class="New" placeholder="请输入验证码" v-model="one" @keyup="getinputvalue">
                   <span class="phonee" v-if="!sendMsgDisabled" @click="send()">获取验证码</span>
                   <span class="phonee" v-if="sendMsgDisabled">{{time+'s'}}</span>
               </li>
                <li>
                   <span class="phone">新密码</span>
                   <input type="text" class="New" placeholder="请输入新的密码" v-model="passwordModel" @keyup="getinputvalue">
                   <span class="txt1">{{passwordValidate.errorText}}</span>
               </li>
                <li>
                   <span class="phone">确认密码</span>
                   <input type="text" class="Confirm" placeholder="请输入新的密码" v-model="passwordcheckModel" @keyup="getinputvalue">
                   <span class="txt1" v-if="passwordcheckModel">{{passwordCheckValidate.errorText}}</span>
               </li>
           </ul>
       </div>
        <!-- <div class="btn"><button>提交</button></div> -->
        <div class="btn"><button v-if="btnShow" class="button">提交</button></div>
        <div class="btn"><button disabled="disabled" v-if="!btnShow" class="btnn">提交</button></div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            passwordModel:"",
            passwordcheckModel:"",
            time: 60, // 发送验证码倒计时
            sendMsgDisabled: false,
            one:'',
            btnShow:false
        }
    },
    computed:{
        passwordValidate: function() {
        var errorText;
        if(!/^[0-9A-Za-z]{6,15}$/.test(this.passwordModel)) {
            errorText = '密码格式不正确'
        } else {
            errorText = ''
        }
        if(!this.passwordFlag) {
            errorText = ''
            this.passwordFlag = true
        }
        return {
            errorText
        }
    },
        passwordCheckValidate: function() {
        var errorText;
        if(!/^[0-9A-Za-z]{6,15}$/.test(this.passwordcheckModel)) {
            errorText = '密码格式不正确'
        }else if(this.passwordcheckModel !==this.passwordModel ){
            errorText = '两次密码不匹配'
        }
        else {
            errorText = ''
        }
        
        if(!this.passwordFlag) {
            errorText = ''
            this.passwordFlag = true
        }
        return {
            errorText
        }
    } 
},
methods:{
     send() {
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
   back(){
        this.$router.go(-1);//返回上一层
    },
    getinputvalue() {
        if (this.one.length>=1 && this.passwordModel.length>=1 && this.passwordcheckModel.length>=1) {
            this.btnShow = true;
        }else{
            this.btnShow = false;

        }
  },
}
    }
</script>

<style scoped>
html,body{background: #f6f7f9;width: 100%;height: 100%;}
.box{background: #f6f7f9;width: 100%;height: 100%;}

i{display: inline-block;}
.my{font-size:16px;font-family:PingFang-SC-Bold;font-weight:bold;color:rgba(100,111,147,1);}
.geren{font-size:18px;font-family:PingFang-SC-Bold;font-weight:bold;color:rgba(44,66,141,1);position: absolute;left: 38%;}
.title{width: 100%;height: 4rem;border-bottom: 1px solid #AFB4CA;background: #fff;display: flex;align-items: center;position: relative;}
.title i{width: 1.5rem;height: 1.5rem;display: inline-block;padding-left: 1rem;} .title i img{width: 100%;height: 100%;}
.content ul li{padding: 1rem;position: relative;background: #fff;margin: 0 0 .5rem 0;display: flex;align-items: center;}.content ul li .jin{width: .5rem;height: 1rem; position: absolute;right: 1rem;top: 2rem;}
.content ul li .jr{width: .5rem;height: 1rem; position: absolute;right: 1rem;}.content ul li .jr img{width: 100%;height: 100%;}.content ul li .jin img{width: 100%;height: 100%;} 
.top{width: 4rem;height: 4rem;}.top img{width: 100%;height: 100%;}
.tx{font-size:16px;font-family:PingFang-SC-Bold;font-weight:bold;color:rgba(100,111,147,1);position: absolute;right: 3rem;}
.number{font-size:14px;font-family:PingFang-SC-Bold;font-weight:bold;color:rgba(175,180,202,1);display: inline-block;position: absolute;left: 6rem;}
.phone{font-size:13px;font-family:PingFang-SC-Bold;font-weight:bold;color:#0B1A4A;}.phonea{font-size:13px;font-family:PingFang-SC-Bold;font-weight:bold;color: rgba(175,180,202,1);}
.phonee{font-size:13px;font-family:PingFang-SC-Bold;font-weight:bold;color:#2C428D;position: absolute;right: 1rem;}
.btn{width: 100%;height: auto;display: flex;}
.btn .button{width: 95%;height: 3rem;border: 0;outline: none;font-size:16px;font-family:PingFang-SC-Bold;font-weight:bold;color:#fff;background:rgba(44,66,141,1);border-radius:10px;margin: 0 auto;}
.btn .btnn{width: 95%;height: 3rem;border: 0;outline: none;font-size:16px;font-family:PingFang-SC-Bold;font-weight:bold;color:#fff;background: rgba(167,167,167,1);border-radius:10px;margin: 0 auto;}
.content input{padding-left: 2rem;outline: none;border: none;width: 7rem;}.Tips{font-size:12px;font-family:PingFang-SC-Bold;font-weight:bold;color:rgba(167,167,167,1);}
.txt1{font-size: 12px;color: red}
.content ul li input::-webkit-input-placeholder{color:rgba(175,180,202,1);}
</style>
