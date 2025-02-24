import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const ContactMe: React.FC = () => {
  return (
    <div id='to-contact'>
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
            <TextField id="outlined-basic" label="Name" variant="outlined" />
            <TextField id="filled-basic" label="Mobile or Email" variant="outlined" />
            <TextField id="standard-basic" label="Message" variant="outlined" />
        </Box>
        <div className='text-center'>
            <Button variant="text">Submit</Button>
        </div>
    </div>
  );
};

export default ContactMe;
