<script>
import Navbar from './components/Navbar.vue';
import Title from './components/Title.vue';
import LeftCube from './components/LeftCube.vue';
import RightCube from './components/RightCube.vue';
export default{
  components:{
    Navbar,
    Title,
    LeftCube,
    RightCube,
  }
}
</script>

<template>

  <body>
   
    <Navbar  />
    <hr>
    <main>
      <Title />

      <section class="container">
        <div class="row justify-content-around">
          <LeftCube/>

          <RightCube/>
        </div>

      </section>
    </main>
    <footer>

    </footer>

  </body>
 
</template>

<style lang="scss" scoped>
body{
  background-color: lightgray;
  min-width: 100vw;
  min-height: 100vh;
}

</style>
