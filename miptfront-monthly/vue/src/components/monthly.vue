<template>
    <form v-on:submit="sendForm">
        <div v-for="people in formData" :key="people.pk">
            <label>
                {{people.text}}
            </label>
            <div v-for="quest in people.quests" :key="quest.pk">
                <label>
                    {{quest.text}}<br>
                    <input type="range" min="0" max="5" :name="quest.name" value="0">
                </label>
            </div>
        </div>
        <input type="submit" value="Отправить!">
    </form>
</template>

<script>
    export default {
        name: "monthly",
        data: function () {
            return {
                kek: "kek",
                formData: [{'pk': 0, 'text': "", 'quests': []}],
            }
        },
        methods: {
            sendForm: function (e,) {
                console.log(this.fields);
                e.preventDefault();
                let formData = new FormData(event.target);
                let to_send = {};
                formData.forEach(function (key, value) {
                    to_send[value] = key
                });
                this.$feeapi.monthly.sendForm(to_send, (r) => {
                    console.log(r);
                });

            }
        },
        mounted() {
            this.$feeapi.monthly.getForm(r => {
                this.formData = r;
            });
        }
    }
</script>

<style scoped>

</style>
