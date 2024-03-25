"use server "
async function registerUser(username: string, email: string, password: string, avatar: File | null): Promise<any> {
    if (!avatar) {
        return "Avatar is required"
    }

    const formData = new FormData();
    formData.append('username', username);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('avatar', avatar);

    const response = await fetch(`${process.env.HOST}/api/users/create`, {
        method: 'POST',
        body: formData
    });
    console.log(response)
console.log(response.body)
    return response.json();
}

export default registerUser;