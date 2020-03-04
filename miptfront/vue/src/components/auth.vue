<template>
    <div class="login-clean" style="background-color: white">
        <form>
            <h2 class="sr-only">Login Form</h2>
            <div class="form-group"><input class="form-control" type="text" name="text" placeholder="Логин" v-model="inputText"></div>
            <div class="form-group"><input class="form-control" type="password" name="password" placeholder="Пароль">
            </div>
            <div class="form-group">
                <button class="btn btn-primary btn-block btn-auth" type="button" v-on:click="onClickLogin">Войти</button>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        name: "auth",
        data() {
            return {
                inputText: '',
            }
        },
        methods: {
            onClickLogin: function () {
                //TODO: check admin
                if(this.inputText === "user"){
                    this.$router.push("user");
                }else if(this.inputText === "admin"){
                    this.$router.push("admin");
                }
            }
        }
    }
</script>

<style scoped>

</style>
