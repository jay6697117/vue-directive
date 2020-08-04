<template>
  <div>
    <!-- 这是基于 bootstrap 常见的下拉菜单样式 -->
    <div class="row" style="">
      <label class="mr5">下拉菜单</label>
      <!-- v-click-outside 绑定方法名 -->
      <div class="btn-group" v-click-outside="closeMenu">
        <!-- 这里点击会切换菜单是否可见 -->
        <button type="button" class="btn btn-default dropdown-toggle" @click="isMenuShown = !isMenuShown">
          点击
          <span class="caret"></span>
        </button>
        <ul v-show="isMenuShown" class="dropdown-menu" style="display:block;">
          <li><a href="#">Action</a></li>
          <li><a href="#">Another action</a></li>
          <li><a href="#">Something else here</a></li>
          <li role="separator" class="divider"></li>
          <li><a href="#">Separated link</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMenuShown: false
    };
  },
  methods: {
    // 该方法将菜单是否可见设置为不可见
    closeMenu(event) {
      console.log('closeMenu event :>> ', event);
      this.isMenuShown = false;
    }
  }
};
</script>
<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
ul,li{
    list-style: none;
}
.btn-group {
  position: relative;
  display: inline-block;
  vertical-align: middle;
}

.mr5{
font-size: 14px;
margin-right: 10px;
}
.btn-group>.btn:first-child {
    margin-left: 0;
}
.btn-group-vertical>.btn, .btn-group>.btn {
    position: relative;
    float: left;
}
.btn-default {
    color: #333;
    background-color: #fff;
    border-color: #ccc !important;
}
.btn {
    display: inline-block;
    padding: 6px 12px;
    margin-bottom: 0;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.42857143;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-image: none;
    border: 1px solid transparent;
    border-radius: 4px;
}
.dropdown-menu {
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 1000;
    display: none;
    float: left;
    min-width: 160px;
    padding: 5px 0;
    margin: 2px 0 0;
    font-size: 14px;
    text-align: left;
    list-style: none;
    background-color: #fff;
    -webkit-background-clip: padding-box;
    background-clip: padding-box;
    border: 1px solid #ccc;
    border: 1px solid rgba(0,0,0,.15);
    border-radius: 4px;
    -webkit-box-shadow: 0 6px 12px rgba(0,0,0,.175);
    box-shadow: 0 6px 12px rgba(0,0,0,.175);
}
.caret {
    display: inline-block;
    width: 0;
    height: 0;
    margin-left: 2px;
    vertical-align: middle;
    border-top: 4px dashed;
    border-right: 4px solid transparent;
    border-left: 4px solid transparent;
}
</style>
