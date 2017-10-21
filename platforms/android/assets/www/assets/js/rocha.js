(function () {

    var attr = null;
    var status = null;
// abrir  sideMenu
    $(document).on('click', '.abrir', function () {
        attr = $(this).attr('data-abrir');
        mostrarSide();
        status = 1;
    })
//fechar sideMenu
    $(document).on('click', '.fechar', function () {
        esconderSide();
        status = 0;
    });
    $(document).on('click', '.conteudo', function () {
        if (status == 1) {
            esconderSide();
            status = 0;
        }
    });

    function mostrarSide() {
        $("#" + attr).css("width", "70%");
        //$('.conteudo').css('marginLeft',"70%");
        $('header').css('marginLeft', "70%");
    }

    function esconderSide() {
        $("#" + attr).css("width", "0px");
        //$('.conteudo').css('marginLeft',"0px");
        $('header').css('marginLeft', "0");
    }


})();
