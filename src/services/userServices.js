import wretch from "wretch";
import { END_POINT_URL } from "../utils/constants";

export const deleteUserService = (id) =>
  wretch(`${END_POINT_URL}users/${id}`).delete().res();

export const inputUserService = (userdata) =>
  wretch(`${END_POINT_URL}users`).post({ username: userdata }).res();

export const getUsersService = () =>
  wretch(`${END_POINT_URL}users`).get().json();

export const updateUserService = (id, userdata) =>
  wretch(`${END_POINT_URL}users/${id}`)
    .json({ username: userdata })
    .put()
    .res();
