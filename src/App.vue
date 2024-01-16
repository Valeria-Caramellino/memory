<script>
import Navbar from './components/componentHeader/Navbar.vue';
import AppMain from './components/componentMain/AppMain.vue';

export default{
  components:{
    Navbar,
    AppMain
    
  }
}
</script>

<template>

  <body>
   
    <Navbar/>
    
    <AppMain/>
    

  </body>
 
</template>

<style lang="scss" scoped>
body{
  background-color: lightgray;
  min-width: 100vw;
  min-height: 100vh;
}


</style>
