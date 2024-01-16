<script>
export default {
    name: 'Audio'
}
</script>
<template>
    <section class="d-flex justify-content-center align-items-baseline">
        <div class="volume d-flex justify-content-center align-items-center mx-3">

            <i class="fa-solid fa-volume-low "></i>

        </div>
        <div class="mx-3 lines-container ">
            <span class="line">||</span>
            
        </div>

    </section>
</template>
<style lang="scss" scoped>

.volume {
    width: 60px;
    height: 60px;
    border: 2px solid black;
    border-radius: 20px;
    i {
      padding: 1rem;
      font-size: 25px;
    }
    &:hover{
        i{
            cursor: pointer;
            color: darkorange;
        }
    }
  }

  .lines-container {
    display: flex;
    align-items: center;
    justify-content: center;

    .line {
      font-size: 50px;
   
      &::before {
        font-size: 40px;
        content: "||";
        margin-right: 5px;
      }

      &::after {
        font-size: 40px;
        content: "||";
        margin-left: 5px;  
      }
    }
  }
</style>