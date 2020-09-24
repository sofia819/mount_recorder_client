import UserMountsInstructionsSelectUser from 'utils/Assets/UserMountsInstructions/UserMountsInstructionsSelectUser.gif';
import UserMountsInstructionsChangeOwned from 'utils/Assets/UserMountsInstructions/UserMountsInstructionsChangeOwned.gif';
import UserMountsInstructionsConfirmChanges from 'utils/Assets/UserMountsInstructions/UserMountsInstructionsConfirmChanges.gif';
import UserMountsInstructionsExpansionFilter from 'utils/Assets/UserMountsInstructions/UserMountsInstructionsExpansionFilter.gif';
import UserMountsInstructionsSearchUser from 'utils/Assets/UserMountsInstructions/UserMountsInstructionsSearchUser.gif';

import UsersInstructionsSelectUser from 'utils/Assets/UsersInstructions/UsersInstructionsSelectUser.gif';
import UsersInstructionsEditUsername from 'utils/Assets/UsersInstructions/UsersInstructionsEditUsername.gif';
import UsersInstructionsConfirmChanges from 'utils/Assets/UsersInstructions/UsersInstructionsConfirmChanges.gif';
import UsersInstructionsAddUser from 'utils/Assets/UsersInstructions/UsersInstructionsAddUser.gif';
import UsersInstructionsSearchUser from 'utils/Assets/UsersInstructions/UsersInstructionsSearchUser.gif';

import MountsInstructionsChangePage from 'utils/Assets/MountsInstructions/MountsInstructionsChangePage.gif';
import MountsInstructionsChangeRow from 'utils/Assets/MountsInstructions/MountsInstructionsChangeRow.gif';
import MountsInstructionsExpansionFilter from 'utils/Assets/MountsInstructions/MountsInstructionsExpansionFilter.gif';

export const BACK_BUTTON = 'Back';

export const NEXT_BUTTON = 'Next';

export const FINISH_BUTTON = 'Finish';

export const RESET_BUTTON = 'Reset';

export const UNKNOWN_STEP = 'Unknown stepIndex';

export const USER_MOUNTS_STEPPER_STEPS = [
  'Selecting a user',
  'Editing owned mounts',
  'Saving or discarding changes',
  'Selecting an expansion',
  'Searching for a user',
];

export const USER_MOUNTS_STEPPER_INSTRUCTIONS = {
  0: {
    imagePath: UserMountsInstructionsSelectUser,
    altText: 'How to select',
  },
  1: {
    imagePath: UserMountsInstructionsChangeOwned,
    altText: 'How to edit',
  },
  2: {
    imagePath: UserMountsInstructionsConfirmChanges,
    altText: "How to save or discard edit.",
  },
  3: {
    imagePath: UserMountsInstructionsExpansionFilter,
    altText: 'How to change expansion.',
  },
  4: {
    imagePath: UserMountsInstructionsSearchUser,
    altText: 'How to search.',
  },
};

export const USERS_STEPPER_STEPS = [
  'Selecting a user',
  'Editing owned mounts',
  'Saving or discarding changes',
  'Adding a user',
  'Searching for a user',
];

export const USERS_STEPPER_INSTRUCTIONS = {
  0: {
    imagePath: UsersInstructionsSelectUser,
    altText: 'How to select',
  },
  1: {
    imagePath: UsersInstructionsEditUsername,
    altText: 'How to edit.',
  },
  2: {
    imagePath: UsersInstructionsConfirmChanges,
    altText: 'How to save or discard edit.',
  },
  3: {
    imagePath: UsersInstructionsAddUser,
    altText: 'How to add user.',
  },
  4: {
    imagePath: UsersInstructionsSearchUser,
    altText: 'How to search.',
  },
};

export const MOUNTS_STEPPER_STEPS = [
  'Changing pages',
  'Changing rows',
  'Filtering mounts',
];

export const MOUNTS_STEPPER_INSTRUCTIONS = {
  0: {
    imagePath: MountsInstructionsChangePage,
    altText: 'How to change pages',
  },
  1: {
    imagePath: MountsInstructionsChangeRow,
    altText: 'How to change rows',
  },
  2: {
    imagePath: MountsInstructionsExpansionFilter,
    altText: "How to filter by expansion.",
  },
};
