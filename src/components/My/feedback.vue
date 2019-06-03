<template>
    <div class="box">
       <div class="title"> 
           <i v-on:click="back"><img src="../../../static/img/微信图片_20190528150040.png" alt=""></i><span class="my">我的</span>
            <span class="geren">意见反馈</span>
       </div>
       <div class="content">
            <textarea class="yijian" cols="30" rows="10" placeholder = "请输入您遇到的问题或建议(必填)" v-model="one" @keyup="getvalue"></textarea>
            <div id="accident">
            <div class="wrapper">
                <!-- <i class="icon-pic"></i> -->
                <button type="button" @click="change_input()" class="tianjia">+</button>
                <form id="addTextForm" @change="setImg($event)">
                </form>
            </div>
            <div id="img-wrapper" @click="deleteImg($event)"></div>
        </div>
       </div>
       <div class="footer">
           <span>联系方式</span>
           <input type="text" placeholder = "选填，便于我们联系到您" v-model="three" @keyup="getvalue">
       </div>
       <div class="btn"><mt-button class="button" type="primary" @click="submit()" v-if="btnShow">保存</mt-button></div>
       <div class="btn"><mt-button class="button-gray" type="primary" @click="submit()" v-if="!btnShow" disabled="disabled">保存</mt-button></div>
    </div>
</template>
<script>
    function getFileUrl(obj) { 
      let url; 
      url = window.URL.createObjectURL(obj.files.item(0)); 
      return url; 
    }
export default {
  name: 'accident',
  // 定义数据
  data () {
    return {
      imgNum:1,    //上传的照片数量，可根据实际情况自定义   
      one:"",
      tow:"",
      three:"",
      btnShow: false     
    }
  },//定义事件
   methods:{
      //根据点击上传按钮触发input
      change_input(){
        let inputArr=$('#addTextForm input');
        let add_inputId='';     //需要被触发的input
        for(let i=0;i<inputArr.length;i++){
            // 根据input的value值判断是否已经选择文件
          if(!inputArr[i].value){          //如果没有选择,获得这个input的ID      
             add_inputId=inputArr[i].id;
             break;
          }
        }
        if(add_inputId){  //如果需要被触发的input ID存在,将对应的input触发
          return  $("#"+add_inputId).click();
        }else{
          alert("最多选择"+this.imgNum+"张图片")
        }
      },
      //当input选择了图片的时候触发,将获得的src赋值到相对应的img
      setImg(e){
        // this.btnShow = true;
        let target=e.target;
        $('#img_'+target.id).attr('src',getFileUrl(e.srcElement));
      },
      //点击图片删除该图片并清除相对的input
      deleteImg(e){
        // this.btnShow = false;
        let target=e.target;
        let inputID='';       //需要清除value的input
        if(target.nodeName=='IMG'){
          target.src='';
          inputID=target.id.replace('img_','');    //获得需要清除value的input
          $('input#'+inputID).val("");
        }
      },
      //提交信息到后台
      submit(){
           if (this.one.length<1) {
            layer.msg("请输入您遇到的问题或建议")
            return;
          }
            $("#addTextForm").ajaxSubmit({
                url: this.$root.api+"/Index/staff_accident/add",      
                type: "post",
                data: {
                    'total_price':this.price,
                    'descript':this.descript,
                    },
                    success:  (data) => {
                        if(data.code==0){
                            console.log('提交成功');
                            $("#addTextForm input").val('');
                            $('div#img-wrapper img').attr('src','');
                           }else{
                                alert('提交失败');
                             }
                        }
                    });  
        },
        getvalue(){
          if (this.one.length>=1 || this.three.length>=1) {
            this.btnShow = true;
          }else{
            this.btnShow = false;
          }
        },
        updata(){
           if (this.one.length>=1 || this.three.length>=1) {
            layer.msg("请输入您遇到的问题或建议")
          }else{
            // layer.msg()
          }
        },
        back(){
        this.$router.go(-1);//返回上一层
    },
   },
  //页面加载后执行
  mounted(){
    for(let i=0;i<this.imgNum;i++){
     //生成input框，默认为1
    let my_input = $('<input type="file" name="image" />');   //创建一个input
    my_input.css({"display":"none"})
    my_input.attr('id',i);                           //为创建的input添加id
    $('#addTextForm').append(my_input);                     //将生成的input追加到指定的form
    //生成img，默认为1
    let my_img = $('<img src="">');
    my_img.attr('id', 'img_'+i);
    my_img.css({"max-width":"4rem","max-height":"4rem","position":"absolute","bottom":"0"});   //添加样式
    $('#img-wrapper').append(my_img); 
    }
  },
}
</script>

