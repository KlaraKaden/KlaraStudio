<script setup>
    useHead({ title: 'ALLES KLARA.' })
</script>
<template>
    <div id="body-index">
        <SheepAnim />
        <main>
          <div class="mainicon">
            <div class="recipes">
                  <NuxtLink :to="{ path: '/recipe_overview', query: { filter: 'allerezepte' } }"><img src="assets/images/Icon_Rezepte.PNG" alt="Umriss von Messer und Gabel gekreuzt"></NuxtLink>
                  <NuxtLink :to="{ path: '/recipe_overview', query: { filter: 'allerezepte' } }" id="recipebutton">Rezepte</NuxtLink>
            </div>
            <div class="vl"></div>
            <div class="hl"></div>
            <div class="photography">
                <NuxtLink :to="{ path: '/gallery', query: { filter: 'allebilder' } }" data-filter="allebilder"><img src="assets/images/Icon_Fotografie.PNG" alt="Kameraumriss"></NuxtLink>
                <NuxtLink :to="{ path: '/gallery', query: { filter: 'allebilder' } }" data-filter="allebilder" id="photographybutton">Fotografie</NuxtLink>
            </div>
          </div>
          <NuxtLink :to="{ path: '/3DRoom' }" id="experiencebutton">
            <img src="/images/icons/Icon_Room.PNG" alt="Raumumriss">
            3D Raum
          </NuxtLink>
        </main>
    </div>
</template>

<style scoped>
#body-index {
    background-image: url('/images/waves_background.svg');
    overflow-x: hidden;
  }

main {
    margin-top: 20px;
    padding-bottom: 20px;
    margin: 20px 100px
    
}
.mainicon {
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
  height: 35rem;
  overflow-y: hidden;
}
.vl {
    height: 100%;
    width: 1px;
    background-color: #36401f;
}
.hl {
    display: none;
}
div.recipes {
    height: 35rem;
    display: flex;
    text-align: center;
    justify-content: flex-start;
    align-items: center;
    flex-shrink: 1;
    flex-basis: 40%;
    flex-direction: column;
}
div.photography {
    height: 35rem;
    display: flex;
    text-align: center;
    justify-content: flex-start;
    align-items: center;
    flex-shrink: 1;
    flex-basis: 40%;
    flex-direction: column;
}
div.recipes img {
    height: 300px;
    width: auto;
    margin-top: 1em;
    margin-bottom: 2em;
}
div.photography img {
    height: 300px;
    width: auto;
    margin-top: 1em;
    margin-bottom: 2em;
}
#recipebutton {
    text-decoration: none;
    font-family:Verdana, Geneva, Tahoma, sans-serif;
    font-size: 50px;
    background-color: #decf91;
    color: #7b4d29;
    padding: 50px;
    width: 100%;
    border-radius: 10px;
    
}
#recipebutton:hover {
    background-color: rgb(173, 170, 152);
}
#photographybutton {
    text-decoration: none;
    font-family:Verdana, Geneva, Tahoma, sans-serif;
    font-size: 50px;
    background-color: #8294ad;
    color: #1f1d60;
    padding: 50px;
    width: 100%; 
    border-radius: 10px;
    
}
#photographybutton:hover {
    background-color: rgb(148, 156, 164);
}

#experiencebutton {
    text-decoration: none;
    font-family:Verdana, Geneva, Tahoma, sans-serif;
    font-size: 50px;
    background-color: #a5b575;
    color: #5e8d3b;
    padding: 20px;
    width: 100%; 
    border-radius: 10px;  
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
    gap: 50px;
}
#experiencebutton:hover {
    background-color: #bac793;
}
#experiencebutton img {
  height: 150px;
  width: auto;
}

@media (max-width: 973px) {
  main {
    margin: 20px 40px;
  }
  div.mainicon {
        flex-direction: column;
        align-content: space-around;
        justify-content: end;
        /* width: 95%;
        margin: 20px auto; */
        flex-wrap: wrap;
        height: 30rem;
    }
    .vl {
        display: none;
    }
    .hl {
        height: 1px;
        width: 100%;
        background-color: #36401f;
        display: block;
        display: flex;
        justify-self: center;
    }
    div.recipes {
        justify-content: center;
        flex-direction: row;
    }
    div.photography {
        justify-content: center;
        flex-direction: row;
    }
    div.recipes img {
        display: none;
    }
    div.photography img {
        display: none;
    }
    #experiencebutton img {
      display: none;
    }
}
</style>