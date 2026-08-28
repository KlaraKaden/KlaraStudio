<template>
    <div id="sheepgroup">
        <div id="sheep1">
            <img id="sheep1-backfeet2" src="~/assets/images/Sheep/Sheep_kleiner_backfeet2.PNG" alt="Schaf-Fuß4" width="2048" height="2048">
            <img id="sheep1-backfeet1" src="assets/images/Sheep/Sheep_kleiner_backfeet1.PNG" alt="Schaf-Fuß3"  width="2048" height="2048">
            <img id="sheep1-frontfeet2" src="assets/images/Sheep/Sheep_kleiner_frontfeet2.PNG" alt="Schaf-Fuß2"  width="2048" height="2048">
            <img id="sheep1-frontfeet1" src="assets/images/Sheep/Sheep_kleiner_frontfeet1.PNG" alt="Schaf-Fuß1"  width="2048" height="2048">
            <img id="sheep1-body" src="assets/images/Sheep/Sheep_kleiner_body.PNG" alt="schafkörper"  width="2048" height="2048"> 
            <img id="sheep1-head" src="assets/images/Sheep/Sheep_kleiner_head.PNG" alt="schafkopf"  width="2048" height="2048">       
        </div>
        <div id="sheep2">
            <img id="sheep2-backfeet2" src="assets/images/Sheep/Sheep_kleiner_backfeet2.PNG" alt="Schaf-Fuß4" width="2048" height="2048">
            <img id="sheep2-backfeet1" src="assets/images/Sheep/Sheep_kleiner_backfeet1.PNG" alt="Schaf-Fuß3"  width="2048" height="2048">
            <img id="sheep2-frontfeet2" src="assets/images/Sheep/Sheep_kleiner_frontfeet2.PNG" alt="Schaf-Fuß2"  width="2048" height="2048">
            <img id="sheep2-frontfeet1" src="assets/images/Sheep/Sheep_kleiner_frontfeet1.PNG" alt="Schaf-Fuß1"  width="2048" height="2048">
            <img id="sheep2-body" src="assets/images/Sheep/Sheep_kleiner_body.PNG" alt="schafkörper"  width="2048" height="2048"> 
            <img id="sheep2-head" src="assets/images/Sheep/Sheep_kleiner_head.PNG" alt="schafkopf"  width="2048" height="2048">       
        </div>
        <div id="sheep3">
            <img id="sheep3-backfeet2" src="assets/images/Sheep/Sheep_kleiner_backfeet2.PNG" alt="Schaf-Fuß4" width="2048" height="2048">
            <img id="sheep3-backfeet1" src="assets/images/Sheep/Sheep_kleiner_backfeet1.PNG" alt="Schaf-Fuß3"  width="2048" height="2048">
            <img id="sheep3-frontfeet2" src="assets/images/Sheep/Sheep_kleiner_frontfeet2.PNG" alt="Schaf-Fuß2"  width="2048" height="2048">
            <img id="sheep3-frontfeet1" src="assets/images/Sheep/Sheep_kleiner_frontfeet1.PNG" alt="Schaf-Fuß1"  width="2048" height="2048">
            <img id="sheep3-body" src="assets/images/Sheep/Sheep_kleiner_body.PNG" alt="schafkörper"  width="2048" height="2048"> 
            <img id="sheep3-head" src="assets/images/Sheep/Sheep_kleiner_head.PNG" alt="schafkopf"  width="2048" height="2048">       
        </div>
        <div id="sheep4">
            <img id="sheep4-backfeet2" src="assets/images/Sheep/Sheep_kleiner_backfeet2.PNG" alt="Schaf-Fuß4" width="2048" height="2048">
            <img id="sheep4-backfeet1" src="assets/images/Sheep/Sheep_kleiner_backfeet1.PNG" alt="Schaf-Fuß3"  width="2048" height="2048">
            <img id="sheep4-frontfeet2" src="assets/images/Sheep/Sheep_kleiner_frontfeet2.PNG" alt="Schaf-Fuß2"  width="2048" height="2048">
            <img id="sheep4-frontfeet1" src="assets/images/Sheep/Sheep_kleiner_frontfeet1.PNG" alt="Schaf-Fuß1"  width="2048" height="2048">
            <img id="sheep4-body" src="assets/images/Sheep/Sheep_kleiner_body.PNG" alt="schafkörper"  width="2048" height="2048"> 
            <img id="sheep4-head" src="assets/images/Sheep/Sheep_kleiner_head.PNG" alt="schafkopf"  width="2048" height="2048">       
        </div>
        <div id="sheep5">
            <img id="sheep5-backfeet2" src="assets/images/Sheep/Sheep_kleiner_backfeet2.PNG" alt="Schaf-Fuß4" width="2048" height="2048">
            <img id="sheep5-backfeet1" src="assets/images/Sheep/Sheep_kleiner_backfeet1.PNG" alt="Schaf-Fuß3"  width="2048" height="2048">
            <img id="sheep5-frontfeet2" src="assets/images/Sheep/Sheep_kleiner_frontfeet2.PNG" alt="Schaf-Fuß2"  width="2048" height="2048">
            <img id="sheep5-frontfeet1" src="assets/images/Sheep/Sheep_kleiner_frontfeet1.PNG" alt="Schaf-Fuß1"  width="2048" height="2048">
            <img id="sheep5-body" src="assets/images/Sheep/Sheep_kleiner_body.PNG" alt="schafkörper"  width="2048" height="2048"> 
            <img id="sheep5-head" src="assets/images/Sheep/Sheep_kleiner_head.PNG" alt="schafkopf"  width="2048" height="2048">       
        </div>
    </div>
