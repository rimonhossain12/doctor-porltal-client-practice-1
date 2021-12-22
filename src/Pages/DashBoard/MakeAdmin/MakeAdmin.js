import { Alert, Button, TextField } from '@mui/material';
import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const handleOnBlur = e => {
        setEmail(e.target.value);
    }

    const handleOnSubmit = e => {
        const user = { email };
        fetch('http://localhost:5000/user/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    console.log(data);
                    setSuccess(true);
                    // setEmail(' ');
                }
            })
        e.preventDefault();
    }
    return (
        <div>
            <h2>Make an Admin</h2>
            <form onSubmit={handleOnSubmit}>
                <TextField
                    sx={{ width: '50%' }}
                    name="email"
                    onBlur={handleOnBlur}
                    label="Email"
                    variant="standard" />
                <br />
                <Button sx={{ m: 1 }} type="Submit" variant='contained'>Make Admin</Button>
                {success && <Alert severity="success">Admin Made Successfully</Alert>
                }
            </form>

        </div>
    );
};

export default MakeAdmin;