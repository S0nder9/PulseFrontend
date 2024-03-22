"use client"
import authUser from '@/components/server/Auth';
import React, { useState } from 'react';


export default function AuthPage() {
  const [userData, setUserData] = useState<any>(null);

  async function handleAuthUser() {
    try {
      const response = await authUser();
      console.log(response)
      setUserData(response);
    } catch (error) {
      alert(error);
    }
  }

  return (
    <div>
      <button onClick={handleAuthUser}>Authenticate User</button>
      {userData && (
        <div>
          <p>Age: {userData.age}</p>
          <p>First Name: {userData.first_name}</p>
          <p>Last Name: {userData.last_name}</p>
          <p>Father Name: {userData.father_name}</p>
        </div>
      )}
    </div>
  );
}

