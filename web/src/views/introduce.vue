<template>
  <div class="home-message">
    <div class="ui container">
      <div class="twelve wide column main-content">
        <!--公司介绍-->
        <div class="company-introduce-box">
          <div class="nav"><span v-link="{ path: '/home'}">首页</span>&nbsp;>&nbsp;<span>关于颜态</span>&nbsp;>&nbsp;<span>企业简介</span></div>
          <div class="ui grid company-introduce">
          <div class="sixteen wide column">
            <h1 class="index-title">公司介绍</h1>
            <div class="ui grid introduce-content">
              <div class="eight wide column company-introduce-left">
                <img src="/static/img/introduce-img-1.png">
              </div>
              <div class="eight wide column company-introduce-right">
                <p>
                上海颜态资产管理有限公司是一家以普洱茶、高端红酒、典藏白酒的投资服务为主，集投资管理、实业经营为一体的综合性投资金融机构。在北京、上海、湖南、广东等全国各大城市下设24家分子公司，现有员工1000多人。总部座落于上海市虹口区东大名路588号美特斯邦威大厦三楼。2016年，公司资产管理规模超10亿，高净值会员达10000人，服务客户不计其数。
                </p>
              </div>
            </div>

          </div>
        </div>
        </div>
        <div class="introduce-content">
          <img src="/static/img/introduce-img-2.png">
          <div class="introduce-text">
            <div class="text">
            <p>公司高层管理者在金融市场沉浮数十年，有丰富的实物经验，特邀分析师和操盘团队，研习股票K线十余年，专业的营销策划团队、客服团队，给您最贴心的服务。公司总部旗下分设4个营销发展部。发展一部设在总部；发展二部坐落于上海市杨浦区五角场街道国顺路131弄；发展三部坐落于上海市浦东新区三林路金融众创空间；发展四部在周浦，销售队伍达500人，强大的分析师团队、策划团队、客服团队、服务团队都在时刻准备着。</p>
            </div>
            <h3>公司文化</h3>
            <div class="text">
            <p class="text">公司秉持“创新、诚信、共赢”的理念服务每一位投资者，致力成为一家最值得投资者信赖的产业金融投资企业。在未来发展中，公司将继续挖掘产业经济、产业文化、产业金融的发展潜力，拓展渠道，加大市场，从而增加产业发展的流通性和流动性，助推产业金融的快速发展。</p>
            </div>
            <h3>公司愿景</h3>
            <div class="text">
            <p class="text">公司的战略愿景是以“共享经济”为信念，坚持产业为主，金融为辅，打造成一家实体产业与金融一体化结合的综合性投资控股集团，成为产业金融行业综合理财教育的领先平台。</p>
            </div>
            <h3>战略合作</h3>
            <p>在北京、重庆都有分公司进行合作</p>
            <p>2015年，与嘉汇（厦门）石油化工有限公司达成战略合作</p>
            <p>2015年，与湖南长沙国圣商品资讯有限公司达成战略合作</p>
            <p>2016年，与上海津盛资产管理有限公司达成战略合作</p>
            <p>2016年，与上海肯悦资产管理有限公司达成战略合作</p>
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
  .company-introduce-box{background-image: url("../../static/img/introduce-bg.png");}
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
  .introduce-text>.text{text-align: justify;}
  .introduce-text>.text>p{line-height: 30px;text-indent: 2em;letter-spacing: 0.1em;}





</style>
