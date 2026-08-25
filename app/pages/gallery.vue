<template>
    <div id="body-gallery">
        <div class="burger-menu-center">
            <div class="burger-menu" @click="toggleMenu">
                <div class="bar1"></div>
                <div class="bar2"></div>
                <div class="bar3"></div>
            </div>
        </div>

        <button @click="topFunction" id="topBtn" title="Go to top">nach oben <i class="fa-solid fa-arrow-up"></i></button>

        <!-- <div class="gridcontainer">
            <aside class="sidebar-gallery">
                <div class="filter-list">
                    <ul id="filter-options">
                        <li @click="filterGallery('allebilder', $event)" class="activegallery">Alle Bilder</li>
                        <li @click="filterGallery('blumen', $event)">Blumen</li>
                        <li @click="filterGallery('fruechte', $event)">Früchte</li>
                        <li @click="filterGallery('tiere', $event)">Tiere</li>
                        <li @click="filterGallery('gruen', $event)">Grün</li>
                        <li @click="filterGallery('gebaeude', $event)">Gebäude</li>
                    </ul>
                </div>
            </aside>
            <main class="main-gallery">
                <div class="container">
                    <div class="heading">
                        <h3>Galerie</h3>
                    </div>
                    
                    <div class="box">
                        <div class="image-column">
                            <div class="gallery-item blumen" data-index="1" data-caption="Schneegloeckchen: 03.04.2024, Großerkmannsdorf, Deutschland"><img :src="img('assets/images/Fotografie/Bild1_03.04.24.JPG')" alt="Schneeglöckchen im Abendlicht."></div>
                            <div class="gallery-item blumen" data-index="2" data-caption="Osterglocke: 14.03.2024, Großerkmannsdorf, Deutschland"><img :src="img('assets/images/Fotografie/Bild2_14.03.24.JPG')" alt="Eine wenig geöffnete gelbe Osterglocke mit Wassertropfen."></div>
                            <div class="gallery-item fruechte" data-index="3" data-caption="Sanddorn: 15.09.2023, Großerkmannsdorf, Deutschland"><img :src="img('assets/images/Fotografie/Bild3_15.09.23.JPG')" alt="Ein Sanddornbusch mit vielen orangen Beeren vor blauem Himmel."></div>
                            <div class="gallery-item gruen" data-index="4" data-caption="Zierkirsche: 29.07.2023, Großerkmannsdorf, Deutschland"><img :src="img('assets/images/Fotografie/Bild4_29.07.23.JPG')" alt="Ein Ast einer Zierkische mit grünen Blättern und Wassertropfen."></div>
                            <div class="gallery-item blumen" data-index="5" data-caption="Knopfbusch: 12.07.2023, Großerkmannsdorf, Deutschland"><img :src="img('assets/images/Fotografie/Bild5_12.07.23.JPG')" alt="Blütenstand eines Knopfbusches mit einigen geöffneten Blüten."></div>                        
                            <div class="gallery-item gruen" data-index="6" data-caption="Grünes Blatt mit Regentropfen: 14.03.2024, Großerkmannsdorf, Deutschland"><img :src="img('assets/images/Fotografie/Bild38_14.03.2024.JPG')" alt="Grüne, leicht gewundene Blätter mit Wassertropfen."></div>
                            <div class="gallery-item tiere blumen" data-index="7" data-caption="Rose mit Biene: 03.06.2023, Großerkmannsdorf, Deutschland"><img :src="img('assets/images/Fotografie/Bild22_03.06.2023.jpg')" alt="Eine zart lila Rosenblüte mit heranfliegender Biene."></div>
                            <div class="gallery-item tiere blumen" data-index="8" data-caption="Buddleja mit Biene: 16.06.2022, Großerkmannsdorf, Deutschland"><img :src="img('assets/images/Fotografie/Bild18_16.06.2022.JPG')" alt="In Blüte stehende Äste eines Buddlejas mit daraufsitzender Biene."></div>
                            <div class="gallery-item gebaeude" data-index="9" data-caption="Gang im Militärhistorischen Museum: 20.04.2023, Seoul, Südkorea"><img :src="img('assets/images/Fotografie/Bild32_20.04.2023.jpg')" alt="Zentraler Blick in einen Gang mit Säulen an den Seiten."></div>
                            <div class="gallery-item tiere blumen" data-index="10" data-caption="Natterkopf mit Hummel: 08.07.2023, Großerkmannsdorf, Deutschland"><img :src="img('assets/images/Fotografie/Bild20_08.07.2023.JPG')" alt="Natterkopfpflanze mit einer Hummel in der Blüte."></div>
                            <div class="gallery-item gruen" data-index="11" data-caption="Botanischer Garten: 11.04.2023, Seoul, Südkorea"><img :src="img('assets/images/Fotografie/Bild24_11.04.2023.jpg')" alt="Blick von oben auf tropische Blattpflanzen. Im Vordergrund ein Holzweg."></div>
                            <div class="gallery-item fruechte" data-index="12" data-caption="Sanddorn: 08.01.2022, Großerkmannsdorf, Deutschland"><img :src="img('assets/images/Fotografie/Bild16_08.01.2022.JPG')" alt="Nahaufnahme eines nassen Fruchtstandes eines Sanddorns."></div>
                            <div class="gallery-item blumen" data-index="13" data-caption="Japanische Blütenkirsche: 22.04.2022, Großerkmannsdorf, Deutschland"><img :src="img('assets/images/Fotografie/Bild50_22.04.2022.JPG')" alt="Ast einer Japanischen Blütenkirsche von unten fotografiert."></div>
                            <div class="gallery-item gruen" data-index="14" data-caption="Narzisse: 24.01.2022, Großerkmannsdorf, Deutschland"><img :src="img('assets/images/Fotografie/Bild40_24.01.2022.JPG')" alt="Narzissensprossen mit Regentropfen."></div>
                            <div class="gallery-item gebaeude" data-index="15" data-caption="Aussichtsturm: 13.04.2023, Incheon, Südkorea"><img :src="img('assets/images/Fotografie/Bild25_13.04.2023.jpg')" alt="Weg in einem Park, umsäumt von weiß blühenden Kirschbäumen,der zu einem asiatisch gestalteten Aussichtsturm führt."></div>                        
                            <div class="gallery-item blumen" data-index="16" data-caption="Seerose: 03.06.2023, Seoul, Südkorea"><img :src="img('assets/images/Fotografie/Bild35_03.06.2023.jpg')" alt="Eine rosa Seerose auf mit Seerosenblättern bedeckten Teich."></div>
                            <div class="gallery-item blumen" data-index="17" data-caption="Rose mit Regentropfen: 24.06.2022, Großerkmannsdorf, Deutschland"><img :src="img('assets/images/Fotografie/Bild51_24.06.2022.JPG')" alt="Cremefarbene Rosenblüte mit Regentropfen."></div>
                            
                        </div>
        
                        <div class="image-column">
                            <div class="gallery-item blumen" data-index="18" data-caption="Knopfbusch: 11.07.2023, Großerkmannsdorf, Deutschland"><img :src="img('assets/images/Fotografie/Bild6_11.07.23.JPG')" alt="Fast voll erblühter Knopfbuschblütenstand mit langen Blütenstempeln."></div> 
                            <div class="gallery-item fruechte gruen" data-index="19" data-caption="Wilder Wein: 08.07.2023, Großerkmannsdorf, Deutschland"><img :src="img('assets/images/Fotografie/Bild7_08.07.23.JPG')" alt="Traube eines wilden Weines."></div>
                            <div class="gallery-item gebaeude" data-index="20" data-caption="National Assembly Communication Building: 20.05.2023, Seoul, Südkorea"><img :src="img('assets/images/Fotografie/Bild36_20.05.2023.jpg')" alt="Modernes 4-stöckiges Gebäude, bei dem die Stockwerke immer weiter umgekehrt stufenförmig herausragen."></div>                       
                            <div class="gallery-item blumen tiere" data-index="21" data-caption="Kornblume mit Schwebfliege: 18.06.2023, Großerkmannsdorf, Deutschland"><img :src="img('assets/images/Fotografie/Bild14_18.06.23.JPG')" alt="Kornblume mit anfliegender Schwebefliege."></div>
                            <div class="gallery-item gruen" data-index="22" data-caption="Wilder Wein: 29.07.2023, Großerkmannsdorf, Deutschland"><img :src="img('assets/images/Fotografie/Bild39_29.07.2023.JPG')" alt="Wilder Wein mit Regentropfen."></div>
                            <div class="gallery-item blumen" data-index="23" data-caption="Riesenlauch: 21.06.2023, Großerkmannsdorf, Deutschland"><img :src="img('assets/images/Fotografie/Bild12_21.06.23.JPG')" alt="Kugelförmiger, lila Blütenkopf des Riesenlauches in Nahaufnahme."></div>
                            <div class="gallery-item tiere" data-index="24" data-caption="Schaf: 11.02.2023, Seoul, Südkorea"><img :src="img('assets/images/Fotografie/Bild21_11.02.2023.jpg')" alt="In die Kamera schauendes Schaf im Stall."></div>
                            <div class="gallery-item blumen" data-index="25" data-caption="Brautspiere: 22.04.2022, Großerkmannsdorf, Deutschland"><img :src="img('assets/images/Fotografie/Bild28_22.04.2022.JPG')" alt="Nach vorn ragender Ast einer Brautspiere."></div>
                            <div class="gallery-item blumen" data-index="26" data-caption="Buddleja: 16.06.2022, Großerkmannsdorf, Deutschland"><img :src="img('assets/images/Fotografie/Bild31_16.06.2022.JPG')" alt="Einzelnder Ast eines in Blüte stehenden Buddlejas."></div>
                            <div class="gallery-item blumen" data-index="27" data-caption="Primel: 19.12.2021, Großerkmannsdorf, Deutschland"><img :src="img('assets/images/Fotografie/Bild34_19.12.2021.JPG')" alt="Leicht verwelkte lila Primelblüten mit Regentropfen."></div>
                            <div class="gallery-item gruen" data-index="28" data-caption="Glanzmispel: 08.01.2023, Großerkmannsdorf, Deutschland"><img :src="img('assets/images/Fotografie/Bild23_08.01.2023.JPG')" alt="Astspitze einer Glanzmispel mit Schnee bedeckt."></div>
                            <div class="gallery-item fruechte" data-index="29" data-caption="Blaubeere: 08.07.2023, Großerkmannsdorf, Deutschland"><img :src="img('assets/images/Fotografie/Bild8_08.07.23.JPG')" alt="Fruchtstand einer Blaubeerenpflanze mit einer einzelnen blauen Beere."></div>
                            <div class="gallery-item gruen" data-index="30" data-caption="Agave: 03.06.2023, Seoul, Südkorea"><img :src="img('assets/images/Fotografie/Bild43_03.06.2023.jpg')" alt="Eine Agave mit Stacheln von oben fotografiert."></div>
                            <div class="gallery-item blumen" data-index="31" data-caption="Fackelingwer: 11.04.2023, Seoul, Südkorea"><img :src="img('assets/images/Fotografie/Bild49_11.04.2023.jpg')" alt="Drei rote Fackelingwerblüten."></div>
                            <div class="gallery-item blumen" data-index="32" data-caption="Schwarzer Lauch: 18.06.2023, Großerkmannsdorf, Deutschland"><img :src="img('assets/images/Fotografie/Bild47_18.06.2023.JPG')" alt="Runder weißer Blütenkopf eines Schwarzen Lauches in Nahaufnahme."></div>
                            <div class="gallery-item gruen" data-index="33" data-caption="Strauchveronika: 19.12.2021,Großerkmannsdorf, Deutschland"><img :src="img('assets/images/Fotografie/Bild26_19.12.2021.JPG')" alt="Einzelner Ast mit Regentropfen einer Strauchveronika im Fokus des Bildes."></div>
                        </div>
            
                        <div class="image-column">
                            <div class="gallery-item blumen" data-index="34" data-caption="Lavendel: 24.06.2023; Großerkmannsdorf, Deutschland"><img :src="img('assets/images/Fotografie/Bild11_24.06.23.JPG')" alt="Aus rechter unterer Ecke ragende Blütenstände eines Lavendels."></div>
                            <div class="gallery-item blumen" data-index="35" data-caption="Margeriten: 08.07.2023; Großerkmannsdorf, Deutschland"><img :src="img('assets/images/Fotografie/Bild9_08.07.23.JPG')" alt="Wenige Blüten von weißen Margeriten."></div>
                            <div class="gallery-item gruen" data-index="36" data-caption="Stein mit Moos: 18.06.2023; Großerkmannsdorf, Deutschland"><img :src="img('assets/images/Fotografie/Bild13_18.06.23.JPG')" alt="Stein mit moosbedeckter Abbruchkante."></div>
                            <div class="gallery-item gruen" data-index="37" data-caption="Bananenblatt: 10.05.2023; Seoul, Südkorea"><img :src="img('assets/images/Fotografie/Bild10_05.07.23.jpg')" alt="Nahaufnahme eines Bananenblattes."></div>
                            <div class="gallery-item blumen tiere" data-index="38" data-caption="Natterkopf mit Hummel: 08.07.2023; Großerkmannsdorf, Deutschland"><img :src="img('assets/images/Fotografie/Bild15_08.07.23.JPG')" alt="Natterkopfblüten mit Hummel in einer Blüte."></div>
                            <div class="gallery-item fruechte" data-index="39" data-caption="Brombeeren mit Käfer: 16.09.2022, Großerkmannsdorf, Deutschland"><img :src="img('assets/images/Fotografie/Bild17_16.09.2022.JPG')" alt="Einzelne schwarze Brombeere umgeben von roten Beeren. Darauf ein brauner Käfer."></div>
                            <div class="gallery-item gruen" data-index="40" data-caption="Rosenblatt mit Regentropfen: 16.09.2022, Großerkmannsdorf, Deutschland"><img :src="img('assets/images/Fotografie/Bild33_16.09.2022.JPG')" alt="Rosenblatt mit Regentropfen darauf."></div>
                            <div class="gallery-item tiere blumen" data-index="41" data-caption="Buddleja mit Schmetterling: 17.06.2022, Großerkmannsdorf, Deutschland"><img :src="img('assets/images/Fotografie/Bild19_17.06.2022.JPG')" alt="Kleiner Fuchs (Schmetterling) auf in Blüte stehendem Buddleja-Ast."></div>
                            <div class="gallery-item blumen" data-index="42" data-caption="Hasenglöckchen 1: 06.05.2022, Großerkmannsdorf, Deutschland"><img :src="img('assets/images/Fotografie/Bild29_06.05.2022.JPG')" alt="Blütenstaude von blauvioletten Hasenglöckchen."></div>
                            <div class="gallery-item blumen" data-index="43" data-caption="Hasenglöckchen 2: 06.05.2022, Großerkmannsdorf, Deutschland"><img :src="img('assets/images/Fotografie/Bild30_06.05.2022.JPG')" alt="Blütenstand eines Hasenglöckchens mit Knospen und zwei geöffneten Blüten."></div>
                            <div class="gallery-item gruen" data-index="44" data-caption="Kolorado-Tanne: 08.01.2022, Großerkmannsdorf, Deutschland"><img :src="img('assets/images/Fotografie/Bild27_08.01.2022.JPG')" alt="Schneebedeckte Spitze eines Astes der Kolorado-Tanne."></div>
                            <div class="gallery-item blumen" data-index="45" data-caption="Rose mit Regentropfen: 24.06.2022, Großerkmannsdorf, Deutschland"><img :src="img('assets/images/Fotografie/Bild52_24.06.2022.JPG')" alt="Cremefarbene Rosenblüte mit Wassertropfen von der Seite."></div>
                            <div class="gallery-item gruen" data-index="46" data-caption="Buchsblättrige Strauchveronika: 19.12.2021, Großerkmannsdorf, Deutschland"><img :src="img('assets/images/Fotografie/Bild41_19.12.2021.JPG')" alt="Einzelnde Äste einer nassen Buchsblättrigen Strauchveronika."></div>
                            <div class="gallery-item gruen" data-index="47" data-caption="Strauchveronika: 24.01.2022, Großerkmannsdorf, Deutschland"><img :src="img('assets/images/Fotografie/Bild44_24.01.2022.JPG')" alt="Einzelne Äste einer Strauchveronika mit vielen spiegelnden Regentropfen."></div>
                            <div class="gallery-item gebaeude" data-index="48" data-caption="I'Park Mall: 11.03.2023, Seoul, Südkorea"><img :src="img('assets/images/Fotografie/Bild37_11.03.2023.jpg')" alt="Blick auf Hochhäuser an einer Straße, die sich in der Mitte nach unten hin spiegeln."></div>
                            <div class="gallery-item blumen" data-index="49" data-caption="Rote Rose: 26.05.2023, Seoul, Südkorea"><img :src="img('assets/images/Fotografie/Bild46_26.05.2023.jpg')" alt="Rote Rose im Vordergrund und pinkfarbene Rosen in Hintergrund, umgegen von Grün."></div>
                            <div class="gallery-item blumen" data-index="50" data-caption="Bartnelke: 18.06.2023, Großerkmannsdorf, Deutschland"><img :src="img('assets/images/Fotografie/Bild48_18.06.2023.JPG')" alt="Einzelner Blütenkopf einer rosa Bartnelke auf der rechten Seite. Rest des Bildes grün."></div>                        
                            <div class="gallery-item fruechte" data-index="51" data-caption="Gemeiner Schneeball: 08.01.2022, Großerkmannsdorf, Deutschland"><img :src="img('assets/images/Fotografie/Bild53_08.01.2022.JPG')" alt="Einzelne Traube von Gemeinem Schneeballfrüchten mit etwas Schnee."></div>
                        </div>
                    </div>

                </div>
            </main>
        
        </div> -->
        <div class="gridcontainer">
            <aside class="sidebar-gallery">
            <div class="filter-list">
                <ul id="filter-options">
                <li 
                    @click="filterGallery('allebilder', $event.target)" 
                    :class="{ activegallery: activeFilter === 'allebilder' }"
                >
                    Alle Bilder
                </li>
                <li 
                    @click="filterGallery('blumen', $event.target)" 
                    :class="{ activegallery: activeFilter === 'blumen' }"
                >
                    Blumen
                </li>
                <li 
                    @click="filterGallery('fruechte', $event.target)" 
                    :class="{ activegallery: activeFilter === 'fruechte' }"
                >
                    Früchte
                </li>
                <li 
                    @click="filterGallery('tiere', $event.target)" 
                    :class="{ activegallery: activeFilter === 'tiere' }"
                >
                    Tiere
                </li>
                <li 
                    @click="filterGallery('gruen', $event.target)" 
                    :class="{ activegallery: activeFilter === 'gruen' }"
                >
                    Grün
                </li>
                <li 
                    @click="filterGallery('gebaeude', $event.target)" 
                    :class="{ activegallery: activeFilter === 'gebaeude' }"
                >
                    Gebäude
                </li>
                </ul>
            </div>
            </aside>

            <main class="main-gallery">
            <div class="container">
                <div class="heading">
                <h3>Galerie</h3>
                </div>
                
                <div class="box">
                <div class="image-column">
                    <div class="gallery-item blumen" data-index="1" data-caption="Schneegloeckchen: 03.04.2024, Großerkmannsdorf, Deutschland" @click="currentImage" ref="galleryItems"><img src="assets/images/Fotografie/Bild1_03.04.24.JPG" alt="Schneeglöckchen im Abendlicht."></div>
                    <div class="gallery-item blumen" data-index="2" data-caption="Osterglocke: 14.03.2024, Großerkmannsdorf, Deutschland" @click="currentImage" ref="galleryItems"><img src="assets/images/Fotografie/Bild2_14.03.24.JPG" alt="Eine wenig geöffnete gelbe Osterglocke mit Wassertropfen."></div>
                    <div class="gallery-item fruechte" data-index="3" data-caption="Sanddorn: 15.09.2023, Großerkmannsdorf, Deutschland" @click="currentImage" ref="galleryItems"><img src="assets/images/Fotografie/Bild3_15.09.23.JPG" alt="Ein Sanddornbusch mit vielen orangen Beeren vor blauem Himmel."></div>
                    <div class="gallery-item gruen" data-index="4" data-caption="Zierkirsche: 29.07.2023, Großerkmannsdorf, Deutschland" @click="currentImage" ref="galleryItems"><img src="assets/images/Fotografie/Bild4_29.07.23.JPG" alt="Ein Ast einer Zierkische mit grünen Blättern und Wassertropfen."></div>
                    <div class="gallery-item blumen" data-index="5" data-caption="Knopfbusch: 12.07.2023, Großerkmannsdorf, Deutschland" @click="currentImage" ref="galleryItems"><img src="assets/images/Fotografie/Bild5_12.07.23.JPG" alt="Blütenstand eines Knopfbusches mit einigen geöffneten Blüten."></div>                        
                    <div class="gallery-item gruen" data-index="6" data-caption="Grünes Blatt mit Regentropfen: 14.03.2024, Großerkmannsdorf, Deutschland" @click="currentImage" ref="galleryItems"><img src="assets/images/Fotografie/Bild38_14.03.2024.JPG" alt="Grüne, leicht gewundene Blätter mit Wassertropfen."></div>
                    <div class="gallery-item tiere blumen" data-index="7" data-caption="Rose mit Biene: 03.06.2023, Großerkmannsdorf, Deutschland" @click="currentImage" ref="galleryItems"><img src="assets/images/Fotografie/Bild22_03.06.2023.jpg" alt="Eine zart lila Rosenblüte mit heranfliegender Biene."></div>
                    <div class="gallery-item tiere blumen" data-index="8" data-caption="Buddleja mit Biene: 16.06.2022, Großerkmannsdorf, Deutschland" @click="currentImage" ref="galleryItems"><img src="assets/images/Fotografie/Bild18_16.06.2022.JPG" alt="In Blüte stehende Äste eines Buddlejas mit daraufsitzender Biene."></div>
                    <div class="gallery-item gebaeude" data-index="9" data-caption="Gang im Militärhistorischen Museum: 20.04.2023, Seoul, Südkorea" @click="currentImage" ref="galleryItems"><img src="assets/images/Fotografie/Bild32_20.04.2023.jpg" alt="Zentraler Blick in einen Gang mit Säulen an den Seiten."></div>
                    <div class="gallery-item tiere blumen" data-index="10" data-caption="Natterkopf mit Hummel: 08.07.2023, Großerkmannsdorf, Deutschland" @click="currentImage" ref="galleryItems"><img src="assets/images/Fotografie/Bild20_08.07.2023.JPG" alt="Natterkopfpflanze mit einer Hummel in der Blüte."></div>
                    <div class="gallery-item gruen" data-index="11" data-caption="Botanischer Garten: 11.04.2023, Seoul, Südkorea" @click="currentImage" ref="galleryItems"><img src="assets/images/Fotografie/Bild24_11.04.2023.jpg" alt="Blick von oben auf tropische Blattpflanzen. Im Vordergrund ein Holzweg."></div>
                    <div class="gallery-item fruechte" data-index="12" data-caption="Sanddorn: 08.01.2022, Großerkmannsdorf, Deutschland" @click="currentImage" ref="galleryItems"><img src="assets/images/Fotografie/Bild16_08.01.2022.JPG" alt="Nahaufnahme eines nassen Fruchtstandes eines Sanddorns."></div>
                    <div class="gallery-item blumen" data-index="13" data-caption="Japanische Blütenkirsche: 22.04.2022, Großerkmannsdorf, Deutschland" @click="currentImage" ref="galleryItems"><img src="assets/images/Fotografie/Bild50_22.04.2022.JPG" alt="Ast einer Japanischen Blütenkirsche von unten fotografiert."></div>
                    <div class="gallery-item gruen" data-index="14" data-caption="Narzisse: 24.01.2022, Großerkmannsdorf, Deutschland" @click="currentImage" ref="galleryItems"><img src="assets/images/Fotografie/Bild40_24.01.2022.JPG" alt="Narzissensprossen mit Regentropfen."></div>
                    <div class="gallery-item gebaeude" data-index="15" data-caption="Aussichtsturm: 13.04.2023, Incheon, Südkorea" @click="currentImage" ref="galleryItems"><img src="assets/images/Fotografie/Bild25_13.04.2023.jpg" alt="Weg in einem Park, umsäumt von weiß blühenden Kirschbäumen,der zu einem asiatisch gestalteten Aussichtsturm führt."></div>                        
                    <div class="gallery-item blumen" data-index="16" data-caption="Seerose: 03.06.2023, Seoul, Südkorea" @click="currentImage" ref="galleryItems"><img src="assets/images/Fotografie/Bild35_03.06.2023.jpg" alt="Eine rosa Seerose auf mit Seerosenblättern bedeckten Teich."></div>
                    <div class="gallery-item blumen" data-index="17" data-caption="Rose mit Regentropfen: 24.06.2022, Großerkmannsdorf, Deutschland" @click="currentImage" ref="galleryItems"><img src="assets/images/Fotografie/Bild51_24.06.2022.JPG" alt="Cremefarbene Rosenblüte mit Regentropfen."></div>

                    <!-- <div class="gallery-item blumen" data-index="2" data-caption="Osterglocke: 14.03.2024, Großerkmannsdorf, Deutschland" @click="currentImage" ref="galleryItems"><img src="assets/images/Fotografie/Bild2_14.03.24.JPG" alt="Eine wenig geöffnete gelbe Osterglocke mit Wassertropfen."></div>
                    <div class="gallery-item fruechte" data-index="3" data-caption="Sanddorn: 15.09.2023, Großerkmannsdorf, Deutschland" @click="currentImage" ref="galleryItems"><img src="assets/images/Fotografie/Bild3_15.09.23.JPG" alt="Ein Sanddornbusch mit vielen orangen Beeren vor blauem Himmel."></div>
                    <div class="gallery-item gruen" data-index="4" data-caption="Zierkirsche: 29.07.2023, Großerkmannsdorf, Deutschland" @click="currentImage" ref="galleryItems"><img src="assets/images/Fotografie/Bild4_29.07.23.JPG" alt="Ein Ast einer Zierkische mit grünen Blättern und Wassertropfen."></div>
                    <div class="gallery-item blumen" data-index="5" data-caption="Knopfbusch: 12.07.2023, Großerkmannsdorf, Deutschland" @click="currentImage" ref="galleryItems"><img src="assets/images/Fotografie/Bild5_12.07.23.JPG" alt="Blütenstand eines Knopfbusches mit einigen geöffneten Blüten."></div>
                    <div class="gallery-item gruen" data-index="6" data-caption="Grünes Blatt mit Regentropfen: 14.03.2024, Großerkmannsdorf, Deutschland" @click="currentImage" ref="galleryItems"><img src="assets/images/Fotografie/Bild38_14.03.2024.JPG" alt="Grüne, leicht gewundene Blätter mit Wassertropfen."></div>
                    <div class="gallery-item tiere blumen" data-index="7" data-caption="Rose mit Biene: 03.06.2023, Großerkmannsdorf, Deutschland" @click="currentImage" ref="galleryItems"><img src="assets/images/Fotografie/Bild22_03.06.2023.jpg" alt="Eine zart lila Rosenblüte mit heranfliegender Biene."></div>
                    <div class="gallery-item tiere blumen" data-index="8" data-caption="Buddleja mit Biene: 16.06.2022, Großerkmannsdorf, Deutschland" @click="currentImage" ref="galleryItems"><img src="assets/images/Fotografie/Bild18_16.06.2022.JPG" alt="In Blüte stehende Äste eines Buddlejas mit daraufsitzender Biene."></div> -->
                    <!-- ... alle anderen Bilder aus Spalte 1 -->
                </div>

                <div class="image-column">
                    <!-- Spalte 2 - alle Bilder mit @click="currentImage" und ref="galleryItems" -->
                     <div class="gallery-item blumen" data-index="18" data-caption="Knopfbusch: 11.07.2023, Großerkmannsdorf, Deutschland" @click="currentImage" ref="galleryItems"><img src="assets/images/Fotografie/Bild6_11.07.23.JPG" alt="Fast voll erblühter Knopfbuschblütenstand mit langen Blütenstempeln."></div> 
                    <div class="gallery-item fruechte gruen" data-index="19" data-caption="Wilder Wein: 08.07.2023, Großerkmannsdorf, Deutschland" @click="currentImage" ref="galleryItems"><img src="assets/images/Fotografie/Bild7_08.07.23.JPG" alt="Traube eines wilden Weines."></div>
                    <div class="gallery-item gebaeude" data-index="20" data-caption="National Assembly Communication Building: 20.05.2023, Seoul, Südkorea" @click="currentImage" ref="galleryItems"><img src="assets/images/Fotografie/Bild36_20.05.2023.jpg" alt="Modernes 4-stöckiges Gebäude, bei dem die Stockwerke immer weiter umgekehrt stufenförmig herausragen."></div>                       
                    <div class="gallery-item blumen tiere" data-index="21" data-caption="Kornblume mit Schwebfliege: 18.06.2023, Großerkmannsdorf, Deutschland" @click="currentImage" ref="galleryItems"><img src="assets/images/Fotografie/Bild14_18.06.23.JPG" alt="Kornblume mit anfliegender Schwebefliege."></div>
                    <div class="gallery-item gruen" data-index="22" data-caption="Wilder Wein: 29.07.2023, Großerkmannsdorf, Deutschland" @click="currentImage" ref="galleryItems"><img src="assets/images/Fotografie/Bild39_29.07.2023.JPG" alt="Wilder Wein mit Regentropfen."></div>
                    <div class="gallery-item blumen" data-index="23" data-caption="Riesenlauch: 21.06.2023, Großerkmannsdorf, Deutschland" @click="currentImage" ref="galleryItems"><img src="assets/images/Fotografie/Bild12_21.06.23.JPG" alt="Kugelförmiger, lila Blütenkopf des Riesenlauches in Nahaufnahme."></div>
                    <div class="gallery-item tiere" data-index="24" data-caption="Schaf: 11.02.2023, Seoul, Südkorea" @click="currentImage" ref="galleryItems"><img src="assets/images/Fotografie/Bild21_11.02.2023.jpg" alt="In die Kamera schauendes Schaf im Stall."></div>
                    <div class="gallery-item blumen" data-index="25" data-caption="Brautspiere: 22.04.2022, Großerkmannsdorf, Deutschland" @click="currentImage" ref="galleryItems"><img src="assets/images/Fotografie/Bild28_22.04.2022.JPG" alt="Nach vorn ragender Ast einer Brautspiere."></div>
                    <div class="gallery-item blumen" data-index="26" data-caption="Buddleja: 16.06.2022, Großerkmannsdorf, Deutschland" @click="currentImage" ref="galleryItems"><img src="assets/images/Fotografie/Bild31_16.06.2022.JPG" alt="Einzelnder Ast eines in Blüte stehenden Buddlejas."></div>
                    <div class="gallery-item blumen" data-index="27" data-caption="Primel: 19.12.2021, Großerkmannsdorf, Deutschland" @click="currentImage" ref="galleryItems"><img src="assets/images/Fotografie/Bild34_19.12.2021.JPG" alt="Leicht verwelkte lila Primelblüten mit Regentropfen."></div>
                    <div class="gallery-item gruen" data-index="28" data-caption="Glanzmispel: 08.01.2023, Großerkmannsdorf, Deutschland" @click="currentImage" ref="galleryItems"><img src="assets/images/Fotografie/Bild23_08.01.2023.JPG" alt="Astspitze einer Glanzmispel mit Schnee bedeckt."></div>
                    <div class="gallery-item fruechte" data-index="29" data-caption="Blaubeere: 08.07.2023, Großerkmannsdorf, Deutschland" @click="currentImage" ref="galleryItems"><img src="assets/images/Fotografie/Bild8_08.07.23.JPG" alt="Fruchtstand einer Blaubeerenpflanze mit einer einzelnen blauen Beere."></div>
                    <div class="gallery-item gruen" data-index="30" data-caption="Agave: 03.06.2023, Seoul, Südkorea" @click="currentImage" ref="galleryItems"><img src="assets/images/Fotografie/Bild43_03.06.2023.jpg" alt="Eine Agave mit Stacheln von oben fotografiert."></div>
                    <div class="gallery-item blumen" data-index="31" data-caption="Fackelingwer: 11.04.2023, Seoul, Südkorea" @click="currentImage" ref="galleryItems"><img src="assets/images/Fotografie/Bild49_11.04.2023.jpg" alt="Drei rote Fackelingwerblüten."></div>
                    <div class="gallery-item blumen" data-index="32" data-caption="Schwarzer Lauch: 18.06.2023, Großerkmannsdorf, Deutschland" @click="currentImage" ref="galleryItems"><img src="assets/images/Fotografie/Bild47_18.06.2023.JPG" alt="Runder weißer Blütenkopf eines Schwarzen Lauches in Nahaufnahme."></div>
                    <div class="gallery-item gruen" data-index="33" data-caption="Strauchveronika: 19.12.2021,Großerkmannsdorf, Deutschland" @click="currentImage" ref="galleryItems"><img src="assets/images/Fotografie/Bild26_19.12.2021.JPG" alt="Einzelner Ast mit Regentropfen einer Strauchveronika im Fokus des Bildes."></div>
                </div>

                <div class="image-column">
                    <!-- Spalte 3 - alle Bilder mit @click="currentImage" und ref="galleryItems" -->
                    <div class="gallery-item blumen" data-index="34" data-caption="Lavendel: 24.06.2023; Großerkmannsdorf, Deutschland" @click="currentImage" ref="galleryItems"><img src="assets/images/Fotografie/Bild11_24.06.23.JPG" alt="Aus rechter unterer Ecke ragende Blütenstände eines Lavendels."></div>
                    <div class="gallery-item blumen" data-index="35" data-caption="Margeriten: 08.07.2023; Großerkmannsdorf, Deutschland" @click="currentImage" ref="galleryItems"><img src="assets/images/Fotografie/Bild9_08.07.23.JPG" alt="Wenige Blüten von weißen Margeriten."></div>
                    <div class="gallery-item gruen" data-index="36" data-caption="Stein mit Moos: 18.06.2023; Großerkmannsdorf, Deutschland" @click="currentImage" ref="galleryItems"><img src="assets/images/Fotografie/Bild13_18.06.23.JPG" alt="Stein mit moosbedeckter Abbruchkante."></div>
                    <div class="gallery-item gruen" data-index="37" data-caption="Bananenblatt: 10.05.2023; Seoul, Südkorea" @click="currentImage" ref="galleryItems"><img src="assets/images/Fotografie/Bild10_05.07.23.jpg" alt="Nahaufnahme eines Bananenblattes."></div>
                    <div class="gallery-item blumen tiere" data-index="38" data-caption="Natterkopf mit Hummel: 08.07.2023; Großerkmannsdorf, Deutschland" @click="currentImage" ref="galleryItems"><img src="assets/images/Fotografie/Bild15_08.07.23.JPG" alt="Natterkopfblüten mit Hummel in einer Blüte."></div>
                    <div class="gallery-item fruechte" data-index="39" data-caption="Brombeeren mit Käfer: 16.09.2022, Großerkmannsdorf, Deutschland" @click="currentImage" ref="galleryItems"><img src="assets/images/Fotografie/Bild17_16.09.2022.JPG" alt="Einzelne schwarze Brombeere umgeben von roten Beeren. Darauf ein brauner Käfer."></div>
                    <div class="gallery-item gruen" data-index="40" data-caption="Rosenblatt mit Regentropfen: 16.09.2022, Großerkmannsdorf, Deutschland" @click="currentImage" ref="galleryItems"><img src="assets/images/Fotografie/Bild33_16.09.2022.JPG" alt="Rosenblatt mit Regentropfen darauf."></div>
                    <div class="gallery-item tiere blumen" data-index="41" data-caption="Buddleja mit Schmetterling: 17.06.2022, Großerkmannsdorf, Deutschland" @click="currentImage" ref="galleryItems"><img src="assets/images/Fotografie/Bild19_17.06.2022.JPG" alt="Kleiner Fuchs (Schmetterling) auf in Blüte stehendem Buddleja-Ast."></div>
                    <div class="gallery-item blumen" data-index="42" data-caption="Hasenglöckchen 1: 06.05.2022, Großerkmannsdorf, Deutschland" @click="currentImage" ref="galleryItems"><img src="assets/images/Fotografie/Bild29_06.05.2022.JPG" alt="Blütenstaude von blauvioletten Hasenglöckchen."></div>
                    <div class="gallery-item blumen" data-index="43" data-caption="Hasenglöckchen 2: 06.05.2022, Großerkmannsdorf, Deutschland" @click="currentImage" ref="galleryItems"><img src="assets/images/Fotografie/Bild30_06.05.2022.JPG" alt="Blütenstand eines Hasenglöckchens mit Knospen und zwei geöffneten Blüten."></div>
                    <div class="gallery-item gruen" data-index="44" data-caption="Kolorado-Tanne: 08.01.2022, Großerkmannsdorf, Deutschland" @click="currentImage" ref="galleryItems"><img src="assets/images/Fotografie/Bild27_08.01.2022.JPG" alt="Schneebedeckte Spitze eines Astes der Kolorado-Tanne."></div>
                    <div class="gallery-item blumen" data-index="45" data-caption="Rose mit Regentropfen: 24.06.2022, Großerkmannsdorf, Deutschland" @click="currentImage" ref="galleryItems"><img src="assets/images/Fotografie/Bild52_24.06.2022.JPG" alt="Cremefarbene Rosenblüte mit Wassertropfen von der Seite."></div>
                    <div class="gallery-item gruen" data-index="46" data-caption="Buchsblättrige Strauchveronika: 19.12.2021, Großerkmannsdorf, Deutschland" @click="currentImage" ref="galleryItems"><img src="assets/images/Fotografie/Bild41_19.12.2021.JPG" alt="Einzelnde Äste einer nassen Buchsblättrigen Strauchveronika."></div>
                    <div class="gallery-item gruen" data-index="47" data-caption="Strauchveronika: 24.01.2022, Großerkmannsdorf, Deutschland" @click="currentImage" ref="galleryItems"><img src="assets/images/Fotografie/Bild44_24.01.2022.JPG" alt="Einzelne Äste einer Strauchveronika mit vielen spiegelnden Regentropfen."></div>
                    <div class="gallery-item gebaeude" data-index="48" data-caption="I'Park Mall: 11.03.2023, Seoul, Südkorea" @click="currentImage" ref="galleryItems"><img src="assets/images/Fotografie/Bild37_11.03.2023.jpg" alt="Blick auf Hochhäuser an einer Straße, die sich in der Mitte nach unten hin spiegeln."></div>
                    <div class="gallery-item blumen" data-index="49" data-caption="Rote Rose: 26.05.2023, Seoul, Südkorea" @click="currentImage" ref="galleryItems"><img src="assets/images/Fotografie/Bild46_26.05.2023.jpg" alt="Rote Rose im Vordergrund und pinkfarbene Rosen in Hintergrund, umgegen von Grün."></div>
                    <div class="gallery-item blumen" data-index="50" data-caption="Bartnelke: 18.06.2023, Großerkmannsdorf, Deutschland" @click="currentImage" ref="galleryItems"><img src="assets/images/Fotografie/Bild48_18.06.2023.JPG" alt="Einzelner Blütenkopf einer rosa Bartnelke auf der rechten Seite. Rest des Bildes grün."></div>                        
                    <div class="gallery-item fruechte" data-index="51" data-caption="Gemeiner Schneeball: 08.01.2022, Großerkmannsdorf, Deutschland" @click="currentImage" ref="galleryItems"><img src="assets/images/Fotografie/Bild53_08.01.2022.JPG" alt="Einzelne Traube von Gemeinem Schneeballfrüchten mit etwas Schnee."></div>
                </div>
                </div>
            </div>
            </main>

            <!-- Lightbox -->
            <div v-if="showLightbox" class="lightbox" @click="closeLightboxOnBackground">
            <div class="lightbox-content">
                <img :src="currentLightboxImage" alt="">
                <div class="lightbox-caption">{{ currentLightboxCaption }}</div>
                <div class="fa fa-angle-left lightbox-prev" @click="previousImage"></div>
                <div class="fa fa-angle-right lightbox-next" @click="nextImage"></div>
                <div class="fa fa-xmark lightbox-close" @click="closeLightbox"></div>
            </div>
            </div>
        </div>
    </div>
