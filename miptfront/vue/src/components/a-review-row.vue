<template>
    <div class="header-t">
        <div class="h-flex">{{formatDate()}}</div>
        <div class="h-flex1">{{truncateText(text)}}</div>
        <div class="h-flex2">{{rating}}</div>
        <button class="h-flex3 t-btn" type="button" v-on:click="openModal">Перейти</button>
        <div class="modalOpen" v-if="modalOpen===true">
            <div class="modalForm">
                <img src="../../img/close.svg" class="modalClose" v-on:click="closeModal">
                <div class="modalHeader">
                    Отзыв
                </div>
                <div class="aaModal">
                    <textarea class="modalText" readonly v-model="text"></textarea>
                </div>
                <div class="footerModal">
                    <div class="modalData">дата: {{formatDate()}}</div>
                    <div class="btnsModal">
                        <!--если находимся в принятых, то onProposed=false-->
                        <button type="button" class="m-btn" v-on:click="acceptReview" v-if="onProposed===true">Принять</button>
                        <button type="button" class="m-btn" style="background:white;
                        color:#47B0E6;border: 1px solid #47B0E6;" v-on:click="rejectReview">Отклонить</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "a-review-row",
        props:{
            id: {type: Number},
            date: {type: String},
            text: {type: String},
            rating:{type: Number},
            onProposed:{type: Boolean}
        },
        methods:{
            formatDate(){ //формат даты
                var dateNew = new Date(this.date); //отделяем дату от времени
                var month = dateNew.getMonth();
                var date = dateNew.getDate();
                if(month < 10)
                    month = '0' + month;
                if(date < 10)
                    date = '0' + date;
                return `${date}-${month}-${dateNew.getFullYear()}` //возращаем строку
            },

            truncateText(text){ //сокращзение текста
                if(text.length > 100) {
                    return text.slice(0, 100) + '...';
                }else{
                    return text;
                }
            },

            openModal(){
                this.modalOpen = true
            },
            closeModal(){
                this.modalOpen = false
            },

            rejectReview(){ //отправка предложения в отложенные. если находимся в принятых,
                // то обновляется список принятых или если находимся в предложенных, то аналогично
                this.$feeapi.feedback.changeStatus(this.id, 2, ()=>{
                    if(this.onProposed===false){
                        this.$emit("refreshPage_proposed"); //функция которая посылает сигнал переменной refreshPage_proposed
                        //которая находится в a-review.vue
                    }else{
                        this.$emit("refreshPage_accept");
                    }
                });
            },
            acceptReview(){
                this.$feeapi.feedback.changeStatus(this.id, 1, ()=>{
                    this.$emit("refreshPage_accept");
                });
            }
        },
        data(){
            return{
                modalOpen: false,
            }
        }
    }
</script>

<style scoped>
    .t-btn:hover {
        color: white;
        background-color: #47B0E6;
    }
    .modalOpen{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.4);
        animation-duration: 0.2s;
        animation-name: slideIn;
    }
    @keyframes slideIn {
        from{
            opacity: 0%;
        }
        to{
            opacity: 100%;
        }
    }
    .done{
        margin-left: 10px;
        animation-duration: 3s;
        animation-name: slideOut;
    }
    @keyframes slideOut {
        from{
            opacity: 100%;
        }
        to{
            opacity: 0%;
        }
    }

    .modalForm{
        width: 700px;
        height: 400px;
        background-color: white;
        margin: 180px auto;
    }
    .modalHeader{
        font-size: 24px;
        line-height: 29px;
        color: #000000;
        border-bottom: 2px solid #47B0E6;
        letter-spacing: 0.040em;
        font-weight: bold;
        text-align: center;
        padding: 12px 18px;

    }
    .modalClose{
        float: right;
        cursor: pointer;
    }
    .modalText{
        resize: none;
        width: 640px;
        height: 270px;
        margin-top: 24px;
    }
    .aaModal{
        display: flex;
        justify-content: center;
        font-size: 14px;
    }
    .footerModal{
        margin-top: 12px;
        font-size: 14px;
        margin-left: 30px;
        display: flex;
        justify-content: space-between;
    }
    .btnsModal{
        margin-right: 30px;
    }
    .m-btn {
        background: #47B0E6;
        color: white;
        border: 0px;
        padding: 0px 3px;
        width: 90px;
        margin-left: 20px;
    }
</style>
