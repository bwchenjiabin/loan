<template>
    <div class="box">
       <div class="title"> 
           <router-link to="/Nolanding"><i><img src="../../../static/img/返回.png" alt=""></i></router-link><span class="my">我的</span>
            <span class="geren">个人资料</span>
       </div>
       <div class="content">
           <ul>
               <li>
                   <i class="top"><img :src="userInfo.avatar" alt=""></i>
                   <span class="tx">修改头像</span>
                   <i class="jr"  @click.stop="uploadHeadImg"><img src="../../../static/img/arrow_icon.png" alt=""></i>
                   <input type="file" accept="image/*" @change="handleFile" class="hiddenInput"/>
               </li>
               <li>
                   <span class="phone">手机号</span>
                   <!-- <span >1234567852</span> -->
                   <input type="number" class="number" placeholder="                           请输入手机号" v-model="one" @keyup="getinputvalue">
               </li>
           </ul>
       </div>
       <div class="btn"><button v-if="btnShow" class="button">保存</button></div>
       <div class="btn"><button disabled="disabled" v-if="!btnShow" class="btnn">保存</button></div>
    </div>
</template>
<script>
export default {
data() {
      return {   
         userInfo: {
    avatar: '../../../static/img/default_avatar.png'
          },
         btnShow: false,
         one:""
     }
    
    // 初始图片
  },
  methods: {
    // 打开图片上传
    uploadHeadImg: function () {
      this.$el.querySelector('.hiddenInput').click()
    },
    // 将头像显示
    handleFile: function (e) {
      let $target = e.target || e.srcElement
      let file = $target.files[0]
      var reader = new FileReader()
      reader.onload = (data) => {
        let res = data.target || data.srcElement
        this.userInfo.avatar = res.result
      }
      reader.readAsDataURL(file)
    },
    getinputvalue() {
        if (this.one.length>=1) {
            this.btnShow = true;
        }else{
            this.btnShow = false;

        }
  },
  handelclick(){

  }
  },

}
</script>

<style scoped>
html{background: #d0d5df;}
.box{background: #f6f7f9;width: 100%;height: 100%;}
i{display: inline-block;}
.my{font-size:16px;font-family:PingFang-SC-Bold;font-weight:bold;color:rgba(100,111,147,1);}
.geren{font-size:18px;font-family:PingFang-SC-Bold;font-weight:bold;color:rgba(44,66,141,1);position: absolute;left: 40%;}
.title{width: 100%;height: 4rem;border-bottom: 1px solid #AFB4CA;background: #fff;display: flex;align-items: center;position: relative;}
.title i{width: 1.5rem;height: 1.5rem;display: inline-block;padding-left: 1rem;} .title i img{width: 100%;height: 100%;}
.content ul li{padding: 1rem;position: relative;background: #fff;margin: 0 0 .5rem 0;display: flex;align-items: center;}.content ul li .jin{width: .5rem;height: 1rem; position: absolute;right: 1rem;top: 2rem;}
.content ul li .jr{width: .5rem;height: 1rem; position: absolute;right: 1rem;}.content ul li .jr img{width: 100%;height: 100%;}.content ul li .jin img{width: 100%;height: 100%;} 
.top{width: 4rem;height: 4rem;}.top img{width: 100%;height: 100%;border-radius: 50%}
.tx{font-size:16px;font-family:PingFang-SC-Bold;font-weight:bold;color:rgba(100,111,147,1);position: absolute;right: 3rem;}
.number{width: 12rem; font-size:14px;font-family:PingFang-SC-Bold;font-weight:bold;color:rgba(175,180,202,1);display: inline-block;position: absolute;right: 3rem; border: none;outline: none;}
.number::-webkit-input-placeholder{color:rgba(175,180,202,1);}
.phone{font-size:16px;font-family:PingFang-SC-Bold;font-weight:bold;color:#0B1A4A;}
.btn{width: 100%;display: flex;align-items: center;justify-content: center;margin-top: 1rem}
.btn .btnn{background:rgba(167,167,167,1);border-radius:10px;font-size:16px;font-family:PingFang-SC-Bold;font-weight:bold;color:rgba(255,255,255,1);border:none;outline: none;width: 90%;height: 3rem;}
.btn .button{background:rgba(44,66,141,1);border-radius:10px;font-size:16px;font-family:PingFang-SC-Bold;font-weight:bold;color:rgba(255,255,255,1);border:none;outline: none;width: 90%;height: 3rem;}

.hiddenInput{display: none;}
</style>
