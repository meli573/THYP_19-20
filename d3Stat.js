

var urlData = "mCsv.csv";
var tabResultat = []
var tabCompetence = []
var tabCompetenceUnSeulLanguage = []

var tabResultatBesoin = []
var tabBesoin = []
var tabUnResultatBesoin = []


var tabBesoin = []
var q = d3.queue()
    .defer(d3.csv, urlData)
    .awaitAll(function (error, results) {
        if (error) throw error;
        // global statistique Competence
        calcule(results);
        graphe(tabResultat, "chart");
        d3.select('#sc1').html(tabResultat[0]);
        d3.select('#sc2').html(tabResultat[1]);
        d3.select('#sc3').html(tabResultat[2]);
        d3.select('#sc4').html(tabResultat[3]);



        calculeLanguageCompetence(results, "C#")
        graphe(tabCompetenceUnSeulLanguage, "chart4");
        d3.select("#Ccharp1").html(tabCompetenceUnSeulLanguage[0]);
        d3.select("#Ccharp2").html(tabCompetenceUnSeulLanguage[1]);
        d3.select("#Ccharp3").html(tabCompetenceUnSeulLanguage[2]);
        d3.select("#Ccharp4").html(tabCompetenceUnSeulLanguage[3]);
        tabCompetenceUnSeulLanguage = []
        calculeLanguageCompetence(results, "Java")
        graphe(tabCompetenceUnSeulLanguage, "chart2");
        d3.select("#Java1").html(tabCompetenceUnSeulLanguage[0]);
        d3.select("#Java2").html(tabCompetenceUnSeulLanguage[1]);
        d3.select("#Java3").html(tabCompetenceUnSeulLanguage[2]);
        d3.select("#Java4").html(tabCompetenceUnSeulLanguage[3]);
        tabCompetenceUnSeulLanguage = []
        calculeLanguageCompetence(results, "Android")
        graphe(tabCompetenceUnSeulLanguage, "chart3");
        d3.select("#Android1").html(tabCompetenceUnSeulLanguage[0]);
        d3.select("#Android2").html(tabCompetenceUnSeulLanguage[1]);
        d3.select("#Android3").html(tabCompetenceUnSeulLanguage[2]);
        d3.select("#Android4").html(tabCompetenceUnSeulLanguage[3]);

        tabCompetenceUnSeulLanguage = []
        calculeLanguageCompetence(results, "C++")
        graphe(tabCompetenceUnSeulLanguage, "chart5");
        d3.select("#C1").html(tabCompetenceUnSeulLanguage[0]);
        d3.select("#C2").html(tabCompetenceUnSeulLanguage[1]);
        d3.select("#C3").html(tabCompetenceUnSeulLanguage[2]);
        d3.select("#C4").html(tabCompetenceUnSeulLanguage[3]);

        tabCompetenceUnSeulLanguage = []
        calculeLanguageCompetence(results, "Objectif C")
        graphe(tabCompetenceUnSeulLanguage, "chart6");
        d3.select("#ObjectifC1").html(tabCompetenceUnSeulLanguage[0]);
        d3.select("#ObjectifC2").html(tabCompetenceUnSeulLanguage[1]);
        d3.select("#ObjectifC3").html(tabCompetenceUnSeulLanguage[2]);
        d3.select("#ObjectifC4").html(tabCompetenceUnSeulLanguage[3]);

        tabCompetenceUnSeulLanguage = []

        calculeLanguageCompetence(results, "PHP")
        graphe(tabCompetenceUnSeulLanguage, "chart7");
        d3.select("#PHP1").html(tabCompetenceUnSeulLanguage[0]);
        d3.select("#PHP2").html(tabCompetenceUnSeulLanguage[1]);
        d3.select("#PHP3").html(tabCompetenceUnSeulLanguage[2]);
        d3.select("#PHP4").html(tabCompetenceUnSeulLanguage[3]);
        tabCompetenceUnSeulLanguage = []

        calculeLanguageCompetence(results, "cobol")
        graphe(tabCompetenceUnSeulLanguage, "chart8");
        d3.select("#cobol1").html(tabCompetenceUnSeulLanguage[0]);
        d3.select("#cobol2").html(tabCompetenceUnSeulLanguage[1]);
        d3.select("#cobol3").html(tabCompetenceUnSeulLanguage[2]);
        d3.select("#cobol4").html(tabCompetenceUnSeulLanguage[3]);
        tabCompetenceUnSeulLanguage = []

        calculeLanguageCompetence(results, "javascript")
        graphe(tabCompetenceUnSeulLanguage, "chart9");
        d3.select("#javascript1").html(tabCompetenceUnSeulLanguage[0]);
        d3.select("#javascript2").html(tabCompetenceUnSeulLanguage[1]);
        d3.select("#javascript3").html(tabCompetenceUnSeulLanguage[2]);
        d3.select("#javascript4").html(tabCompetenceUnSeulLanguage[3]);

        tabCompetenceUnSeulLanguage = []

        calculeLanguageCompetence(results, "python")
        graphe(tabCompetenceUnSeulLanguage, "chart10");
        d3.select("#python1").html(tabCompetenceUnSeulLanguage[0]);
        d3.select("#python2").html(tabCompetenceUnSeulLanguage[1]);
        d3.select("#python3").html(tabCompetenceUnSeulLanguage[2]);
        d3.select("#python4").html(tabCompetenceUnSeulLanguage[3]);

        //Global statistique Beoin
        calculeBesoin(results);
        graphe(tabResultatBesoin, "chartB");
        d3.select('#scB1').html(tabResultatBesoin[0]);
        d3.select('#scB2').html(tabResultatBesoin[1]);

        calculePourUnSeulBesoin(results, "connaître les base du langage HTML 5")
        graphe(tabUnResultatBesoin, "chartB2");
        d3.select("#html1").html(tabUnResultatBesoin[0]);
        d3.select("#html2").html(tabUnResultatBesoin[1]);


        tabUnResultatBesoin = [];
        calculePourUnSeulBesoin(results, "connaître les outils d’édition web (éditeurs html, CSS, …) ")
        graphe(tabUnResultatBesoin, "chartB3");
        d3.select("#css1").html(tabUnResultatBesoin[0]);
        d3.select("#css2").html(tabUnResultatBesoin[1]);

        tabUnResultatBesoin = [];
        calculePourUnSeulBesoin(results, "savoir travailler avec le RSS")
        graphe(tabUnResultatBesoin, "chartB4");
        d3.select("#rss1").html(tabUnResultatBesoin[0]);
        d3.select("#rss2").html(tabUnResultatBesoin[1]);

        tabUnResultatBesoin = [];
        calculePourUnSeulBesoin(results, "savoir gérer un projet")
        graphe(tabUnResultatBesoin, "chartB5");
        d3.select("#projet1").html(tabUnResultatBesoin[0]);
        d3.select("#projet2").html(tabUnResultatBesoin[1]);

        tabUnResultatBesoin = [];
        calculePourUnSeulBesoin(results, "analyser des bases de données")
        graphe(tabUnResultatBesoin, "chartB6");
        d3.select("#bd1").html(tabUnResultatBesoin[0]);
        d3.select("#bd2").html(tabUnResultatBesoin[1]);

        
        tabUnResultatBesoin = [];
        calculePourUnSeulBesoin(results, "savoir prototyper des innovations numériques")
        graphe(tabUnResultatBesoin, "chartB7");
        d3.select("#num1").html(tabUnResultatBesoin[0]);
        d3.select("#num2").html(tabUnResultatBesoin[1]);

        tabUnResultatBesoin = [];
        calculePourUnSeulBesoin(results, "savoir utiliser des cartes géographiques interactives")
        graphe(tabUnResultatBesoin, "chartB8");
        d3.select("#carte1").html(tabUnResultatBesoin[0]);
        d3.select("#carte2").html(tabUnResultatBesoin[1]);

        tabUnResultatBesoin = [];
        calculePourUnSeulBesoin(results, "savoir mettre en place des outils de type « ranking »")
        graphe(tabUnResultatBesoin, "chartB9");
        d3.select("#ran1").html(tabUnResultatBesoin[0]);
        d3.select("#ran2").html(tabUnResultatBesoin[1]);

        tabUnResultatBesoin = [];
        calculePourUnSeulBesoin(results, "savoir mettre en place des enquêtes")
        graphe(tabUnResultatBesoin, "chartB10");
        d3.select("#place1").html(tabUnResultatBesoin[0]);
        d3.select("#place2").html(tabUnResultatBesoin[1]);
    });


