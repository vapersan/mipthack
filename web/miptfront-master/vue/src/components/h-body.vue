<template>
    <div class="h-body">
        <hr>
        <div class="nav-links">
            <a class="nav-link" href="" v-on:click="onClickLogin"><br>Авторизация<br><br></a>
            <img class="arrow-nav" src="../../img/Arrow-nav.svg">
            <a class="nav-link" href="#"><br>Отзыв об обучении<br><br></a>
        </div>
        <div class="mt-4">
            <div class="body-h">Напишите свой отзыв об обучении</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "h-body",
        methods:{
            onClickLogin: function () {
                this.$router.push("/");
            }
        }
    }
</script>

<style scoped>
    .nav-link:hover{
        background-color: #47B0E6;
        color: white;
    }
</style>
