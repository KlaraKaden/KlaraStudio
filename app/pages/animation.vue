<template>
    <div id="body-animation">
        <main>
        <a href="javascript:history.back()" class="back-button"><span><i class="fa-solid fa-arrow-left"></i></span></a>
        <h1 class="portfolio-heading">Animation</h1>
        <p class="informationtext">Um die Animationsprinzipien zu üben und erste Berührungspunkte mit Animationen zu haben, 
            sollten wir verschiedenen kleine Animationen zeichnen.
        </p>

        <article class="portfolio-theme" id="catouflage">
            <div>
                <h2>Catouflage</h2>
                <p>Der kleine Animationsfilm verfolgt eine Katze auf ihrem Weg. 
                    Vielleicht bietet es ja eine mögliche Erklärung wie Katzen sich immer unbemerkt fortbewegen können.</p>
            </div>
            <video width="700" :poster="catouflagePoster" controls loop>
                <source :src="catouflageVideo" />
            </video>
        </article>

        <article class="portfolio-theme" id="animationpractice">
            <div>
                <h2>Morphen</h2>
                <p>Aufgabe war es, aus dem Smiley ein anderes Objekt werden zu lassen, welches sich dann wieder zurück 
                    zum Smiley entwickelt, sodass es ein unendlicher Loop entsteht.</p>
            </div>
            <video width="700" :poster="morphenPoster" controls loop>
                <source :src="morphenVideo" />
            </video>
        </article>

        <article class="portfolio-theme">
            <div>
                <h2>Bouncing Ball</h2>
                <p>Aufgabe war es, einen Ball auf der Stelle auf und ab springen zu lassen. 
                    Dabei sollten auch die Animationsprinzipien wie "stretch and squash" berücksichtigt werden.</p>
            </div>
            <video width="700" :poster="bouncingBallPoster" controls loop>
                <source :src="bouncingBallVideo" />
            </video>
        </article>

        <article class="portfolio-theme">
            <div>
                <h2>Walkcycle</h2>
                <p>Aufgabe war es, eine Person laufen zu lassen. Dabei habe ich die Person auf der Stelle laufen lassen 
                    und durch den sich bewegenden Hinter- und Vordergrund sieht es letzendlich so aus, 
                    als würde die Person in der Welt vorwärtslaufen.</p>
            </div>
            <video width="700" :poster="walkingPoster" controls loop>
                <source :src="walkingVideo" />
            </video>
        </article>
    </main>
    </div>
</template>
<script setup>
    useHead({ title: 'ALLES KLARA. - Animation' })
    
    import morphenVideo from '~/assets/videos/Morphaufgabe.mp4'
    import morphenPoster from '~/assets/images/poster/Morphaufgabe_poster.png'
    import bouncingBallVideo from '~/assets/videos/bouncing_ball_outline_lang.mp4'
    import bouncingBallPoster from '~/assets/images/poster/bouncingBall_Poster.png'
    import walkingVideo from '~/assets/videos/walking_busch_unscharf_ton.mp4'
    import walkingPoster from '~/assets/images/poster/walking_Poster.png'
    import catouflageVideo from '~/assets/videos/Animationsfilm_Catouflage.mp4'
    import catouflagePoster from '~/assets/images/poster/Catouflage_Poster2.png'
</script>

<style scoped>
    #body-animation {
        /* background-image: url("data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='72' height='43.875' patternTransform='scale(1) rotate(0)'><rect x='0' y='0' width='100%' height='100%' fill='hsla(0, 0%, 100%, 0)'/><path d='m14.296 7.185 7.236 7.234L36.002-.048l14.47 14.47 7.236-7.233L36-14.518Zm-7.275 7.251 7.258 7.26 7.259-7.26-7.258-7.259zm-28.798 14.76 7.237 7.237L-.023 21.916 14.452 36.39l7.26-7.258L0 7.42Zm50.746 7.193-7.258-7.258-7.26 7.258 7.26 7.26zm57.568.046 7.24-7.238L72 7.42 50.282 29.137l7.259 7.259L72.02 21.918Zm-28.993-.042-7.26-7.258-7.258 7.258 7.26 7.26zm.233 14.742L36 29.358 14.223 51.135l7.258 7.258L36 43.875l14.518 14.517ZM50.453 14.45l7.259 7.26 7.258-7.26-7.258-7.257z'  stroke-width='1' stroke='hsla(122, 24%, 72%, 1)' fill='none'/></pattern></defs><rect width='800%' height='800%' transform='translate(0,-0.75)' fill='url(%23a)'/></svg>"); */
        background-image: url('/images/diamonds_background.svg');
    }
</style>