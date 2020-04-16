
// metoda care schimba continutul laboratoarelor
function schimbaLab(numeLab, numeMeniu) {

    // containerul laboratoarelor
    var lab = document.getElementsByClassName("laborator");
    var labMeniu = document.getElementById("meniu_laboratoare");
    var labN = labMeniu.getElementsByTagName("li");

    //ascundere toate loaboratoarele
    for (var i = 0; i < lab.length; i++) {
        lab[i].style.display = "none";
        labN[i].className = ''
    }

    //afisare doar laborator apelat prin click pe nume laborator
    document.getElementById(numeLab).style.display = "block";
    //activare stilizare(focus) nume laborator curent
    var numeM = document.getElementById(numeMeniu);
    numeM.className = "active";
}