(function () {

// função abrir o mapa
    $(document).on('click', '#mapa', function () {
        $("#popup_mapa").show();
        abrirMapa();
    });
    $(document).on('click', '.popup_sair', function () {
        $("#popup_mapa").hide();
    });
// $(document).on('click','.popup',function(){
// 	$("#popup_mapa").hide();
// });


    function abrirMapa() {
        var map;
        var latLon = {lat: -34.397, lng: 150.644};

        map = new google.maps.Map(document.getElementById('map'), {
            center: latLon,
            zoom: 15
        });

        var marker = new google.maps.Marker({
            position: latLon,
            map: map,
            title: 'Pizzaria'
        });
    }

})();
