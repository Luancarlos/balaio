(function () {
    var pedidos;
    var total = 0;
    var preco = 0;
// pegado os pedidos
    var item = JSON.parse(window.sessionStorage.getItem('pedido_tmp'));

    if (item != null) {

        // convertendo o preco
        preco = parseFloat(item.preco).toFixed(2);

        $("#lista_addItem").append(
            '<li class="media" data-id="' + item.id + '"><div class="media-left">' +
            '<a href="#"><img class="media-object" src="' + item.img + '"></a>' +
            '</div><div class="media-body"><h4 class="media-heading"><strong>' + item.nome + '</strong></h4>' +
            '<p class="descricao">' + item.descricao + '</p>' +
            '<span class="lanche_preco">R$ ' + preco + '</span><div class="incrementador pull-right">' +
            '<i class="fa fa-plus-circle add" ></i><span class="txt_valor">' + item.qtd + '</span><i class="fa fa-minus-circle rm" ></i>' +
            '</div></div></li>');

        // adicionando o preço na tela
        $('#preco').text("R$: " + preco);
        // adicionando o total
        total = preco * item.qtd;
        total = parseFloat(total).toFixed(2);
        $('#total').text('TOTAL R$: ' + total);


    }

// modal observacao

    $(document).on('click', '#abrir_popup', function () {
        $('#popup_observacao').show();
    });
    $(document).on('click', '.popup_sair', function () {
        $('#popup_observacao').hide();
    });


// funcao salvar observacao no array
    $(document).on('click', '#salvar_obs', function () {
        var txt = $('#obs_txt').val();
        if (txt == "") {
            //navigator.notification.alert('Por favor, preencha o campo!',null, 'ATENÇÃO', 'OK')
            alert("Por favor, preencha o campo!");
        }
        else {
            item.obs = txt;
            window.sessionStorage.setItem('pedido_tmp', JSON.stringify(item));
            $('#popup_observacao').hide();
        }

    });


// funcao para incrementar quantidade
    $(document).on('click', '.add', function () {
        var add = item.qtd;
        add++;
        item.qtd = add;

        // adicionando a quantidade
        $('.txt_valor').text(item.qtd);
        // adicionando o total
        total = preco * item.qtd;
        total = parseFloat(total).toFixed(2);
        $('#total').text('TOTAL R$: ' + total);
    });

// funcao para decrementar quantidade
    $(document).on('click', '.rm', function () {
        if (item.qtd > 1) {
            var add = item.qtd;
            add--;
            item.qtd = add;
        }
        // adicionando a quantidade
        $('.txt_valor').text(item.qtd);
        // adicionando o total
        total = preco * item.qtd;
        total = parseFloat(total).toFixed(2);
        $('#total').text('TOTAL R$: ' + total);
    });


// adicinar o pedido em local storage, na lista de pedidos  ("carrinho de compras")
    $(document).on('click', '#btn_adicionar', function () {
        pedidos = JSON.parse(window.localStorage.getItem('pedidos'));
        if (pedidos == null) {
            // adiciona o primeiro item
            window.localStorage.setItem('pedidos', JSON.stringify([item]));
        }
        else {
            // acrecenta um item
            pedidos.push(item);
            window.localStorage.setItem('pedidos', JSON.stringify(pedidos));

        }
        window.location.href = "meu_pedido.html";
    });


})();
