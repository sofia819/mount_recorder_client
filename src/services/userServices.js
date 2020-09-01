import wretch from "wretch";

export const deleteUser = id => wretch(`http://localhost:5000/users/${id}`).delete().res()

export const inputUser = userdata => wretch(`http://localhost:5000/users`).post().res()

export const getUsers = () => wretch(`http://localhost:5000/users`).get().json()