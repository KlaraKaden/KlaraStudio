<template>
    <header>
        <NuxtLink to="/" id="title-a"><div id="title"><b>ALLES KLARA.</b></div></NuxtLink>
        <NuxtLink :to="{ path: '/3DRoom' }" id="PortfolioRoom">
            <img src="/images/icons/Icon_Room.PNG" alt="Raumumriss">
          </NuxtLink>
        <div>
            <navBar />
        </div>
    </header>
</template>

<script>
    import navBar from './navBar.vue'
    export default {
        components: {
            navBar
        }
    }
</script>

<style scoped>

/* /////////////////////////////////////////////////////////////////////////////////////////////////////////// */
/* Seitenüberschrift/Titel anfang*/
/* /////////////////////////////////////////////////////////////////////////////////////////////////////////// */
header a div {
    font-family: Arial, Helvetica, sans-serif;
    font-style: italic;
    font-weight: bold;
    font-size: 8em;
    text-align: center;
    color: #36401f;
    padding-top: 50px;
    padding-bottom: 20px;
    margin: 0;
}

a:hover div,
a:focus div {
    color: #5b702c;
}
header a {
    text-decoration: none;
}
header {
    background-color: darkseagreen;
}
#PortfolioRoom {
    position: absolute;
    top: 65px;
    right: 65px;
}
#PortfolioRoom img {
    height: 100px;
  width: auto;
}
#PortfolioRoom:hover img {
    transform: scale(1.2);
}
/* /////////////////////////////////////////////////////////////////////////////////////////////////////////// */
/* Seitenüberschrift/Titel Ende*/
/* /////////////////////////////////////////////////////////////////////////////////////////////////////////// */
@media (max-width: 1290px) {
    #PortfolioRoom {
        display: none;
    }
}

@media (max-width: 768px) {
    header a div {
        font-size: 10vw;
    }
}
</style>