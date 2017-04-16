<template>
  <div class="home-message">
    <div class="ui container">
      <div class="twelve wide column main-content">
        <!--联系我们-->
        <div class="company-introduce-box">
          <div class="nav"><span v-link="{ path: '/home'}">首页</span>&nbsp;>&nbsp;<span>关于颜态</span>&nbsp;>&nbsp;<span>联系我们</span></div>
          <div class="ui grid company-introduce">
            <div class="sixteen wide column">
              <h1 class="index-title">联系我们</h1>
              <div class="ui grid introduce-content">
                <div class="sixteen wide column company-introduce-left">
                  <img src="/static/img/contact-img.png">
                </div>
                <div class="introduce-content">
                  <div class="introduce-text">
                    <h3>上海颜态资产管理有限公司</h3>
                    <p>公司地址：上海市虹口区东大名路588号美特斯邦威大厦三楼</p>
                    <p>全国免费客服热线：400-629-3216  021-58601299 </p>
                    <p>建议及投诉电话：400-629-3216</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>




      </div>
    </div>
  </div>
</template>
<script>
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
  /*公司介绍左侧图片*/
  .ui.grid.introduce-content>.eight.wide.column.company-introduce-left{padding: 0px!important;margin-bottom:10px;}
  .ui.grid.introduce-content>.eight.wide.column.company-introduce-left>img{}
  /*公司介绍右侧文字*/
  .ui.grid.introduce-content>.eight.wide.column.company-introduce-right{padding:0px 0px 0px 75px;margin-bottom:10px; }
  .ui.grid.introduce-content>.eight.wide.column.company-introduce-right>p{font-size: 16px;text-indent: 2em;text-align: justify;color:rgb(74,38,28);line-height: 35px;
    letter-spacing: 0.1em;}
  /*公司介绍下半部分的文字图片*/
  .introduce-content>img{width: 100%;height:auto;}
  .introduce-content>.introduce-text{margin:60px auto;width: 1003px;font-size: 16px;color: rgb(74, 38, 28);}
  .introduce-text>h3{text-align: center;margin-bottom: 30px;}
  .introduce-text>p{color:rgb(162,99,58);}





</style>
