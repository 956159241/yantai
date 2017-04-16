<template>
  <div class="home-message">
    <div class="ui container">
      <div class="twelve wide column main-content">
        <!--联系我们-->
        <div class="company-introduce-box">
          <div class="nav"><span v-link="{ path: '/home'}">首页</span>&nbsp;>&nbsp;<span>关于颜态</span>&nbsp;>&nbsp;<span>联系我们</span></div>
          <div class="ui grid company-introduce">
            <div class="sixteen wide column">
              <h1 class="index-title">产品展示</h1>
              <!--轮播展示-->
              <div id="focus_Box">
                <span class="prev">&nbsp;</span>
                <span class="next">&nbsp;</span>
                <ul>
                  <li>
                    <a href=""><img width="240" height="300" src="/static/img/product-1.png"  /></a>
                    <p>
                      <span>【有机转换产品】粤德红英德红茶英红九号2016年红茶一级金英红195g 礼盒装</span>
                    </p>
                  </li>
                  <li>
                    <a href=""><img width="240" height="300" src="/static/img/product-2.png"/></a>
                    <p>
                      <span>八马安溪铁观音2016春茶乌龙茶浓香型特级赛珍珠250g礼盒  </span>
                    </p>
                  </li>
                  <li>
                    <a href=""><img width="240" height="300" src="/static/img/product-1.png" /></a>
                    <p>
                      <span>【有机转换产品】粤德红英德红茶英红九号2016年红茶一级金英红195g 礼盒装</span>
                    </p>
                  </li>
                  <li>
                    <a href=""><img width="240" height="300" src="/static/img/product-2.png" /></a>
                    <p>
                      <span>八马安溪铁观音2016春茶乌龙茶浓香型特级赛珍珠250g礼盒  </span>
                    </p>
                  </li>
                  <li>
                    <a href=""><img width="240" height="300" src="/static/img/product-3.png"/></a>
                    <p>
                      <span> 醉品朴茶龙井2016明前茶绿茶 清香型特级素朴100g  </span>
                    </p>
                  </li>

                </ul>
              </div>

            </div>
          </div>
        </div>




      </div>
    </div>
  </div>
</template>
<script>
  let $ = require('jquery')
  //  let Slider = require('slider')
  export default {
    replace: false,
    ready: function () {
      $('.ui.dropdown')
        .dropdown()
    },
    data () {
      return {

      }
    },
    methods: {
      product: function () {
        window.location.reload()
      }
    },
    components: {
    }
  }
</script>
<style scoped>
  .ui.container{width: 1600px;}
  .two.wide.column{margin: 0px;padding:0px;}
  .twelve.wide.column.main-content{overflow: hidden;padding-left: 0px;text-align: center;padding-right:0px;background-color: rgb(245,245,245);}
  /*公司介绍*/
  .company-introduce-box{background-image: url("../../static/img/introduce-bg.png");background-repeat: no-repeat;background-color: rgb(255,255,255);}
  .company-introduce-box>.nav{text-align: left;margin:0px auto;width: 1003px;padding-top:15px;}
  .company-introduce-box>.nav>span{font-size: 12px;color:#909090;}
  .company-introduce-box>.nav>span:first-child{cursor: pointer;}
  .company-introduce-box>.nav>span:last-child{color: #323232;}
  .company-introduce-box>.nav>span:first-child:before{content: " ";width: 4px;height: 4px;background-color: rgb(95,52,39);border: 1px solid rgb(95,52,39);float:left;position: relative;
    top: 8px;left: -5px;}
  /*介绍内容*/
  .ui.grid.company-introduce{padding-top:80px;text-align: center;margin:0px auto;width: 1003px;padding-bottom:100px;}
  .ui.grid.company-introduce>.sixteen.wide.column{padding:0px;text-align: center;}
  .ui.grid.company-introduce>.sixteen.wide.column>.index-title{font-size: 48px;color:rgb(95,52,39);position: relative;display: inline-block;width: 280px;text-align: center;}
  .index-title:before {content: url("../../static/img/index-title-topline.png");position:absolute;top:-50px;left: 0px;}
  .index-title:after {content: url("../../static/img/index-title-bottomline.png");position: absolute;bottom: -25px;left:0px;}
  .ui.grid.introduce-content{padding-top:70px;}
  /*轮播图片展示*/
  *{margin:0;padding:0;list-style-type:none;}
  a,img{border:0;}
  body{font:12px/180% Arial, Helvetica, sans-serif,"新宋体";}
  /* focus_Box */
  #focus_Box{position:relative;width:710px;height:300px;margin:70px auto;margin-left: 219px;}
  #focus_Box ul{position:relative;width:710px;height:300px}
  #focus_Box li{z-index:0;position:absolute; width:0px;background:#787878;height:0px;top:146px;cursor:pointer;left:377px;border-radius:4px;box-shadow:1px 1px 12px rgba(200, 200, 200, 1);
  box-shadow: 2px 0px 5px rgba(0,0,0,0.5);box-shadow: -2px 0px 5px rgba(0,0,0,0.5);}
  #focus_Box li img{width:100%;background:url(../../static/img/loading.gif) no-repeat center 50%;height:100%;vertical-align:top}
  #focus_Box li p{width:100%;height:135px;line-height:20px;background-color:rgb(244,240,235);color:rgb(74,38,28);text-align: justify;padding:20px 10px;
    box-shadow: 2px 0px 5px rgba(0,0,0,0.5);box-shadow: -2px 0px 5px rgba(0,0,0,0.5);}
  #focus_Box li p span{display:inline-block;width:95%;height:135px;overflow:hidden;}
  #focus_Box .prev,#focus_Box .next{display:block;z-index:100;overflow:hidden;cursor:pointer;position:absolute;width:60px;height:60px;top:131px;}
  #focus_Box .prev{background:url(../../static/img/left.png) left bottom no-repeat;left:-115px}
  #focus_Box .next{background:url(../../static/img/right.png) right bottom no-repeat;right:0px}
  /*#focus_Box .prev:hover{background-position:left top;}*/
  /*#focus_Box .next:hover{background-position:right top;}*/
  #focus_Box a.imgs-scroll-btn{display:block;position:absolute;z-index:110;top:7px;right:15px;width:51px;height:23px;overflow:hidden;background:url(../../static/img/share-btn.png) no-repeat;text-indent:-999px;}


</style>
