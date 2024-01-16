<script>
import Power from './Power.vue';
export default {
    name: 'Navbar',
    components:{
        Power
    }
}
</script>
<template>
    <header class="container-fluid">
        <nav class="row align-items-center justify-content-around">

            <!-- simbolo accensione -->
            <Power :classe="'fa-solid fa-power-off'"/>
            

            <!-- sezione titolo centrale -->
            <div class="col-8 d-flex justify-content-center align-items-center">

                <div class="col-11 d-flex justify-content-between align-items-center">
                    
                    <section class="col-4 linee"></section>
                    
                    <section class="col-4 d-flex justify-content-center align-items-center">
                        <h1>[ Rudy ]</h1>
                    </section>

                    <section class="col-4 linee"></section>

                </div>


            </div>

            <!-- sezione user icon -->
            <Power :classe="'fa-solid fa-user'"/>

        </nav>
    </header>
</template>

<style lang="scss" scoped>
nav {
    max-height: 150px;

    .col-4 {
        h1 {
            font-weight: 900;
            text-align: center;
        }
    }

    .col-11{
        height: 3rem;
        
        .col-4.linee{
            height: 100%;
            background: repeating-linear-gradient(
                -45deg,
                transparent 15px,
                rgb(224, 101, 6) 20px,
                rgb(224, 101, 6) 40px

            );
  
        }
    }
}
</style>