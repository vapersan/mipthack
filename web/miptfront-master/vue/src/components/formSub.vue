<template>
    <div class="formSub">
        <form class="form-b" @submit.prevent="formSubmit">
            <textarea class="form-control textarea-c" rows="10" cols="80" v-model="review" maxlength="1024"></textarea>
            <button class="submit-f" type="button" v-on:click="formSubmit">Отправить</button>
            <img src="../../img/done.svg" class="done" v-if="is_success">
        </form>
    </div>
</template>

<script>
    export default {
        name: "formSub",
        data() {
            return {
                review: '',
                is_success: false
            }
        },
        methods: {
            formSubmit() {
                this.$feeapi.feedback.add(this.review, function (response) {
                    console.log(response)
                }, ()=>{});
                if(this.review.trim()){
                    this.review='';
                }
                this.is_success = true;
                setTimeout(()=> this.is_success=false,2900);
            },

        }
    }
</script>

<style scoped>
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
</style>
