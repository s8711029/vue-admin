<template>
  <div id="nav">
    <!--
    <router-link to="/">Home1111</router-link> |
    <router-link to="/about">About</router-link>
    <el-button plain>朴素按钮</el-button>
    <el-button type="primary" plain > 主要按钮</el-button>
    <el-button type="success" plain >次要按钮</el-button>
    <el-button type="info" plain>信息按钮</el-button>
    <el-button type="warning" plain>警告按钮</el-button>
    <el-button type="danger" plain>危险按钮</el-button>
    -->
    
       <!--<el-tabs-pane v-model="activeName" @tab-click="handleClick">-->
         <!--
  <el-tab-pane label="用户管理"  v-model="activeName" @tab-click="handleClick" name="first">用户管理</el-tab-pane>
  <el-tab-pane label="配置管理"  v-model="activeName" @tab-click="handleClick" name="second">配置管理</el-tab-pane>
  <el-tab-pane label="角色管理">角色管理</el-tab-pane>
  <el-tab-pane label="定时任务补偿" >定时任务补偿</el-tab-pane>

  <el-tabs type="card" v-model="$route.name" class="tabs-nopadding" @tab-click="onTabClick">
      <el-tab-pane v-for="option in options" label="options.name" :name="options.route"></el-tab-pane>
  </el-tabs>
-->
<!--
  <el-tabs type="border-card">
  <el-tab-pane label="用户管理" v-model="activeName" @tab-click="handleClick" name="first">用户管理</el-tab-pane>
  <el-tab-pane label="配置管理"  v-model="activeName" @tab-click="handleClick" name="second">配置管理</el-tab-pane>
  <el-tab-pane label="角色管理">角色管理</el-tab-pane>
  <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
  </el-tabs>
-->
  <div class="box">
        <!--<h3 style="text-align: center;">台中榮民總醫院</h3>-->

            <el-tabs type="border-card" v-model="activeName" @tab-click="handleLoad">
                <el-tab-pane label="用户" name="1">
                    <userInfo :key="timer1"></userInfo>
                </el-tab-pane>
                <el-tab-pane lazy label="数据导入" name="2" >
                    <improtData :key="timer2"></improtData>
                </el-tab-pane>
                <el-tab-pane lazy label="数据分析" name="3">
                    <analysisData :key="timer3"></analysisData>
                </el-tab-pane>
                <el-tab-pane lazy label="群" name="4">
                    <group :key="timer4"></group>
                </el-tab-pane>
            </el-tabs>

    </div>

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
/*
import analysisData from '../components/analysisData.vue'
import group from '../components/group.vue'
*/
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
    handleLoad (data) {
        let name = data.name
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
</script>
