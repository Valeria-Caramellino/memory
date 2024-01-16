<script>
export default{
    name:'LeftCube'
}

</script>
<template>
    <section class="col-3 d-flex justify-content-center align-items-center mx-3">

        <img src="/smile.gif" alt="gif">
        
    </section>
</template>
<style lang="scss" scoped>
section{
    //width: 200px;
    height: 150px;
    background-color: rgba(0,0,0, 0.6);
    border-radius: 10px;
    border: 3px solid black;
    img{
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
}

</style>