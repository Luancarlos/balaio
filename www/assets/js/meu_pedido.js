(function () {
    var total = 0;
    // Verificando se existe item em pedidos
    var item = JSON.parse(window.localStorage.getItem('pedidos'));


    function listandoItens() {
        // limpados para não duplicar
        $('#lista_meupedido li').remove();
        // zerando variavel
        total = 0;


        // adicionanado de forma dinamica
        for (var i = 0; i < item.length; i++) {
            //pegando preco e convertendo duas casas decimais
            var preco = parseFloat(item[i].preco).toFixed(2);

            $("#lista_meupedido").append(
                '<li class="media" data-id="' + item[i].id + '"><div class="media-left">' +
                '<a href="#"><img class="media-object" src="' + item[i].img + '"><i class="fa fa-trash remover_item"></i></a>' +
                '</div><div class="media-body"><h4 class="media-heading"><strong>' + item[i].nome + '</strong></h4>' +
                '<p class="descricao">' + item[i].descricao + '</p>' +
                '<span class="lanche_preco">R$ ' + preco + '</span><span class="txt_qtd pull-right">' + item[i].qtd + '</span></div></li>');

            total = item[i].preco * item[i].qtd + total;
        }

        // adicionando o total
        total = parseFloat(total).toFixed(2);
        $('#total').text("TOTAL R$ " + total);
    }


    if (item == null) {
        // escondendo alguns itens
        $('.existeItem').hide();
        $('footer#meuPedido').hide();

        $('.naoExiste').show();

    }
    else {
        // escondendo alguns itens
        $('.existeItem').show();
        $('footer#meuPedido').show();

        $('.naoExiste').hide();
        // listando os produtos
        listandoItens();
    }


    // remover item
    $(document).on('click', '.remover_item', function () {
        var id = $(this).closest('li.media').attr('data-id');
        var r = confirm("Deseja realmente excluir esse produto?");

        if (r == true) {
            apagar();
        }
        //navigator.notification.confirm("Deseja realmente excluir esse produto?",apagar, "ATENÇÃO", ["SIM","NÃO"]);

        function apagar() {
            // remover
            for (var i = 0; i < item.length; i++) {
                if (item[i].id == id) {
                    console.log(item[i]);
                    item.splice(i, 1);
                }
            }
            // atualizado storage
            window.localStorage.setItem('pedidos', JSON.stringify(item));
            // pegado dados atualizados
            item = JSON.parse(window.localStorage.getItem('pedidos'));
            //listandos dados atualizados
            listandoItens();

            // remover localstorage quando não existir mais produtos
            if (item.length == 0) {
                window.localStorage.removeItem('pedidos');
                window.location.reload();
            }
        }

    });


    // função de retirar o produto
    $(document).on('click', '#receber', function () {
        $('#retirar').removeClass("ativado");
        $(this).addClass('ativado');
        // adicioanando em session se ira receber ou retirar pedido
        window.sessionStorage.setItem('entrega', 'receber em casa');
    });

    $(document).on('click', '#retirar', function () {
        $('#receber').removeClass("ativado");
        $(this).addClass('ativado');
        // adicioanando em session se ira receber ou retirar pedido
        window.sessionStorage.setItem('entrega', 'retirar');
    });


})();
