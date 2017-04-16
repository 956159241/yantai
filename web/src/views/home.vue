<template>
  <div class="home-message">
    <div class="ui container">
      <div class="twelve wide column main-content">
        <!--轮播图片-->
        <div class="fullSlide">
          <div class="bd">
            <ul>
              <li _src="url(../../static/img/home-loop-1.png)" style="background: center 0 no-repeat;"><a href="#"></a></li>
              <!--<li _src="url(../../static/img/home-loop-1.png)" style="background: center 0 no-repeat;"><a href="#"></a></li>-->
              <!--<li _src="url(../../static/img/home-loop-1.png)" style="background: center 0 no-repeat;"><a href="#"></a></li>-->
            </ul>
          </div>
          <div class="hd"><ul></ul></div>
          <span class="prev"></span>
          <span class="next"></span>
        </div>
        <!--fullSlide end-->
        <!--财富掘金-->
        <div class="ui grid fortune">
          <div class="sixteen wide column">
            <h1 class="index-title">财富掘金</h1>
            <div class="ui grid fortune-content">
              <div class="eleven wide column video">
                <div class="into-chat"><a href="#">进入直播室</a></div>
                <video controls="controls" autoplay="autoplay">
                  <source src="../../static/video/mp4.mp4" type="video/mp4">
                  Your browser does not support the video tag.
                </video>
              </div>
              <div class="five wide column right">
                <div class="fortune-list">
                  <h2 class="ui header">
                    <img class="ui image" src="../../static/img/home-fortune-list-1.png">
                    <div class="content"><a href="#">立即开户</a></div>
                  </h2>
                </div>
                <div class="fortune-list">
                  <h2 class="ui header">
                    <img class="ui image" src="../../static/img/home-fortune-list-2.png">
                    <div class="content"><a href="#">签约流程</a></div>
                  </h2>
                </div>
                <div class="fortune-list">
                  <h2 class="ui header">
                    <img class="ui image" src="../../static/img/home-fortune-list-3.png">
                    <div class="content"><a href="#">软件下载</a></div>
                  </h2>
                </div>
                <div class="fortune-list">
                  <h2 class="ui header">
                    <img class="ui image" src="../../static/img/home-fortune-list-4.png">
                    <div class="content"><a href="#">产品中心</a></div>
                  </h2>
                </div>
                <div class="fortune-list">
                  <h2 class="ui header">
                    <img class="ui image" src="../../static/img/home-fortune-list-5.png">
                    <div class="content"><a href="#">新闻动态</a></div>
                  </h2>
                </div>

              </div>
            </div>

          </div>
        </div>
        <!--新闻动态-->
        <div class="ui grid news-dynamic">
          <div class="sixteen wide column">
            <h1 class="index-title">新闻动态</h1>
            <div class="ui grid news-content">
              <div class="eight wide column news-dynamic-left">
                <img class="ui image" src="../../static/img/news-dynamic-1.png">
                <div class="ui segment news-list">
                  <p class="header"><span>07</span>/17 颜态资产殷哲：FOF投资机遇来临...</p>
                  <p>元芳，FOF双重收费问题，你怎么看？ <span class="date">2016/06/07</span></p>
                  <p>有家公司这样玩Town Hall的，你造吗？ <span class="date">2016/06/07</span></p>
                  <p>王彪文（PV Wang）：私募股权母基金，择优而取 <span class="date">2016/06/07</span></p>
                  <p>王彪文（PV Wang）：私募股权母基金，择优而取 <span class="date">2016/06/07</span></p>
                </div>
              </div>
              <div class="eight wide column news-dynamic-right">
                <img class="ui image" src="../../static/img/news-dynamic-2.png">
                <div class="ui segment news-list">
                  <p class="header"><span>07</span>/17 颜态资产殷哲：FOF投资机遇来临...</p>
                  <p>元芳，FOF双重收费问题，你怎么看？ <span class="date">2016/06/07</span></p>
                  <p>有家公司这样玩Town Hall的，你造吗？ <span class="date">2016/06/07</span></p>
                  <p>王彪文（PV Wang）：私募股权母基金，择优而取 <span class="date">2016/06/07</span></p>
                  <p>王彪文（PV Wang）：私募股权母基金，择优而取 <span class="date">2016/06/07</span></p>
                </div>
              </div>
            </div>

          </div>
        </div>
        <!--导师团队-->
        <div class="ui grid tutor-team">
          <div class="sixteen wide column">
            <h1 class="index-title">导师团队</h1>
            <div class="ui grid teachers">
                <div class="four wide column teacher-info">
                  <h2 class="ui icon header teacher">
                    <img src="/static/img/teacher-gansixu.png">
                    <div class="content">甘懋胥（首席高级分析师）
                      <div class="sub header"><hr/></div>
                    </div>
                  </h2>
                  <div class="ui segment teacher-introduce">
                    <p>甘老师1995年就扎根证劵金融行业，至今已20多年，曾在中银国际证劵、华西证劵、长城证劵等多家卷商担任高管，目前在上海多家私募机构和资产管理公司任高管，在国内外宏观政策研究、行业研究有非常独特的见解，擅长金融商品分析及解盘操作。</p>
                    <br/><br/>
                  </div>
                </div>
                <div class="four wide column teacher-info">
                <h2 class="ui icon header teacher">
                  <img src="/static/img/teacher-ding.png">
                  <div class="content">丁雪峰（高级分析师）
                    <div class="sub header"><hr/></div>
                  </div>
                </h2>
                <div class="ui segment teacher-introduce">
                  <p>英国卡迪夫大学理学硕士，获得ACCA（特许公认会计）认证。具有国际视野和时政敏感度。六年的外汇和期货操盘经验，即便账户有多次十倍盈利的历史，扔坚持操盘风控第一的习惯。操盘分两条线：看似波段，实循趋势。</p>
                  <br/><br/>
                </div>
              </div>
                <div class="four wide column teacher-info">
                <h2 class="ui icon header teacher">
                  <img src="/static/img/teacher-llw.jpg">
                  <div class="content">李连文（高级分析师）
                    <div class="sub header"><hr/></div>
                  </div>
                </h2>
                <div class="ui segment teacher-introduce">
                  <p>国内重点院校金融专业出身，有近20年的股票、TD和现货实盘操作经验。曾准确把握了黄金14年超低行情，原油15年超低行情，并且于15年从股市成功逃顶，实战经验丰富，擅长技术分析，独创一套自己的平衡战法“抄底”。</p>
                  <br/><br/>
                </div>
              </div>
                <div class="four wide column teacher-info">
                <h2 class="ui icon header teacher">
                  <img src="/static/img/teacher-4.png">
                  <div class="content">鲁祝稳（金融分析师）
                    <div class="sub header"><hr/></div>
                  </div>
                </h2>
                <div class="ui segment teacher-introduce">
                  <p>颜态分析师，早期涉足股票、现货、大宗商品投资，而后进入产业金融市场，多年的经验成就了自己独到的分析技巧方法，善于从基本面、经济面、技术面三面一体发现行情机会，倾向于中短线投资。交易风格：知已知彼，稳中获利。</p>
                  <br/><br/>
                </div>
              </div>
            </div>
            <br/><br/><br/><br/>

          </div>
        </div>



      </div>
    </div>
  </div>
