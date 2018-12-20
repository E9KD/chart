<template>
    <div class="lastchart">
        <Lastleft></Lastleft>
        <Lastmid></Lastmid>
    </div>
</template>
<script>
import Lastleft from './commponents/lastleft'
import Lastmid from './commponents/lastmid'
export default {
    components:{
        Lastleft,
        Lastmid
    }
}
</script>
<style lang="less" scoped>
.lastchart {
    height: 92vh;
}
</style>
