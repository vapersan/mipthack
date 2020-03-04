<template>
    <div class="body-container">
        <hr>
        <div class="nav-links">
            <a class="nav-link" href="" v-on:click="onClickLogin"><br>Авторизация<br><br></a>
            <img class="arrow-nav" src="../../img/Arrow-nav.svg">
            <a class="nav-link" href="" v-on:click="onClickUser"><br>Личный кабинет<br><br></a>
            <img class="arrow-nav" src="../../img/Arrow-nav.svg">
            <a class="nav-link" href=""><br>Отзыв об обучении<br><br></a>
        </div>

        <div class="mt-4 mb-4">
            <div class="body-h">Отзыв об обучении</div>
        </div>

        <form v-on:submit="sendForm" class="body-container">
            <div class="mb-4 rowB">
                <div v-for="people in formData" :key="people.pk" class="col-3 mb-4 flex-cont ml-4 mr-4">
                    <div>
                        <label class="pText">
                            {{people.text}}
                        </label>
                        <div v-for="quest in people.quests" :key="quest.pk" class="qFlex">
                            <div class="questionS">
                                {{quest.text}}<br>
                                <b-form-input type="range" min="0" max="5" :name="quest.name" class="cRage"></b-form-input>
                                <div class="countF">
                                    <div class="left">0</div><div class="right">5</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <input type="submit" class="t-btn ml-4" value="Отправить!">
            <img src="../../img/done.svg" style="margin-right: 4px" v-if="is_success" class="done alertS">
        </form>
    </div>

</template>

<script>
    export default {
        name: "monthly",
        data: function () {
            return {
                kek: "kek",
                formData: [{'pk': 0, 'text': "", 'quests': []}],
                is_success: false
            }
        },
        methods: {
            sendForm(e,) {
                console.log(this.fields);
                e.preventDefault();
                let formData = new FormData(e.target);
                let to_send = {};
                formData.forEach(function (key, value) {
                    to_send[value] = key
                });
                this.$feeapi.monthly.sendForm(to_send, (r) => {
                    this.is_success = true;
                    setTimeout(()=> this.is_success=false,2000);
                    console.log(r);
                });
            },
            onClickLogin() {
                this.$router.push("/");
            },
            onClickUser() {
                this.$router.push('user')
            }
        },

        mounted() {
            this.$feeapi.monthly.getForm(r => {
                console.log(r);
                this.formData = r;
            });
        }
    }
</script>

<style scoped>
    .rowB{
        justify-content: center;
    }
    .cRage{
        height: 0%;
    }
    .flex-cont{
        display: inline-flex;

    }
    .left{
        display: inline-flex;
    }
    .countF{
        margin-bottom: 10px;
        font-size: 12px;
        color:#47B0E6;
    }
    .right{
        display: inline-flex;
        float: right;
    }
    .questionS{
        font-size: 14px;
    }
    .pText{
        border-bottom: 1px solid #47B0E6;
        margin: 20px 0;
    }
    .t-btn {
        background: #47B0E6;
        color: white;
        border: 1px solid rgba(0,0,0,0);
    }
    .t-btn:hover {
        color: #47B0E6;
        background-color: #FFFFFF;
        transition: 0.1s;
        border: 1px solid #47B0E6;
    }
    .t-btn:before {
        transition: 0.1s;
        color: white;
        background: #47B0E6;
    }
    .done{
        margin-left: 10px;
        animation-duration: 2s;
        animation-name: slideOut;
    }
    .alertS{
        display: inline-block;
        align-content: center;
    }
    @keyframes slideOut {
        from{
            opacity: 100%;
        }
        to{
            opacity: 0%;
        }
    }
</style>
