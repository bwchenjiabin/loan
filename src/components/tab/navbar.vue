<template>
  <div>
   <mt-tabbar v-model="selected" class="navbar">
  <div class="mint-tab-item">
  <mt-tab-item id="home">
    <img slot="icon" src="../../../static/img/icon-homea.png" v-if="this.selected == 'home'">
    <img slot="icon" src="../../../static/img/icon-home.png" v-else>
    首页
  </mt-tab-item>
  </div>
  <div class="mint-tab-item">
  <mt-tab-item id="Recommend">
    <img slot="icon" src="../../../static/img/icon-Recommenda.png" v-if="this.selected == 'Recommend'">
    <img slot="icon" src="../../../static/img/icon-recommend .png" v-else>
    推荐
  </mt-tab-item>
  </div>
  <div @click="getdata()" class="mint-tab-item">
    <mt-tab-item  id="Nolanding" class="a" >
    <img slot="icon" src="../../../static/img/Mya.png" v-if="this.selected == 'Nolanding'">
    <img slot="icon" src="../../../static/img/My.png" v-else>
    我的
  </mt-tab-item>
  </div>
</mt-tabbar>
  </div>
</template>
<script>
export default {
    data() {
      return {   
        selected: sessionStorage.getItem('selected')? JSON.parse(sessionStorage.getItem('selected')):'home',
        home: '首页',
        Recommend: '推荐',
        My: '我的',   
        isActive:true,
        active:'is-selected'
      }
    },
    methods:{
          getdata () {
      let url = 'foreign/orlogin'       //判断是否登录的接口
      this.$axios.post(url)
        .then(res => {
        if (res.data.code == false) { 
        }else{
          this.$router.replace('/My');    //需要执行
        }
         console.log(res.data.msg)
        })
    },
    },
    created(){
      // this.getdata();
    },
watch: {
      selected(val, oldVal){
          sessionStorage.setItem('selected', JSON.stringify(val))
                 switch(val){
          case 'home':
            this.$router.replace('/Home');
          break;
          case 'Recommend':
            this.$router.replace('/Recommend');
          break;
          case 'Nolanding':
            this.$router.replace('/Nolanding');   //如果登录成功替换这个页面替换成'/My'
          break;
        }
      }
  }
}
</script>
<style scoped>
  .navbar{
    position: fixed;
    bottom: 0;
  }
 .mint-tabbar > .mint-tab-item.is-selected{
    background: #fff;
    color: #242F44;
  }
  .mint-tab-item{
    color: #AFB4CA
  }
</style>
