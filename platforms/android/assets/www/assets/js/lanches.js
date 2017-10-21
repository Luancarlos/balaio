(function () {
    var itemSelect = null;
// adicionando os itens
    var item = [
        {
            "id": "1",
            "nome": "Hamburguer 01",
            "descricao": "HAMBURGUER, SALADA OVO, QUEIJO, PRESUNTO TOMATE, MILHO",
            "preco": "17",
            "img": "img/hamburguer.png"
        },
        {
            "id": "2",
            "nome": "Hamburguer 02",
            "descricao": "HAMBURGUER, SALADA OVO, QUEIJO, PRESUNTO TOMATE, MILHO",
            "preco": "14",
            "img": "img/hamburguer.png"
        },
        {
            "id": "3",
            "nome": "Hamburguer 03",
            "descricao": "HAMBURGUER, SALADA OVO, QUEIJO, PRESUNTO TOMATE, MILHO",
            "preco": "16",
            "img": "img/hamburguer.png"
        }
    ];


// adicionanado de forma dinamica
    for (var i = 0; i < item.length; i++) {
        //pegando preco e convertendo duas casas decimais
        var preco = parseFloat(item[i].preco).toFixed(2);

        $("#lista_laches").append(
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
