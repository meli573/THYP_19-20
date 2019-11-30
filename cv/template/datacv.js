
var urlData = "mCsv.csv"
d3.csv(urlData)
    .then(function (data) {
        console.log(data[0]);
        var selectElem = document.getElementById('etu');
        selectElem.addEventListener('change', function () {
            var index = selectElem.selectedIndex;
            // Rapporter cette donnée au <p>
            showDataEtu(data[index]);

        })
        //affichage des données du 1er étudiant
    })
    .catch(function (error) {
        console.log(error);
    })

function showDataComp(dataEtu) {


}


function showDataEtu(dataEtu) {
    console.log(dataEtu);

    //change le titre
    let url = new URL(dataEtu['Votre photo']);
    let urlParam = new URLSearchParams(url.search);
    let id = urlParam.get('id');
    //merci à https://stackoverflow.com/questions/50664868/get-pictures-from-google-drive-folder-with-javascript-to-my-website
    let urlTof = "https://drive.google.com/uc?id=" + id + "&export=download";
    var b = document.getElementById("img");
    b.setAttribute("src", urlTof);
    b.setAttribute("disabled", "");
    d3.select('#etuNom').html(dataEtu["Votre prénom"] + " " + dataEtu["Votre nom"]);
    d3.select('#spc').html(dataEtu["Vos spécialités"]);
    d3.select('.mail').html(dataEtu["Votre mail"])



    let tabFramwork = [
        dataEtu['Quelles framework utilisez vous ? [.Net]'],
        dataEtu['Quelles framework utilisez vous ? [Angular]'],
        dataEtu['Quelles framework utilisez vous ? [Bootstrap]'],
        dataEtu['Quelles framework utilisez vous ? [Django]'],
        dataEtu['Quelles framework utilisez vous ? [Flesk]'],
        dataEtu['Quelles framework utilisez vous ? [Hibernate]'],
        dataEtu['Quelles framework utilisez vous ? [Jenkins]'],
        dataEtu['Quelles framework utilisez vous ? [React]'],
        dataEtu['Quelles framework utilisez vous ? [Symphony]'],
        dataEtu['Quelles framework utilisez vous ? [Zend]'],
        dataEtu['Quelles framework utilisez vous ? [laravel]']
    ];
    let tabnomFrawork = ['.Net', 'Angular', 'Bootstrap', 'Django', 'Flesk', 'Hibernate', 'Jenkins', 'React', 'Symphony', 'Zend', 'laravel'];
    let tabnomlanguage = ['Android', 'C#', 'C', 'C++', 'JAVA', 'Objectif C', 'PHP', 'Cobol', 'Javascript', 'Python'];
    let tabnomlangue = ['Anglais', 'Arabe', 'Chinois', 'Espagnol', 'Français', 'Russe','Tamazirth'];

    let tablanguage = [
        dataEtu['Quelles langages utilisez vous ? [Android]'],
        dataEtu['Quelles langages utilisez vous ? [C#]'],
        dataEtu['Quelles langages utilisez vous ? [C++]'],
        dataEtu['Quelles langages utilisez vous ? [C]'],
        dataEtu['Quelles langages utilisez vous ? [Java]'],
        dataEtu['Quelles langages utilisez vous ? [Objectif C]'],
        dataEtu['Quelles langages utilisez vous ? [PHP]'],
        dataEtu['Quelles langages utilisez vous ? [cobol]'],
        dataEtu['Quelles langages utilisez vous ? [javascript]'],
        dataEtu['Quelles langages utilisez vous ? [python]']
    ];
    let tabLangue = [
        dataEtu['Quelles langues parlez vous ? [anglais]'],
        dataEtu['Quelles langues parlez vous ? [arabe]'],
        dataEtu['Quelles langues parlez vous ? [chinois]'],
        dataEtu['Quelles langues parlez vous ? [espagnol]'],
        dataEtu['Quelles langues parlez vous ? [français]'],
        dataEtu['Quelles langues parlez vous ? [russe]'],
        dataEtu['Quelles langues parlez vous ? [tamazirth]']
       
    ];
    var ull = document.getElementById('CreateCompetance');
    while (ull.firstChild) {
        ull.removeChild(ull.firstChild);
    }


    for (var i = 0; i < tabFramwork.length; i++) {
        console.log(i);
        var newLi = document.createElement('li');


        var paragraphText = document.createTextNode(tabnomFrawork[i]);
        var elementSpan = document.createElement('span');
        console.log(tabFramwork[i])
        switch (tabFramwork[i]) {
            case 'je connais un peu':
                elementSpan.style.width = '25%';
                break;
            case 'je connais bien': elementSpan.style.width = '75%';
                break;
            case 'je ne connais pas du tout':
                elementSpan.style.width = '0%';
                break;
            case 'je suis expert(e)':
                elementSpan.style.width = '100%';
                break;
            default:
                console.log('Sorry, we are out of ' + tabFramwork[i] + '.');


        }

        newLi.appendChild(paragraphText);
        newLi.appendChild(elementSpan);
        //newLi.className='comp'+i;
        ull.appendChild(newLi);
        //var nomClass='.comp'+i;
        //d3.select(nomClass).html(i);  
    }



    for (var i = 0; i < tablanguage.length; i++) {
        console.log(i);
        var newLi = document.createElement('li');

        var paragraphText = document.createTextNode(tabnomlanguage[i]);
        var elementSpan = document.createElement('span');
        console.log(tablanguage[i])
        switch (tablanguage[i]) {
            case 'je connais un peu':
                elementSpan.style.width = '25%';
                break;

            case 'je connais bien':
                elementSpan.style.width = '75%';
                break;
            case 'je ne connais pas du tout':
                elementSpan.style.width = '0%';
                break;
            case 'je suis expert(e)':
                elementSpan.style.width = '100%';
                break;
            default:
                console.log('Sorry, we are out of ' + tablanguage[i] + '.');

        }

        newLi.appendChild(paragraphText);

        //newLi.className='comp'+i;
        ull.appendChild(newLi);
        newLi.appendChild(elementSpan);
        //var nomClass='.comp'+i;
        //d3.select(nomClass).html(i);    

    }

    var ull2 = document.getElementById('CreateCompetanceLangue');
    while (ull2.firstChild) {
        ull2.removeChild(ull2.firstChild);
    }
    for (var i = 0; i < tabLangue.length; i++) {
        console.log("langue"+tabnomlangue[i]);
        var newLi = document.createElement('li');


        var paragraphText = document.createTextNode(tabnomlangue[i]);
        var elementSpan = document.createElement('span');
        
        var paragraphSpan = document.createTextNode(tabLangue[i]);
        elementSpan.appendChild(paragraphSpan)
        elementSpan.style.marginLeft='10px';
        console.log(tabLangue[i])
        
        newLi.appendChild(paragraphText);
        newLi.appendChild(elementSpan);
        //newLi.className='comp'+i;
        ull2.appendChild(newLi);
        //var nomClass='.comp'+i;
        //d3.select(nomClass).html(i);  
    }




}




