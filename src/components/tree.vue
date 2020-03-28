<template>
  <li>
    <div :class="{bold: isFolder}" @click.stop.prevent="toggle">
      <span v-text="model.name"></span>
      <span v-if="isFolder" v-text="isOpen? '[-]' : '[+]'"></span>
    </div>
    <ul v-show="isOpen" v-if="isFolder">
      <tree-component v-for="model in children" :arg-info="model.argInfo" :model="model"
                      :selected.sync="selected"></tree-component>
    </ul>
  </li>
</template>
<style scoped>
  li ul {
    padding-left: 5px;
  }

  li ul li {
    margin-left: 0;
    margin-bottom: 2px;
  }
</style>
<script>
  export default{
    name: 'tree-component',
    data () {
      return {
        open: false,
        sel: false,
        children: []
      }
    },
    props: {
      model: {},
      selected: '',
      argInfo: false
    },
    created () {
      if (this.model.hasOwnProperty('method')) {
        for (var prop in this.model.method) {
          this.children.push({name: prop, selected: '', argInfo: this.model.method[prop]})
        }
      }
    },
    computed: {
      isFolder () {
        return this.children.length
      },
      isOpen () {
        return (this.selected === this.model.name) && this.open
      }
    },
    events: {
      'menu-closed' () {
        this.sel = false
        return true
      },
      'leaf-click' (arg, name) {
        this.$broadcast('menu-sel-change', name)
        name = this.selected + '_' + this.model.name
        return true
      },
      'menu-sel-change' (name) {
        if (name !== this.model.name) this.sel = false
        this.$broadcast('menu-sel-change', name)
      }
    },
    methods: {
      toggle () {
        if (this.isFolder) {
          if (this.selected !== this.model.name) {
            this.open = true
            this.selected = this.model.name
          } else {
            this.open = !this.open
          }
          if (!this.open) {
            this.$dispatch('menu-closed')
            this.$broadcast('menu-closed')
          }
        } else {
          if (!this.sel) {
            this.sel = true
            this.$dispatch('leaf-click', this.argInfo, this.selected, this.model.name)
          }
        }
      }
    }
  }
</script>
