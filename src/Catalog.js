import React from "react";
import MovieCard from "./MovieCard";

const Catalog = () => {
  const movies = [
    {
      title: "Wiertarko - wkrętarka akumulatorowa DEWALT DCD776C2-QW 18V 1.3Ah Li-Ion",
      director: "DEWALT",
      description:
        "Kompaktowa wiertarko-wkrętarka XR Li-Ion 18 V z akumulatorami w technologii XR Li-Ion 1,3 Ah.Jednotulejowy uchwyt 13 mm z blokadą wrzeciona pozwalają szybko wymienić wiertło lub końcówkę wkrętarską jedną ręką. Dwie prędkości pracy, elektroniczne sterowanie prędkością i przełącznik kierunku pracy zapewniają maksymalną kontrolę",
      imageurl:
        "https://static01.leroymerlin.pl/files/media/image/707/1951707/product/wiertarko-wkretarka-akumulatorowa-dewalt-dcd776c2-qw-18v-1-3ah-li-ion,main.jpg",
      actors: [
        "Napięcie (V): 18",
        "Pojemność akumulatora (w Ah): 1.3",
        "Bateria w komplecie: Tak",
        "Ilość baterii: 2",
      ],
    },
    {
      title: "Wiertarko - wkrętarka akumulatorowa MAKITA DF457DWE 18V 1.5Ah Li-Ion",
      director: "MAKITA",
      description:
        "Akumulatorowa wiertarko-wkrętarka, zasilana akumulatorem 18V. Wyposażona w silnik, pracujący z maks. prędkością 1400 obrotów na minutę oraz momentem obrotowym 42 Nm. Pozwala na wiercenie w drewnie wiertłem o maks. średnicy 36 mm. W zestawie znajdują się 2 akumulatory 1,5 Ah oraz ładowarka, urządzenie dostarczane jest w walizce.",
      imageurl:
        "https://static02.leroymerlin.pl/files/media/image/465/1780465/product/wiertarko-wkretarka-akumulatorowa-makita-df457dwe-18v-1-5ah-li-ion,main.jpg",
        actors: [
          "Napięcie (V): 18",
          "Pojemność akumulatora (w Ah): 1.5",
          "Bateria w komplecie: Tak",
          "Ilość baterii: 2",
        ],
    },
    {
      title: "Wiertarko - wkrętarka bezszczotkowa Bosch Professional GSR 50 Nm 18V",
      director: "BOSCH",
      description:
        "Akumulatorowa wiertarko-wkrętarka, zasilana akumulatorem 18V. Wyposażona w silnik, pracujący z maks. prędkością 1400 obrotów na minutę oraz momentem obrotowym 42 Nm. Pozwala na wiercenie w drewnie wiertłem o maks. średnicy 36 mm. W zestawie znajdują się 2 akumulatory 1,5 Ah oraz ładowarka, urządzenie dostarczane jest w walizce.",
      imageurl:
        "https://static01.leroymerlin.pl/files/media/image/275/2451275/product/wiertarko-wkretarka-bezszczotkowa-bosch-professional-gsr-50-nm-18v-2ah-li-ion,main.jpg",
        actors: [
          "Napięcie (V): 18",
          "Pojemność akumulatora (w Ah): 2",
          "Bateria w komplecie: Tak",
          "Ilość baterii: 2",
        ],
    },
    {
      title: "Młotowiertarka bezprzewodowa ONE+ Ryobi R18SDS-0 18V 1.3J",
      director: "RYOBI",
      description:
        "Młotowiertarka z udarem pneumatycznym idealna do pracy w kamieniu i betonie. Uchwyt SDS+ do szybkiego wiercenia i łatwej wymiany wierteł. 4 tryby pracy zapewniają większą uniwersalność (funkcja dłutowania, wiercenia z udarem lub bez udaru oraz dopasowania dłuta).",
      imageurl:
        "https://static02.leroymerlin.pl/files/media/image/429/1805429/product/mlotowiertarka-bezprzewodowa-one-ryobi-r18sds-0-18v-1-3j,main.jpg",
        actors: [
          "Siła uderzenia (w J): 1.3",
          "Średnica wiercenia w betonie (w mm): 16",
          "Funkcja przecinania: Tak",
          "Napięcie (V): 18",
        ],
    },
    {
      title: "Wiertarko - wkrętarka bezszczotkowa Bosch Professional GSR 50 Nm 18V ",
      director: "GRAPHITE",
      description:
        "Specjalistyczny młot wyburzeniowy GRAPHITE z silnikiem o dużej mocy 1700 W, niezastąpiony podczas ciężkich prac instalacyjnych i rozbiórkowych. Młot cechuje bezpieczeństwo i wygoda pracy za sprawą pokrytej materiałem antypoślizgowym rękojeści głównej oraz rękojeści dodatkowej, umożliwiającej regulację położenia pod dowolnym kątem.",
      imageurl:
        "https://static01.leroymerlin.pl/files/media/image/851/1864851/product/mlot-udarowy-graphite-58g867-hex-1700w-45j,main.jpg",
        actors: [
          "Siła uderzenia (w J): 45",
          "Funkcja podkuwania: Tak",
          "Typ udaru: Pneumatyczny",
          "Waga (w kg): 17",
        ],
    },
    {
      title: "Młotowiertarka bezprzewodowa bezszczotkowa AEG 18V 2.5J",
      director: "AEG",
      description:
        "Bezszczotkowy młot udarowo-obrotowy AEG 18V BBH18BL. Młot z uchwytem SDS+ z rękojeścią typu L do wiercenia i montażu w betonie (maks. średnica 26 mm). Energia udaru 2,5 J zapewnia wysoką wydajność pracy. Silnik bezszczotkowy gwarantuje maksymalną moc i wydajność.",
      imageurl:
        "https://static01.leroymerlin.pl/files/media/image/026/2087026/product/mlotowiertarka-bezprzewodowa-bezszczotkowa-aeg-18v-2-5j,main.jpg",
        actors: [
          "Siła uderzenia (w J): 2.5",
          "Średnica wiercenia w betonie (w mm): 26",
          "Funkcja przecinania: Tak",
          "Napięcie (V): 18",
        ],
    },
    {
      title: "Szlifierka kątowa przewodowa METABO WE2200-230 230 mm 2200W",
      director: "METABO",
      description:
        "Wytrzymała duża szlifierka katowa z ograniczeniem prądu rozruchowego z funkcją łagodnego rozruchu zapobiega zadziałaniu bezpiecznika podczas włączania",
      imageurl:
        "https://static02.leroymerlin.pl/files/media/image/438/2083438/product/szlifierka-katowa-przewodowa-metabo-we2200-230-230-mm-2200w,main.jpg",
        actors: [
          "Moc (w W): 2200",
          "Średnica tarczy (w mm): 230",
          "Średnia prędkość pracy (w obr./min.): 4300",
          "Zmienna prędkość: Nie",
        ],
    },
    {
      title: "Wyrzynarka przewodowa BLACK&DECKER BES610 650W",
      director: "BLACK&DECKER",
      description:
        "Akumulatorowa wiertarko-wkrętarka, zasilana akumulatorem 18V. Wyposażona w silnik, pracujący z maks. prędkością 1400 obrotów na minutę oraz momentem obrotowym 42 Nm. Pozwala na wiercenie w drewnie wiertłem o maks. średnicy 36 mm. W zestawie znajdują się 2 akumulatory 1,5 Ah oraz ładowarka, urządzenie dostarczane jest w walizce.",
      imageurl:
        "https://static02.leroymerlin.pl/files/media/image/594/2033594/product/wyrzynarka-przewodowa-black-and-decker-bes610-650w,main.jpg",
        actors: [
          "Moc (w W): 650",
          "Grubość cięcia w drewnie pod kątem 90° (w mm): 90",
          "Grubość cięcia w metalu pod kątem 90° (w mm): 8",
          "Typ uchwytu ostrza: T",
        ],
    },
    {
      title: "Piła szablasta przewodowa DEXTER DP5 900W",
      director: "DEXTER",
      description:
        "Przewodowa piła szablasta DP5 DEXTER o mocy 900 W idealna do cięcia prostego jak i zakrzywionego, w każdym rodzaju materiałów, w zależności od zastosowanego ostrza. Obracana głowica umożliwia cięcie pod dowolnym kątem.",
      imageurl:
        "https://static02.leroymerlin.pl/files/media/image/895/2277895/product/pila-szablasta-przewodowa-dexter-dp5-900w,main.jpg",
        actors: [
          "Moc (w W): 900",
          "Długość przewodu (w m): 5",
          "Zakres cięcia (w mm): od 150 do 200",
          "Napięcie (w V): 230",
        ],
    },
    
  ];

  return (
    <div className="catalog">
      {movies.map((m, index) => (
        <MovieCard movie={m} key={index} />
      ))}
    </div>
  );
};

export default Catalog;

// Title
// Director
// Description
// Actors
// Image
