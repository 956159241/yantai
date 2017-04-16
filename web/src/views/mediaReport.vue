<template>
  <div class="home-message">
    <div class="ui container">
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
                <div class="page-title">媒体报告</div>
                <div class="news">
                  <div class="ui comments">
                    <div class="comment">
                      <a class="avatar">
                        <img src="/static/img/company-dynamic-img.png">
                      </a>
                      <div class="content">
                        <a class="author" v-link="{ path: '/Share-List-1#location'}">银监会称理财新规仍在论证</a>
                        <div class="tag"><span class="date">发表于：2016年8月18日</span> <span class="divide">|</span> 标签：<span class="type">投资</span></div>
                        <div class="text">银监会正在研究制定《商业银行理财业务监督管理办法》（以下简称《办法》），旨在推动银行理财业务规范转型，促进理财业务规范健康、可持续发展，有效防范风险。
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="news">
                  <div class="ui comments">
                    <div class="comment">
                      <a class="avatar">
                        <img src="/static/img/company-dynamic-img.png">
                      </a>
                      <div class="content">
                        <a class="author" v-link="{ path: '/Share-List-1#location'}">银监会称理财新规仍在论证</a>
                        <div class="tag"><span class="date">发表于：2016年8月18日</span> <span class="divide">|</span> 标签：<span class="type">投资</span></div>
                        <div class="text">银监会正在研究制定《商业银行理财业务监督管理办法》（以下简称《办法》），旨在推动银行理财业务规范转型，促进理财业务规范健康、可持续发展，有效防范风险。
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="news">
                  <div class="ui comments">
                    <div class="comment">
                      <a class="avatar">
                        <img src="/static/img/company-dynamic-img.png">
                      </a>
                      <div class="content">
                        <a class="author" v-link="{ path: '/Share-List-1#location'}">银监会称理财新规仍在论证</a>
                        <div class="tag"><span class="date">发表于：2016年8月18日</span> <span class="divide">|</span> 标签：<span class="type">投资</span></div>
                        <div class="text">银监会正在研究制定《商业银行理财业务监督管理办法》（以下简称《办法》），旨在推动银行理财业务规范转型，促进理财业务规范健康、可持续发展，有效防范风险。
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="news">
                  <div class="ui comments">
                    <div class="comment">
                      <a class="avatar">
                        <img src="/static/img/company-dynamic-img.png">
                      </a>
                      <div class="content">
                        <a class="author" v-link="{ path: '/Share-List-1#location'}">银监会称理财新规仍在论证</a>
                        <div class="tag"><span class="date">发表于：2016年8月18日</span> <span class="divide">|</span> 标签：<span class="type">投资</span></div>
                        <div class="text">银监会正在研究制定《商业银行理财业务监督管理办法》（以下简称《办法》），旨在推动银行理财业务规范转型，促进理财业务规范健康、可持续发展，有效防范风险。
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="news">
                  <div class="ui comments">
                    <div class="comment">
                      <a class="avatar">
                        <img src="/static/img/company-dynamic-img.png">
                      </a>
                      <div class="content">
                        <a class="author" v-link="{ path: '/Share-List-1#location'}">银监会称理财新规仍在论证</a>
                        <div class="tag"><span class="date">发表于：2016年8月18日</span> <span class="divide">|</span> 标签：<span class="type">投资</span></div>
                        <div class="text">银监会正在研究制定《商业银行理财业务监督管理办法》（以下简称《办法》），旨在推动银行理财业务规范转型，促进理财业务规范健康、可持续发展，有效防范风险。
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="page" >
                  <span>&lt;上一页</span>
                  <ul>
                    <li class="active">1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                    <li>...</li>
                    <li>7</li>
                  </ul>
                  <span>下一页&gt;</span>
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
  .four.wide.column.left>.ui.list>.item.second{font-size: 12px;margin-bottom: 20px;color:rgb(93,48,35); cursor: pointer;}
  .four.wide.column.left>.ui.list>.item.third{font-size: 12px;color:rgb(209,139,83);cursor: pointer;}
  /*右侧新闻动态列表*/
  .page-title{color: #5f3427;font-size: 20px;height: 44px;padding-bottom: 15px;padding-left: 15px;background: url(../../static/img/company-dynamic-line.png) no-repeat bottom left;
    text-align: left;}
  .twelve.wide.column.right>.news{margin-top: 25px;text-align: left;border-bottom: 1px solid rgba(209,139,83,0.2);}
  .twelve.wide.column.right>.news>.ui.comments{max-width:800px;}
  .twelve.wide.column.right>.news>.ui.comments>.comment>.avatar>img{width: 120px!important;height: 120px!important;}
  .twelve.wide.column.right>.news>.ui.comments>.comment>.content{margin-left:145px;}
  .twelve.wide.column.right>.news>.ui.comments>.comment>.content>.author{font-size: 18px;color: rgb(50,50,50);}
  .twelve.wide.column.right>.news>.ui.comments>.comment>.content>.tag{margin-top: 25px;font-size: 12px;color: rgb(74,38,28);margin-bottom: 18px;}
  .twelve.wide.column.right>.news>.ui.comments>.comment>.content>.tag>.date{color: rgb(142,108,87)}
  .twelve.wide.column.right>.news>.ui.comments>.comment>.content>.tag>.divide{margin: 0px 25px;}
  .twelve.wide.column.right>.news>.ui.comments>.comment>.content>.tag>.type{color:rgb(211,174,118);}
  .twelve.wide.column.right>.news>.ui.comments>.comment>.content>.text{color: rgb(73,38,28);line-height: 25px;}
  /*右侧底部分页*/
  .twelve.wide.column.right>.page{text-align: left;margin-top: 35px;}
  .twelve.wide.column.right>.page>span{display: inline-block;cursor: pointer;}
  .twelve.wide.column.right>.page>ul{display: inline-block;border-left: 1px solid rgba(0,0,0,0.1);border-right: 1px solid rgba(0,0,0,0.1);padding-left: 0px;
    margin: 0px 20px;}
  .twelve.wide.column.right>.page>ul>li{display: inline-block;width: 25px;height: 25px;line-height:25px;text-align: center;vertical-align: middle;cursor: pointer;}
  .twelve.wide.column.right>.page>ul>li.active{background-color: rgb(175,127,88);border-radius: 50%;}
  .twelve.wide.column.right>.page>ul>li:hover{background-color: rgb(175,127,88);border-radius: 50%;}




</style>