</template>

<script setup>

// Explicit relative import so Vite can resolve the file in all setups
import useScrollTop from '../../composables/useScrollTop'

// Use shared composable for top-button behaviour and expose topFunction to the template
const { topFunction } = useScrollTop({ buttonSelector: '#topBtn', footerSelector: '#footer', showAfter: 100 })
// import { onMounted, onBeforeUnmount, ref, watch } from 'vue'
// import { useHead, useRoute } from '#imports'

useHead({ title: 'ALLES KLARA. - Gallery' })

// // Access route query to receive filter from header links
// const route = useRoute()

// // Resolve images via import.meta.glob so Vite serves them correctly.
// // Use a relative glob from this file (app/pages -> ../assets/images).
// // Note: `as: 'url'` is deprecated; use `query: '?url'` and `import: 'default'.`
// const images = import.meta.glob('../assets/images/**', { query: '?url', import: 'default' })

// // We'll pre-resolve the URLs so the template can synchronously read them.
// const resolvedImages = ref({})

// onMounted(async () => {
//     // Log the raw keys so we can debug resolution problems
//     const keys = Object.keys(images)
//     console.debug('[gallery] import.meta.glob keys:', keys)

//     // Resolve all image loaders to URLs and populate resolvedImages.
//     // Use Promise.allSettled so one failing loader doesn't stop others.
//     await Promise.allSettled(
//         Object.entries(images).map(async ([key, loader]) => {
//             try {
//                 const url = await loader()
//                 resolvedImages.value[key] = url
//             } catch (err) {
//                 console.warn('[gallery] image loader failed for', key, err)
//             }
//         })
//     )

