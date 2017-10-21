(function () {
// adicionando os itens
    var item = [
        {"id": "1", "nome": "SUCO DE ABACAXI", "descricao": "500ML", "preco": "5", "img": "img/suco.jpg"},
        {"id": "2", "nome": "SUCO DE ABACAXI", "descricao": "400ML", "preco": "4", "img": "img/suco.jpg"},
        {"id": "3", "nome": "SUCO DE ABACAXI", "descricao": "300ML", "preco": "3", "img": "img/suco.jpg"},

    ];


// adicionanado de forma dinamica
    for (var i = 0; i < item.length; i++) {
        //pegando preco e convertendo duas casas decimais
        var preco = parseFloat(item[i].preco).toFixed(2);

        $("#lista_bebidas").append(
            '<li class="media" data-id="' + item[i].id + '"><div class="media-left">' +
            '<a href="#"><img class="media-object" src="' + item[i].img + '"></a>' +
            '</div><div class="media-body"><h4 class="media-heading"><strong>' + item[i].nome + '</strong></h4>' +
            '<p class="descricao">' + item[i].descricao + '</p>' +
            '<p class="lanche_preco">R$ ' + preco + '</p></div></li>');
    }


// ao clicar em um lanche pega o id, e suas infomações e passa pra outra tela
    $(document).on('click', '.media', function () {
        var id = $(this).attr('data-id');

        for (var i = 0; i < item.length; i++) {
            if (item[i].id == id) {
                itemSelect = {
                    "id": item[i].id,
                    "nome": item[i].nome,
                    "descricao": item[i].descricao,
                    "preco": item[i].preco,
                    "img": item[i].img,
                    "qtd": 1,
                    "obs": null
                };
            }
        }

        window.sessionStorage.setItem('pedido_tmp', JSON.stringify(itemSelect));
        window.location.href = "addItem.html";
    });


})();
