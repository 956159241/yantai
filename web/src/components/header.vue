<template>
  <!--头部内容-->
  <div class="message-header">
    <!--头部内容容器-->
    <div class="ui container">
      <!--top-->
      <div class="ui grid top-row">
        <div class="sixteen wide column top">
          <div class="ui grid container">
          <!--top左侧文字-->
            <div class="eight wide column top-left">
              欢迎来到颜态资产！
            </div>
            <!--top右侧联系电话及微信联系方式-->
            <div class="eight wide column top-right">
              <!--top-微信下拉-->
              <div class="ui dropdown weixin">
                <img class="ui avatar image weixin-logo" src="/static/img/weixin-logo.png">
                <div class="menu">
                  <div class="item"><img class="image" src="/static/img/weixin.jpg">
                    <div class="sub">扫一扫  关注我们</div>
                  </div>
                </div>
              </div>
              <!--top-联系电话-->
              <span class="divide">|</span>
              <div class="ui dropdown weixin">
                <img class="ui avatar image weixin-logo" src="/static/img/phone-logo.png">
              </div>
              <span>服务热线：400-629-3216</span>
            </div>
          </div>
        </div>
      </div>
      <!--navigation-->
      <div class="ui grid navigation">
        <div class="sixteen wide column navigation">
          <!--导航-->
          <div class="ui container nav" style="">
          <div class="ui big breadcrumb navigation">
            <div class="section" v-link="{ path: '/home', activeClass: 'active'}">首页</div>
            <a class="section" :class="{ 'active': $route.path.indexOf('about') > 0 }">
              <div class="ui pointing dropdown link item">
                <span class="section">关于颜态</span>
                <div class="menu into">
                  <div class="item" v-link="{ path: '/introduce'}">企业简介</div>
                  <div class="item" v-link="{ path: '/contact'}">联系我们</div>
                </div>
              </div>
            </a>
            <a class="section" :class="{ 'active': $route.path.indexOf('PS') > 0 }">
              <div class="ui pointing dropdown link item">
                <span class="section">新闻动态</span>
                <div class="menu product">
                  <div class="item" v-link="{ path: '/companyDynamic'}">公司动态</div>
                  <div class="item" v-link="{ path: '/mediaReport'}">媒体报告</div>
                </div>
              </div>
            </a>
            <a class="section"  :class="{ 'active': $route.path.indexOf('News') > 0 }">
              <div class="ui pointing dropdown link item">
                <span class="section" v-link="{ path: '/service' }">服务大厅</span>
              </div>
            </a>
            <a >
             <img style="" src="/static/img/logo.png">
            </a>
            <a class="section right" :class="{ 'active': $route.path.indexOf('Contact') > 0 }">
              <div class="ui pointing dropdown link item">
                <!--<span class="section" v-link="{ path: '/product'}">产品介绍</span>-->
                <span class="section" @click="product">产品介绍</span>
              </div>
            </a>
            <a class="section"  :class="{ 'active': $route.path.indexOf('Contact') > 0 }">
              <div class="ui pointing dropdown link item">
                <span class="section" v-link="{ path: '/investAcademy' }">投资学院</span>
              </div>
            </a>
            <a class="section"  :class="{ 'active': $route.path.indexOf('Contact') > 0 }">
              <div class="ui pointing dropdown link item">
                <span class="section" v-link="{ path: '/download' }">下载</span>
              </div>
            </a>
            <a class="section last"  :class="{ 'active': $route.path.indexOf('Contact') > 0 }">
              <div class="ui pointing dropdown link item">
                <span class="section">加入我们</span>
                <div class="menu contact">
                  <div class="item" v-link="{ path: '/strategicCooperation'}">战略合作</div>
                  <div class="item" v-link="{ path: '/employment'}">招聘</div>
                </div>
              </div>
            </a>
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
        window.location.href = 'product'
      }
    },
    components: {
    }
  }
</script>
<style scoped>
  *{font-family: "Microsoft YaHei";}
  .ui.container{width: 1600px;padding:0px;}
  /*top*/
  .ui.grid.top-row{background-color: rgb(47,18,10);padding:0px;margin: 0px;}
  .sixteen.wide.column.top{padding: 0px;height:30px;line-height: 30px;vertical-align: middle;color:rgb(180,133,104)}
  .sixteen.wide.column.top>.eight.wide.column{margin: 0px;padding:0px;}
  .sixteen.wide.column>.ui.grid.container{width: 1030px;padding: 0 56px;max-width: 100%;}
  .sixteen.wide.column.top>.ui.grid.container>.eight.wide.column.top-left{text-align: left;font-size: 14px;}
  .sixteen.wide.column.top>.ui.grid.container>.eight.wide.column.top-right{text-align: right;font-size: 14px;padding-right:33px;}
  /*top-微信下拉*/
  .top-right>.ui.dropdown.weixin>.ui.avatar.image.weixin-logo{border-radius: 0px!important;width:auto;height:auto;}
  .ui.dropdown.weixin>.menu{left:-52px;}
  .ui.dropdown.weixin.active.visible>.menu{left:-52px;}
  .menu.transition.visible>.menu:hover{background-color: transparent!important;}
  .menu.transition.visible>.item>.image{max-height: 7em!important;}
  .menu>.item>.image{max-height: 7em!important;margin-right: 0px!important;}
  .ui.dropdown .menu>.item>.image{margin-right: 0px;}
  .top-right>.divide{margin: 0px 5px;font-weight: bold;}
  .ui.grid.navigation{height:120px;background-image: url("../../static/img/navigation-background.png");margin: 0px;padding:0px;width: 100%;}
  /*导航*/
  .ui.grid.navigation{padding:0px;}
  .ui.grid.navigation>.sixteen.wide.column.navigation{padding:0px;min-width: 1005px;}
  .ui.grid.navigation>.sixteen.wide.column.navigation>.ui.container.nav{width: 1030px;padding: 0 5px;max-width: 100%;min-width: 1030px;}
  .ui.big.breadcrumb.navigation>.section{font-size: 16px;font-weight: normal;color:rgb(180,133,104);margin-top: 70px;margin-right: 40px;cursor: pointer;}
  .ui.big.breadcrumb.navigation>.section:hover{color:white;}
  /*.ui.big.breadcrumb.navigation>.section.active{color:white;}*/
  .ui.big.breadcrumb.navigation>a>img{z-index:1;position:absolute;top:0px;}
  .ui.big.breadcrumb.navigation>.section.right{margin-left:234px;}
  .ui.big.breadcrumb.navigation>.section.last{margin-right:0px;}
  /*导航下拉框的样式*/
  .ui.pointing.dropdown>.menu{background-color: rgba(77,40,29,0.95);left:-12px; }
  .ui.pointing.dropdown>.menu:after{background-color: rgba(77,40,29,0.95);}
  .ui.dropdown .menu>.item{color:rgb(180,133,104);text-align: center;}
  .ui.dropdown .menu>.item:first-child{border-bottom: 1px solid rgba(255,255,255,0.1);}
  .menu.into.transition.visible>.item{color:rgb(180,133,104);text-align: center;}
  .item.v-link-active.active.selected{color:rgb(180,133,104);text-align: center;}




</style>

