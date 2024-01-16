<script>
export default {
    name: 'Simbols',
    data() {
        return {
            icon1: [
                {
                    name: 'goccia',
                    text: 'fa-solid fa-droplet'
                },
                {
                    name: 'chiave inglese',
                    text: 'fa-solid fa-wrench'
                },
                {
                    name: 'fulmine',
                    text: 'fa-solid fa-bolt-lightning'
                },
                {
                    name: 'orologio',
                    text: 'fa-solid fa-clock'
                },


            ],
            icon2: [
                {
                    name: 'scatola',
                    text: 'fa-solid fa-box-archive'
                },
                {
                    name: 'fantasma',
                    text: 'fa-solid fa-ghost'
                },
                {
                    name: 'ok',
                    text: 'fa-solid fa-thumbs-up'
                },

            ],
            icon3: [
                {
                    name: 'casa',
                    text: 'fa-solid fa-house'
                },
                {
                    name: 'nota',
                    text: 'fa-solid fa-music'
                },
                {
                    name: 'pizza',
                    text: 'fa-solid fa-pizza-slice'
                },
                {
                    name: 'telefono',
                    text: 'fa-solid fa-phone'
                },
            ]
        }
    }
}
</script>
<template>
    <section class="container">
        <div class="row justify-content-center">
            <div class="col-5">

                <!-- prima riga -->
                <div class="row justify-content-center ">
        
                    <div v-for="item in icon1" class="esagono d-flex align-items-center justify-content-center">
        
                        <i :class="item.text"></i>
                    </div>
                </div>
                <!-- seconda riga -->
                <div class="row justify-content-center ">
        
                    <div v-for="item in icon2" class="esagono centrale d-flex align-items-center justify-content-center">
        
                        <i :class="item.text"></i>
                    </div>
                </div>
                <!-- terza riga -->
                <div class="row justify-content-center">
        
                    <div v-for="item in icon3" class="esagono d-flex align-items-center justify-content-center">
        
                        <i :class="item.text"></i>
                    </div>
                </div>
            </div>
        </div>

    </section>
</template>
<style lang="scss" scoped>
.col-5{
    background-color: darkgray;
    border: 2px solid black;
    border-radius: 10px;
}
.esagono {
    width: 70px;
    height: 40px;
    margin: 1.5rem 0.2rem;

    background: lightgray;
    position: relative;
    -moz-transform: rotate(180deg);
    -webkit-transform: rotate(180deg);
    -ms-transform: rotate(180deg);
    -o-transform: rotate(180deg);
    transform: rotate(180deg);
    border: 1px solid lightgray;
    i{
        font-size: 30px;
    }
    &:hover {
        cursor: pointer;

        i {
            color: darkorange;

        }

    }

    i {
        transform: rotate(180deg);
    }
}

.esagono.centrale {
    margin: 0rem 0.2rem;
}

.esagono:before {
    content: "";
    width: 0;
    height: 0;
    position: absolute;
    top: -20px;
    border-left: 35px solid transparent;
    border-right: 35px solid transparent;
    border-bottom: 20px solid lightgray;

}

.esagono:after {
    content: "";
    width: 0;
    height: 0;
    position: absolute;
    bottom: -20px;
    border-top: 20px solid lightgray;
    border-left: 35px solid transparent;
    border-right: 35px solid transparent;

}</style>