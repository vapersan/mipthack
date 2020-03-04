<template>
    <div class="body-container">
        <hr>
        <div class="nav-links">
            <a class="nav-link" href="" v-on:click="onAuth"><br>Авторизация<br><br></a>
            <img class="arrow-nav" src="../../img/Arrow-nav.svg">
            <a class="nav-link" href="" v-on:click="onAdmin"><br>Администрирование<br><br></a>
            <img class="arrow-nav" src="../../img/Arrow-nav.svg">
            <a class="nav-link" href=""><br>Отзывы об обучении<br><br></a>
        </div>

        <div class="mt-4">
            <div class="body-h">Отзывы об обучении</div>
        </div>

        <form class="form-b">
            <button class="t-btn active" type="button" id="proposedViewOn" v-on:click="proposedView">Предложенные</button>
            <button class="t-btn" type="button" style="margin-left: 20px;" id="proposedViewOff" v-on:click="acceptReviews">Принятые</button>
        </form>
        <div class="b-table">
            <hr class="hr-table">
            <div class="header-t" style="font-weight: bold;">
                <div class="h-flex">Дата</div>
                <div class="h-flex1">Текст</div>
                <div class="h-flex2">Оценка</div>
                <div class="h-flex3" style="width:250px"></div>
            </div>
            <review-row v-for="i in infos"
                        :key="i.id"
                        v-bind:id="i.id"
                        v-bind:date="i.date"
                        v-bind:text="i.text"
                        v-bind:rating="i.rate"
                        v-bind:onProposed="onProposed"
                        @refreshPage_accept="proposedView"
                        @refreshPage_proposed="acceptReviews"
            />
<!--            <div class="page"-->

<!--            />-->
        </div>

    </div>
</template>

<script>
    import reviewRow from "@/components/a-review-row";

    export default {
        name: "a-review",
        components: {
            reviewRow
        },
        mounted(){ //жизненный цикл, при загрузке страницы открываются предложенные
            this.proposedView()
        },
        data() {
            return {
                infos: [],
                onProposed:true,
            }
        },
        methods: {
            onAdmin() {
                this.$router.push('admin');
            },
            onAuth() {
                this.$router.push('/');
            },
            proposedView() {
                this.$feeapi.feedback.filterByStatus(0, (r) => {
                    this.infos = r;
                }, (e) => console.log(e));
                this.onProposed=true;
                document.getElementById('proposedViewOn').classList.add('t-btn-focus');
                document.getElementById('proposedViewOff').classList.remove('t-btn-focus');
            },
            acceptReviews(){
                this.$feeapi.feedback.filterByStatus(1,(r)=>{
                    this.infos = r;
                }, (e) => console.log(e));
                this.onProposed=false;
                document.getElementById('proposedViewOff').classList.add('t-btn-focus');
                document.getElementById('proposedViewOn').classList.remove('t-btn-focus');
            },
        },
        // mounted() {
        //     this.$feeapi.feedback.all((r) => {
        //         this.infos = r;
        //     }, (e) => console.log(e));
        //     console.log(this.infos);
        // }
    }
</script>

<style scoped>
    .t-btn:hover {
        color: white;
        background-color: #47B0E6;
        transition: 0.1s;
    }
    .t-btn:before {
        transition: 0.1s;
        background: #FFFFFF;
    }
    .t-btn-focus{
        background-color: #47B0E6;
        color: white;
    }

    .page{
        padding: 8px 12px;
        border: 1px solid rgba(0, 0, 0, 0.42);
    }
</style>
