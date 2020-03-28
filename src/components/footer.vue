<template>
  <div class="index-bottom">
    <div class="ui container">
      <div class="ui segment bottom">
        <p>沪ICP备xxxxxxxxx号-1</p>
        <p>电话：021-58601299地址：上海市虹口区东大名路588号美特斯邦威大厦三楼</p>
        <p>免责声明：本网站所刊登、转载的各种图片、稿件是为传播更多信息，本网站不承担此类稿件侵权行为的连带责任</p>
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
  .ui.container{width:1600px;}
  .index-bottom{height:157px;line-height: 157px;vertical-align: middle;text-align: center;background-color: rgb(47,18,10);}
  .ui.segment.bottom{border-radius: 0px;box-shadow: 0px 0px transparent;background-color: transparent;color:rgb(180,133,104);padding-top: 35px;}
  .ui.segment.bottom>p{line-height: 18px;font-size: 14px;}


</style>
