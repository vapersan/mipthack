<template>
    <div class="review body-container">
        <hBody/>
        <subForm/>
    </div>
</template>

<script>
    import subForm from "@/components/formSub";
    import hBody from "@/components/h-body";

    export default {
        name: "review",
        components:{
            subForm, hBody
        }
    }
</script>


<style scoped>

</style>
