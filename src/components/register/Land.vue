<template>
    <div class="box">
        <div class="header">
            <div class="logo">
                <i><img src="../../../static/img/login_logo.png" alt=""></i>
            </div>
        </div>
        <div class="content">
            <div class="inp">
               <i><img src="../../../static/img/phone-icon.png" alt=""></i> <input v-model="newPhone" type="number" placeholder="请输入手机号" id="phone" oninput="if(value.length>11)value=value.slice(0,11)">
            </div>
             <div class="inp">
               <i><img src="../../../static/img/password-icon.png" alt=""></i> <input type="text" placeholder="请输入密码" v-model="one"> <router-link to="forget"><span>忘记密码？</span></router-link>
            </div><br><br>
            <button @click="goAddressDtail();getdata()">登&nbsp;录</button>
        </div>
        <div class="land"><router-link to="/register">注册/快速登录</router-link></div> 
    </div>    
</template>
<script>
export default {
    data(){
        return{
            newPhone:"",
            one:"",
            list:''
        }
    },
    created () {
  },
    methods:{
    getdata () {
      let url = "foreign/login?phoneNum="+this.newPhone+"&password="+this.one
      this.$axios.post(url)
        .then(res => {
        //  this.list = res.data
         console.log(res.data)
        })
    },

      goAddressDtail() {
    if (this.newPhone.length<1) {
            layer.msg("请输入手机号");
            return;
        }
        const self = this;
        if (!(/^1[34578]\d{9}$/.test(self.newPhone))) {
            layer.msg("电话号码格式错误");
            return
        } 
        if (this.one.length<1) {
            layer.msg("请输入密码");
            return;
        }
      },
    }
}
</script>
<style scoped>
*{margin: 0;padding: 0;}
html,body{background: #fff;}
.box{background: #fff;}
.header{background: url(../../../static/img/top-bgm.png)no-repeat;width: 100%;height: 16rem;background-size: 100% 100%;display: flex;justify-content: center;align-items: center;}
.logo{display: inline-block;}.logo i{width: 8rem;height: 8rem;}.logo i img{width: 100%;height: 100%;}
.content{padding: .5rem 3rem 1rem 3rem}.content .inp{border-bottom: 1px solid #D6D6D6;padding: 1rem 0 .5rem 0;height: 2rem; position: relative;margin-bottom: 1rem;}.content .inp input{border: none;width: 85%;height: 100%;float: right;outline: none;background-color: rgba(0, 0, 0, 0);}
.inp i{width: 2rem;height: 2rem;z-index: 9;display: inline-block;} .inp i img{width: 100%;height: 100%;}.inp span{position: absolute;top: 4.3rem;right: 0;z-index: 10;font-size:12px;font-family:PingFang-SC-Bold;font-weight:bold;color:rgba(167,167,167,1);}
.content button{width: 100%;height: 2.5rem;border:none;outline: none; padding: .5rem;background:linear-gradient(90deg,rgba(0,186,255,1),rgba(0,96,255,1));box-shadow:0px 3px 27px 0px rgba(0,100,255,0.41);border-radius:10px;font-size:15px;font-family:PingFang-SC-Bold;font-weight:bold;color:rgba(255,255,255,1); }
.land{width: 100%;text-align: center;padding-top: 2rem;}
.land a{font-size:14px;font-family:PingFang-SC-Regular;font-weight:400;color:rgba(100,111,147,1);}
.inp input::-webkit-input-placeholder{color:rgba(175,180,202,1);}
</style>
