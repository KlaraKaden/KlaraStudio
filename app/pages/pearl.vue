<template>
    <div id="body-pearl">
        <main>
            <a href="javascript:history.back()" class="back-button"><span><i class="fa-solid fa-arrow-left"></i></span></a>
            <h1 class="portfolio-heading">Pearl</h1>
            <p class="informationtext">In den ersten Stunden unseres Studiums - als Sprung ins kalte Wasser - war unsere Aufgabe, Ideen für ein Produkt namens "Pearl" zu finden. 
                Zu zwei dieser Ideen sollten wir jeweils ein Werbevideo drehen.
            </p>
            <article class="portfolio-theme">
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

            <article class="portfolio-theme">
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
    import rundesObstposter from '~/assets/images/poster/Pearl-rundes_Obst_Poster.png'
    import rundesObstvideo from '~/assets/videos/Pearl_rundes_Obst_4zu3.mp4'
    import schmuckposter from '~/assets/images/poster/Pearl-Schmuck_Poster.png'
    import schmuckvideo from '~/assets/videos/Pearl_Schmuck.mp4'
</script>

<style scoped>
    #body-pearl {
        /* background-image: url("data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='72' height='43.875' patternTransform='scale(1) rotate(0)'><rect x='0' y='0' width='100%' height='100%' fill='hsla(0, 0%, 100%, 0)'/><path d='m14.296 7.185 7.236 7.234L36.002-.048l14.47 14.47 7.236-7.233L36-14.518Zm-7.275 7.251 7.258 7.26 7.259-7.26-7.258-7.259zm-28.798 14.76 7.237 7.237L-.023 21.916 14.452 36.39l7.26-7.258L0 7.42Zm50.746 7.193-7.258-7.258-7.26 7.258 7.26 7.26zm57.568.046 7.24-7.238L72 7.42 50.282 29.137l7.259 7.259L72.02 21.918Zm-28.993-.042-7.26-7.258-7.258 7.258 7.26 7.26zm.233 14.742L36 29.358 14.223 51.135l7.258 7.258L36 43.875l14.518 14.517ZM50.453 14.45l7.259 7.26 7.258-7.26-7.258-7.257z'  stroke-width='1' stroke='hsla(122, 24%, 72%, 1)' fill='none'/></pattern></defs><rect width='800%' height='800%' transform='translate(0,-0.75)' fill='url(%23a)'/></svg>"); */
        background-image: url('/images/diamonds_background.svg');
    }
</style>