//var myData = [50, 100, 25, 30, 40, 150, 300, 400]


function graphe(myData, id) {
    var height = 220;
    var width = 220;
    var animateDuration = 700;
    var animateDelay = 30;
    //var barWidth=35;
    //var barOffset=5;
    var tooltip = d3.select('body').append('div')
        .style('position', 'absolute')
        .style('background', '#f4f4f4')
        .style('padding', '5 15px')
        .style('border', '1px #333 solid ')
        .style('border-radius', '5px')
        .style('opacity', '0')

    var yScale = d3.scaleLinear()
        .domain([0, d3.max(myData)])
        .range([0, height]);

    var xScale = d3.scaleBand()
        .domain(d3.range(0, myData.length))
        .range([0, width])

    var colors = d3.scaleLinear()
        .domain([0, myData.length])
        .range(['#90ee90', '#30c230'])


    var identification = "#" + id;
    var myChart = d3.select(identification).append('svg')
        .attr('width', width)
        .attr('height', height)
        .each(function (d) {
            // remove data set on DOM element
            d3.select(this).datum(null);


        })
        .style('background', '#f4f4f4')
        .selectAll('rect').data(myData)
        .enter().append('rect')
        .style('fill', function (d, i) {
            return colors(i);
        })
        .attr('width', xScale.bandwidth())
        .attr('height', 0)
        .attr('x', function (d, i) {
            return xScale(i);
        })
        .attr('y', height)
        .on('mouseover', function (d) {
            tooltip.transition()
                .style('opacity', 1)

            tooltip.html(d)
                .style('left', (d3.event.pageX) + 'px')
                .style('top', (d3.event.pageY + 'px'))
            d3.select(this).style('opacity', 0.5)
        })
        .on('mouseout', function (d) {
            tooltip.transition()
                .style('opacity', 0)

            tooltip.html(d)
                .style('left', (d3.event.pageX) + 'px')
                .style('top', (d3.event.pageY + 'px'))
            d3.select(this).style('opacity', 1)
        })
    myChart.transition()
        .attr('height', function (d) {
            return yScale(d);
        })
        .attr('y', function (d) {
            return height - yScale(d)
        })
        .duration(animateDuration)
        .delay(function (d, i) {
            return i * animateDelay;
        })
    //  .ease('elastic')



    var vScale = d3.scaleLinear()
        .domain([0, d3.max(myData)])
        .range([height], 0);

    var hScale = d3.scaleBand()
        .domain(d3.range(0, myData.length))
        .range([0, width])

    //v ax
    var vAxis = d3.axisLeft()
        .scale(vScale)
        .ticks(5)
        .tickPadding(5)



    var vGuid = d3.select("svg")
        .append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(hScale).tickSize(0))
        .selectAll("text")
        .style("text-anchor", "end")
        .attr("dx", "-.8em")
        .attr("dy", ".15em")
        .attr("transform", "rotate(-65)");

    vGuid.append("g")
        .call(d3.axisLeft(vScale).ticks(6));



}
//graphe(myData);
var dBesoin = []
var Competence = [];

