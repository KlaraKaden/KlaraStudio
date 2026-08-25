<template>
    <div class="content">
        <!-- <div id="frontpage">
            <HeaderComp />
            <NuxtPage />
            <FooterComp />
        </div> -->
        <!-- <NuxtRouteAnnouncer /> -->
        <!-- <HeaderComp /> -->
        <slot />
        <!-- <FooterComp /> -->
         <!-- <div class="layout-container">
        <HeaderComp />
        <main class="content">
            <slot />
        </main>
        <FooterComp /> -->
    </div>
</template>

<!-- <script>
import HeaderComp from '~/headerComp.vue'
import FooterComp from '~/partials/footerComp.vue'
export default {
    components: {
        HeaderComp,
        FooterComp
    }
}
</script> -->

<style>
    /* html, body {
        width: 100%;
        height: auto;
        margin: 0;
        padding: 0;
        font-family: 'Helvetica Neue', Arial, sans-serif;
        background: #fffbf8;
        color: #333;
        box-sizing: border-box;

    } */
    /* body {
        margin: 0;
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        display: grid;
        grid-template-rows: auto 1fr auto;
        grid-template-columns: 1fr;
        height: 100vh;
        grid-template-areas: 
            "header"
            "main"
            "footer";
    } */
    /* footer {
        margin-top: auto;
        grid-area: footer;
    } */
    /* .frontpage {
        /* display: grid;
        grid-template-rows: 1fr auto 1fr;
        grid-template-columns: 1fr;
        min-height: 100vh; */
        /*display: flex;
        flex-direction: column;
        min-height: 100vh;
    } */
    /* Layout container makes footer stick to the bottom when page content is short */
    /* .layout-container {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    } */

    /* .content {
        flex: 1 0 auto; /* grow to fill available space between header and footer 
    } */
    
    /* .container {
        width: 90%;
        margin: 0 auto;
        grid-area: main;
    }
    .container main {
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 2em;
        margin-top: auto;
        margin-bottom: auto;
    }
    .container main h1 {
        font-size: 2.5em;
        margin-bottom: 0.5em;
    }
    .container main p {
        font-size: 1.2em;
        line-height: 1.6em;
        text-align: center;
    }
    @media (max-width: 860px) {
        .container {
            width: 95%;
        }
        .container main {
            padding: 1em;
        }
    } */
</style>