<script>
export default{
  name:'Title'

}
</script>

<template>
  <div class="container">

    <section class="row justify-content-center my-2 py-2 align-items-center">
      
      <div class="col-11 d-flex justify-content-between align-items-center">
        <section class="col-4 linee">

        </section>
        <section class="col-4 d-flex justify-content-center align-items-center">
          <h1>[  Rudy ]</h1>
        </section>
       <section class="col-4 linee">

       </section>

      </div>
    
    </section>
  </div>
  
</template>

<style lang="scss" scoped>
.col-11{
  height: 2rem;
  .col-4.d-flex{
    //background-color: aqua;
    height: 100%;
    h1{
      font-weight: 600;
      
    }
  }
  .col-4.linee{
    height: 100%;
    //background-color: orange;
    background: repeating-linear-gradient(
      -45deg,
      transparent 5px,
      orange 20px,
      orange 40px
    
    );
  
  }
}

</style>