</template>

<style scoped>
    #sheepgroup {
        height: 170px;
        width: 100vw;
    }
    #sheep1 {
        position: relative;
        animation:moveSheep 15s linear infinite;
        width: 100vw;
    }
    #sheep1-head {
        position: absolute;
        top: 10px;
        left: 0;
        animation: moveHead 1s ease-in-out infinite;
        width: 150px;
        height: auto;
        object-fit: cover;
    }
    #sheep1-body {
        position: absolute;
        top: 10px;
        left: 0;
        animation: moveBody 1s ease-in-out infinite;
        width: 150px;
        height: auto;
        object-fit: cover;
    }
    #sheep1-frontfeet1 {
        position: absolute;
        top: 10px;
        left: 0;
        animation: moveLegFront1 1s ease-in-out infinite;
        width: 150px;
        height: auto;
        object-fit: cover;
    }
    #sheep1-frontfeet2 {
        position: absolute;
        top: 10px;
        left: 0;
        animation: moveLegBack1 1s ease-in-out infinite;
        width: 150px;
        height: auto;
        object-fit: cover;
    }
    #sheep1-backfeet1 {
        position: absolute;
        top: 10px;
        left: 0;
        animation: moveLegFront2 1s ease-in-out infinite;
        width: 150px;
        height: auto;
        object-fit: cover;
    }
    #sheep1-backfeet2 {
        position: absolute;
        top: 10px;
        left: 0;
        animation: moveLegBack2 1s ease-in-out infinite;
        width: 150px;
        height: auto;
        object-fit: cover;
    }


    #sheep2 {
        position: relative;
        animation:moveSheep 15s linear infinite;
        width: 100vw;
    }
    #sheep2-head {
        position: absolute;
        top: 60px;
        left: 350px;
        animation: moveHead 1s ease-in-out infinite;
        width: 150px;
        height: auto;
        object-fit: cover;
    }
    #sheep2-body {
        position: absolute;
        top: 60px;
        left: 350px;
        animation: moveBody 1s ease-in-out infinite;
        width: 150px;
        height: auto;
        object-fit: cover;
    }
    #sheep2-frontfeet1 {
        position: absolute;
        top: 60px;
        left: 350px;
        animation: moveLegFront1 1s ease-in-out infinite;
        width: 150px;
        height: auto;
        object-fit: cover;
    }
    #sheep2-frontfeet2 {
        position: absolute;
        top: 60px;
        left: 350px;
        animation: moveLegBack1 1s ease-in-out infinite;
        width: 150px;
        height: auto;
        object-fit: cover;
    }
    #sheep2-backfeet1 {
        position: absolute;
        top: 60px;
        left: 350px;
        animation: moveLegFront2 1s ease-in-out infinite;
        width: 150px;
        height: auto;
        object-fit: cover;
    }
    #sheep2-backfeet2 {
        position: absolute;
        top: 60px;
        left: 350px;
        animation: moveLegBack2 1s ease-in-out infinite;
        width: 150px;
        height: auto;
        object-fit: cover;
    }


    #sheep3 {
        position: relative;
        animation:moveSheep 15s linear infinite;
        width: 100vw;
    }
    #sheep3-head {
        position: absolute;
        top: 35px;
        left: 700px;
        animation: moveHead 1s ease-in-out infinite;
        width: 150px;
        height: auto;
        object-fit: cover;
    }
    #sheep3-body {
        position: absolute;
        top: 35px;
        left: 700px;
        animation: moveBody 1s ease-in-out infinite;
        width: 150px;
        height: auto;
        object-fit: cover;
    }
    #sheep3-frontfeet1 {
        position: absolute;
        top: 35px;
        left: 700px;
        animation: moveLegFront1 1s ease-in-out infinite;
        width: 150px;
        height: auto;
        object-fit: cover;
    }
    #sheep3-frontfeet2 {
        position: absolute;
        top: 35px;
        left: 700px;
        animation: moveLegBack1 1s ease-in-out infinite;
        width: 150px;
        height: auto;
        object-fit: cover;
    }
    #sheep3-backfeet1 {
        position: absolute;
        top: 35px;
        left: 700px;
        animation: moveLegFront2 1s ease-in-out infinite;
        width: 150px;
        height: auto;
        object-fit: cover;
    }
    #sheep3-backfeet2 {
        position: absolute;
        top: 35px;
        left: 700px;
        animation: moveLegBack2 1s ease-in-out infinite;
        width: 150px;
        height: auto;
        object-fit: cover;
    }


    #sheep4 {
        position: relative;
        animation:moveSheep 15s linear infinite;
        width: 100vw;
    }
    #sheep4-head {
        position: absolute;
        top: 35px;
        left: -400px;
        animation: moveHead 1s ease-in-out infinite;
        width: 150px;
        height: auto;
        object-fit: cover;
    }
    #sheep4-body {
        position: absolute;
        top: 35px;
        left: -400px;
        animation: moveBody 1s ease-in-out infinite;
        width: 150px;
        height: auto;
        object-fit: cover;
    }
    #sheep4-frontfeet1 {
        position: absolute;
        top: 35px;
        left: -400px;
        animation: moveLegFront1 1s ease-in-out infinite;
        width: 150px;
        height: auto;
        object-fit: cover;
    }
    #sheep4-frontfeet2 {
        position: absolute;
        top: 35px;
        left: -400px;
        animation: moveLegBack1 1s ease-in-out infinite;
        width: 150px;
        height: auto;
        object-fit: cover;
    }
    #sheep4-backfeet1 {
        position: absolute;
        top: 35px;
        left: -400px;
        animation: moveLegFront2 1s ease-in-out infinite;
        width: 150px;
        height: auto;
        object-fit: cover;
    }
    #sheep4-backfeet2 {
        position: absolute;
        top: 35px;
        left: -400px;
        animation: moveLegBack2 1s ease-in-out infinite;
        width: 150px;
        height: auto;
        object-fit: cover;
    }



    #sheep5 {
        position: relative;
        animation:moveSheep 15s linear infinite;
        width: 100vw;
    }
    #sheep5-head {
        position: absolute;
        top: 50px;
        left: -600px;
        animation: moveHead 1s ease-in-out infinite;
        width: 150px;
        height: auto;
        object-fit: cover;
    }
    #sheep5-body {
        position: absolute;
        top: 50px;
        left: -600px;
        animation: moveBody 1s ease-in-out infinite;
        width: 150px;
        height: auto;
        object-fit: cover;
    }
    #sheep5-frontfeet1 {
        position: absolute;
        top: 50px;
        left: -600px;
        animation: moveLegFront1 1s ease-in-out infinite;
        width: 150px;
        height: auto;
        object-fit: cover;
    }
    #sheep5-frontfeet2 {
        position: absolute;
        top: 50px;
        left: -600px;
        animation: moveLegBack1 1s ease-in-out infinite;
        width: 150px;
        height: auto;
        object-fit: cover;
    }
    #sheep5-backfeet1 {
        position: absolute;
        top: 50px;
        left: -600px;
        animation: moveLegFront2 1s ease-in-out infinite;
        width: 150px;
        height: auto;
        object-fit: cover;
    }
    #sheep5-backfeet2 {
        position: absolute;
        top: 50px;
        left: -600px;
        animation: moveLegBack2 1s ease-in-out infinite;
        width: 150px;
        height: auto;
        object-fit: cover;
    }
    @keyframes moveLegFront1 {
        0%, 100% {transform: rotate(0);}
        50% {transform: rotate(-20deg);}
    }

    @keyframes moveLegBack1 {
        0%, 100% {transform: rotate(0);}
        50% {transform: rotate(-15deg);}
    }
    @keyframes moveLegFront2 {
        0%, 100% {transform: rotate(0);}
        50% {transform: rotate(15deg);}
    }
    @keyframes moveLegBack2 {
        0%, 100% {transform: rotate(0);}
        50% {transform: rotate(20deg);}
    }
    @keyframes moveBody {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-10px); }
    }
    @keyframes moveHead {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-5px); }
        0%, 100% { transform: rotate(0); }
        50% { transform: rotate(-10deg);}
    }
    @keyframes moveSheep {
        0% { transform: translateX(-45%); }
        100% { transform: translateX(130%); }
    }

