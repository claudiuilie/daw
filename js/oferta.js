    //Data de expirare
    var dataOferta = new Date("May 16, 2020 00:00:00").getTime();

    // elementele ceasului
    var dashZile = document.getElementsByClassName("zile_dash")[0];
    var dashOre = document.getElementsByClassName("ore_dash")[0];
    var dashMinute = document.getElementsByClassName("minute_dash")[0];
    var dashSecunde = document.getElementsByClassName("secunde_dash")[0];

    var digitZile = dashZile.getElementsByClassName("digit")[0];
    var digitOre = dashOre.getElementsByClassName("digit")[0];
    var digitMinute = dashMinute.getElementsByClassName("digit")[0];
    var digitSecunde = dashSecunde.getElementsByClassName("digit")[0];

    // Update la fiecare secunda
    var intervalOferta = setInterval(function () {
        // data curenta
        var data = new Date().getTime();

        // calcul data expirare - data curenta
        var distance = dataOferta - data;

        // transformare milisecunde in zile/ore/minute/secunde
        var zile = Math.floor(distance / (1000 * 60 * 60 * 24));
        var ore = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minute = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var secunde = Math.floor((distance % (1000 * 60)) / 1000);

        // afisare timp calculat, actualizat la fiecare secunda
        digitZile.innerHTML = zile;
        digitOre.innerHTML = ore;
        digitMinute.innerHTML = minute;
        digitSecunde.innerHTML = secunde;

        // distrugere interval la expirarea timpului
        if (distance < 0) {
            clearInterval(intervalOferta);
            digitZile.innerHTML = '00';
            digitOre.innerHTML = '00';
            digitMinute.innerHTML = '00';
            digitSecunde.innerHTML = '00';
        }
    }, 1000);