</template>
<script>
  let $ = require('jquery')
//  let Slider = require('slider')
  export default{
    replace: false,
    ready: function () {
      $('.ui.modal').modal('show')
      $('.fullSlide').hover(function () {
        $(this).find('.prev,.next').stop(true, true).fadeTo('show', 0.5)
      },
        function () {
          $(this).find('.prev,.next').fadeOut()
        })
      $('.fullSlide').slide({
        titCell: '.hd ul',
        mainCell: '.bd ul',
        effect: 'fold',
        autoPlay: true,
        autoPage: true,
        trigger: 'click',
        startFun: function (i) {
          var curLi = $('.fullSlide .bd li').eq(i)
          if (curLi.attr('_src')) {
            curLi.css('background-image', curLi.attr('_src')).removeAttr('_src')
          }
        }
      })
    },
    jquery: function () {
      $('.ui.dropdown')
        .dropdown()
    },
    data () {
      return {
      }
    },
    methods: {
      Into_home: function () {
        $('.ui.dimmer.modals.page.transition.visible.active').css('display', 'none')
      }
    }
  }
</script>
<style scoped>
  .ui.container{width: 1600px;}
  .two.wide.column{margin: 0px;padding:0px;}
  .twelve.wide.column.main-content{overflow: hidden;padding-left: 0px;text-align: center;padding-right:0px;background-color: rgb(245,245,245);}
  /*轮播图片*/
  *{margin:0;padding:0;list-style:none;}
  img{border:0;}
  a{text-decoration:none;color:#333;}
  /*a:hover{color:#1974A1;}*/
  /* fullSlide */
  .fullSlide{width:100%;position:relative;height:560px;background:#000;}
  .fullSlide .bd{margin:0 auto;position:relative;z-index:0;overflow:hidden;}
  .fullSlide .bd ul{width:100% !important;}
  .fullSlide .bd li{width:100% !important;height:560px;overflow:hidden;text-align:center;}
  .fullSlide .bd li a{display:block;height:560px;}
  .fullSlide .hd{width:100%;position:absolute;z-index:1;bottom:0;left:0;height:30px;line-height:30px;}
  /*.fullSlide .hd{width:100%;position:absolute;z-index:1;bottom:0;left:0;height:30px;line-height:30px;display: none;}*/
  .fullSlide .hd ul{text-align:center;display: none;}
  .fullSlide .hd ul li{cursor:pointer;display:inline-block;*display:inline;*zoom:1;width:42px;height:11px;margin:1px;overflow:hidden;background:#000;filter:alpha(opacity=50);
  /*.fullSlide .hd ul li{cursor:pointer;display:inline-block;*display:inline;zoom:1;width:42px;height:11px;margin:1px;overflow:hidden;background:#000;filter:alpha(opacity=50);*/
    opacity:0.5;line-height:999px;}
  /*.fullSlide .hd ul .on{background:#f00;}*/
  /*.fullSlide .prev,.fullSlide .next{display:block;position:absolute;z-index:1;top:50%;margin-top:-30px;left:15%;z-index:1;width:40px;height:60px;*/
    /*background:url("../../static/img/slider-arrow.png") -126px -137px #000 no-repeat;*/
    /*cursor:pointer;filter:alpha(opacity=50);opacity:0.5;display:none;}*/
  .fullSlide .next{left:auto;right:15%;background-position:-6px -137px;}

  /*财富掘金*/
  .ui.grid.fortune{padding-top:80px;text-align: center;margin:0px auto;width: 1003px;}
  .ui.grid.fortune>.sixteen.wide.column{padding:0px;text-align: center;}
  .ui.grid.fortune>.sixteen.wide.column>.index-title{font-size: 48px;color:rgb(95,52,39);position: relative;display: inline-block;width: 280px;text-align: center;}
  .index-title:before {content: url("../../static/img/index-title-topline.png");position:absolute;top:-50px;left: 0px;}
  .index-title:after {content: url("../../static/img/index-title-bottomline.png");position: absolute;bottom: -25px;left:0px;}
  .ui.grid.fortune-content{padding-top:50px;}
  /*财富掘金左侧视频*/
  .ui.grid.fortune-content>.eleven.wide.column.video{text-align: left;}
  .ui.grid.fortune-content>.eleven.wide.column.video>.into-chat{height: 20px;text-align: center;background-color: rgba(166,169,139,0.5);width: 675px;height: 30px;
    line-height: 30px;vertical-align: middle;color:rgb(255,255,255);font-size: 16px;display: none;}
  .into-chat>a{color:rgb(255,255,255);font-size: 16px;}
  .ui.grid.fortune-content>.eleven.wide.column.video>video{width:auto;height:380px;padding:0px;}
  /*财富掘金右侧列表*/
  .ui.grid.fortune-content>.five.wide.column.right{text-align: right;}
  .ui.grid.fortune-content>.five.wide.column.right>.fortune-list{text-align: center;background-color: rgb(196,170,143);margin-bottom: 24px;}
  .ui.grid.fortune-content>.five.wide.column.right>.fortune-list:last-child{margin-bottom: 0px;}
  .ui.grid.fortune-content>.five.wide.column.right>.fortune-list>h2{text-align: center;height: 60px;line-height: 60px;vertical-align: middle;}
  .fortune-list>.ui.header>.ui.image{width: 37px;height:37px;}
  .fortune-list>.ui.header>.content{font-size: 18px;color:rgb(80,42,30);font-weight: 100;margin-left: 40px;}
  .fortune-list>.ui.header>.content>a{color:rgb(80,42,30);}
  .fortune-list>.ui.header>.content>a:hover{color:white;}
  /*新闻动态*/
  .ui.grid.news-dynamic{padding-top:80px;text-align: center;margin:0px auto;width: 1003px;}
  .ui.grid.news-dynamic>.sixteen.wide.column{padding:0px;text-align: center;}
  .ui.grid.news-dynamic>.sixteen.wide.column>.index-title{font-size: 48px;color:rgb(95,52,39);position: relative;display: inline-block;width: 280px;text-align: center;}
  .index-title:before {content: url("../../static/img/index-title-topline.png");position:absolute;top:-50px;left: 0px;}
  .index-title:after {content: url("../../static/img/index-title-bottomline.png");position: absolute;bottom: -25px;left:0px;}
  .ui.grid.news-content{padding-top:50px;}
  /*新闻动态左侧新闻*/
  .ui.grid.news-content>.eight.wide.column.news-dynamic-left{padding: 0px!important;margin-bottom:10px;}
  .ui.grid.news-content>.eight.wide.column.news-dynamic-left>img{width: 100%;height:217px;}
  .ui.grid.news-content>.eight.wide.column.news-dynamic-left>.ui.segment.news-list{margin: 0px; padding:30px 35px 30px 35px;border:0px;border-radius: 0px;box-shadow: 0px 0px transparent;
  background-color: rgb(225,212,198);color:rgb(128,88,61);text-align: justify;}
  .eight.wide.column.news-dynamic-left>.ui.segment.news-list>p{border-bottom: 1px solid rgba(128,88,61,0.2);font-size: 14px;line-height: 30px;}
  .eight.wide.column.news-dynamic-left>.ui.segment.news-list>p:hover{cursor: pointer;}
  .eight.wide.column.news-dynamic-left>.ui.segment.news-list>.header{font-size: 18px;}
  .eight.wide.column.news-dynamic-left>.ui.segment.news-list>.header>span{font-size: 30px;margin-right:15px;}
  .eight.wide.column.news-dynamic-left>.ui.segment.news-list>p>.date{float: right;}
  /*新闻动态右侧新闻*/
  .ui.grid.news-content>.eight.wide.column.news-dynamic-right{padding:0px;margin-bottom:10px; }
  .ui.grid.news-content>.eight.wide.column.news-dynamic-right>img{width:100%; }
  .ui.grid.news-content>.eight.wide.column.news-dynamic-right>.ui.segment.news-list{margin: 0px; padding:30px 35px 30px 35px;border:0px;border-radius: 0px;box-shadow: 0px 0px transparent;
    background-color: rgb(225,212,198);color:rgb(128,88,61);text-align: justify;}
  .eight.wide.column.news-dynamic-right>.ui.segment.news-list>p{border-bottom: 1px solid rgba(128,88,61,0.2);font-size: 14px;line-height: 30px;}
  .eight.wide.column.news-dynamic-right>.ui.segment.news-list>p:hover{cursor: pointer;}
  .eight.wide.column.news-dynamic-right>.ui.segment.news-list>.header{font-size: 18px;}
  .eight.wide.column.news-dynamic-right>.ui.segment.news-list>.header>span{font-size: 30px;margin-right:15px;}
  .eight.wide.column.news-dynamic-right>.ui.segment.news-list>p>.date{float: right;}
  /*导师团队*/
  .ui.grid.tutor-team{padding-top:80px;text-align: center;margin:0px auto;width: 1003px;padding-bottom: 100px;}
  .ui.grid.tutor-team>.sixteen.wide.column{padding:0px;text-align: center;}
  .ui.grid.tutor-team>.sixteen.wide.column>.index-title{font-size: 48px;color:rgb(95,52,39);position: relative;display: inline-block;width: 280px;text-align: center;}
  .index-title:before {content: url("../../static/img/index-title-topline.png");position:absolute;top:-50px;left: 0px;}
  .index-title:after {content: url("../../static/img/index-title-bottomline.png");position: absolute;bottom: -25px;left:0px;}
  .ui.grid.teachers{padding-top:50px;}
  /*导师团队介绍卡片*/
  .ui.icon.header.teacher>img{height: 221px;width:202px;max-width: 202px;}
  .ui.icon.header.teacher>.content{font-size: 16px;color:rgb(95,52,39);}
  .ui.icon.header.teacher>.content>.sub.header>hr{margin-left:70px;margin-top:10px;height: 3px;width: 60px;border: none;background-color: rgb(175,153,147);}
  .teacher-introduce{background-color: transparent;padding:0px;margin: 0px;border: none;box-shadow: 0px 0px transparent;border-radius: 0px;color:rgb(128,88,61);text-align: justify;
  letter-spacing: 0.2em;font-size: 12px;line-height: 30px;height: 30px;}

</style>
