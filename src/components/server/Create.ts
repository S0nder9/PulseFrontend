"use server "
interface RegisterData {
    login:string,
    email:string,
    password:string
}
async function registesrUser(data: RegisterData): Promise<string> {
    const response = await fetch('https://bhsfwwc1-5444.euw.devtunnels.ms/api/auth/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            login: data.login,
            password: data.password,
            email: data.email
        })
    });

    const responseData = await response.json();

    return responseData.token;
}


