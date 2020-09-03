import wretch from "wretch";

export const deleteUserService = id => wretch(`https://mount-recorder-server.herokuapp.com/users/${id}`).delete().res()

export const inputUserService = userdata => wretch(`https://mount-recorder-server.herokuapp.com/users`).post({ "username": userdata }).res()

export const getUsersService = () => wretch(`https://mount-recorder-server.herokuapp.com/users`).get().json()