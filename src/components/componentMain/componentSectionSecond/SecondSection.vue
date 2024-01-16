<script>
import Simbols from './component/right/Simbols.vue';
import Levels from './component/left/Levels.vue';
import Audio from './component/left/Audio.vue';
export default{
    name:'SecondSection',
    components:{
        Simbols,
        Levels,
        Audio
    }
}
</script>
<template>
    <section class="container">
        <div class="row justify-content-around">
            <div class="col-3 d-flex flex-column justify-content-center align-items-center">
                <Audio/>
                <Levels/>

            </div>
            <div class="col-6 bg-info">

                <Simbols/>
            </div>
            
        </div>
    </section>
</template>
<style lang="scss" scoped>

</style>