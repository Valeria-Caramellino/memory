<script>
import FirstSection from './componentSectionFirst/FirstSection.vue';
import SecondSection from './componentSectionSecond/SecondSection.vue';
export default{
    name:'AppMain',
    components:{
        FirstSection,
        SecondSection
    }
}

</script>
<template>
    <main>
        <section class="container my-4">
            <div class="row justify-content-center">
                <!-- bordo grigio -->
                <article class="col-12">
                    <FirstSection/>
                    <SecondSection/>
                </article>

            </div>
            
        </section>
    </main>
</template>
<style lang="scss" scoped>
.col-12{
  border: 3px solid darkgrey;
  border-radius: 20px;
  padding: 1rem;
}
</style>