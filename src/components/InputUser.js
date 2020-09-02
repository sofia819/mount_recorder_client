import React, {useState} from "react";
import { Button, TextField } from '@material-ui/core';
import { inputUserService} from '../services/userServices';

const InputUser = () => 
{
    const [username, setUsername] = useState("");
    
    const inputUser = async e => {
        inputUserService(username)
          .then(() => {
            window.location = "/";
          })
          .catch((err) => console.log(err));
    };

    return (
        <>
        <h1>Input User</h1>
        <TextField label="username" 
        variant="outlined" 
        value={username}
        onChange={e => setUsername(e.target.value)} />
        <Button onClick={inputUser}
            variant="contained" 
            color="primary">Add
        </Button>
        </>
    );
};

export default InputUser;