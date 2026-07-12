// ===========================================
// Авторизация
// ===========================================

async function registerUser(data) {

    const { data: authData, error } =
        await supabaseClient.auth.signUp({

            email: data.email,

            password: data.password

        });

    if (error) {

        alert(error.message);

        return null;

    }

    return authData;

}




async function loginUser(email, password) {

    const { data, error } =
        await supabaseClient.auth.signInWithPassword({

            email,

            password

        });

    if (error) {

        alert(error.message);

        return null;

    }

    return data;

}




async function logoutUser() {

    await supabaseClient.auth.signOut();

    window.location.href = "../login.html";

}




async function getCurrentUser() {

    const {

        data

    } = await supabaseClient.auth.getUser();

    return data.user;

}