<script>
export default {
    name: 'Power',
    props: {
        classe: String
    }
}
</script>
<template>
    <div class="col-2 my-2 d-flex justify-content-center align-items-center py-2">

        <div class="col-11 d-flex justify-content-center align-items-center ">

            <i :class="classe"></i>

        </div>

    </div>
</template>
<style lang="scss" scoped>
.col-2 {

    .col-11 {
        border: 1px solid black;
        width: 70px;
        height: 70px;
        border-radius: 20px;

        i {
            font-size: 30px;
        }

        &:hover {
            i {
                color: darkorange;
                cursor: pointer;
            }
        }
    }
}
</style>