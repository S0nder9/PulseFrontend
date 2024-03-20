   "use server"
   import axios from 'axios';
 interface LoginData {
    login: string
    password: string
}
   async function sendUserLoginData(data: LoginData) {
    // Import axios
    axios.post('http://127.0.0.1:8000/api/users/login', {
        login: data.login,
        password: data.password 
    })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
}
export default sendUserLoginData;