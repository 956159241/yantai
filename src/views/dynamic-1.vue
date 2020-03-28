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
                  <div class="item first">新闻动态</div>
                  <div class="item second" v-link="{ path: '/companyDynamic'}">- 公司动态</div>
                  <div class="item third" v-link="{ path: '/mediaReport'}">- 媒体报告</div>
                </div>
              </div>
              <div class="twelve wide column right">
                <div class="page-title">证监会：资本市场以服务实体经济为宗旨</div>
                <p class="date">发表于：2016年08月11日</p>
                <div class="essay">
                  <div class="section">
                    <p>在2016年6月12日举行的“2016陆家嘴论坛”上，中国证监会副主席姜洋表示，要稳步推进资本市场对外开放，择时启动深港通，完善沪港通， 继续推进商品期货市场对外开放，循序渐进地引入境外投资者参与中国商品期货市场。</p>
                  </div>
                  <div class="section">
                    <img src="/static/img/dynamic-1-img-1.png">
                  </div>
                  <div class="section">
                    <p>姜洋说，目前，中国经济正处于发展的新常态，经济运行总体态势符合预期，新模式、新业态不断涌现，经济发展的新动能正呈多元上升之势，供给侧结构性改革正有序推进，一些领域旧产能逐渐出清， 但总体上固有矛盾还没有得到彻底缓解，结构性问题依然突出，总需求低迷和产能过剩并存，企业杠杆率高企，信用违约风险增加，经济下行压力仍然存在。经济新常态对资本市场的发展既是挑战，更是机遇。 中国证监会将按照融资功能完备、基础制度扎实、市场监管有效、投资者合法权益得到充分保护的目标，加快推进资本市场稳定健康发展，全面提升服务经济社会发展的能力。</p>
                  </div>
                  <div class="section">
                    <p class="important">姜洋表示，建设资本市场是一个系统工程，牵涉面广。新时期建设资本市场需要把握好以下几个重点：</p>
                    <h3>一．夯实市场基础提高服务能力</h3>
                    <p>发展资本市场，必须始终坚持服务实体经济的根本宗旨，决不能“脱实向虚”，更不能“自娱自乐”。只有市场基础扎实且牢靠，配置资源和风险管理等功能有效发挥， 资本市场对实体经济的服务才能落到实处，才能真正对企业和国民经济起到支持和保障作用。要提高上市公司质量，进一步优化信息披露和完善公司治理，规范大股东行为。要加强对证券期货经营机构、 会计师事务所、律师事务所以及资产评估师事务所等重要中介机构经营行为的规范和引导，做好持续风险监测和监管。要全面加强市场法规制度体系建设，完善基础性法律制度，优化专门的行政法规体系， 改善执法环境，提升资本市场的法治化水平。要推进市场信息化建设，提高资本市场防范网络攻击、应对突发事件、维护信息安全的能力。</p>
                  </div>
                  <div class="section">
                    <h3>二．坚决守住不发生系统性风险的底线</h3>
                    <p>要把风险防控贯穿于产品设计、市场建设、改革举措等各个环节，建立健全风险跟踪、监测和处置机制，切实关注单一业务、单一产品、单一机构的风险外溢问题。要紧跟市场发展步伐，强化监管协作， 填补监管空白，堵塞监管漏洞，提高监管有效性。当前，要在维护市场平稳运行的基础上，规范互联网股权融资活动，防范私募基金、股权众筹等领域的风险。</p>
                  </div>
                  <div class="section">
                    <h3>三．处理好事前防范和事后处罚的关系</h3>
                    <p>一方面，要注重事前防范。首先要做到规则前移，把法律的规定、监管的要求细化到一线监管制度规则当中。其次，要做到“哨兵”前移，充分发挥一线监察和现场检查的作用，对苗头性、倾向性的违法违规问题， 早发现、早提醒、早纠正、早处理。另一方面，对严重违法违规者要始终保持高压态势。要坚持依法治市，全面提升行政、刑事处罚力度，同时要加强与其他部委的协作，严格实施联合惩戒。</p>
                  </div>
                  <div class="section">
                    <h3>四．稳步推进资本市场对外开放</h3>
                    <p>要立足国情实际，准确把握市场规律，合理吸收、消化、运用国际先进经验成果，着力深化资本市场双向开放，使开放的节奏和力度与中国经济发展水平、市场发育程度相适应。要进一步便利境内外市场主体进行跨境投资， 择时启动深港通，完善沪港通。继续推进商品期货市场对外开放，循序渐进地引入境外投资者参与中国商品期货市场。进一步拓宽境内企业境外上市融资渠道，支持境内企业做优做强。</p>
                  </div>
                  <div class="section">
                    <h3>五．切实保护好投资者的合法权益</h3>
                    <p>建立健全统一的投资者适当性制度，督促证券期货经营机构等中介机构加强适当性管理，把好市场入口关，确保将适当的产品销售给适当的投资者。加强投资者风险警示，引导投资者理性参与交易。 持续做好新闻发布工作和透明度建设，营造良好的市场发展环境。</p>
                  </div>
                  <div class="ui grid divide-page">
                    <div class="eight wide column left"><p>上一篇：<a>发动机阿萨立即开始的泛滥是</a></p></div>
                    <div class="eight wide column right"><p>下一篇：<a>发动机阿萨立即开始的泛滥是</a></p></div>

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
  .four.wide.column.left>.ui.list>.item.second{font-size: 12px;color:rgb(209,139,83);margin-bottom: 20px;cursor:pointer;}
  .four.wide.column.left>.ui.list>.item.third{font-size: 12px;color:rgb(93,48,35);cursor:pointer;}
  /*右侧新闻动态列表*/
  .page-title{color: #5f3427;font-size: 20px;height: 44px;padding-bottom: 15px;padding-left: 15px;background: url(../../static/img/company-dynamic-line.png) no-repeat bottom left;
    text-align: center;}
  .twelve.wide.column.right>p.date{font-size: 12px;color: rgb(145,112,91);text-align: left;margin-top: 25px;}
  .twelve.wide.column.right>.essay>.section{margin-top: 20px;}
  .twelve.wide.column.right>.essay>.section>p{text-align: justify;text-indent: 2em;line-height: 30px;color: rgb(145,112,91);}
  .twelve.wide.column.right>.essay>.section>img{width: 200px;height: auto;}
  .twelve.wide.column.right>.essay>.section>.important{text-align: left;text-indent:0em;margin-bottom:0px;}
  .twelve.wide.column.right>.essay>.section>h3{text-align: left;margin:0px;font-size: 14px;color: rgb(145,112,91);padding-bottom: 10px;}
  /*右侧底部分页*/
  .ui.grid.divide-page{margin-top: 50px;font-size: 12px;color:#af7f51;}
  .ui.grid.divide-page>.eight.wide.column.left{text-align: left;}
  .ui.grid.divide-page>.eight.wide.column.left>p>a{color:#af7f51; cursor: pointer;}
  .ui.grid.divide-page>.eight.wide.column.left>p>a:hover{color: #cccccc;}
  .ui.grid.divide-page>.eight.wide.column.right{text-align: right;}
  .ui.grid.divide-page>.eight.wide.column.right>p>a{color:#af7f51;cursor: pointer;}
  .ui.grid.divide-page>.eight.wide.column.right>p>a:hover{color: #cccccc;}


</style>
