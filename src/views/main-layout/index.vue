<template>
  <div>
    <layout-head />
    <div>
      <sidebar />
      <div :class="{spreadContainer: setting.collapse}" class="main-container">
        <scrollbar wrap-class="main-scrollbar" :noresize="false">
          <el-container direction="vertical">
            <el-main class="nuxt-main">
              <nuxt class="nuxt-container"></nuxt>
            </el-main>
            <el-footer>
              <copyright></copyright>
            </el-footer>
          </el-container>
        </scrollbar>
      </div>
    </div>
  </div>
</template>

<script>
import Copyright from '@/components/copyright/index.vue'
import LayoutHead from './components/layout-head/layout-head.vue'
import {mapState, mapGetters} from 'vuex'
import auth from '@/mixins/auth'
import {SPA_NAME} from '@/const/const'
import Sidebar from './components/sidebar/index.vue'
import Scrollbar from '@/components/scrollbar/index.js'

export default {
  mixins: [auth],
  components: {
    Copyright,
    LayoutHead,
    Sidebar,
    Scrollbar
  },
  data() {
    return {
      appName: SPA_NAME
    }
  },
  computed: {
    ...mapState(['setting'])
  }
}
</script>
<style lang="less">
@import '~@/styles/variables.less';

#__nuxt {
  @title-bg: rgba(242, 244, 249, 1);
  @menu-height: 50px;
  @primary-color: #1890ff;
  @main-bg: #f7f8fb;

  // 主体区域 Main container

  .main-container {
    transition: margin-left 0.28s;
    margin-left: @sideBarMaxWidth;
    height: 100%;
    position: relative;
    background-color: @main-bg;

    &.spreadContainer {
      margin-left: @sideBarMinWidth;
    }

    .main-scrollbar {
      min-height: calc(100vh - 60px);
      overflow-x: hidden !important;
      margin-bottom: 0 !important;
    }

    .el-scrollbar__view {
      height: 100%;
    }

    .el-scrollbar__bar.is-vertical {
      right: 0;
    }

    .is-horizontal {
      display: none;
    }
  }

  .nuxt-main {
    position: relative;
    min-height: calc(100vh - 60px - 60px);

    /* margin: 24px 24px 0; */
    overflow-x: hidden;
    padding: 0 24px;
  }
}
</style>
