<template>
  <!--左边菜单-->
  <div class="five wide column">
    <div class="ui secondary vertical menu">
      <div v-if="($route.path).substring(3,0) == '/ab'">
        <a class="item about-navigation">
          公司简介
        </a>
      </div>

      <div v-if="($route.path).substring(3,0) == '/se'">
        <a class="item about-navigation" v-link="'/service/important'">
          重要产品公告
        </a>
        <a class="item about-navigation" v-link="'/service/activity'">
          主题活动报道
        </a>
      </div>

      <div v-if="($route.path).substring(3,0) == '/of'">
        <a class="item about-navigation" v-link="'/office/wealth'">
          财富管家
        </a>
        <a class="item about-navigation">
          全权委托
        </a>
        <a class="item about-navigation">
          热点关注
        </a>
      </div>

      <!--<div>-->
      <!--<a class="item about-navigation">-->
      <!--青岛惊现首张个人亿元保费保单！富豪财富管理为什么总是选择高额保险？-->
      <!--</a>-->
      <!--<a class="item about-navigation">-->
      <!--美元对人民币回涨“中国恐慌”交易卷土重来？-->
      <!--</a>-->
      <!--<a class="item about-navigation">-->
      <!--全世界最值钱的壳：30亿！-->
      <!--</a>-->
      <!--<a class="item about-navigation">-->
      <!--多策略基金成为未来发展方向-->
      <!--</a>-->
      <!--</div>-->

      <!--<div>-->
      <!--<a class="item about-navigation">-->
      <!--招聘职位-->
      <!--</a>-->
      <!--<a class="item about-navigation">-->
      <!--联系我们-->
      <!--</a>-->
      <!--</div>-->
    </div>
  </div>
</template>
<script>
  export default{
    data () {
      return {
        msg: 'menu'
      }
    }
  }
</script>
<style>
  .five.wide.column > .ui.secondary.vertical.menu {
    border-right: 1px solid #e5e5e5;
    border-left: 1px solid #e5e5e5;
    border-bottom: 1px solid #e5e5e5;
    border-top: 2px solid #9b0000;
    padding: 10px;
    width: 90%;
  }

  .five.wide.column > .ui.secondary.vertical.menu > div > a:hover {
    background-color: white !important;
  }

  .five.wide.column > .ui.secondary.vertical.menu > div > a {
    border-bottom: 1px solid #eeeeee;
  }
</style>
