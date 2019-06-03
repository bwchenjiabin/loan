<template>
    <div class="box">
       <div class="title"> 
           <i  @click="getdata()"><img src="../../../static/img/微信图片_20190528150040.png" alt=""></i><span class="my">我的</span>
            <span class="geren">帮助中心</span>
       </div>
       <div class="content">
           <ul v-for="(item, index) in list" :key="index">
               <!-- <router-link to="/noun"><li>
                   <span class="phone">名词解释</span>
                   <i class="jr"><img src="../../../static/img/arrow_icon.png" alt=""></i>
               </li></router-link>
                <router-link to="/problem"><li>
                   <span class="phone">常见问题</span>
                   <i class="jr"><img src="../../../static/img/arrow_icon.png" alt=""></i>
               </li></router-link> -->
               <!-- <router-link to="/noun"> -->
               <li @click="getdatab(item.pkId)">
                   <span class="phone">{{item.name}}</span>
                   <i class="jr" @click="getMovieDetail(item.pkId)"><img src="../../../static/img/arrow_icon.png" alt=""></i>
               </li>
               <!-- </router-link> -->
           </ul>
       </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            list:'',
        }
    },
methods:{
    getMovieDetail(id){
        this.$router.push({
        name: 'Helptow',
        params:{
          id: id
        }
      })
    //   alert(id)
    },
    getdata () {
      let url = 'foreign/orlogin'       //判断是否登录的接口
      this.$axios.post(url)
        .then(res => {
        if (res.data.code == false) { 
          this.$router.replace('/Nolanding');    //需要执行
        }else{
          this.$router.replace('/My');    //需要执行
        }
         console.log(res.data.msg)
        })
    },
    getdataa () {
      let url = '/foreign/helpContent/helpList'
      this.$axios.post(url)
        .then(res => {
        this.list = res.data.data
        //  console.log(this.list)
        })
    },
    getdatab (e) {
      let menuId = e
      console.log(menuId)
      let url = "/foreign/helpContent/contentList?menuId="+menuId
      this.$axios.post(url)
        .then(res => {
        // this.list = res.data.data
         console.log(res.data)
        })
    },
},
created(){
    this.getdataa();
},
components:{}
}
</script>

<style scoped>
html,body{background: #f6f7f9;width: 100%;height: 100%;}
.box{background: #f6f7f9;width: 100%;height: 100%;}

i{display: inline-block;}
.my{font-size:16px;font-family:PingFang-SC-Bold;font-weight:bold;color:rgba(100,111,147,1);padding-left: .5rem;padding-top: .2rem;}
.geren{font-size:18px;font-family:PingFang-SC-Bold;font-weight:bold;color:rgba(44,66,141,1);position: absolute;left: 45%;}
.title{width: 100%;height: 4rem;border-bottom: 1px solid #AFB4CA;background: #fff;display: flex;align-items: center;position: relative;}
.title i{display: inline-block;padding-left: 1rem;padding-top: .2rem; width: 0.75rem;height: 1.2rem;} .title i img{width: 100%;height: 100%;}
.content ul li{padding: 1rem;position: relative;background: #fff;margin: 0 0 .5rem 0;display: flex;align-items: center;}.content ul li .jin{width: .5rem;height: 1rem; position: absolute;right: 1rem;top: 2rem;}
.content ul li .jr{width: .5rem;height: 1rem; position: absolute;right: 1rem;top: 1.2rem}.content ul li .jr img{width: 100%;height: 100%;}.content ul li .jin img{width: 100%;height: 100%;} 
.top{width: 4rem;height: 4rem;}.top img{width: 100%;height: 100%;}
.tx{font-size:16px;font-family:PingFang-SC-Bold;font-weight:bold;color:rgba(100,111,147,1);position: absolute;right: 3rem;}
.number{font-size:14px;font-family:PingFang-SC-Bold;font-weight:bold;color:rgba(175,180,202,1);display: inline-block;position: absolute;right: 3rem;}
.phone{font-size:16px;font-family:PingFang-SC-Bold;font-weight:bold;color:#0B1A4A;}
</style>
