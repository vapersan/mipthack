<template>
    <div class="formSub">
        <form class="form-b" @submit.prevent="formSubmit">
            <textarea class="form-control textarea-c" rows="10" cols="80" v-model="review" maxlength="1024"></textarea>
            <button class="submit-f" type="button" v-on:click="formSubmit">Отправить</button>
            <div class="alertS done" v-if="is_success" style="color:#19B829">
                <img src="../../img/done.svg" style="margin-right: 4px">Запрос отправлен
            </div>
            <div class="alertS done" v-if="is_success_del" style="color:#FA5656">
                <img src="../../img/del.svg" style="margin-right: 4px">Введите текст
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        name: "formSub",
        data() {
            return {
                review: '',
                is_success: false,
                is_success_del: false
            }
        },
        methods: {
            formSubmit() {
                this.$feeapi.feedback.add(this.review, (response)=>{
                    console.log(response);
                    this.is_success = true;
                    setTimeout(()=> this.is_success=false,2000);
                }, ()=>{
                    this.is_success_del = true;
                    setTimeout(()=> this.is_success_del=false,2000);
                });
                if(this.review.trim()){
                    this.review='';
                }
            },

        }
    }
</script>

<style scoped>
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
