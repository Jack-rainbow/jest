<template>
  <scrollbar class="scroll-container" @onScrollY="onScrollY" :noresize="false">
    <div class="test-container">
      111
    </div>
    <div v-if="loading" class="bottom-info">
      <i class="el-icon-loading"></i>
    </div>
    <div v-else-if="noMoreData" class="bottom-info">
      <i class="el-icon-warning"></i>
      <span class="message">{{ noMoreDataMessAge }}</span>
    </div>
  </scrollbar>
</template>
<script>
import Scrollbar from '../scrollbar/index.js'
import {throttle} from './util.js'

export default {
  name: 'ScrollContainer',
  components: {
    Scrollbar
  },
  props: {
    // 延时加载时间
    delay: {
      type: Number,
      default: 200 // ms
    },
    // 离底部距离触发事件
    bottomDistance: {
      type: Number,
      default: 0
    },
    // 是否在请求数据
    loading: {
      type: Boolean,
      default: false
    },
    // 是否加载完毕全部数据
    noMoreData: {
      type: Boolean,
      default: false
    },
    noMoreDataMessAge: {
      type: String,
      default: '没有更多数据了哦'
    }
  },
  data() {
    return {
      data: [],
      busy: false
    }
  },
  methods: {
    onScrollY: function(distance) {
      if (this.loading || this.noMoreData) return
      // 距离底部的距离小于设定的距离的时候，触发事件
      if (distance <= this.bottomDistance) {
        this.$emit('onScroll')
      }
    }
  }
}
</script>
<style lang="less" scoped>
.scroll-container {
  height: 500px;
  overflow-x: hidden;
  overflow-y: scroll;

  .test-container {
    height: 1000px;
    background-color: green;
  }

  .bottom-info {
    height: 50px;
    line-height: 50px;
    text-align: center;

    .message {
      margin-left: 5px;
    }
  }
}
</style>
