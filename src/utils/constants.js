export const DELETE_BUTTON = 'Delete';

export const USER_MOUNTS_NAV_KEY = 'USER_MOUNTS_NAV';

export const PAGES_TAB_NAMES = {
  USER_MOUNTS_NAV: 'User Mounts',
  USERS_NAV: 'Users',
  MOUNTS_NAV: 'Mounts',
  HELP_NAV: 'Help',
};

export const PAGES_NAV = {
  USER_MOUNTS_NAV: 'UserMounts',
  USERS_NAV: 'Users',
  MOUNTS_NAV: 'Mounts',
  HELP_NAV: 'Help',
};

export const EDIT_NAME_HEADING = 'Edit Username';

export const INPUT_USER_HEADING = 'Input User';

export const ADD_BUTTON = 'Add';

export const USER_COLUMN = 'User';

export const UPDATE_BUTTON = 'Update';

export const CLOSE_BUTTON = 'Close';

export const MIN_USERNAME_LEN = 3;

export const MIN_PASSWORD_LEN = 8;

export const IMAGE_COLUMN = 'Image';

export const MOUNT_COLUMN = 'Mount';

export const USERNAME_TEXT = 'Username';

export const SEARCH_USER_TEXT = 'Search';

export const SEARCH_USER_TOOLTIP = 'Min ' + MIN_USERNAME_LEN + ' chars';

export const PASSWORD_TEXT = 'Password';

export const LOGIN_BUTTON = 'Login';

export const ADD_USER_BUTTON = 'Add User';

export const EXPANSION_COLUMN = 'Expansion';

export const TABLE_DIMENSIONS = {
  users: {
    height: '80px',
    width: '100px',
  },
  mounts: {
    height: '80px',
    width: '100px',
  },
  expansions: {
    height: '80px',
    width: '120px',
  },
};

// Must be the smallest number
export const ALL_EXPANSIONS = -1;

export const MISC_EXPANSION = 0;

export const ARR_EXPANSION = 2;

export const HW_EXPANSION = 3;

export const SB_EXPANSION = 4;

export const SHB_EXPANSION = 5;

export const EXPANSION_MAP = {
  [ALL_EXPANSIONS]: 'All',
  [MISC_EXPANSION]: 'Misc',
  [ARR_EXPANSION]: 'ARealmReborn',
  [HW_EXPANSION]: 'Heavensward',
  [SB_EXPANSION]: 'Stormblood',
  [SHB_EXPANSION]: 'Shadowbringers',
};

export const EXPANSION_TAB_NAMES = {
  [ALL_EXPANSIONS]: 'All',
  [MISC_EXPANSION]: 'Misc.',
  [ARR_EXPANSION]: 'A Realm Reborn',
  [HW_EXPANSION]: 'Heavensward',
  [SB_EXPANSION]: 'Stormblood',
  [SHB_EXPANSION]: 'Shadowbringers',
};

export const ROWS_PER_PAGE_OPTIONS = [5, 10, 15];

export const ALERT_SUCCESS = 'Success';

export const ALERT_WARNING_SAME_NAME = 'Same name';

export const ALERT_ERROR_SHORT_NAME = 'Short Name';

export const ALERT_ERROR_DUPE_NAME = 'Duplicate Name';

export const ALERT_ERROR_UNEXPECTED = 'Unexpected Error';

export const ALERT_SUCCESS_SEVERITY = 'success';

export const ALERT_WARNING_SEVERITY = 'warning';

export const ALERT_ERROR_SEVERITY = 'error';

export const ALERT_CLOSE = 'Close';

export const ALERT_MESSAGE = {
  [ALERT_SUCCESS]: 'Success!',
  [ALERT_WARNING_SAME_NAME]: 'There was no change in your username.',
  [ALERT_ERROR_SHORT_NAME]: `The username must be at least ${MIN_USERNAME_LEN} characters long.`,
  [ALERT_ERROR_DUPE_NAME]: 'Usernames must be unique.',
  [ALERT_ERROR_UNEXPECTED]: 'There was an unexpected error.',
};

export const ALERT_MESSAGE_DURATION = 3000;

export const NOT_OWNED_BY_USERS = 'Users who do not have';

// Heroku https://mount-recorder-server.herokuapp.com
// Local http://localhost:5000
export const END_POINT_URL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:5000'
    : 'https://mount-recorder-server.herokuapp.com';
