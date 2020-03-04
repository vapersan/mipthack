<template>
    <div class="body-container">
        <hr>
        <div class="nav-links">
            <a class="nav-link" href="" v-on:click="onAuth"><br>Авторизация<br><br></a>
            <img class="arrow-nav" src="../../img/Arrow-nav.svg">
            <a class="nav-link" href="#"><br>Личный кабинет<br><br></a>
        </div>
        <div class="admin">
            <button class="t-btn" type="button" v-on:click="redirectOnReview">Отзыв об обучении</button>
            <button class="t-btn" type="button" style="margin-left: 20px;" v-on:click="redirectOnPolls">Пройти опрос</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "admin",
        methods:{
            redirectOnReview(){
                this.$router.push('review');
            },
            redirectOnPolls(){
                this.$router.push('monthly');
            },
            onAuth(){
                this.$router.push('/');
            }
        }
    }
</script>

<style scoped>
    .admin{
        display: flex;
        flex-wrap: nowrap;
        justify-content: center;
        margin-top: 100px;
    }
    .t-btn:hover {
        color: white;
        background-color: #47B0E6;
        transition: 0.1s;
    }
    .t-btn:before {
        transition: 0.1s;
        background: #FFFFFF;
    }
    .t-btn{
        width: 300px;
    }
</style>
