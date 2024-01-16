<script>
import SectionLeft from './component/left/SectionLeft.vue';
import SectionRight from './component/right/SectionRight.vue';
export default{
    name:'SecondSection',
    components:{
    SectionLeft,
    SectionRight
}
}
</script>
<template>
    <section class="container my-4">
        <div class="row justify-content-center">
            
            <SectionLeft/>
            <SectionRight/>
            
        </div>
    </section>
</template>
<style lang="scss" scoped>

</style>