@media (max-width: 1374px) {
    @keyframes moveSheep {
        0% { transform: translateX(-85%); }
        100% { transform: translateX(165%); }
    }
}

    @media (max-width: 973px) {
        #sheepgroup {
        height: 50px;
    }
    #sheep1-head {
        width: 100px;
    }
    #sheep1-body {
        width: 100px;
    }
    #sheep1-frontfeet1 {
        width: 100px;
    }
    #sheep1-frontfeet2 {
        width: 100px;
    }
    #sheep1-backfeet1 {
        width: 100px;
    }
    #sheep1-backfeet2 {
        width: 100px;
    }

    #sheep2-head {
        width: 100px;
        left: 230px;
    }
    #sheep2-body {
        width: 100px;
        left: 230px;
    }
    #sheep2-frontfeet1 {
        width: 100px;
        left: 230px;
    }
    #sheep2-frontfeet2 {
        width: 100px;
        left: 230px;
    }
    #sheep2-backfeet1 {
        width: 100px;
        left: 230px;
    }
    #sheep2-backfeet2 {
        width: 100px;
        left: 230px;
    }

    #sheep3-head {
        width: 100px;
        left: 460px;
    }
    #sheep3-body {
        width: 100px;
        left: 460px;
    }
    #sheep3-frontfeet1 {
        width: 100px;
        left: 460px;
    }
    #sheep3-frontfeet2 {
        width: 100px;
        left: 460px;
    }
    #sheep3-backfeet1 {
        width: 100px;
        left: 460px;
    }
    #sheep3-backfeet2 {
        width: 100px;
        left: 460px;
    }

    #sheep4-head {
        width: 100px;
        left: -260px;
    }
    #sheep4-body {
        width: 100px;
        left: -260px;
    }
    #sheep4-frontfeet1 {
        width: 100px;
        left: -260px;
    }
    #sheep4-frontfeet2 {
        width: 100px;
        left: -260px;
    }
    #sheep4-backfeet1 {
        width: 100px;
        left: -260px;
    }
    #sheep4-backfeet2 {
        width: 100px;
        left: -260px;
    }

    #sheep5-head {
        width: 100px;
        left: -400px;
    }
    #sheep5-body {
        width: 100px;
        left: -400px;
    }
    #sheep5-frontfeet1 {
        width: 100px;
        left: -400px;
    }
    #sheep5-frontfeet2 {
        width: 100px;
        left: -400px;
    }
    #sheep5-backfeet1 {
        width: 100px;
        left: -400px;
    }
    #sheep5-backfeet2 {
        width: 100px;
        left: -400px;
    }
    @keyframes moveSheep {
        0% { transform: translateX(-85%); }
        100% { transform: translateX(160%); }
    }
    }

    @media (max-width: 670px) {
    @keyframes moveSheep {
        0% { transform: translateX(-150%); }
        100% { transform: translateX(200%); }
    }
}
</style>