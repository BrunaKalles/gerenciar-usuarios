const { retornarUsuarios, adicionarNovoUsuario } = require('../src/gerenciarUsuarios');
const { expect } = require('chai');


describe('Testar as funções de Gestão de usuários', function(){
    it('Validar que posso adicionar um novo nome de usuário na lista', function(){
        //1. Adicionar um novo nome na lista de usuários
        adicionarNovoUsuario(
            {
                nome: 'Maria',
                email: 'maria@gmail.com'
            },
        );

        //2. Retornar a lista de usuários na caixa lista de usuários
        const listaDeUsuarios = retornarUsuarios();

        //3. Comparar se o novo nome está no fim da lista de usuários
       // expect(listaDeUsuarios.at(-1)).to.equal('Maria'); -> Ultimo nome
       // expect(listaDeUsuarios.at(-1).nome).to.equal('Maria'); //-> ultimo nome que entrou no objeto

        expect(listaDeUsuarios.at(-1)).to.eql({ //to.deep.equal | nesse exemplo vai comparar todo o objeto e não apenas um item.
            nome: 'Maria',
            email: 'maria@gmail.com'
        })

    });

});
