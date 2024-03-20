"use server"
import axios from 'axios';
import { cookies } from 'next/headers';
async function authUser(): Promise<OutCome> {
    // Import axios
    return axios.get('http://127.0.0.1:8000/api/users/auth', {
        withCredentials: true,
        headers: {
            'Cookie': 'jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjozNiwiZXhwIjoxNzExNzMwMDU2LCJpYXQiOjE3MTA4NjYwNTZ9.-7wepW1XWmXZTW1hmc7J7awbGR6bYDy1odoQGcB8YnY'
        }
    })
        .then(function (response) {
            console.log(response.data);
            return response.data.userData;
        })
        .catch(function (error) {
            console.log(error);
            return error.message;
        });
}


export default authUser;