function calcule(data) {



    var connaisBien = 0;
    var connaispeu = 0;
    var nulll = 0;
    var expert = 0
    student = data[0];

    for (var j in student) {
       // console.log("j" + j)
       // console.log(student[j])
        var s = student[j]

        tabCompetence.push(s['Quelles sont vos compétences ? [savoir faire fonctionner, sur un site, un service de type « e-commerce » (vente de produits, …)]']);
        tabCompetence.push(s['Quelles sont vos compétences ? [savoir intégrer, dans un page, des outils de diffusion web 2 (twitter, facebook, …)]']);
        tabCompetence.push(s['Quelles sont vos compétences ? [savoir mettre en place et exploiter des outils de veille d’information]']);
        tabCompetence.push(s['Quelles sont vos compétences ? [connaître les outils d’édition web (éditeurs html, CSS, …) ]']);
        tabCompetence.push(s['Quelles sont vos compétences ? [savoir gérer la publication à distance d’un site web]']);
        tabCompetence.push(s['Quelles sont vos compétences ? [savoir mettre en place des enquêtes]']);
        tabCompetence.push(s['Quelles sont vos compétences ? [savoir mettre en place des outils de type « ranking »]']);
        tabCompetence.push(s['Quelles sont vos compétences ? [savoir scénariser et réaliser des rubriques multimédias (« page vidéo », « page photo », exposition virtuelle, …)]']);
        tabCompetence.push(s['Quelles sont vos compétences ? [savoir réaliser des podcasts]']);
        tabCompetence.push(s['Quelles sont vos compétences ? [savoir prototyper des innovations numériques]']);
        tabCompetence.push(s['Quelles sont vos compétences ? [savoir mettre en place et gérer un service de type « newsletter » (impliquant la mise en place et la gestion d’un annuaire d’abonnés)]']);
        tabCompetence.push(s['Quelles sont vos compétences ? [savoir mettre en place et gérer un forum de discussion]']);
        tabCompetence.push(s['Quelles sont vos compétences ? [savoir gérer un projet]']);
        tabCompetence.push(s['Quelles sont vos compétences ? [savoir gérer une communauté en ligne]']);
        tabCompetence.push(s['Quelles sont vos compétences ? [savoir gérer un site multilingue]']);
        tabCompetence.push(s['Quelles sont vos compétences ? [analyser des bases de données]']);
        tabCompetence.push(s['Quelles sont vos compétences ? [connaître les bases du responsive web design (RWD)]']);
        tabCompetence.push(s['Quelles sont vos compétences ? [connaître les base du langage HTML 5]']);
        tabCompetence.push(s['Quelles sont vos compétences ? [utiliser les méthodes agiles de développement]']);
        tabCompetence.push(s['Quelles sont vos compétences ? [savoir utiliser les programmes de liens sponsorisés]:']);
        tabCompetence.push(s['Quelles sont vos compétences ? [savoir utiliser des outils de gestion d’accès aux rubriques (accès par mot de passe, …)]']);
        tabCompetence.push(s['Quelles sont vos compétences ? [savoir utiliser des cartes géographiques interactives]']);
        tabCompetence.push(s['Quelles sont vos compétences ? [savoir utiliser correctement les métadonnées pour une meilleure diffusion des contenus du site]']);
        tabCompetence.push(s['Quelles sont vos compétences ? [savoir travailler avec le RSS]']);
        tabCompetence.push(s['Quelles sont vos compétences ? [savoir scénariser et réaliser les rubriques « statiques » d’un site web]']);




    }
    for (var i in tabCompetence) {
        switch (tabCompetence[i]) {
            case 'je connais un peu':
                connaispeu++;
                break;
            case 'je connais bien':
                connaisBien++;
                break;
            case 'je ne connais pas du tout':
                nulll++;
                break;
            case 'je suis expert(e)':
                expert++;
                break;
            default:
            //    console.log('Sorry, we are out of .');

        }

    }

  //  console.log(connaisBien)
  //  console.log(connaispeu)
 //   console.log(nulll)
  //  console.log(expert)
    tabResultat.push(connaispeu);
    tabResultat.push(connaisBien);
    tabResultat.push(nulll);
    tabResultat.push(expert)



}
function calculeBesoin(data) {



    var besoin = 0;
    var pasBesoin = 0;
    var student = data[0];

    for (var j in student) {
        //console.log("j" + j)
        // console.log(student[j])

        var s = student[j]

        tabBesoin.push(s['Quelles sont besoins ? [savoir faire fonctionner, sur un site, un service de type « e-commerce » (vente de produits, …)]']);
        tabBesoin.push(s['Quelles sont besoins ? [savoir intégrer, dans un page, des outils de diffusion web 2 (twitter, facebook, …)]']);
        tabBesoin.push(s['Quelles sont besoins ? [savoir mettre en place et exploiter des outils de veille d’information]']);
        tabBesoin.push(s['Quelles sont besoins ? [connaître les outils d’édition web (éditeurs html, CSS, …) ]']);
        tabBesoin.push(s['Quelles sont besoins ? [savoir gérer la publication à distance d’un site web]']);
        tabBesoin.push(s['Quelles sont besoins ? [savoir mettre en place des enquêtes]']);
        tabBesoin.push(s['Quelles sont besoins ? [savoir mettre en place des outils de type « ranking »]']);
        tabBesoin.push(s['Quelles sont besoins ? [savoir scénariser et réaliser des rubriques multimédias (« page vidéo », « page photo », exposition virtuelle, …)]']);
        tabBesoin.push(s['Quelles sont besoins ? [savoir réaliser des podcasts]']);
        tabBesoin.push(s['Quelles sont besoins ? [savoir prototyper des innovations numériques]']);
        tabBesoin.push(s['Quelles sont besoins ? [savoir mettre en place et gérer un service de type « newsletter » (impliquant la mise en place et la gestion d’un annuaire d’abonnés)]']);
        tabBesoin.push(s['Quelles sont besoins ? [savoir mettre en place et gérer un forum de discussion]']);
        tabBesoin.push(s['Quelles sont besoins ? [savoir gérer un projet]']);
        tabBesoin.push(s['Quelles sont besoins ? [savoir gérer une communauté en ligne]']);
        tabBesoin.push(s['Quelles sont besoins ? [savoir gérer un site multilingue]']);
        tabBesoin.push(s['Quelles sont besoins ? [analyser des bases de données]']);
        tabBesoin.push(s['Quelles sont besoins ? [connaître les bases du responsive web design (RWD)]']);
        tabBesoin.push(s['Quelles sont besoins ? [connaître les base du langage HTML 5]']);
        tabBesoin.push(s['Quelles sont besoins ? [utiliser les méthodes agiles de développement]']);
        tabBesoin.push(s['Quelles sont besoins ? [savoir utiliser les programmes de liens sponsorisés]:']);
        tabBesoin.push(s['Quelles sont besoins ? [savoir utiliser des outils de gestion d’accès aux rubriques (accès par mot de passe, …)]']);
        tabBesoin.push(s['Quelles sont besoins ? [savoir utiliser des cartes géographiques interactives]']);
        tabBesoin.push(s['Quelles sont besoins ? [savoir utiliser correctement les métadonnées pour une meilleure diffusion des contenus du site]']);
        tabBesoin.push(s['Quelles sont besoins ? [savoir travailler avec le RSS]']);
        tabBesoin.push(s['Quelles sont besoins ? [savoir scénariser et réaliser les rubriques « statiques » d’un site web]']);

    }
    for (var i in tabBesoin) {

        switch (tabBesoin[i]) {

            case 'Pas besoin':
                pasBesoin++;

                break;
            case "Besoin d'approfondissement":
                besoin++;
                break;

            default:
               // console.log('Sorry, we are out of .');

        }

    }

    //console.log(pasBesoin)
    //console.log(besoin)

    tabResultatBesoin.push(besoin);
    tabResultatBesoin.push(pasBesoin);




}

