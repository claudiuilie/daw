// obiect ce va contine toate produsele din cos, obiectul va fi global pentru a putea fi folosit de orice metoda
var cosCumparaturi = {};

function adaugaInCos(input) {
    //creare obiect produs
    var produs = {};

    // adaugare informatii din formularul de adaugare produs in obiectul produs
    // va rezulta un obiect de forma {cantitate: "1", id: "2", nume_produs: "Bec LED", pret: "26,15"}
    for(var i = 0;i < input.length; i++ ){

        produs[input[i].name] = input[i].value ;
    }

    // se va folosi la actualizare informatii tabel (pret,cant) daca se adauga in repetate randuri acelas produs
    var existaRand = document.getElementById("rand_produs_" + produs.id)
    // tabelul din laborator 7
    var tabelCos = document.getElementById("body_tabel_cos");

    //creare noi celule pentru a fi adaugate in tabel
    var rand = tabelCos.insertRow(0);
    var celula_produs,celula_cantitate,celula_pret;

    // daca nu exista in tabel se vor insera noi celule
    if(existaRand == null) {

        rand.id = "rand_produs_" + produs.id
        celula_produs = rand.insertCell(0);
        celula_cantitate = rand.insertCell(1);
        celula_pret = rand.insertCell(2);
        celula_produs.innerHTML = produs.nume_produs;
        celula_cantitate.innerHTML = produs.cantitate;
        celula_pret.innerHTML = produs.pret;

        // se adauga produsul in obiectul global cu produse din cos
        cosCumparaturi[produs.id] = {};
        cosCumparaturi[produs.id]['nume_produs'] = produs.nume_produs;
        cosCumparaturi[produs.id]['cantitate'] = parseInt(produs.cantitate);
        cosCumparaturi[produs.id]['pret'] = produs.pret;

        alert(`Produsul ${produs.nume_produs} cu cantitate ${produs.cantitate} a fost adaugat in cos!`)

    // daca exista deja in tabel produsul se va face update la pret si cantitate
    }else{

        celula_cantitate = existaRand.getElementsByTagName("td")[1];
        celula_pret = existaRand.getElementsByTagName("td")[2];
        celula_cantitate.innerHTML = parseInt(produs.cantitate) + parseInt(celula_cantitate.innerHTML);
        celula_pret.innerHTML = parseFloat(parseFloat(produs.pret) * parseInt(celula_cantitate.innerHTML)).toFixed(2);

        // se va actualiza produsul(cantitate si pret) deja existent in obiectul global cu produse din cos
        cosCumparaturi[produs.id] = {};
        cosCumparaturi[produs.id]['nume_produs'] = produs.nume_produs;
        cosCumparaturi[produs.id]['cantitate'] = parseInt(celula_cantitate.innerHTML);
        cosCumparaturi[produs.id]['pret'] = celula_pret.innerHTML;

        alert(`Cantitatea produsului ${produs.nume_produs} a fost actualizata la ${celula_cantitate.innerHTML } buc!`)
    }

    // se apeleaza metoda de actualizare cantitate badge cos
    updateCos()
    // metoda returneaza false pentru a preveni postarea formei sa redirectioneze spre alta pagina
    return false;
  }

  //metoda de actualizare cantitate badge cos
  function updateCos() {
    var badge = document.getElementById("badge_produse_cos");
    var totalProduse = 0;

    // calcul total cantitate produse cos
    for(var x in cosCumparaturi){
        totalProduse += cosCumparaturi[x].cantitate
    }
    // update badge
    badge.innerHTML = totalProduse;
  }

  //metoda de calcul total pret din cos
  function calculeazaTotalCos (){

    var total = document.getElementById("total_produse_calculate");
    var totalCost = 0;

    //daca cosul de cuparaturi nu este gol se aduna pretul produselor
    for(var z in cosCumparaturi){
        if(typeof cosCumparaturi[z] != 'undefined'){
            totalCost = parseFloat(totalCost) + parseFloat(parseFloat(cosCumparaturi[z].pret) * cosCumparaturi[z].cantitate);
        }
    }

    //daca exista produse in cos se populeaza textul cu totalul pretului
    if(parseInt(totalCost) > 0)
        total.innerHTML = "Total: "+ parseFloat(totalCost).toFixed(2) + " lei";

  }

  // metoda de stergere produse din cos
  function golesteCos(){
    // sterge celule din cosul de cumparaturi
    var tabel_cos = document.getElementById("body_tabel_cos");
    tabel_cos.innerHTML = '';
    //golire obiect global cu produse din cos
    cosCumparaturi = {};
    //actualizare badge produse cos
    document.getElementById("badge_produse_cos").innerHTML = 0;
    document.getElementById("total_produse_calculate").innerHTML = ''
  }