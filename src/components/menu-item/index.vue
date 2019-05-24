<template>
  <div>
    <div v-for="m in menuList" :key="m.id" class="menu-item">
      <el-menu-item :index="m.url" v-if="!m.children" @click="handleItem(m)">
        <icon-font :icon="m.icon"></icon-font>
        <span slot="title" class="item-title">{{ m.name }}</span>
      </el-menu-item>

      <el-submenu v-else :index="m.id + ''">
        <template slot="title">
          <!--<i class="el-icon-menu"></i>-->
          <icon-font :icon="m.icon"></icon-font>
          <span class="sub-menu-title">{{ m.name }}</span>
        </template>

        <menu-item :menuList="m.children" @select="handleItem"></menu-item>
      </el-submenu>
    </div>
  </div>
</template>

<script>
import IconFont from '../icon-font/index.vue'

export default {
  name: 'MenuItem',
  components: {
    IconFont
  },
  props: {
    menuList: {
      type: Array
    }
  },
  methods: {
    handleItem(item) {
      this.$emit('select', item)
    }
  }
}
</script>
