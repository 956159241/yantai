<template>
  <div class="index-bottom">
    <div class="ui container">
      <!--<div><img src="/static/img/logo-bottom.png"></div>-->
      <div class="index-bottom-title">
        <div>CopyRight © 2010-2016 DONGFANGCHANJINWANG. All Rights Reserved</div>
        <div>电话：021-58601233 地址：上海市虹口区东大名路588号美特斯邦威302室</div>
        <div>免责声明：本网站所刊登、转载的各种图片、稿件是为传播更多信息，本网站不承担此类稿件侵权行为的连带责任</div>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    data () {
      return {
        msg: 'footer'
      }
    }
  }
</script>
<style scoped>
  .index-bottom {
    background-color:#414141;
    height:170px;
  }

  .index-bottom > .ui.container {
    padding-top: 25px;
    padding-bottom: 25px;
  }
  .index-bottom > .ui.container > .index-bottom-title {
    font-family: "Microsoft YaHei UI";
    line-height: 25px;
    text-align: center;
    font-size: 16px;
    color: #909090;
    margin-top: 20px;
  }

</style>
