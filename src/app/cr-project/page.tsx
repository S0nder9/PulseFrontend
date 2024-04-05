'use client'
import React, { use } from 'react'

type Props = {}

const CreateProjectsPage = (userdata: userData) => {
    const userData = JSON.parse(localStorage.getItem('userData' ) || "{}") 
/*
если что вот localstorage 
 {
    id: 3,
    job_title_id: 6,
    age: 35,
    first_name: 'Степанов',
    last_name: 'Олег',
    father_name: 'Дмитреевич',
    position: 'работник'
  }
*/

   return (
<section>
    <input>
    </input>
</section>
    );
}


export default CreateProjectsPage