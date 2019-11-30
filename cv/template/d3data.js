
var urlData = "mCsv.csv"
d3.csv(urlData)
    .then(function(data) {
        console.log(data[0]);
        var selectElem = document.getElementById('etu');
        selectElem.addEventListener('change', function() {
                var index = selectElem.selectedIndex;
                // Rapporter cette donnée au <p>
                showDataEtu(data[index]);
            })
            //affichage des données du 1er étudiant
    })
    .catch(function(error) {
        console.log(error);
    })

function showDataEtu(dataEtu) {

    //change le titre
    let url = new URL(dataEtu['Votre photo']);
    let urlParam = new URLSearchParams(url.search);
    let id = urlParam.get('id');
    //merci à https://stackoverflow.com/questions/50664868/get-pictures-from-google-drive-folder-with-javascript-to-my-website
    let urlTof = "https://drive.google.com/uc?id=" + id + "&export=download";
    let photo="background-image: url("+urlTof+");"
    var b = document.getElementById("img");
    
    
    b.setAttribute("style", photo);
    b.setAttribute("disabled", "");
    d3.select('#etuNom').html(dataEtu["Votre prénom"] + " " + dataEtu["Votre nom"]);
    d3.select('#spc').html(dataEtu["Vos spécialités"]);

    
    //change les information basic
    // var tableau = d3.select('#etuBasicInfo');
    // tableau.selectAll(".row").remove();
    // var arrBasicInfo = [],
    //     arrInfoValide = ['Votre mail', 'N° étudiant', 'Votre compte GitHub'];
    // for (var p in dataEtu) {
    //     if (arrInfoValide.indexOf(p) > -1)
    //         arrBasicInfo.push({ 'p': p, 'v': dataEtu[p] });
    // }
    // var lignes = tableau.selectAll(".row").data(arrBasicInfo).enter()
    //     .append("div")
    //     .attr("class", "row");
    // lignes.append('div').attr("class", "col-sm-4")
    //     .append("strong").attr("class", "text-uppercase")
    //     .text(function(d) {
    //         return d.p;
    //     })
    // lignes.append('div').attr("class", "col-sm-8")
    //     .text(function(d) {
    //         return d.v;
    //     })
    //     .on("click", function(d) {
    //         console.log(d);
    //     })
    /*
      <div class="row">
              <div class="col-sm-4"><strong class="text-uppercase">Age:</strong></div>
              <div class="col-sm-8">26</div>
            </div>
          */
    //console.log(lignes);
}