<script>
import Navbar from './components/Navbar.vue';
import Title from './components/Title.vue'
export default{
  components:{
    Navbar,
    Title
  }
}
</script>

<template>

  <body>
   
    <Navbar  />
    <hr>
    <main>
      <Title />

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
