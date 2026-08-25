<script setup>
    useHead({ title: 'ALLES KLARA. - About Me' })
</script>
<template>
    <div id="body-aboutMe">
        <main>
            <div id="aboutMe">
                    
                <div class="selftext">
                    <p>Hi, <br>
                    ich bin <br></p>
                    <p id="Name"><b>Klara</b><br></p>
                    <p>Ich bin Studentin an der Fachhochschule Dresden. Dort studiere ich Medieninformatik und Mediendesign. <br></p>
                    <p>Das kleine Örtchen Großerkmannsdorf in der Nähe von Dresden darf ich mein Zuhause nennen. <br></p>
                    <br>
                    <p>In meiner Freizeit geh ich gerne in die Natur zum Fotografieren. Dabei sind besonders Blumen und 
                        Früchte tragende Sträucher und Bäume in meinem Fokus.</p>
                    <p>Zudem koche und backe ich sehr gerne. Dabei probiere ich gern auch immer wieder etwas Neues aus und lasse gerne die Koreanische Küche mit einfließen.</p>
                    <br>
                    <p>Nach dem Abitur war ich für ein halbes Jahr für eine Sprachreise in Südkorea. Ich habe dort, neben dem Lernen der koreanischen Sprache,
                        auch eine ganze Menge erlebt und viele interessante und spannende Einblicke in die koreanische Kultur bekommen.</p>
                    <br>
                    <p>Lieblingstier? Eindeutig Schaf! Wussten Sie, dass die Flauschbälle aus Fehlern lernen, sich Gewohnheiten aneignen, 
                        bewusste Entscheidungen treffen sowie Gesichter erkennen und unterscheiden können? </p>
                </div>
                <div class="self-image">
                    <img id="self-image" src="assets/images/Klara_Kaden_Foto_quatradt.JPG" alt="Portrait von Klara" width="400" height="400">
                    <img id="gif-sheep" src="assets/videos/StudioGhibli_Sheep.gif" alt="Ausschnitt aus einem Studio Ghibli Film mit Schaf" width="500" height="267">
                </div>
            </div>
            <div id="aboutmebuttons">
                <NuxtLink :to="{ path: '/portfolio' }" class="portfoliobutton"><span>Portfolio</span></NuxtLink>
            </div>
        </main>
    </div>
</template>

<style scoped>
    #body-aboutMe {
        /* background-image: url("data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='36' height='36' patternTransform='scale(1) rotate(0)'><rect x='0' y='0' width='100%' height='100%' fill='hsla(0, 0%, 100%, 0)'/><path d='M27-12.5h18c1.94 0 3.5 1.561 3.5 3.5V9c0 1.94-1.56 3.5-3.5 3.5H27A3.492 3.492 0 0123.5 9V-9c0-1.938 1.562-3.5 3.5-3.5zm-36 0H9c1.94 0 3.5 1.561 3.5 3.5V9c0 1.94-1.56 3.5-3.5 3.5H-9A3.492 3.492 0 01-12.5 9V-9c0-1.938 1.562-3.5 3.5-3.5zm0 36.001H9c1.94 0 3.5 1.561 3.5 3.5v18c0 1.94-1.56 3.5-3.5 3.5H-9c-1.938 0-3.5-1.56-3.5-3.5v-18c0-1.939 1.562-3.5 3.5-3.5zm18-18h18c1.94 0 3.5 1.56 3.5 3.5v18c0 1.939-1.56 3.5-3.5 3.5H9c-1.938 0-3.5-1.561-3.5-3.5V9c0-1.94 1.562-3.5 3.5-3.5zm18 18h18c1.94 0 3.5 1.561 3.5 3.5v18c0 1.94-1.56 3.5-3.5 3.5H27c-1.938 0-3.5-1.56-3.5-3.5v-18c0-1.939 1.562-3.5 3.5-3.5z'  stroke-linecap='square' stroke-width='1' stroke='hsla(122, 24%, 72%, 1)' fill='none'/><path class='st79' d='M12.564 15.389a9.631 9.631 0 002.824-2.825h5.225a9.631 9.631 0 002.825 2.825v5.224a9.631 9.631 0 00-2.825 2.825h-5.225a9.631 9.631 0 00-2.824-2.825v-2.612z'   stroke-linecap='square' stroke-width='1' stroke='hsla(122, 24%, 72%, 1)' fill='none'/></pattern></defs><rect width='800%' height='800%' transform='translate(0,0)' fill='url(%23a)'/></svg>"); */
        background-image: url('/images/square_round_background.svg');
    }

    div#aboutMe {
        display: flex;
        justify-content: space-between;
        margin-bottom: 2em;
    } 
    div.self-image {
        display: flex;
        justify-content: space-between;
        flex-direction: column;
    }
    #self-image {
        height: auto;
        width: 400px;
        border-radius: 100%;
        /* position: absolute; */
        /* right: 12em; */
        margin: 4em;
        /* float: right; */
    }
    #gif-sheep {
        width: 500px;
        height: auto;
        margin-right: 2em;
        border-radius: 10px;
    }
    div.selftext {
        margin: 2.5em;
        margin-bottom: 0;
        font-size: 1.15em;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        color: #36401f;
        background-color: #91af81;
        padding: 20px;
        border-radius: 15px;
    }
    div.selftext p {
        margin-top: 0.5em;
        margin-bottom: 0.5em;
    }
    #Name {
        font-family: Salsa;
        font-size: 3.5em;
    }
    a.portfoliobutton{
        text-decoration: none;
    }
    a.portfoliobutton{
        text-decoration: none;
    }
    .portfoliobutton {
        font-size: 2em;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        padding: 20px;
        border-radius: 10px;
        border: 1px solid #36401f;
        background-color: #91af81;
        color: #36401f;
        display: flex;
        justify-content: center;
        width: 20vw;
        /* margin: 0 auto; */
        margin: 0;
        margin-bottom: 1em;
        transition: all 0.5s;
        cursor: pointer;
    }
    .portfoliobutton span {
        cursor: pointer;
        display: inline-block;
        position: relative;
        transition: 0.5s;
    }
    .portfoliobutton span:after {
        content: '»';
        /* content: '\27A4'; */
        position: absolute;
        opacity: 0;
        top: 0;
        right: -15px;
        transition: 0.5s;
    }
    .portfoliobutton:hover span {
        padding-right: 40px;
    }
    .portfoliobutton:hover span:after {
        opacity: 1;
        right: 0;
    }
    .portfoliobutton:hover {
        background-color: #c8e5b9;
    }

    #aboutmebuttons {
        display: flex;
        justify-content: center;
        /* margin-bottom: 2em; */
        gap: 10vw;
        margin: 0 auto;
    }
</style>