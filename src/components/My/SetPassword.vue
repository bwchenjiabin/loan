<template>
    <div class="box">
       <div class="title"> 
           <router-link to="/Set"><i><img src="../../../static/img/微信图片_20190528150040.png" alt=""></i></router-link><span class="my">设置</span>   
            <span class="geren">设置密码</span>
       </div>
       <div class="content">
           <ul>
               <li>
                   <span class="phone">手机号</span>
                   <span class="number">18310491377</span>
               </li>
                <li>
                   <span class="phone">新密码</span>
                   <input type="text" class="New" placeholder="请输入新的密码" v-model="passwordModel" @keyup="getinputvalue()">
                   <span class="txt1">{{passwordValidate.errorText}}</span>
               </li>
                <li>
                   <span class="phone">确认密码</span>
                   <input type="text" class="Confirm" placeholder="请输入新的密码" v-model="passwordcheckModel" @keyup="getinputvalue()">
                   <span class="txt1" v-if="passwordcheckModel">{{passwordCheckValidate.errorText}}</span>
               </li>
           </ul>
       </div>
       <div class="foot">
           <span class="Tips">需6~20位字符</span>
       </div>
        <div class="btn"><button v-if="btnShow" class="button" @click="getdata()">提交</button></div>
        <div class="btn"><button disabled="disabled" v-if="!btnShow" class="btnn">提交</button></div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            btnShow:false,
            passwordModel:"",
            passwordcheckModel:"",
        }
    },
        methods:{
    getinputvalue() {   
        if (this.passwordModel.length>1 && this.passwordcheckModel.length>1) {
            this.btnShow = true;
        }else{
            this.btnShow = false;
        }
        },
    getdata () {
      let url = "foreign/setPassword?pkId="+31+"&password="+this.passwordModel+"&passwordConfirm="+this.passwordcheckModel
      this.$axios.post(url
      )
        .then(res => {
         console.log(res.data)
        })
    },
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

}
</script>
<style scoped>
html,body{background: #f6f7f9;width: 100%;height: 100%;}
.box{background: #f6f7f9;width: 100%;height: 100%;}
i{display: inline-block;}
.my{font-size:16px;font-family:PingFang-SC-Bold;font-weight:bold;color:rgba(100,111,147,1);padding-left: .5rem;padding-top: .2rem;}
.geren{font-size:18px;font-family:PingFang-SC-Bold;font-weight:bold;color:rgba(44,66,141,1);position: absolute;left: 40%;}
.title{width: 100%;height: 4rem;border-bottom: 1px solid #AFB4CA;background: #fff;display: flex;align-items: center;position: relative;}
.title i{display: inline-block;padding-left: 1rem;padding-top: .4rem; width: 0.75rem;height: 1.2rem;} .title i img{width: 100%;height: 100%;}
.content ul li{padding: 1rem;position: relative;background: #fff;margin: 0 0 .5rem 0;display: flex;align-items: center;}.content ul li .jin{width: .5rem;height: 1rem; position: absolute;right: 1rem;top: 2rem;}
.content ul li .jr{width: .5rem;height: 1rem; position: absolute;right: 1rem;}.content ul li .jr img{width: 100%;height: 100%;}.content ul li .jin img{width: 100%;height: 100%;} 
.top{width: 4rem;height: 4rem;}.top img{width: 100%;height: 100%;}
.tx{font-size:16px;font-family:PingFang-SC-Bold;font-weight:bold;color:rgba(100,111,147,1);position: absolute;right: 3rem;}
.number{font-size:14px;font-family:PingFang-SC-Bold;font-weight:bold;color:rgba(175,180,202,1);display: inline-block;position: absolute;left: 6rem;}
.phone{font-size:13px;font-family:PingFang-SC-Bold;font-weight:bold;color:#0B1A4A;}
.btn{width: 100%;height: auto;display: flex;}
.btn .button{width: 95%;height: 3rem;border: 0;outline: none;font-size:16px;font-family:PingFang-SC-Bold;font-weight:bold;color:#fff;background:rgba(44,66,141,1);border-radius:10px;margin: 0 auto;}
.btn .btnn{width: 95%;height: 3rem;border: 0;outline: none;font-size:16px;font-family:PingFang-SC-Bold;font-weight:bold;color:#fff;background: rgba(167,167,167,1);border-radius:10px;margin: 0 auto;}
.content input{padding-left: 2rem;outline: none;border: none;width: 7rem;}.Tips{font-size:12px;font-family:PingFang-SC-Bold;font-weight:bold;color:rgba(167,167,167,1);}
.foot{padding: 1rem;position: relative;height: 2rem;display: flex;align-items: center;}.foot .forget{font-size:12px;font-family:PingFang-SC-Bold;font-weight:bold;color:rgba(44,66,141,1);position: absolute;right: 1rem;}
.txt1{font-size: 12px;color: red}
</style>
