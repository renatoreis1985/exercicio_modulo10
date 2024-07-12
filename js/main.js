$(document).ready(function () {
    $('#carousel-imagens').slick({
        autoplay: true
    })

    $(document).ready(function() {
        $('#telefone').mask('(00) 0000-0000');
        $('#cep').mask('00000-000');
        $('#cpf').mask('000.000.000-00', {reverse: true});
        $('#endereco').mask('A', {
            translation: {
                'A': {
                    pattern: /[a-zA-Z0-9À-ú\s\-,.]/,
                    recursive: true
    }
}
    });
})

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            endereco: {
                required: true,
            },
            cep: {
                required: false,
            },
            cpf: {
                required: true
            },
        },
        messages: {
            nome: 'Por favor, insira o seu nome'
        },
        submitHandler: function (form) {
            alert("Sua requisição foi enviada para análise, parabéns pela aquisição!");
            form.reset();
            console.log(form)
        },
        invalidHandler: function (evento, validador) {
            alert("Por favor, preencha os campos para prosseguir com a compra!");
        }
    })

    $('.lista-veiculos button').click(function () {
        const destino = $('#contato');
        const nomeVeiculo = $(this).parent().find('h3').text();

        $('#veiculo-interesse').val(nomeVeiculo);

        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)
    })
})