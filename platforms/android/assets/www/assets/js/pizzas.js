(function () {
    var img_p;


    function pizzasSalgadas() {
        // removendo lista anterio
        $('.lista_pizzas .item-pizza').remove();
        // lista de pizzas
        var lista = [
            {"sabor": "atum", "img": "img/atum/borda_pizza_transp.png"},
            {"sabor": "baiana", "img": "img/baiana/borda_pizza_transp.png"},
            {"sabor": "bacon", "img": "img/bacon/borda_pizza_transp.png"},
            {"sabor": "calabresa", "img": "img/calabresa/borda_pizza_transp.png"},
            {"sabor": "camarao", "img": "img/camarao/borda_pizza_transp.png"},
            {"sabor": "coracao", "img": "img/coracao/borda_pizza_transp.png"},
            {"sabor": "Frango com catupiry", "img": "img/Frango_com_catupiry/borda_pizza_transp.png"},
        ];

        // adicionando as pizzas dinamicamente
        for (var i = 0; i < lista.length; i++) {
            $('.lista_pizzas').append('<div class="item-pizza" style="background-image:url(' + lista[i].img + ')"><span>' + lista[i].sabor + '</span></div>');
        }
    }

    pizzasSalgadas();

    function pizzasDoces() {
// removendo lista anterio
        $('.lista_pizzas .item-pizza').remove();
        // lista de pizzas
        var lista = [
            {"sabor": "Chocolate", "img": "img/atum/borda_pizza_transp.png"},
            {"sabor": "Doce de leite", "img": "img/baiana/borda_pizza_transp.png"},
            {"sabor": "Banana", "img": "img/bacon/borda_pizza_transp.png"},
            {"sabor": "Goiabada", "img": "img/calabresa/borda_pizza_transp.png"},
            {"sabor": "Chocolate branco", "img": "img/camarao/borda_pizza_transp.png"},
            {"sabor": "Chocolate amargo", "img": "img/coracao/borda_pizza_transp.png"},
            {"sabor": "Leite condensado", "img": "img/Frango_com_catupiry/borda_pizza_transp.png"},
        ];

        // adicionando as pizzas dinamicamente
        for (var i = 0; i < lista.length; i++) {
            $('.lista_pizzas').append('<div class="item-pizza" style="background-image:url(' + lista[i].img + ')"><span>' + lista[i].sabor + '</span></div>');
        }
    }


// tornar as imagens moveis, em qualquer parte da tela
    function ImgFlutuante() {
        $(document).on('touchstart', '.item-pizza', function () {
            img_p = $(this).css('background-image');
            // retirando os caracter que não irão servir
            img_p = img_p.replace('url(', '').replace(')', '').replace(/\"/gi, "");

        });


        $(".item-pizza").draggable({
            revert: "invalid", // when not dropped, the item will revert back to its initial position
            containment: "document",
            helper: "clone",
            cursor: "move",
        });

        $('.result_pizza img').droppable({
            accept: ".item-pizza",
            // classes: {
            //   "ui-droppable-hover": "ui-state-hover"
            // },
            drop: function (event, ui) {
                console.log(img_p);
                console.log(ui);
                console.log(event);

                // adicionando a imagem
                $(this).css({"background-image": "url(" + img_p + ")", "background-size": "cover"});
            }
        });

        // soltar a pizza
        $(document).on('touchend', '.item-pizza', function () {
            console.log("soltou");

        });
    }

    ImgFlutuante();


// divisoes

    $("#slider-range-max").slider({
        range: "max",
        min: 1,
        max: 6,
        value: 1,
        slide: function (event, ui) {
            console.log(ui.value);
            var valor = ui.value;

            switch (valor) {
                case 1:
                    $('.result_pizza').html("<img src='img/divisoes/borda_pizza_transp.png' class='item1'>");
                    ImgFlutuante();
                    break;
                case 2:
                    $('.result_pizza').html("<img src='img/divisoes/2-p2.png' id='d1'><img src='img/divisoes/2-p1.png' id='d2'>");
                    ImgFlutuante();
                    break;
                case 3:
                    // $('.result_pizza').html("<img src='img/divisoes/3-p1.png' id='e1'><img src='img/divisoes/3-p2.png' id='e2'><img src='img/divisoes/3-p3.png' id='e3'>");
                    // ImgFlutuante();
                    break;
                case 4:
                    $('#borda').attr("src", "img/divisoes/4.png");
                    break;
                case 5:
                    $('#borda').attr("src", "img/divisoes/5.png");
                    break;
                case 6:
                    $('#borda').attr("src", "img/divisoes/6.png");
                    break;
            }
        }
    });


// escolhe tipo de pizza doces ou salgadas
    $(document).on('click', '#salgadas', function () {
        $(this).find("p").addClass('ativado');
        $("#doces").find("p").removeClass('ativado');
        pizzasSalgadas();
        ImgFlutuante();
    });
    $(document).on('click', '#doces', function () {
        $(this).find("p").addClass('ativado');
        $("#salgadas").find("p").removeClass('ativado');
        pizzasDoces();
        ImgFlutuante();
    });


})();
