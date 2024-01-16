<script>
export default{
    name:'Audio'
}
</script>
<template>
    <section class="d-flex align-items-center justify-content-start">
        <div class="volume d-flex justify-content-center align-items-center mx-3">

            <i class="fa-solid fa-volume-low "></i>
            
        </div>
        <div class="mx-3">
            
            <span v-for="index in 4" :key="index"><i class="fa-solid fa-grip-lines-vertical"></i></span>
        </div>
        
    </section>
</template>
<style lang="scss" scoped>
div.volume{
    width: 60px;
    height: 60px;
    border: 2px solid black;
    border-radius: 20px;
    //background-color: blue;
    i{
        padding: 1rem;
        font-size: 25px;
    }
}
div{
//background-color: blueviolet;
width: 80px;
height: 60px;
display: flex;
align-items: center;
justify-content: space-around;
    span{
        
        font-size: 40px;
        font-weight: 600;
    }
}
</style>