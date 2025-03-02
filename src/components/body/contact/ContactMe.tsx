"use client";
import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Snackbar, { SnackbarCloseReason } from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

import '../style/styles.css'
import ContactAPI from '@/components/api/ContactAPI';
import { SUCCESS_RESPONSE } from '@/components/constants/Constants';

const ContactMe: React.FC = () => {
    const[name, setName] = useState("");
    const[email, setEmail] = useState("");
    const[message, setMessage] = useState("");
    const [enabledSubmitBtn, setEnabledSubmitBtn] = useState(true)
    const [errors, setErrors] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [open, setOpen] = React.useState(false);
  
    const handleClose = (
      event?: React.SyntheticEvent | Event,
      reason?: SnackbarCloseReason,
    ) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpen(false);
    };

     // Validation for Name (Only letters, Min 5, Max 20)
    const validateName = (value: string) => {
        const regex = /^[A-Za-z\s]{2,20}$/;
            if (!regex.test(value)) {
            return "Please enter your name";
        }
        return "";
    };

    // Validation for Mobile or Email
    const validateMobileOrEmail = (value: string) => {
        const mobileRegex = /^[6-9]\d{9}$/; // Indian mobile number validation (10-digit, starts with 6-9)
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // Basic email validation

        if (!mobileRegex.test(value) && !emailRegex.test(value)) {
            return "Enter a valid email or a 10-digit mobile number.";
        }
        return "";
    };

    // Validation for Message (Min 2, Max 50 characters)
    const validateMessage = (value: string) => {
        if (value.length < 1 || value.length > 50) {
            return `Limit exceeded: ${value.length} / 50 character`;
        }
        return "";
    };


    const onNameChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        const value = e.target.value;
        setName(value);
    }
    const onEmailChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        const value = e.target.value;
        setEmail(value);
    }
    const onMessageChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        const value = e.target.value;
        setMessage(value);
    }

    const clearAll = () =>{
        setName("");
        setEmail("");
        setMessage("");
    }

    useEffect(() =>{
        if(name && email && message){
            setEnabledSubmitBtn(false)
        }else{
            setEnabledSubmitBtn(true)
        }
    },[name, email, message])

    const onSubmitBtn = async () =>{
    const newErrors = {
        name: validateName(name),
        email: validateMobileOrEmail(email),
        message: validateMessage(message),
    };

    setErrors(newErrors); // Update errors

    // Use newErrors instead of waiting for state to update
    if (!newErrors.name && !newErrors.email && !newErrors.message) {
        setOpen(true)
        clearAll();
        await ContactAPI(name, email, message);
        setErrors({ name: "", email: "", message: "" });
    } else {
        console.log("Validation failed:", newErrors);
    }
    }

  return (
    <div id='to-contact' className='bg-white pt-2 pb-4'>
        <div className='page-heading'>
            Contact
        </div>
        <Box
            className='text-center'
            component="form"
            sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
            noValidate
            autoComplete="off"
            >
                <TextField 
                    onChange={(e: React.ChangeEvent<HTMLInputElement>)  => onNameChange(e)} 
                    id="outlined-basic" 
                    label="Name" 
                    value={name}
                    variant="outlined" 
                    error={!!errors.name}
                    helperText={errors.name}
                />
                <TextField 
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => onEmailChange(e)} 
                    className='width=[200px]' 
                    id="filled-basic" 
                    value={email}
                    label="Mobile or Email" 
                    variant="outlined" 
                    error={!!errors.email}
                    helperText={errors.email}
                />
                <TextField 
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => onMessageChange(e)} 
                    id="standard-basic" 
                    label="Message/Subject" 
                    value={message}
                    variant="outlined" 
                    error={!!errors.message}
                    helperText={errors.message}
                />
        </Box>
        <div className='text-center'>
            <Button onClick={ onSubmitBtn} disabled={enabledSubmitBtn} variant="outlined">Submit</Button>
            <Snackbar 
                open={open} 
                autoHideDuration={3000} 
                onClose={handleClose}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            >
                <Alert
                    onClose={handleClose}
                    severity="success"
                    variant="filled"
                    sx={{ width: '100%' }}
                >
                    {SUCCESS_RESPONSE}
                </Alert>
            </Snackbar>
        </div>
    </div>
  );
};

export default ContactMe;
