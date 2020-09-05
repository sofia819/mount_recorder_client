import wretch from "wretch";
import { END_POINT_URL } from "../utils/constants";

export const deleteUserService = (id, auth) =>
  wretch(`${END_POINT_URL}users/${id}`).post(auth).json();

export const inputUserService = (userdata) =>
  wretch(`${END_POINT_URL}users`).post({ username: userdata }).json();

export const getUsersService = () =>
  wretch(`${END_POINT_URL}users`).get().json();

export const updateUserService = (id, userdata) =>
  wretch(`${END_POINT_URL}users/${id}`)
    .json({ username: userdata })
    .put()
    .res();
