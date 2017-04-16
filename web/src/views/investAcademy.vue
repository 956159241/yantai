<template>
  <div class="home-message">
    <div class="ui container">
      <div class="twelve wide column main-content">
        <!--名师介绍-->
        <div class="teachers-introduce-box">
          <div class="nav"><span v-link="{ path: '/home'}">首页</span>&nbsp;>&nbsp;<span>投资学院</span>&nbsp;>&nbsp;<span>名师介绍</span></div>
          <div class="ui grid teachers-introduce">
            <div class="sixteen wide column">
              <h1 class="index-title">名师介绍</h1>
              <div class="ui grid introduce-content">
                <div class="news">
                  <div class="ui comments">
                    <div class="comment">
                      <a class="avatar">
                        <img src="/static/img/teacher-gansixu.png">
                      </a>
                      <div class="content">
                        <a class="author" v-link="{ path: '/Share-List-1#location'}">甘懋胥（首席高级分析师）</a>
                        <div class="text">甘老师1995年就扎根证劵金融行业，至今已20多年，曾在中银国际证劵、华西证劵、长城证劵等多家卷商担任高管，目前在上海多家私募机构和资产管理公司任高管，在国内外宏观政策研究、行业研究有非常独特的见解，擅长金融商品分析及解盘操作。
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="news">
                  <div class="ui comments">
                    <div class="comment">
                      <a class="avatar">
                        <img src="/static/img/teacher-ding.png">
                      </a>
                      <div class="content">
                        <a class="author" v-link="{ path: '/Share-List-1#location'}">丁雪峰（高级分析师）</a>
                        <div class="text">英国卡迪夫大学理学硕士，获得ACCA（特许公认会计）认证。具有国际视野和时政敏感度。六年的外汇和期货操盘经验，即便账户有多次十倍盈利的历史，扔坚持操盘风控第一的习惯。操盘分两条线：看似波段，实循趋势。
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="news">
                  <div class="ui comments">
                    <div class="comment">
                      <a class="avatar">
                        <img src="/static/img/teacher-llw.jpg">
                      </a>
                      <div class="content">
                        <a class="author" v-link="{ path: '/Share-List-1#location'}">李连文（高级分析师）</a>
                        <div class="text">国内重点院校金融专业出身，有近20年的股票、TD和现货实盘操作经验。曾准确把握了黄金14年超低行情，原油15年超低行情，并且于15年从股市成功逃顶，实战经验丰富，擅长技术分析，独创一套自己的平衡战法“抄底”。
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="news">
                  <div class="ui comments">
                    <div class="comment">
                      <a class="avatar">
                        <img src="/static/img/teacher-4.png">
                      </a>
                      <div class="content">
                        <a class="author" v-link="{ path: '/Share-List-1#location'}">鲁祝稳（金融分析师）</a>
                        <div class="text">颜态分析师，早期涉足股票、现货、大宗商品投资，而后进入产业金融市场，多年的经验成就了自己独到的分析技巧方法，善于从基本面、经济面、技术面三面一体发现行情机会，倾向于中短线投资。交易风格：知已知彼，稳中获利。
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="news">
                  <div class="ui comments">
                    <div class="comment">
                      <a class="avatar">
                        <img src="/static/img/teacher-sunbin.png">
                      </a>
                      <div class="content">
                        <a class="author" v-link="{ path: '/Share-List-1#location'}">孙彬（国内资深金融分析师）</a>
                        <div class="text">高级研究员，8年行业经验，擅长技术面分析，顺势而为，对股票、期货、现货市场有深入的研究和独到的见解。依托均线基础，独创“黄金双线”交易战法，对日内行情有精准的预判力，且适用股票，期货，现货产品等多个不同的交易品种，为投资者所推崇。交易风格: 顺势而为，严控风险 。
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="news">
                  <div class="ui comments">
                    <div class="comment">
                      <a class="avatar">
                        <img src="/static/img/teacher-yd.jpg">
                      </a>
                      <div class="content">
                        <a class="author" v-link="{ path: '/Share-List-1#location'}">一刀老师（高级分析师）</a>
                        <div class="text">入市十余载，一直待在宁波 ，人称宁波敢死队成员，在这个血雨腥风的市场领悟到了心得体会。投资理念：趋势为王，波段操作，快进快出，犀利出击，毫不留恋市场，挣自己看的懂的钱，“以右侧交易买入，左侧交易卖出”不贪婪，不惧怕。交易思路：“计划你的交易，交易你的计划”买股票一般不超过三只，从不幻想，严格执行，一律带好止损!!交易风格：趋势为王，波段操作。
                        </div>
                      </div>
                    </div>
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
  .teachers-introduce-box{background-image: url("../../static/img/introduce-bg.png");background-repeat: no-repeat;background-color: rgb(255,255,255);}
  .teachers-introduce-box>.nav{text-align: left;margin:0px auto;width: 1003px;padding-top:15px;}
  .teachers-introduce-box>.nav>span{font-size: 12px;color:#909090;}
  .teachers-introduce-box>.nav>span:first-child{cursor: pointer;}
  .teachers-introduce-box>.nav>span:last-child{color: #323232;}
  .teachers-introduce-box>.nav>span:first-child:before{content: " ";width: 4px;height: 4px;background-color: rgb(95,52,39);border: 1px solid rgb(95,52,39);float:left;position: relative;
    top: 8px;left: -5px;}
  /*介绍内容*/
  .ui.grid.teachers-introduce{padding-top:80px;text-align: center;margin:0px auto;width: 1003px;padding-bottom:100px;}
  .ui.grid.teachers-introduce>.sixteen.wide.column{padding:0px;text-align: center;}
  .ui.grid.teachers-introduce>.sixteen.wide.column>.index-title{font-size: 48px;color:rgb(95,52,39);position: relative;display: inline-block;width: 280px;text-align: center;}
  .index-title:before {content: url("../../static/img/index-title-topline.png");position:absolute;top:-50px;left: 0px;}
  .index-title:after {content: url("../../static/img/index-title-bottomline.png");position: absolute;bottom: -25px;left:0px;}
  .ui.grid.introduce-content{padding-top:70px;width:830px;margin: 0px auto;}
  /*名师介绍借公司动态的新闻板式*/
  .ui.grid.introduce-content>.news{margin-top: 25px;text-align: left;border-bottom: 1px solid rgba(209,139,83,0.2);padding-bottom:30px;padding-left: 0px;}
  .ui.grid.introduce-content>.news>.ui.comments{max-width:800px;}
  .ui.grid.introduce-content>.news>.ui.comments>.comment>.avatar>img{width: 150px!important;height: 150px!important;}
  .ui.grid.introduce-content>.news>.ui.comments>.comment>.content{margin-left:180px;color:rgb(175,127,81);}
  .ui.grid.introduce-content>.news>.ui.comments>.comment>.content>a{color:rgb(175,127,81);font-size: 18px;}
  .ui.grid.introduce-content>.news>.ui.comments>.comment>.content>.text{color:rgb(175,127,81);font-size: 14px;margin-top: 35px;line-height: 22px;letter-spacing: 0.1em;text-align: justify;}




</style>
