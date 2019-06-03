<template>
    <div class="box">
       <div class="title"> 
           <i v-on:click="back"><img src="../../../static/img/微信图片_20190528134003.png" alt=""></i><span class="my">我的</span>
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
.box{width: 100%;height: 35.5rem;overflow-y: hidden;background: url(../../../static/img/微信图片_20190528102453.png)no-repeat;background-size: 100% 100%;}
.box img{width: 100%;height: 100%;}
i{display: inline-block;}
.my{font-size:18px;font-family:PingFang-SC-Bold;font-weight:bold;color:#fff}
.geren{font-size:18px;font-family:PingFang-SC-Bold;font-weight:bold;color:rgba(44,66,141,1);position: absolute;left: 45%;}
.title{width: 100%;height: 4rem;display: flex;align-items: center;position: relative;}
.title i{width: 1.5rem;height: 1.5rem;display: inline-block;padding-left: 1rem;padding-top: .4rem;} .title i img{width: 100%;height: 100%;}
</style>
