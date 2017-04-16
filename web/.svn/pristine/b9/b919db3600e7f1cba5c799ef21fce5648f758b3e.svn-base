<template>
  <div class="message-header">
    <div class="ui container">
      <menu-Component></menu-Component>
      <router-view class="twelve wide column content" transition="fade" transition-mode="out-in"></router-view>
    </div>


  </div>
</template>

<script>
  import menuComponent from '../components/menu.vue'
  export default {
    replace: false,
    data () {
      return {}
    },
    components: {menuComponent},
    methods: {}
  }
</script>
<style scoped>
  .ui.container{width: 1380px;}
  .two.wide.column{margin: 0px;padding:0px;}
  .twelve.wide.column.content{padding-left: 102px;background-color: rgb(245,245,245);width: 1380px!important;height: 133px;}
  .ui.grid.contact-info{padding:0px;margin: 0px;text-align: right;height:30px;line-height: 30px;vertical-align: middle;padding-right: 58px;}
  .contact-info>.sixteen.wide.column{padding:0px;height:30px;line-height: 30px;vertical-align: top;}
  .contact-info>.sixteen.wide.column>img{margin-top: 5px;}
  .ui.grid.contact-info>.sixteen.wide.column>span{line-height: 30px;vertical-align: top;}
  .sixteen.wide.column>span>.ui.inline.dropdown>.text>img{margin-top: -16px!important;margin-right: 0px;}

  /*导航行*/
  .jf-logo>h2{width: 500px;}
  .jf-logo>h2>img{max-width: 70px;}
  .ui.left.icon.action.input>input{border-radius: 0px;border:solid 1px #909090;width: 191px;height:30px;border-right:1px solid #909090!important; }
  .ui.blue.submit.button{border-radius: 0px!important;border:solid 1px #909090;width:90px;background-color: rgb(245,245,245);
    font-size: 12px;font-family: "Microsoft YaHei";color: rgb(50, 50, 50);margin-left: 10px;height:30px;}
  .ui.blue.submit.button>a{text-decoration: none;color: rgb(50,50,50);}
  .five.wide.column.search{line-height: 58px;vertical-align: middle;}
  .baidu-search>input{height:30px;}
  .baidu-search>input:nth-child(2){width:199px;}
  .baidu-search>input:nth-child(3){width: 199px;}
  /*导航*/
  .eight.wide.column.nav{margin-top: 20px;padding-left: 50px;padding-right:0px;}
  .eight.wide.column.nav>div{width:620px;}
  .eight.wide.column.nav>div>.section{margin-right: 50px;font-size: 16px;}
  .eight.wide.column.nav>div>.active.section{color: #d10a1b;}
  .eight.wide.column.nav>div>.active.section>a{text-decoration: none; color: #d10a1b;font-weight: 100;}
  .eight.wide.column.nav>div>.section{color: #323232;}
  .eight.wide.column.nav>div>.section:hover{color:#d10a1b;}
  /*导航下拉*/
  .ui.pointing.dropdown.link.item>.menu{width:520px;padding-top:50px;background-image: url("../../static/img/nav-about-img.png");margin-top: 36px!important;}
  .ui.pointing.dropdown>.menu:after {display: block;position: absolute;pointer-events: none;content: ''; visibility: visible;
    -webkit-transform: rotate(45deg);transform: rotate(45deg);width: .5em;height: .5em;box-shadow: -1px -1px 0 1px rgba(34,36,38,.15);
    background: #FFF;z-index: 2;top: -.25em;left: 6%;margin: 0 0 0 -.25em;}
  .menu>.item:nth-child(1){float:left;height:220px!important;width:250px!important;white-space:normal;margin-right: 35px;color: black;
    text-align: justify;background: rgba(0,0,0,0)!important;margin-left: 10px;}
  .menu>.item{width:0px;padding-left: 0px!important;font-size: 14px;color: #646464;}
  .menu>.item:hover{background: rgba(0,0,0,0)!important;color: red!important;z-index: 13;}
  .menu>.item:nth-child(1):hover{color: #646464;}
  .menu>.item:nth-child(1):visited{color: #646464; font-weight:100!important;}
  .ui.dropdown>.menu>.item {font-size: 14px;color:#646464;}
  .ui.dropdown .menu .active.item {font-weight: 100;color: rgba(0,0,0,.95);box-shadow: none;z-index: 12;}
  .menu>.item:hover{background-color: red;}
  .ui.pointing.dropdown.link.item>.menu>.item>h2{font-size: 18px;color: #646464;}
  .ui.pointing.dropdown.link.item>.menu>.item>p{font-size: 12px;color: #646464;line-height: 20px;text-align:justify;}
  /*确定每一个下拉所在位置*/
  .ui.pointing.dropdown.link.item>.menu.into{margin-left: -60px;border-radius:0px 0px 10px 10px;border: 0px;box-shadow: -2px 3px 5px #cccccc,2px 3px 5px #cccccc;border-top:2px solid #d10a1b;}
  .ui.pointing.dropdown.link.item>.menu.into:after{content: "";position: absolute;background-color: rgba(245,245,245,0);top:-18px;
    left:85px;width: 0px;height: 0px;box-shadow: 0px 0px transparent;border: 8px solid transparent;border-bottom-color:#d10a1b;transform: rotate(0deg);}

  .ui.pointing.dropdown.link.item>.menu.product{margin-left: -179px;border-radius:0px 0px 10px 10px;border: 0px;box-shadow: -2px 3px 5px #cccccc,2px 3px 5px #cccccc;border-top:2px solid #d10a1b;}
  .ui.pointing.dropdown.link.item>.menu.product:after{content: "";position: absolute;background-color: rgba(245,245,245,0);top:-18px;
    left:215px;width: 0px;height: 0px;box-shadow: 0px 0px transparent;border: 8px solid transparent;border-bottom-color:#d10a1b;transform: rotate(0deg);}

  .ui.pointing.dropdown.link.item>.menu.news{margin-left: -313px;border-radius:0px 0px 10px 10px;border: 0px;box-shadow: -2px 3px 5px #cccccc,2px 3px 5px #cccccc;border-top:2px solid #d10a1b;}
  .ui.pointing.dropdown.link.item>.menu.news:after{content: "";position: absolute;background-color: rgba(245,245,245,0);top:-18px;
    left:342px;width: 0px;height: 0px;box-shadow: 0px 0px transparent;border: 8px solid transparent;border-bottom-color:#d10a1b;transform: rotate(0deg);}

  .ui.pointing.dropdown.link.item>.menu.contact{margin-left: -434px;border-radius:0px 0px 10px 10px;border: 0px;box-shadow: -2px 3px 5px #cccccc,2px 3px 5px #cccccc;border-top:2px solid #d10a1b;}
  .ui.pointing.dropdown.link.item>.menu.contact:after{content: "";position: absolute;background-color: rgba(245,245,245,0);top:-18px;
    left:462px;width: 0px;height: 0px;box-shadow: 0px 0px transparent;border: 8px solid transparent;border-bottom-color:#d10a1b;transform: rotate(0deg);}


  @media screen and (max-width:1330px) {
    .five.wide.column.search{display: none;}
  }
  @media screen and (max-width:920px) {
    .three.wide.column.jf-logo{display: none;}
  }

</style>
