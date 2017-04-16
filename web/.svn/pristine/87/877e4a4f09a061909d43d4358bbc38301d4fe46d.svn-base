<template>
  <li>
    <span v-text="(isOpen?'-':'+') + name + (isOpen?'':':{...}')" v-if="isFolder" @click="toggle"></span>
    <span v-text="name + ':' + model" v-if="!isFolder"></span>
    <ul class="sub-obj-data" v-show="isOpen" v-if="isFolder">
      <li v-text="'{'"></li>
      <li is="result-component" v-for="(prop, value) in model" :name="prop" :model="value" track-by="$index"></li>
      <li v-text="'}'"></li>
    </ul>
  </li>
</template>
<style lang="scss" scoped> @import "result.scss" </style>
<script>
  import Vue from 'vue'
  export default{
    name: 'result-component',
    data () {
      return {
        open: false,
        children: [],
        path: [],
        depth: 0
      }
    },
    props: {
      name: '',
      model: {},
      selected: ''
    },
    created () {
      if (Vue.util.isArray(this.model) || Vue.util.isPlainObject(this.model)) {
        for (var prop in this.model) this.children.push(this.model[prop])
      }
    },
    computed: {
      isFolder () {
        return Vue.util.isArray(this.model) || Vue.util.isPlainObject(this.model)
      },
      isOpen () {
        return (this.selected === this.name) && this.open
      }
    },
    methods: {
      toggle () {
        if (this.isFolder) {
          if (this.selected !== this.name) {
            this.open = true
            this.selected = this.name
          } else {
            this.open = !this.open
          }
        }
        return true
      }
    }
  }
</script>