<style scoped>
html,body{background: #f6f7f9;width: 100%;height: 100%;}
.box{background: #f6f7f9;width: 100%;height: 100%;}
i{display: inline-block;}
.my{font-size:16px;font-family:PingFang-SC-Bold;font-weight:bold;color:rgba(100,111,147,1);padding-left: .5rem;padding-top: .2rem;}
.geren{font-size:18px;font-family:PingFang-SC-Bold;font-weight:bold;color:rgba(44,66,141,1);position: absolute;left: 45%;}
.title{width: 100%;height: 4rem;border-bottom: 1px solid #AFB4CA;background: #fff;display: flex;align-items: center;position: relative;}
.title i{display: inline-block;padding-left: 1rem;padding-top: .4rem; width: 0.75rem;height: 1.2rem;} .title i img{width: 100%;height: 100%;}
.content ul li{padding: 1rem;position: relative;background: #fff;margin: 0 0 .5rem 0;display: flex;align-items: center;}.content ul li .jin{width: .5rem;height: 1rem; position: absolute;right: 1rem;top: 2rem;}
.content ul li .jr{width: .5rem;height: 1rem; position: absolute;right: 1rem;top: 1.2rem}.content ul li .jr img{width: 100%;height: 100%;}.content ul li .jin img{width: 100%;height: 100%;} 
.top{width: 4rem;height: 4rem;}.top img{width: 100%;height: 100%;}
.tx{font-size:16px;font-family:PingFang-SC-Bold;font-weight:bold;color:rgba(100,111,147,1);position: absolute;right: 3rem;}
.number{font-size:14px;font-family:PingFang-SC-Bold;font-weight:bold;color:rgba(175,180,202,1);display: inline-block;position: absolute;right: 3rem;}
.phone{font-size:16px;font-family:PingFang-SC-Bold;font-weight:bold;color:#0B1A4A;}
.btn button{width: 100%;height: 3rem;background: #fff;border: 0;outline: none;font-size:16px;font-family:PingFang-SC-Bold;font-weight:bold;color:rgba(11,26,74,1);}
form input {display: none}.txt{font-size:14px;font-family:PingFang-SC-Bold;font-weight:bold;color:rgba(167,167,167,1);}
.content{padding: 1.5rem;background: #fff;margin-bottom: .5rem;}.yijian{border: none;outline: none;width: 100%;}
.btn .button{background:rgba(44,66,141,1);border-radius:10px;font-size:16px;font-family:PingFang-SC-Bold;font-weight:bold;color:rgba(255,255,255,1);border:none;outline: none;width: 90%;height: 3rem;}
.btn .button-gray{background: rgba(167,167,167,1);border-radius:10px;font-size:16px;font-family:PingFang-SC-Bold;font-weight:bold;color:rgba(255,255,255,1);border:none;outline: none;width: 90%;height: 3rem;}
.btn{width: 100%;display: flex;align-items: center;justify-content: center;}.tianjia{background: #E9E9E9;width: 4rem;height: 4rem;border: none;outline: none;}
.wrapper{width: 3rem;display: inline-block;}#img-wrapper{display: inline-block;position: absolute; bottom: 0;left: 5rem;}#accident{position: relative;}
.footer{padding: .5rem 1rem .5rem 1.7rem;margin-bottom: .5rem;font-size: 13px;display: flex;align-items: center;background: #fff;}
.footer span{font-family:PingFang-SC-Bold;font-weight:bold;color:rgba(44,66,141,1);}.footer input{border: none;outline: none;padding-left: 1rem;}
</style>