//     // After resolution, log a small summary to help debugging
//     console.debug('[gallery] resolved images count:', Object.keys(resolvedImages.value).length)
// })

// function img(path) {
//     // Try several possible key variants to match what import.meta.glob may have produced.
//     const rel = path.replace(/^\/?/, '')
//     const candidates = [
//         '/' + rel,            // '/assets/...'
//         rel,                  // 'assets/...'
//         './' + rel,           // './assets/...'
//         '../' + rel,          // '../assets/...'
//         '/app/' + rel,        // '/app/assets/...'
//         'app/' + rel          // 'app/assets/...'
//     ]

//     for (const c of candidates) {
//         if (resolvedImages.value[c]) return resolvedImages.value[c]
//     }

//     // Try endsWith as a last resort
//     const foundKey = Object.keys(resolvedImages.value).find(k => k.endsWith(rel))
//     if (foundKey) return resolvedImages.value[foundKey]

//     // Not resolved yet — return the original path so the browser requests it (useful for debugging).
//     // Avoid spamming warnings on first render.
//     return path
// }

// // Make DOM-based filter and helpers available to the template.
// // These functions are safe to call on server-side (they'll no-op there).
// let visibleItems = []

// function updateVisibleItems() {
//     if (typeof window === 'undefined') return
//     visibleItems = Array.from(document.getElementsByClassName('gallery-item')).filter(item => item.style.display !== 'none')
// }

