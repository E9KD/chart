<template>
    <div class="chart">
        <Left></Left>
        <Mid></Mid>
        <Right></Right>
    </div>
</template>
<script>
  import Left from "./commponents/left.vue";
  import Mid from "./commponents/mid.vue";
  import Right from "./commponents/right.vue";
export default {
    components:{
        Left,
        Mid,
        Right
    }
}
</script>
<style lang="less" scoped>
.chart {
    height: 92vh;
}
</style>
