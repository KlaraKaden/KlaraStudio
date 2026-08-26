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
        background-image: url('/images/diamonds_background.svg');
    }
</style>