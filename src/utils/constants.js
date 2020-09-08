export const DELETE_COLUMN = "Delete";

export const DELETE_BUTTON = "Delete";

export const PAGES_NAV = {
  USER_MOUNTS_NAV: "User Mounts",
  USERS_NAV: "Users",
  MOUNTS_NAV: "Mounts",
};

export const EDIT_NAME_HEADING = "Edit Username";

export const INPUT_USER_HEADING = "Input User";

export const ADD_BUTTON = "Add";

export const USER_COLUMN = "User";

export const EDIT_COLUMN = "Edit";

export const EDIT_BUTTON = "Edit";

export const UPDATE_BUTTON = "Update";

export const CLOSE_BUTTON = "Close";

export const MIN_USERNAME_LEN = 3;

export const MIN_PASSWORD_LEN = 3;

export const MOUNT_COLUMN = "Mount";

export const USERNAME_TEXT = "Username";

export const SEARCH_USER = "Search";

export const PASSWORD_TEXT = "Password";

export const LOGIN_BUTTON = "Login";

export const ADD_USER_BUTTON = "Add User";

export const EXPANSION_COLUMN = "Expansion";

export const ALL_EXPANSIONS = -1;

export const MISC_EXPANSION = 0;

export const ARR_EXPANSION = 2;

export const HW_EXPANSION = 3;

export const SB_EXPANSION = 4;

export const SHB_EXPANSION = 5;

export const EXPANSION_MAP = {
  [ALL_EXPANSIONS]: "All",
  [MISC_EXPANSION]: "Misc.",
  [ARR_EXPANSION]: "A Realm Reborn",
  [HW_EXPANSION]: "Heavensward",
  [SB_EXPANSION]: "Stormblood",
  [SHB_EXPANSION]: "Shadowbringers",
};

export const ROWS_PER_PAGE_OPTIONS = [5, 10, 15];

// Heroku https://mount-recorder-server.herokuapp.com
// Local http://localhost:5000
export const END_POINT_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:5000"
    : "https://mount-recorder-server.herokuapp.com";
