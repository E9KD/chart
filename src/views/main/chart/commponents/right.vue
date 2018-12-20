<template>
  <div class="chart_colright">
    <div>{{showzi}}</div>
    <Test :snum='fnum' @tofu='getzi'></Test>
  </div>
</template>

<script>
import Test from './test'
  export default {
    data() {
      return {
        fnum:'爸爸的纸',
        showzi:''
      }
    },
    components:{
      Test
    },
    created() {},
    methods: {
      getzi(param){
        this.showzi=param
      },
    },
  }
</script>

<style scoped>
  .chart_colright {
    overflow: hidden;
    height: 92vh;
    border-left: 1px solid  #393e46;
    width: 20%;
    display: inline-block;
    /* background-color: blue; */
  }
 
  .btn {
    margin-left: 30px;
    width: 60px;
    height: 30px;
  }
</style>
