<template>
    <div class="formSub">
        <form class="form-b" @submit="formSubmit">
            <textarea class="form-control textarea-c" rows="10" cols="80" v-model="review" maxlength=""></textarea>
            <button class="submit-f" type="button" v-on:click="formSubmit">Отправить</button>
        </form>
        {{output}}
    </div>
</template>

<script>
    export default {
        name: "formSub",
        data() {
            return {
                review: '',
                output: ''
            }
        },
        methods: {
            formSubmit() {
                // e.preventDefault();
                let currentObject = this;
                this.$feeapi.feedback.add(this.review, function (response) {
                    currentObject.output = response;
                }, function (error) {
                    currentObject.output = error;
                })
            }
        }
    }
</script>

<style scoped>

</style>
