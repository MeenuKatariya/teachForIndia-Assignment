import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import React from 'react'
import { useNavigate } from 'react-router-dom';

function Todos() {
   
    const data=JSON.parse(localStorage.getItem("user"))
    console.log(data)
    const navigate = useNavigate();

    


    return (
       <div>
           {
            data ? <div>
                <h1>Name : {data.name}</h1>
                <p>Email : {data.email}</p>
                <p>Location : {data.location}</p>
                <p>Date : {data.updatedAt}</p>
                <p>Language : {data.language}</p>
                {/* <p>Password : {data.password}</p> */}

               
            </div> : ""
           }
       </div>
    )
}

export default Todos