// function filterGallery(category, eventOrElement) {
//     if (typeof window === 'undefined') return

//     const items = document.getElementsByClassName('gallery-item')
//     const filterOptionsContainer = document.getElementById('filter-options')
//     const filterOptions = filterOptionsContainer ? filterOptionsContainer.getElementsByTagName('li') : []

//     for (let i = 0; i < filterOptions.length; i++) {
//         filterOptions[i].classList.remove('activegallery')
//     }

//     // Normalize element: caller may pass the Event, the target, or the LI element.
//     let element = eventOrElement
//     if (element && element.target) element = element.target
//     if (element && element.tagName !== 'LI' && element.closest) element = element.closest('li')
//     if (element) element.classList.add('activegallery')

//     if (category === 'allebilder') {
//         for (let i = 0; i < items.length; i++) {
//             items[i].style.display = 'block'
//         }
//     } else {
//         for (let i = 0; i < items.length; i++) {
//             if (items[i].classList.contains(category)) {
//                 items[i].style.display = 'block'
//             } else {
//                 items[i].style.display = 'none'
//             }
//         }
//     }

//     updateVisibleItems()

//     // updateNavBar is optional/legacy; only call if provided globally
//     if (typeof updateNavBar === 'function') updateNavBar(category)
//     // If caller didn't provide a sidebar element (e.g. header navigation used),
//     // ensure the sidebar visually highlights the selected filter.
//     if (!eventOrElement) {
//         highlightFilter(category)
//     }
// }