function calculePourUnSeulBesoin(data, unBesoin) {

    var besoin = 0;
    var pasBesoin = 0;

    student = data[0];
    var leBesoin = "Quelles sont besoins ? [" + unBesoin + "]";
    tabBesoin = []
    for (var j in student) {
        //  console.log("j" + j)
        // console.log(student[j])
        var s = student[j]
        tabBesoin.push(s[leBesoin]);


    }
    for (var i in tabBesoin) {
        switch (tabBesoin[i]) {
            case 'Pas besoin':
                pasBesoin++;
               // console.log("---b---" + pasBesoin)
                break;
            case "Besoin d'approfondissement":
                besoin++;
                break;

            default:
               // console.log('Sorry, we are out of .');

        }

    }
  //  console.log(leBesoin)

   // console.log(pasBesoin)
   // console.log(besoin)

    tabUnResultatBesoin.push(besoin);
    tabUnResultatBesoin.push(pasBesoin);



}
function calculeLanguageCompetence(data, language) {



    var connaisBien = 0;
    var connaispeu = 0;
    var nulll = 0;
    var expert = 0
    student = data[0];
    var compLanguage = "Quelles langages utilisez vous ? [" + language + "]";
    tabCompetence = []
    for (var j in student) {
        //  console.log("j" + j)
        // console.log(student[j])
        var s = student[j]
        tabCompetence.push(s[compLanguage]);


    }
    for (var i in tabCompetence) {
        switch (tabCompetence[i]) {
            case 'je connais un peu':
                connaispeu++;
                break;
            case 'je connais bien':
                connaisBien++;
                break;
            case 'je ne connais pas du tout':
                nulll++;
                break;
            case 'je suis expert(e)':
                expert++;
                break;
            default:
               // console.log('Sorry, we are out of .');

        }

    }
 //   console.log(language)
//    console.log("----" + connaisBien)
 //   console.log(connaispeu)
  //  console.log(nulll)
 //   console.log(expert)
    tabCompetenceUnSeulLanguage.push(connaispeu);
    tabCompetenceUnSeulLanguage.push(connaisBien);
    tabCompetenceUnSeulLanguage.push(nulll);
    tabCompetenceUnSeulLanguage.push(expert)



}

