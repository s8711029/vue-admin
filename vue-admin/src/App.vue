<template>
  <div id="nav">
  <el-menu
  :default-active="activeIndex2"
  class="el-menu-demo"
  mode="horizontal"
  v-model="activeName"
  @select="handleSelect"
  background-color="#545c64"
  text-color="#fff"
  active-text-color="#ffd04b">
  <el-menu-item index="1" name="1">处理中心</el-menu-item>
  <el-submenu index="2">
    <template #title>我的工作台</template>
    <el-menu-item index="2-1" name="2">选项1</el-menu-item>
    <el-menu-item index="2-2" name="3">选项2</el-menu-item>
    <el-menu-item index="2-3" name="4">选项3</el-menu-item>
    <el-submenu index="2-4">
      <template #title>选项4</template>
      <el-menu-item index="2-4-1" name="5">选项1</el-menu-item>
      <el-menu-item index="2-4-2" name="6">选项2</el-menu-item>
      <el-menu-item index="2-4-3" name="7">选项3</el-menu-item>
    </el-submenu>
  </el-submenu>
  <el-menu-item index="3" disabled>消息中心</el-menu-item>
  <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
</el-menu>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#router{
  padding: 0px;
}
#nav {
  padding: 0px;
//
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

<script>
import userInfo from './views/About.vue'
import improtData from './views/About2.vue'

 export default {
    data() {
      /*
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
      */
      return {
        activeName: '1',
        timer1:'',
        timer2:'',
        timer3:'',
        timer4:''
    }
    },
    methods: {
      handleSelect(key, keyPath) {
        //alert(key,keyPath);
        console.log(key, keyPath);
      }
    }
    ,
  components: {
       userInfo: userInfo,
       improtData:improtData,
      // analysisData:analysisData,
      // group:group
  }
  }

/*
export default {
  data () {
    return {
        activeName: '1',
        timer1:'',
        timer2:'',
        timer3:'',
        timer4:''
    }
  },
  methods: {
    // handleClick (tab, event) {
    //     console.log(tab, event)
    // },
    handleSelect (data) {
        let name = data.index
        alert(name);
        if(name == 1){
        this.timer1 = new Date().getTime()
      }else if(name == 2){
        this.timer2 = new Date().getTime()
      }else if(name == 3){
        this.timer3 = new Date().getTime()
      }else if(name == 4){
        this.timer4 = new Date().getTime()
      }
    }
  },
  components: {
       userInfo: userInfo,
       improtData:improtData,
      // analysisData:analysisData,
      // group:group
  }
}
*/
</script>
