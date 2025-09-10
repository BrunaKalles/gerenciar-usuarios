const usuarios = [
    {
        nome: 'Matheus',
        email: 'matheus@gmail.com'
    },
    {
        nome: 'marcos',
        email: 'marcos@gmail.com'
    },
    {
        nome: 'lucas',
        email: 'lucas@gmail.com'
    },
    {
        nome: 'joão',
        email: 'joao@gmail.com'
    }
];

function retornarUsuarios() {
    return usuarios;
}

function adicionarNovoUsuario(usuario){ // esse usuario que inseri na funcao n precisa declarar
    usuarios.push(usuario);
}




module.exports = {
    retornarUsuarios,
    adicionarNovoUsuario
}