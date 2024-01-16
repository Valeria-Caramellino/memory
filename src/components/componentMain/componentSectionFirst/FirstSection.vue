<script>
import LeftCube from './component/LeftCube.vue';
import RightCube from './component/Rightcube.vue';
export default{
    name:'FirstSection',
    components:{
        LeftCube,
        RightCube
    }
}
</script>
<template>
    <section class="container">
        <div class="row justify-content-center my-2">
            <LeftCube/>
            <RightCube/>
        </div>

    </section>
</template>
<style lang="scss" scoped>
</style>