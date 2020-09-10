import wretch from 'wretch';
import { END_POINT_URL } from 'utils/constants';

export const getMountsService = () =>
    wretch(`${END_POINT_URL}/mounts`).get().json();