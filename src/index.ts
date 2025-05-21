interface Usuario {
    name: string;
    age: number;
    email?: string;
    active?: boolean;
}

const usuarios: Usuario[] = [];

function criarUser(user: Usuario): void {
    usuarios.push (user)
}

function mostrarUsuarios(lista_user: Usuario[]): void {
    console.clear();
    for (const user of lista_user) {
        if (user.active === true) {
        console.log(`Usuario ${user.name} tem ${user.age} e está ativo. ${user.email? `\nemail: ${user.email}`: ""}`);
        } else {
            console.log(`Usuario ${user.name} está inativo e não pode ser cadastrado`);
        }
    }
}

function limparUsuarios(): void {
    usuarios.length = 0;
    console.clear();
}

document.getElementById('form-usuario')?.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = (document.getElementById('name') as HTMLInputElement).value;
    const age = parseInt((document.getElementById('age') as HTMLInputElement).value);
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const active = (document.getElementById('active') as HTMLInputElement).checked;

criarUser({
    name,
    age,
    email: email || undefined,
    active,
})

mostrarUsuarios(usuarios);

});

document.getElementById('btn-limpar')?.addEventListener('click', () => {
    limparUsuarios();
    mostrarUsuarios(usuarios);
    console.log("Usuarios limpos!");
})