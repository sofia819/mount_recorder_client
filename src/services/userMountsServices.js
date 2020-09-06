import wretch from "wretch";
import { END_POINT_URL } from "../utils/constants";

export const getUserMountsService = () =>
    wretch(`${END_POINT_URL}user-mounts`).get().json();
    

export const getUserMountsByIdService = (id) =>
    wretch(`${END_POINT_URL}user-mounts/${id}`).get().json();

export const updateUserMounts = (userId, mountIds) =>
    wretch(`${END_POINT_URL}user-mounts/${userId}`)
    .json({ mountIds })
    .put()