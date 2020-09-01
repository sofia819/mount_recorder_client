import React, {useState} from "react";
import { Button } from '@material-ui/core';
import { inputUser as insertUser} from '../services/userServices';

const InputUser = () => 
{
    const [username, setUsername] = useState("");

    const onSubmitForm = async e =>
    {
        e.preventDefault();
        try 
        {
            const inputUser = async (userdata) => {
                insertUser(userdata)
                .then(() => {
                    
                })
                .catch((err) => console.log(err));
            };

            // const body = { username };
            // const response = await fetch("http://localhost:5000/users", 
            // {
            //     method: "POST",
            //     headers: { "Content-Type": "application/json" },
            //     body: JSON.stringify(body)
            // });

            window.location = "/";
        } 
        catch (err) 
        {
            console.error(err.message);
        }
    }

    return (
        <>
            <h1 className="text-center mt-5">Input User</h1>
            <form className="d-flex mt-5" onSubmit={onSubmitForm}>
                <input type="text" 
                className="form-control" 
                value={username}
                onChange={e => setUsername(e.target.value)} />
                <Button 
                    variant="contained" 
                    color="primary">Add
                </Button>
            </form>
        </>
    );
};

export default InputUser;