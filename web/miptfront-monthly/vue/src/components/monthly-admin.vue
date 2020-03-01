<template>
    <div>
        <div v-for="info in Data" :key="info.pk">
            {{info.text}}
            <div v-for="all in info.answers" :key="all">
                <span v-for="subinfo in all" :key="subinfo">{{subinfo}}, </span>
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
        methods: {},
        mounted() {
            this.$feeapi.monthly.getAdminInfo(r => {
                this.Data = r;
            });
        }
    }
</script>

<style scoped>

</style>