// function highlightFilter(filter) {
//     if (typeof window === 'undefined') return
//     const filterOptions = document.querySelectorAll('#filter-options li')
//     filterOptions.forEach(option => {
//         option.classList.remove('activegallery')
//         let filtername = option.textContent.toLowerCase()
//         filtername = filtername.replace(/ä/g, 'ae').replace(/ü/g, 'ue').replace(/ö/g, 'oe')
//         filtername = filtername.replace(/\s+/g, '')
//         if (filtername === filter) {
//             option.classList.add('activegallery')
//         }
//     })
// }

// // Note: legacy DOM-based filterGallery implementation is defined later in this file
// // (kept to preserve the original behaviour including Umlaut handling). Remove
// // this modernized duplicate to avoid redeclaration errors.

// function toggleMenu() {
//     const burgerMenu = document.querySelector('.burger-menu')
//     const sidebar = document.querySelector('.sidebar-gallery')
//     burgerMenu.classList.toggle('change')
//     sidebar.classList.toggle('active')
// }

// let mybutton = null
// let footer = null

// function scrollFunction() {
//     if (!mybutton || !footer) return
//     const footerRect = footer.getBoundingClientRect()
//     const windowHeight = window.innerHeight
//     if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
//         mybutton.style.display = 'block'
//     } else {
//         mybutton.style.display = 'none'
//     }
//     if (footerRect.top <= windowHeight) {
//         mybutton.style.position = 'absolute'
//         mybutton.style.bottom = '220px'
//     } else {
//         mybutton.style.position = 'fixed'
//         mybutton.style.bottom = '20px'
//     }
// }

