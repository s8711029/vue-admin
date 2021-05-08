<template>
  <div id="nav">
  <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
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
