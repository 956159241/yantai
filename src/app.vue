<template>
  <div class="box">
    <header-component></header-component>
  <div class="main" >
    <div class="menu"></div>
    <div>
      <router-view transition="fade" transition-mode="out-in" keep-alive></router-view>
      <footer-component></footer-component>
  </div>
  </div>
  </div>
</template>
<style lang="css"> @import 'common/import.css'; </style>
<style lang="scss"> @import 'common/common.scss'; </style>
<style lang="scss" scoped> @import 'app.scss'; </style>
<script type="text/ecmascript-6">
  import global from 'babel-loader!./common/variables.js'
  import headerComponent from './components/header.vue'
  import footerComponent from './components/footer.vue'

  var $ = require('jquery')

  export default {
    replace: false,
    created () {
      console.log($, global, this)
    },
    data () {
      return {
        service: ''
      }
    },
    vuex: {
      getters: {
        menu: ({api}) => api.menu
      }
    },
    components: {headerComponent, footerComponent},
    methods: {
    }
  }
</script>
