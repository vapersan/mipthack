<template>
    <div class="body-container">
        <hr>
        <div class="nav-links">
            <a class="nav-link" href="" v-on:click="onAuth"><br>Авторизация<br><br></a>
            <img class="arrow-nav" src="../../img/Arrow-nav.svg">
            <a class="nav-link" href="" v-on:click="onAdmin"><br>Администрирование<br><br></a>
            <img class="arrow-nav" src="../../img/Arrow-nav.svg">
            <a class="nav-link" href=""><br>Опросы<br><br></a>
        </div>

        <div class="mt-4 mb-4">
            <div class="body-h">Опросы</div>
        </div>

        <div v-for="info in Data" :key="info.pk">
            {{info.text}}
            <div v-for="all in info.answers" :key="all">
                <span v-for="subinfo in all" :key="subinfo">{{subinfo + ", "}}</span>
            </div>
        </div>
        <!--        {{Data}}-->
    </div>
</template>

<script>
    export default {
        name: "monthly_admin",
        data: function () {
            return {
                Data: []
            }
        },
        methods: {
            onAdmin() {
                this.$router.push('admin');
            },
            onAuth() {
                this.$router.push('/');
            },
        },
        mounted() {
            this.$feeapi.monthly.getAdminInfo(r => {
                this.Data = r;
            });
        }
    }
</script>

<style scoped>

</style>
