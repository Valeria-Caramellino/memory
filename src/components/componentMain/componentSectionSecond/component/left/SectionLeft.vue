<script>
import Audio from './audio.vue';
import Levels from './Levels.vue';
export default{
    name:'Left',
    components:{
        Audio,
        Levels
    }
}
</script>
<template>
    <div class="col-3 d-flex flex-column justify-content-around align-items-center mx-3">
        <Audio/>
        <Levels/>

    </div>
</template>
<style lang="scss" scoped>
.col-3{
    border: 2px solid black;
    border-radius: 10px;
}
</style>