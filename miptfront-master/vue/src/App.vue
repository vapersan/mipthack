<template>
    <div id='app'>
        <navbar/>
        <router-view/>
    </div>
</template>

<script>
    import 'bootstrap/dist/css/bootstrap.css'
    import 'bootstrap-vue/dist/bootstrap-vue.css'
    import navbar from "@/components/navbar";

    export default {
        name: 'App',
        components: {
            navbar
        },
    }
</script>

<style>
    #app {
        font-family: Tahoma;
        min-width: 1280px;
        padding-bottom: 100px;
    }

    .mfti-logo {
        width: 155px;
        height: 48px;
    }

    .nav-h {
        font-size: 14px;
        color: rgba(0, 0, 0, 0.53);
        margin: 0 auto;
    }

    .body-container {
        margin: 0 auto;
        max-width: 1280px;
    }

    .nav-cust {
        padding: 8px 0px;
    }

    hr {
        margin: 0px;
    }

    .img-nav {
        margin-left: -85px;
    }

    .nav-links {
        margin-top: 20px;
    }

    .arrow-nav {
        margin: 0px 10px 2px;
    }

    .body-h {
        font-size: 24px;
        line-height: 29px;
        color: #000000;
        padding-bottom: 8px;
        border-bottom: 3px solid #006CB5;
    }

    .nav-link {
        background: #FFFFFF;
        border: 1px solid #47B0E6;
        box-sizing: border-box;
        display: inline-block;
        font-size: 11px;
        line-height: 1px;
        color: #47B0E6;
    }

    .textarea-c {
        width: initial;
        border-radius: 0;
    }

    .form-b {
        margin-top: 21px;
    }

    .submit-f {
        background: #47B0E6;
        border: 0px;
        color: white;
        padding: 4px 21px;
        margin-top: 10px;
    }

    .t-btn {
        background: #FFFFFF;
        border: 1px solid rgba(0, 0, 0, 0.42);
        padding: 4px 18px;
        width: 155px;
    }

    .b-table {
        margin-top: 20px;
    }

    .hr-table {
        background: black;
    }

    .header-t {
        line-height: 22px;
        display: flex;
        justify-content: space-around;
        padding: 12px 16px;
        border-bottom: 1px solid black;
        font-size: 18px;
        align-items: center;
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

    .h-flex {
        flex-basis: 27%;
    }

    .h-flex1 {
        flex-basis: 154%;
    }

    .h-flex2 {
        flex-basis: 32%;
    }

</style>
