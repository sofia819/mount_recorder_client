import React, {useEffect, useState } from "react";

const ListUsers = () =>
{
    const [users, setUsers] = useState([]);

    //delete user function
    const deleteUser = async(id) =>{
        try 
        {
            const deleteUser = await fetch(`http://localhost:5000/users/${id}`, {
                method: "DELETE"
            });
        
            setUsers(users.filter(user => user.user_id !== id));
        } 
        catch (err) 
        {
            console.error(err.message);
        }
    }

    const getUsers = async() =>{
        try 
        {
            const response = await fetch("http://localhost:5000/users");//Need to change for heroku
            const jsonData = await response.json();

            setUsers(jsonData);
        } 
        catch (err) 
        {
            console.error(err.message);
        }
    }

    useEffect(() =>{
        getUsers();
    }, []);

    return(
        <>
            <table className="table table-dark table-hover mt-5 text-center">
                <thead>
                <tr>
                    <th>Username</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                    {/*<tr>
                    <td>John</td>
                    <td>Doe</td>
                    <td>john@example.com</td>
                    </tr>*/}
                    {users.map(user =>(
                        <tr key={user.user_id}>
                            <td>{user.username}</td>
                            <td>Edit</td>
                            <td><button 
                                className="btn btn-danger" 
                                onClick={() => deleteUser(user.user_id)}>
                                Delete
                            </button></td>
                        </tr>
                    ))}
                
                </tbody>
            </table>
        </>
    )
};

export default ListUsers;