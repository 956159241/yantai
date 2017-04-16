<template>
  <div class="home-message">
    <div class="ui container" id="location">
      <div class="twelve wide column main-content">
        <!--公司动态-->
        <div class="company-dynamic-box">
          <div class="container">
            <div class="ui grid companyDynamic">
              <div class="four wide column left">
                <div class="ui list">
                  <div class="item first">加入我们</div>
                  <div class="item second" v-link="{ path: '/strategicCooperation'}">- 战略合作</div>
                  <div class="item third" v-link="{ path: '/employment'}">- 招聘</div>
                </div>
              </div>
              <div class="twelve wide column right">
                <div class="page-title">招聘</div>
                <div class="essay">
                  <div class="section">
                    <p> 颜态资产以“专业、诚信、稳健”为企业理念，以“公平、公正、公开”为企业原则，通过完善的服务体系，规范的交易环境，专业化的人才团队，专业化的风险控制、研发与客户服务，我公司现诚募天下之英才，欢迎融入我们这个需要人才、尊重人才、珍惜人才的环境中，与我们共同打造一支国内大宗商品行业的精英团队，公司将为员工提供完善的培训和薪酬福利体系，并给员工提供广阔的晋升空间。 颜态资产期待与你携手并进，在方兴未艾的中国大宗商品投资领域，共创辉煌。</p>
                  </div>
                  <div class="section">
                    <table>
                      <tr>
                        <td>岗位名称</td>
                        <td>所属部门</td>
                        <td>招聘人数</td>
                        <td>截止日期</td>
                      </tr>
                      <tr>
                        <td>助理分析师</td>
                        <td>风控部</td>
                        <td>3</td>
                        <td>2016-11-11</td>
                      </tr>
                      <tr>
                        <td>交易分析师</td>
                        <td>风控部</td>
                        <td>3</td>
                        <td>2016-11-11</td>
                      </tr>
                    </table>
                  </div>
                  <div class="section">
                    <h3>福利待遇</h3>
                    <p>1.一年一度的国内外旅游机会；</p>
                    <p>2.一年一次的全身检查项目；</p>
                    <p>3.每年薪资都会递增；</p>
                    <p>4.享有五险一金的福利保障；</p>
                    <p>5.享有年终大红包等各种高端数码产品；</p>
                    <p>6.法定节假日都享有礼品或者购物卡；</p>
                    <p>7.每个月都有寿星一起过生日享福利；</p>
                    <p>8.量身指导制定职业规划，给予你更好的定位；</p>
                    <p>9.不定期举办各种培训和讲座，让你更具有竞争力；</p>
                    <p>10.不定期举办各种文艺活动，丰富你的生活；</p>
                  </div>
                  <div class="section">
                  <p>销售岗位晋升：</p>
                  <p>投资顾问-高级投资顾问-金牌投资顾问-精英投资顾问-核心投资顾问-部门经理</p>
                </div>
                  <div class="section">
                    <p>职能岗位晋升：</p>
                    <p>专员-中级专员-高级专员-部门主管-部门经理</p>
                  </div>
                  <div class="section">
                    <h3>联系方式</h3>
                    <p>地址：上海市虹口区东大名路588号美特斯邦威大厦三楼</p>
                    <p>官网：www.xxxxx.com</p>
                    <p>简历投递：</p>
                    <p>招聘电话：</p>
                    <p>联系部门：人事部</p>
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
  .twelve.wide.column.main-content{overflow: hidden;padding-left: 0px;text-align: center;padding-right:0px;background-color: rgb(255,255,255);background-image: url("../../static/img/introduce-bg.png");
    background-repeat: no-repeat;}
  /*公司动态*/
  .company-dynamic-box{}
  /*中间内容部分*/
  .company-dynamic-box>.container{margin:100px auto;width: 1003px;}
  /*左侧小导航*/
  .four.wide.column.left{text-align: left;}
  .four.wide.column.left>.ui.list{border-left:1px solid rgb(93,48,35);padding-left:20px;}
  .four.wide.column.left>.ui.list>.item.first{font-size: 16px;color:rgb(93,48,35);margin-bottom: 20px;}
  .four.wide.column.left>.ui.list>.item.first:before{content: " ";width: 15px;height:15px;background-color: rgb(93,48,35);border-radius: 50%;float:left;
    left: 7px;top:14px;position: absolute;}
  .four.wide.column.left>.ui.list>.item.second{font-size: 12px;color:rgb(93,48,35);margin-bottom: 20px;cursor:pointer;}
  .four.wide.column.left>.ui.list>.item.third{font-size: 12px;color:rgb(209,139,83);cursor:pointer;}
  /*右侧新闻动态列表*/
  .page-title{color: #5f3427;font-size: 20px;height: 44px;padding-bottom: 15px;padding-left: 15px;background: url(../../static/img/company-dynamic-line.png) no-repeat bottom left;
    text-align: center;}
  .twelve.wide.column.right>p.partner{font-size: 18px;color: rgb(145,112,91);text-align: left;margin-top: 25px;}
  .twelve.wide.column.right>.essay>.section{margin-top: 20px;}
  .twelve.wide.column.right>.essay>.section>p{text-align: justify;text-indent: 2em;line-height: 30px;color: rgb(145,112,91);margin-bottom: 5px;}
  .twelve.wide.column.right>.essay>.section>img{width:400px;height: auto;}
  .twelve.wide.column.right>.essay>.section>.important{text-align: left;text-indent:0em;margin-bottom:0px;}
  .twelve.wide.column.right>.essay>.section>h3{text-align: left;margin:0px;font-size: 14px;color: rgb(145,112,91);padding-bottom: 10px;}
  /*内部表格*/
  .section>table{width: 745px;}
  .section>table>tbody>tr{height: 50px;line-height: 50px;text-align: center;color: rgb(145,112,91);}
  .section>table>tbody>tr:first-child{background-color: rgb(93,48,35);color: #909090;font-size: 18px;}
  /*底部银行*/
  .ui.three.column.grid.cooperation>.column{padding:0px;margin-top: 20px;}



</style>