// function topFunction() {
//     window.scrollTo({ top: 0, behavior: 'smooth' })
// }

// onMounted(() => {
//     mybutton = document.getElementById('topBtn')
//     footer = document.getElementById('footer')
//     window.addEventListener('scroll', scrollFunction)
//     // If the page was opened with a filter in the query (e.g. /gallery?filter=blumen)
//     const q = route?.query?.filter ? (Array.isArray(route.query.filter) ? route.query.filter[0] : route.query.filter) : null
//     if (q) {
//         // Call the same function the sidebar uses so DOM + classes are updated
//         filterGallery(q)
//     }
// })

// // React to query changes (e.g. user uses header links while staying in the app)
// watch(() => route.query.filter, (newVal) => {
//     const q = newVal ? (Array.isArray(newVal) ? newVal[0] : newVal) : null
//     if (q) filterGallery(q)
// })

// onBeforeUnmount(() => {
//     window.removeEventListener('scroll', scrollFunction)
// })

// // Run the legacy DOM-only gallery/lightbox code only in the browser (avoid SSR errors)
// if (typeof window !== 'undefined') {



// document.addEventListener("DOMContentLoaded", function() {
//     // Ensure visibleItems is populated and attach click handlers for the lightbox.
//     updateVisibleItems();
//     const galleryItems = document.getElementsByClassName("gallery-item");
//     for (let i = 0; i < galleryItems.length; i++) {
//         galleryItems[i].addEventListener("click", currentImage);
//     }

//     const urlParams = new URLSearchParams(window.location.search);
//     const filter = urlParams.get('filter');
//     if (filter) {
//         // Apply filter and visually highlight the selected option
//         filterGallery(filter, null);
//         highlightFilter(filter);
//     }
// });
// const lightBoxContainer = document.createElement("div");
// const lightBoxContent = document.createElement("div");
// const lightBoxImg = document.createElement("img");
// const lightBoxCaption = document.createElement("div");
// const lightBoxPrev = document.createElement("div");
// const lightBoxNext = document.createElement("div");
// const lightBoxClose = document.createElement("div");

// lightBoxContainer.classList.add('lightbox');
// lightBoxContent.classList.add('lightbox-content');
// lightBoxPrev.classList.add("fa","fa-angle-left","lightbox-prev");
// lightBoxNext.classList.add("fa","fa-angle-right","lightbox-next");
// lightBoxClose.classList.add("fa","fa-xmark","lightbox-close");
// lightBoxCaption.classList.add("lightbox-caption");

// lightBoxContainer.appendChild(lightBoxContent);
// lightBoxContent.appendChild(lightBoxImg);
// lightBoxContent.appendChild(lightBoxCaption);
// lightBoxContent.appendChild(lightBoxPrev);
// lightBoxContent.appendChild(lightBoxNext);
// lightBoxContent.appendChild(lightBoxClose);
// document.body.appendChild(lightBoxContainer);
// let index = 1;

// function showLightBox(n) {
//     if (n > visibleItems.length) {
//         index = 1;
//     } else if(n < 1){
//         index = visibleItems.length;
//     }

//     let imageLocation = visibleItems[index-1].children[0].getAttribute("src");
//     let captionText = visibleItems[index-1].getAttribute("data-caption");
//     lightBoxImg.setAttribute("src", imageLocation);
//     lightBoxCaption.textContent = captionText;

//     lightBoxContainer.style.display = "block";
//     document.body.style.overflow = "hidden";

//     // Deactivate touch scrolling
//     document.body.addEventListener('touchmove', preventScroll, { passive: false });
//     document.body.addEventListener('wheel', preventScroll, { passive: false });
// }

// function hideLightBox() {
//     lightBoxContainer.style.display = "none";
//     document.body.style.overflow = "auto"; // Enable scrolling

//     // Reactivate touch scrolling
//     document.body.removeEventListener('touchmove', preventScroll, { passive: false });
//     document.body.removeEventListener('wheel', preventScroll, { passive: false });
// }

// function preventScroll(event) {
//     event.preventDefault();
// }

// function currentImage(){
//     // lightBoxContainer.style.display="block";

//     let imageIndex = visibleItems.indexOf(this) + 1;
//     showLightBox(index = imageIndex);
// }

// // updateVisibleItems is defined in the module scope above so it's available to template.

// function sliderImage(n){
//     showLightBox(index += n);
// }

// function prevImage(){
//     sliderImage(-1);
// }

// function nextImage(){
//     sliderImage(1);
// }

// lightBoxPrev.addEventListener("click", prevImage);
// lightBoxNext.addEventListener("click", nextImage);

// function closeLightBox(){
//     if(this === event.target){
//         lightBoxContainer.style.display = "none";
//     }
// }

// lightBoxContainer.addEventListener("click", closeLightBox);


// lightBoxContainer.addEventListener("click", function(event) {
//     if (event.target === lightBoxContainer || event.target === lightBoxClose) {
//         hideLightBox();
//     }
// });

// }









