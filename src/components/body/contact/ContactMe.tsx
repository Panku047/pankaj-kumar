"use client";
import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const ContactMe: React.FC = () => {
    const[name, setName] = useState("");
    const[email, setEmail] = useState("")
    const[message, setMessage] = useState("")
    const [enabledSubmitBtn, setEnabledSubmitBtn] = useState(true)

    const onNameChange = (e: any) =>{
        setName(e.target.value)
    }
    const onEmailChange = (e: any) =>{
        setEmail(e.target.value)
    }
    const onMessageChange = (e: any) =>{
        setMessage(e.target.value)
    }

    const onSubmit = () =>{
        console.log(name, email, message)
    }

  return (
    <div id='to-contact' className='m-4'>
        <div className='text-center'>
            Contact Me
        </div>
        <Box
            className='text-center'
            component="form"
            sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
            noValidate
            autoComplete="off"
            >
            <TextField onChange={e => onNameChange(e)} id="outlined-basic" label="Name" variant="outlined" />
            <TextField onChange={e => onEmailChange(e)} className='width=[200px]' id="filled-basic" label="Mobile or Email" variant="outlined" />
            <TextField onChange={e => onMessageChange(e)} id="standard-basic" label="Message/Subject" variant="outlined" />
        </Box>
        <div className='text-center m-4'>
            <Button onClick={onSubmit} variant="outlined">Submit</Button>
        </div>
    </div>
  );
};

export default ContactMe;
