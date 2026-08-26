<script setup>
    useHead({ title: 'ALLES KLARA. - Impressum' })
</script>
<template>
    <div id="body-imprint">
        <main>
            <h2 class="ImpressumKontakt">Impressum</h2>
            <div class="impressum">
                <p>Klara Kaden <br>
                Jagdweg 17 <br>
                01454 Radeberg <br>
                Deutschland <br>
                <br>
                E-Mail: klarakaden@web.de</p>
            </div>
        </main>
    </div>
</template>

<style scoped>
#body-imprint {
    background-image: url('/images/waves_background.svg');
    background-repeat: repeat;
    background-position: center top;
    background-size: auto;

    display: flex;
    flex-direction: column;
    flex: 1 0 auto;
    min-height: 100%;
    width: 100%;
}
main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    min-height: 100%;
    flex: 1 0 auto;    
}

.ImpressumKontakt {
    font-size: 3em;
    display: flex;
    justify-content: center;
    margin-top: 0px;
    padding-top: 50px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    color: #36401f;
}
.impressum {
    display: flex;
    justify-content: center;
    text-align: center;
    font-size: 1.25em;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    color: #36401f;
}
</style>