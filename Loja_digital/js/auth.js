async function login(email, senha) {
    const { data, error } = await supabaseClient.auth.signInWithPassword({
        email: email,
        password: senha
    });

    return { data, error };
}

async function getUser() {
    const { data: { user }, error } = await supabaseClient.auth.getUser();

    if (error) {
        return null;
    }

    return user;
}

async function logout() {
    const { error } = await supabaseClient.auth.signOut();

    if (error) {
        console.error("Erro ao sair:", error.message);
    }
}
async function protegerPagina() {
    const user = await getUser();

    if (!user) {
        window.location.href = "login.html";
    }
}