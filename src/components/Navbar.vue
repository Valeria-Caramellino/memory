<script>
export default {
    name: 'Navbar'
}
</script>
<template>
    <header class="container-fluid">
        <nav class="row justify-content-around">

            <div class="col-2 my-2 d-flex justify-content-center align-items-center py-2">
                <div class="col-11 d-flex justify-content-center align-items-center ">
    
                    <i class="fa-solid fa-power-off"></i>
                    
                </div>
            </div>
            <div class="col-4 py-2 my-2 d-flex justify-content-center align-items-center">
        
                <h1>RUDY-MEMORY</h1>
        
            </div>
            <div class="col-2 my-2 py-2 d-flex justify-content-center align-items-center">
                <div class="col-11 d-flex justify-content-center align-items-center ">
                    <i class="fa-solid fa-user"></i>
                </div>
            </div>
        </nav>
    </header>
    
</template>
<style lang="scss" scoped>
nav{
 //background-color: aqua;
 max-height: 150px;
    .col-4{
        //border: 1px solid black;
        h1{
            //font-size: 50px;
            font-weight: 900;
            text-align: center;
        }
    }
    .col-2{
        //border: 1px black solid;
        .col-11{
            border: 1px solid black;
            width: 70px;
            height: 70px;
            border-radius: 20px;
            i{
                font-size: 30px;
            }
        }
    }
}
</style>