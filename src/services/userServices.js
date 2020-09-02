import wretch from "wretch";

export const deleteUserService = id => wretch(`http://localhost:5000/users/${id}`).delete().res()

export const inputUserService = userdata => wretch(`http://localhost:5000/users`).post({ "username": userdata }).res()

export const getUsersService = () => wretch(`http://localhost:5000/users`).get().json()