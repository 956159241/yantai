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
                <div class="page-title">战略合作</div>
                <p class="partner">合作单位</p>
                <div class="essay">
                  <div class="section">
                    <h3>湘商收藏品交易中心</h3>
                    <p>湘商商品交易中心是一家采用创新融合“互联网+文化+产业+金融”发售模式，立足于中部、辐射全国、流通南北、融合世界的收藏品电子交易创新平台。交易中心为全力打造湘商收藏品交易平台，整合各方面资源，进一步激活文化收藏品交易市场，助推其加速发展，特精心构建了具有绝对竞争力的四大优势。</p>
                  </div>
                  <div class="section">
                    <img src="/static/img/cooperation-img-4.png">
                  </div>
                  <div class="section">
                    <p>1、资源优势</p>
                    <p>现有200家会员机构，十余万活跃客户群，数万从业人员，有百亿可导入流动性资源和重量级基金已入驻； </p>
                  </div>
                  <div class="section">
                    <p>2、团队优势</p>
                    <p>集合了证券、期货、现货行业多层次人才精英，十余年丰富市场经验的运营团队，具有能够有效整合收藏品产业链上下游、盘活收藏品市场存量资源能力的现货团队；集合国内最具权威、多领域的藏品鉴定专家组。 </p>
                  </div>
                  <div class="section">
                    <p>3、创新优势</p>
                    <p>创新收藏品类商品发售模式，为收藏品交易可持续发展奠定基础； 行业高端智库——湘商研究院（企业常设机构），长期进行政策研究，创新产品及交易模式。 </p>
                  </div>
                  <div class="section">
                    <p>4、发展优势</p>
                    <p>深入研究了行业发展的痛点，首创资源匹配模式，能实际有效的解决行业发展普遍面临的短板，以创新傲立潮头，又将在收藏品行业开创新格局。</p>
                  </div>
                  <div class="section">
                    <h3>新华产权交易所</h3>
                    <p>新华产权交易所是新华（大庆）国际石油资讯中心有限公司全资子公司，是新华社受国务院委托，确立的“新华08”项目的重要支柱板块，是通过国家部际联席会议审核通过的，是国家从金融战略高度顶层设计，全局规化，推动中国金融市场的进一步发展，进而实现全球金融的价格指数。新华是提供产权交易签证服务，提供资讯，资询，培训，财务顾问服务于一体的综合类交易所。</p>
                  </div>
                  <div class="section">
                    <p>根据不同市场需求和客户需要，新华产权交易所目前有产权交易、股权托管、金融资产、理财保险、大宗商品和环境能源六大业务板块，有咨询、资讯、培训、品牌管理和财务顾问五大服务支撑体系，最大程度地满足合作伙伴的经营需求。</p>
                  </div>
                  <div class="section">
                    <p>根据国家金融发展趋势，新华产权交易所秉承“创新服务”宗旨，以市场为导向和企业自身对产品价格发现的需要，在控制市场风险的同时，不断创新推出既符合国家战略利益，又符合国内、国际市场需求的多层次可交易品种。</p>
                  </div>





                </div>
                <p class="partner">合作银行</p>
                <div class="ui three column grid cooperation">
                  <div class="column"><img src="/static/img/cooperation-img-1.png"></div>
                  <div class="column"><img src="/static/img/cooperation-img-2.png"></div>
                  <div class="column"><img src="/static/img/cooperation-img-3.png"></div>
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
  .four.wide.column.left>.ui.list>.item.second{font-size: 12px;color:rgb(209,139,83);margin-bottom: 20px;cursor:pointer;}
  .four.wide.column.left>.ui.list>.item.third{font-size: 12px;color:rgb(93,48,35);cursor:pointer;}
  /*右侧新闻动态列表*/
  .page-title{color: #5f3427;font-size: 20px;height: 44px;padding-bottom: 15px;padding-left: 15px;background: url(../../static/img/company-dynamic-line.png) no-repeat bottom left;
    text-align: center;}
  .twelve.wide.column.right>p.partner{font-size: 18px;color: rgb(145,112,91);text-align: left;margin-top: 25px;}
  .twelve.wide.column.right>.essay>.section{margin-top: 20px;}
  .twelve.wide.column.right>.essay>.section>p{text-align: justify;text-indent: 2em;line-height: 30px;color: rgb(145,112,91);margin-bottom: 5px;}
  .twelve.wide.column.right>.essay>.section>img{width:400px;height: auto;}
  .twelve.wide.column.right>.essay>.section>.important{text-align: left;text-indent:0em;margin-bottom:0px;}
  .twelve.wide.column.right>.essay>.section>h3{text-align: left;margin:0px;font-size: 14px;color: rgb(145,112,91);padding-bottom: 10px;}
  /*底部银行*/
  .ui.three.column.grid.cooperation>.column{padding:0px;margin-top: 20px;}



</style>