import { ref, computed, onMounted, nextTick, onUnmounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

// Reactive data
const activeFilter = ref('allebilder')
const showLightbox = ref(false)
const currentLightboxIndex = ref(0)
const galleryItems = ref([])
const visibleItems = ref([])

// Refs für DOM-Elemente
const galleryItemRefs = ref([])

// Funktion zum Normalisieren von Filternamen (Umlaute behandeln)
const normalizeFilterName = (name) => {
  return name
    .toLowerCase()
    .replace(/ä/g, 'ae')
    .replace(/ö/g, 'oe')
    .replace(/ü/g, 'ue')
    .replace(/\s+/g, '')
}

// Bilder aus DOM lesen
const updateGalleryItems = () => {
  const items = document.getElementsByClassName('gallery-item')
  galleryItems.value = Array.from(items)
}

// Sichtbare Items aktualisieren basierend auf Filter
const updateVisibleItems = () => {
  // Ensure we have the latest DOM references before computing visible items
  updateGalleryItems()

  if (activeFilter.value === 'allebilder') {
    visibleItems.value = Array.from(galleryItems.value)
  } else {
    visibleItems.value = Array.from(galleryItems.value).filter(item => 
      item.classList.contains(activeFilter.value)
    )
  }
}

// Lightbox computed properties
const currentLightboxImage = computed(() => {
  if (visibleItems.value[currentLightboxIndex.value]) {
    return visibleItems.value[currentLightboxIndex.value].children[0].getAttribute('src')
  }
  return ''
})

const currentLightboxCaption = computed(() => {
  if (visibleItems.value[currentLightboxIndex.value]) {
    return visibleItems.value[currentLightboxIndex.value].getAttribute('data-caption')
  }
  return ''
})

// Filter-Funktionen
const filterGallery = (category, element) => {
  activeFilter.value = category
  
  // Alle Items verstecken/zeigen
  const items = document.getElementsByClassName('gallery-item')
  
  if (category === 'allebilder') {
    for (let i = 0; i < items.length; i++) {
      items[i].style.display = 'block'
    }
  } else {
    for (let i = 0; i < items.length; i++) {
      if (items[i].classList.contains(category)) {
        items[i].style.display = 'block'
      } else {
        items[i].style.display = 'none'
      }
    }
  }
  
  updateVisibleItems()
  
  // Update URL parameter
  router.push({ 
    query: { 
      ...route.query, 
      filter: category === 'allebilder' ? undefined : category 
    } 
  })
}

const highlightFilter = (filter) => {
  const normalizedFilter = normalizeFilterName(filter)
  
  // Filter-Mapping für verschiedene Schreibweisen
  const filterMap = {
    'allebilder': 'allebilder',
    'blumen': 'blumen',
    'fruechte': 'fruechte',
    'fruekte': 'fruechte',
    'tiere': 'tiere',
    'gruen': 'gruen',
    'grün': 'gruen',
    'gebaeude': 'gebaeude',
    'gebäude': 'gebaeude'
  }
  
  const mappedFilter = filterMap[normalizedFilter] || filterMap[filter] || 'allebilder'
  
  // Direkt filterGallery aufrufen
  nextTick(() => {
    filterGallery(mappedFilter, null)
  })
}

// Lightbox-Funktionen
const currentImage = function(event) {
  // Refresh visible items (in case filter changed)
  updateVisibleItems()

  // Determine the clicked gallery-item element robustly
  let clickedElement = event.currentTarget || event.target
  if (clickedElement && clickedElement.classList && !clickedElement.classList.contains('gallery-item')) {
    clickedElement = clickedElement.closest('.gallery-item')
  }

  console.debug('[gallery] currentImage called - clicked element:', clickedElement)

  // Prefer using the data-index attribute to locate the item among visibleItems.
  let imageIndex = -1
  const idxAttr = clickedElement ? clickedElement.getAttribute && clickedElement.getAttribute('data-index') : null
  if (idxAttr) {
    imageIndex = visibleItems.value.findIndex(item => item.getAttribute && item.getAttribute('data-index') === idxAttr)
  }

  // Fallback to direct reference compare if data-index wasn't present/matched
  if (imageIndex === -1 && clickedElement) {
    imageIndex = visibleItems.value.indexOf(clickedElement)
  }

  console.debug('[gallery] resolved imageIndex=', imageIndex, 'visibleItems length=', visibleItems.value.length)

  if (imageIndex !== -1) {
    currentLightboxIndex.value = imageIndex
    showLightBox(imageIndex + 1)
  }
}

const showLightBox = (n) => {
  if (n > visibleItems.value.length) {
    currentLightboxIndex.value = 0
  } else if (n < 1) {
    currentLightboxIndex.value = visibleItems.value.length - 1
  } else {
    currentLightboxIndex.value = n - 1
  }
  console.debug('[gallery] showLightBox called n=', n, 'resolved index=', currentLightboxIndex.value, 'visibleItems=', visibleItems.value.length)
  showLightbox.value = true
  document.body.style.overflow = "hidden"
  
  // Deactivate touch scrolling
  document.body.addEventListener('touchmove', preventScroll, { passive: false })
  document.body.addEventListener('wheel', preventScroll, { passive: false })
}

const hideLightBox = () => {
  showLightbox.value = false
  document.body.style.overflow = "auto"
  
  // Reactivate touch scrolling
  document.body.removeEventListener('touchmove', preventScroll, { passive: false })
  document.body.removeEventListener('wheel', preventScroll, { passive: false })
}

const preventScroll = (event) => {
  event.preventDefault()
}

const closeLightbox = () => {
  hideLightBox()
}

const closeLightboxOnBackground = (event) => {
  if (event.target.classList.contains('lightbox') || 
      event.target.classList.contains('lightbox-close')) {
    hideLightBox()
  }
}

const sliderImage = (n) => {
  showLightBox(currentLightboxIndex.value + 1 + n)
}

const previousImage = () => {
  sliderImage(-1)
}

const nextImage = () => {
  sliderImage(1)
}

// Funktion für Navigation von Header
const applyFilterFromNavigation = (filter) => {
  highlightFilter(filter)
}

// Lifecycle hooks
onMounted(() => {
  // DOM-Elemente lesen
  updateGalleryItems()
  updateVisibleItems()
  
  // Handle URL parameters beim Laden der Seite
  const filter = route.query.filter
  if (filter) {
    highlightFilter(filter)
  }

  // Keyboard navigation für Lightbox
  const handleKeydown = (event) => {
    if (showLightbox.value) {
      if (event.key === 'ArrowLeft') {
        previousImage()
      } else if (event.key === 'ArrowRight') {
        nextImage()
      } else if (event.key === 'Escape') {
        closeLightbox()
      }
    }
  }
  
  document.addEventListener('keydown', handleKeydown)
  
  // Cleanup beim Unmount
  onUnmounted(() => {
    document.removeEventListener('keydown', handleKeydown)
    document.body.style.overflow = 'auto'
  })
})

// Watch für URL-Änderungen (z.B. von Navigation)
watch(() => route.query.filter, (newFilter) => {
  if (newFilter) {
    highlightFilter(newFilter)
  } else {
    filterGallery('allebilder', null)
  }
})

// Expose Funktion für Header-Navigation
defineExpose({
  applyFilterFromNavigation
})
</script>

<style scoped> 
    #body-gallery {
        background-image: url("data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='100' height='100' patternTransform='scale(1) rotate(0)'><rect x='0' y='0' width='100%' height='100%' fill='hsla(0, 0%, 100%, 0)'/><path d='M0 0v1l1-1H0zm6.29 0-.147.143 11.81 11.619 8.19-8.143L22.666.047 22.709 0h-1.998l-.045.047 3.477 3.572-6.19 6.143L8.238.192 8.434 0H6.289zm6.759 0 1.047 1.047L15.143 0h-2.094zm14.474 0 7.143 7.143-2.428 2.523-3.43-3.523-4.855 4.572 8.238 8.142L43.857 7.143 36.686 0h-2.008l7.226 7.191-9.666 9.713L26 10.762l2.762-2.57 3.476 3.617 4.477-4.618L29.572.047 29.62 0h-2.096zm14.288 0 4.808 4.809 4.572-4.57L50.953 0h-2.047l.285.285-2.572 2.572L43.762 0H41.81zm14.068 0-17.64 17.904 4.57 4.62L65 .333 64.697 0H62.79l.258.285-20.19 20.192-2.572-2.573L57.857 0H55.88zm14.549 0-3.62 3.62 8.145 8.142L86.666.047 86.619 0h-1.951l.047.047L75 9.762l-6.143-6.143 2.57-2.572L75 4.619 79.62 0h-2.048l-2.619 2.62L72.334 0h-1.906zm21.43 0-3.62 3.62 4.57 4.571L100 .998V0h-.953l-6.19 6.191-2.572-2.572L93.905 0h-2.048zm-88 2.191L0 6.091v2.04l3.762-3.846 2.666 3.049-6.381 6.19-.047-.05v2.098l8.38-8.095L3.858 2.19zM100 6.091l-4.572 4.624L100 15.572v-2.097l-2.572-2.713L100 8.13V6.09zm-35.762.1-4.572 4.57 4.572 4.573 4.57-4.572-4.57-4.57zm21.428 0L74.953 16.904l-3.572-3.57-4.572 4.57 8.144 8.143 15.285-15.285-4.572-4.57zm-21.428 2 2.57 2.57-2.57 2.573-2.572-2.572 2.572-2.57zm21.477 0 2.57 2.57L75 24.048l-6.143-6.143 2.57-2.57L75 18.904 85.715 8.191zM10.666 10 0 20.668v2L10.666 12l2.572 2.572L0 27.811v2l15.238-15.239L10.666 10zm46.43 3.334L42.809 27.619l-7.381-7.38-8.143 8.142 4.572 4.572 3.57-3.572 2.811 2.81-6.142 6.143L21.38 27.619l-4.572 4.572 15.287 15.286 25-25L67.809 33.19l4.572-4.572-15.285-15.285zm35.713.238-4.57 4.57 11.714 11.715.047-.046v-1.954l-9.715-9.714 2.572-2.57L100 22.714v-2.047l-.047.047-7.144-7.143zm-71.143.094-12 11.38 4.572 4.669 7.334-7.238 3.381 3.57 4.62-4.62-7.907-7.761zm35.43 1.62L70.38 28.571l-2.572 2.57-10.713-10.714-25 25-13.287-13.285 2.572-2.57 10.715 10.712 8.142-8.142-4.81-4.809-3.57 3.57-2.573-2.57 6.143-6.143 7.38 7.381 14.288-14.287zm-35.477.429 5.904 5.762L25 24l-3.38-3.523-7.335 7.285-2.57-2.62 9.904-9.427zm64.047 4.762-4.57 4.57L96.38 40.334l3.619-3.62V34.81L85.666 20.477zm.049 2L99 35.762l-2.572 2.572-13.285-13.287 2.572-2.57zm-6.953 4.904L67.809 38.334l-3.57-3.572-4.573 4.572 8.143 8.143 15.525-15.524-4.572-4.572zm-71.666.238-4.573 4.572L17.81 47.477l4.572-4.573L7.096 27.62zm50 0L45.38 39.334l4.572 4.57 11.713-11.713-4.57-4.572zm21.713 1.762 2.572 2.572-13.524 13.524-6.142-6.143 2.57-2.572 3.572 3.572L78.81 29.381zm-71.713.238L20.38 42.904l-2.572 2.573L4.523 32.19l2.573-2.572zm50 0 2.57 2.572-9.713 9.713-2.572-2.57 9.715-9.715zm28.57 5.143-4.57 4.572 11.713 11.713 4.572-4.57-11.715-11.715zM0 34.809v1.906l.953-.953L0 34.809zm85.715 1.953 9.713 9.715-2.57 2.57-9.715-9.713 2.572-2.572zm-82.192 1.81L0 41.877v2.08l2.523 2.424L0 48.973v2.12l7.096 7.098 8.142-8.144L3.523 38.572zm0 1.951L13.238 50l-6.142 6.143L.953 50l3.57-3.715L1 42.857l2.523-2.334zM100 41.877l-1.096 1.027L100 43.957v-2.08zm-57.191.027-4.57 4.573 4.57 4.57 4.572-4.57-4.572-4.573zm14.287 0L45.38 53.62l4.572 4.572 7.143-7.144 10.713 10.715 4.572-4.57-15.285-15.288zm21.476 0-8.144 8.143L75 54.619l3.572-3.572 7.143 7.144 4.57-4.572-11.713-11.715zm-35.763 2 2.572 2.573-2.572 2.57-2.57-2.57 2.57-2.573zm14.287 0L70.38 57.191l-2.572 2.57-10.713-10.714-7.143 7.144-2.572-2.572 9.715-9.715zm21.476 0 9.713 9.715-2.57 2.572-7.143-7.144L75 52.619l-2.572-2.572 6.144-6.143zm-53.619 1.573L9.666 60.762l4.572 4.572 15.285-15.287-4.57-4.57zm0 2 2.57 2.57-13.285 13.287-2.572-2.572 13.287-13.285zM100 48.973l-1.047 1.074L100 51.094v-2.121zm-64.334.074-4.57 4.572 18.857 18.858 11.713-11.715-4.57-4.57-7.143 7.142-14.287-14.287zm0 2 14.287 14.287 7.143-7.143 2.57 2.57-9.713 9.716-16.857-16.858 2.57-2.572zm60.953 1.81-4.572 4.57L100 65.382v-2.049l-5.904-5.904 2.57-2.57L100 58.19v-1.953l-3.38-3.38zm-68.096 3.334L9.666 75.047l4.572 4.572 7.143-7.142 7.142 7.142 4.573-4.572-7.143-7.143 2.57-2.57 7.143 7.143 4.572-4.573-11.715-11.713zm50 0-8.142 8.143 8.142 8.143 4.573-4.573-3.573-3.57 3.573-3.572-4.573-4.57zM0 56.238v2l9.666 9.666-2.57 2.573L0 63.38v2l7.096 7.096 4.57-4.573L0 56.238zm28.523 1.905 9.715 9.714-2.572 2.57-7.143-7.142-4.57 4.572L31.096 75l-2.573 2.572-7.142-7.144-7.143 7.144L11.666 75l16.857-16.857zm50 .048 2.573 2.57-3.573 3.573 3.573 3.57-2.573 2.573-6.142-6.143 6.142-6.143zm10.715 1.57-4.572 4.573 3.572 3.57-6.904 6.905 4.57 4.572 11.477-11.477-8.143-8.142zm.047 2 6.143 6.143-9.475 9.477-2.572-2.572 6.904-6.905-3.57-3.57 2.57-2.572zm-25.047 1.573-8.142 8.143 4.57 4.57 8.143-8.143-4.57-4.57zm0 2 2.57 2.57-6.142 6.143-2.57-2.57 6.142-6.143zm-21.43 5.143L28.524 84.762l-7.142-7.143-4.572 4.57 11.714 11.715 18.858-18.857-4.572-4.57zm28.573 0-4.572 4.57 11.714 11.715 4.573-4.573L71.38 70.477zm28.572 0L88.238 82.189l4.57 4.43 7.145-7 .047.047v-2.094l-7.143 7.047-2.572-2.476L100 72.428v-1.905l-.047-.046zM0 70.523v1.952l16.809 16.81-2.57 2.572-3.573-3.572-7.143 7.143L0 91.904v2.05l3.523 3.523 7.143-7.143 3.572 3.57 4.57-4.57L0 70.524zm42.809 1.954 2.572 2.57-16.858 16.857-9.714-9.715 2.572-2.57 7.142 7.143L42.81 72.477zm28.572 0 9.715 9.712-2.573 2.573-9.714-9.715 2.572-2.57zm-17.858 1.57-4.57 4.572 4.57 4.57 4.573-4.57-4.573-4.572zm0 2 2.573 2.572-2.573 2.57-2.57-2.57 2.57-2.572zM0 77.619v2.047l6.096 6.096-2.573 2.666L0 84.81v1.953l3.523 3.664 4.573-4.713L0 77.619zm64.238 0L53.523 88.334l-7.142-7.145-4.572 4.573 11.714 11.715L68.81 82.189l-4.57-4.57zm0 2 2.57 2.57-13.285 13.288-9.714-9.715 2.572-2.573 7.142 7.145 10.715-10.715zm7.143 5.143-8.143 8.142 4.57 4.573 3.573-3.573 3.572 3.573 4.57-4.573-8.142-8.142zm14.285 0-4.57 4.572L89 97.238l4.572-4.572-7.906-7.904zm14.287 0-4.572 4.572 4.619 4.62v-2.097l-2.572-2.572 2.572-2.57V84.81l-.047-.05zm-28.525 1.953 6.144 6.142L75 95.427l-3.572-3.57-3.57 3.57-2.573-2.57 6.143-6.142zm14.287.047 5.904 5.904-2.572 2.572-5.904-5.904 2.572-2.572zm-46.477 1.572-4.572 4.57L41.762 100h2l-7.096-7.096 2.572-2.57L48.906 100h2L39.238 88.334zm-18.095 3.57-7.096 7.143-3.332-3.332L6.289 100h2.143l2.33-2.285L13.049 100h2.094l6.095-6.096L24 96.524 20.71 100h1.999L26 96.428l-4.857-4.524zm75.476 3.334L91.857 100h2.047l2.762-2.762 2.572 2.57-.191.192H100v-1.38l-3.38-3.382zm-36.142.096L55.879 100h1.978l2.57-2.62L62.79 100h1.908l-4.22-4.666zm-28.381.094L27.523 100h2.096l2.524-2.523L34.678 100h2.008l-4.59-4.572zm50 .049L77.572 100h2.047l2.524-2.523L84.668 100h1.951l-4.523-4.523zM0 98.617V100h1l.191-.191L0 98.617zm71.38.43-.952.953h1.906l-.953-.953z'  stroke-width='1' stroke='none' fill='hsla(122, 24%, 72%, 1)'/></pattern></defs><rect width='800%' height='800%' transform='translate(0,0)' fill='url(%23a)'/></svg>");
        position: relative;
    }
    /* .gridcontainer {
        display: grid;
        grid-template-columns: 20% 80%;
        grid-template-rows: auto;
        grid-template-areas: 
            "sidebar main";
    } */
    .sidebar-gallery {
        grid-area: sidebar;
        margin-left: 50px;
        /* border-right: 1px solid #1f1d60;  */
        margin-top: 165px;
        margin-bottom: 10px;
    }
    .main-gallery {
        grid-area: main;
        border-left: 1px solid #1f1d60;
        margin-top: 165px;
    }
    .filter-list {
        position: sticky;
        top: 100px;
    }
    /* .filter-list ul{
        color: #1f1d60;
        margin-left: 30px;
    } */
    .filter-list ul {
        color: #1f1d60;
        list-style: none;
        margin: 0;
        padding: 0px;
        min-width: 12em;
    }
    .filter-list ul li {
        cursor: pointer;
        list-style: none;
        margin: 20px auto;
        padding: 5px 0px 5px 5px;
        font-size: 1.5em;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        width: 96%;
    }
    .filter-list li:hover {
        /* color: #8f5208; */
        color: #804600;
    }

    .filter-list li.activegallery {
        background-color: #c3defa;
        color: #0e1754;
        border-radius: 10px;
    }
    /* .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        margin: 40px 20px 0 20px;
    }

    .container .heading {
        width: 65%;
        padding-bottom: 50px;
    }

    .container .heading h3 {
        font-size: 4em;
        font-weight: bolder;
        padding-bottom: 10px;
        border-bottom: 3px solid #1f1d60;
        font-family: PlayfairDisplay;
        color: #1f1d60;
    } */

    .container .box {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .container .box .image-column {
        display: flex;
        flex-direction: column;
        width: 32.5%;
    }

    .container .box .image-column img {
        width: 100%;
        /* margin-bottom: 15px; */
        border-radius: 5px;
        transition: transform 0.3s ease;
    }
    .container .box .image-column img:hover {
        /* opacity: 0.85; */
        transform: translateY(-5px);
        box-shadow: 0 6px 10px 4px rgba(0, 0, 0, 0.2);
    }
    .gallery-item {
        cursor: pointer;
        margin-bottom: 15px;
    }
    .gallery-item:hover {
        opacity: 0.85;
        /* transform: translateY(-5px);
        box-shadow: 0 6px 10px 4px rgba(0, 0, 0, 0.2); */
    }

  .lightbox {
    position: fixed;
    /* visible when rendered by Vue (v-if) */
    display: block;
    background-color: rgba(0, 0, 0, 0.6);
    width: 100%;
    height: 100%;
    overflow: auto;
    top: 0;
    left: 0;
  }
    .lightbox-content {
        position: relative;
        width: 65%;
        height: 65%;
        margin: 5% auto;
        margin-top: 9.4em;
        display: block;
        text-align: center;
    }
    .lightbox-content img {
        max-width: 100%;
        max-height: 100%;
        border: 6px solid #fff;
        object-fit: cover;
    }
    .lightbox-caption {
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        text-align: center;
        color: #fff;
        padding: 10px 0;
        font-size: 16px;
    }
    .lightbox-prev,
    .lightbox-next {
        position: absolute;
        background-color: rgba(0, 0, 0, 0.8);
        color: #ebebeb;
        padding: 10px;
        top: 45%;
        cursor: pointer;
    }
    .lightbox-prev {
        left: -50px;
    }
    .lightbox-next {
        right: -50px;
    } 
    div.fa.fa-angle-right.lightbox-next::before {
        font-size: 40px;
    }
    div.fa.fa-angle-left.lightbox-prev::before {
        font-size: 40px;
    }
    .lightbox-close {
        position: absolute;
        top: 0px;
        right: -50px;
        background-color: rgba(0, 0, 0, 0.8);
        color: #fff;
        padding: 10px;
        cursor: pointer;
        font-size: 40px;
        border: none;
        outline: none;
    }
</style>