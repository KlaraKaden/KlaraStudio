<script setup>
    useHead({ title: 'ALLES KLARA. - Über mich' })
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
        gap: 10vw;
        margin: 0 auto;
    }
</style>