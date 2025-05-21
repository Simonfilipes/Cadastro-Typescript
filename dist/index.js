"use strict";
var _a, _b;
const usuarios = [];
function criarUser(user) {
    usuarios.push(user);
}
function mostrarUsuarios(lista_user) {
    console.clear();
    for (const user of lista_user) {
        if (user.active === true) {
            console.log(`Usuario ${user.name} tem ${user.age} e está ativo. ${user.email ? `\nemail: ${user.email}` : ""}`);
        }
        else {
            console.log(`Usuario ${user.name} está inativo e não pode ser cadastrado`);
        }
    }
}
function limparUsuarios() {
    usuarios.length = 0;
    console.clear();
}
(_a = document.getElementById('form-usuario')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const age = parseInt(document.getElementById('age').value);
    const email = document.getElementById('email').value;
    const active = document.getElementById('active').checked;
    criarUser({
        name,
        age,
        email: email || undefined,
        active,
    });
    mostrarUsuarios(usuarios);
});
(_b = document.getElementById('btn-limpar')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', () => {
    limparUsuarios();
    mostrarUsuarios(usuarios);
    console.log("Usuarios limpos!");
});
