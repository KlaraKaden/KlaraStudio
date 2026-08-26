<template>
    <div id="body-pearl">
        <main>
            <a href="javascript:history.back()" class="back-button"><span><i class="fa-solid fa-arrow-left"></i></span></a>
            <h1 class="portfolio-heading">Pearl</h1>
            <p class="informationtext">In den ersten Stunden unseres Studiums - als Sprung ins kalte Wasser - war unsere Aufgabe, Ideen für ein Produkt namens "Pearl" zu finden. 
                Zu zwei dieser Ideen sollten wir jeweils ein Werbevideo drehen.
            </p>
            <article class="portfolio-theme" id="rundesObst">
                <div>
                    <h2>Rundes Obst</h2>
                    <p>Eine Idee meiner Gruppe war das runde Obst der Marke Pearl. Das Storyboard war weniger ausgearbeitet als 
                        jenes zur anderen Idee. Somit war der Dreh auch experimenteller und wir 
                        haben Verschiedenes ausprobiert. Allerding waren wir uns in der Gruppe am Ende einig, das dieses Video 
                        besser gelungen ist als das andere. Bis heute lieben wir das Endprodukt.
                    </p>
                </div>
                <video width="700" :poster="rundesObstposter" controls>
                    <source :src="rundesObstvideo">
                </video>
            </article>

            <article class="portfolio-theme" id="schmuck">
                <div>
                    <h2>Schmuck</h2>
                    <p>Die zweite Idee meiner Gruppe war Perlenschmuck der Marke Pearl. 
                        Es sollte wie eine etwas luxuriösere Schmuck-Marke wirken.</p>
                </div>
                <video width="700" :poster="schmuckposter" controls>
                    <source :src="schmuckvideo">
                </video>
            </article>
        </main>
    </div>
</template>

<script setup>
    useHead({ title: 'ALLES KLARA. - Pearl' })

    import rundesObstposter from '~/assets/images/poster/Pearl-rundes_Obst_Poster.png'
    import rundesObstvideo from '~/assets/videos/Pearl_rundes_Obst_4zu3.mp4'
    import schmuckposter from '~/assets/images/poster/Pearl-Schmuck_Poster.png'
    import schmuckvideo from '~/assets/videos/Pearl_Schmuck.mp4'
</script>

<style scoped>
    #body-pearl {
        background-image: url('/images/diamonds_background.svg');
    }
</style>