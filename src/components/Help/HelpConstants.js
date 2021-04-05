export const BACK_BUTTON = 'Back';

export const NEXT_BUTTON = 'Next';

export const USER_MOUNTS_STEPPER_INSTRUCTIONS = {
  0: {
    step: 'Selecting a user',
    imagePath: '/assets/user-mounts-instructions/user-mounts-select-user.gif',
    altText: 'How to select',
  },
  1: {
    step: 'Editing owned mounts',
    imagePath: '/assets/user-mounts-instructions/user-mounts-change-owned.gif',
    altText: 'How to edit',
  },
  2: {
    step: 'Saving or discarding changes',
    imagePath:
      '/assets/user-mounts-instructions/user-mounts-confirm-changes.gif',
    altText: 'How to save or discard edit.',
  },
  3: {
    step: 'Selecting an expansion',
    imagePath:
      '/assets/user-mounts-instructions/user-mounts-expansion-filter.gif',
    altText: 'How to change expansion.',
  },
  4: {
    step: 'Searching for a user',
    imagePath: '/assets/user-mounts-instructions/user-mounts-search-user.gif',
    altText: 'How to search.',
  },
};

export const USERS_STEPPER_INSTRUCTIONS = {
  0: {
    step: 'Selecting a user',
    imagePath: '/assets/users-instructions/users-select-user.gif',
    altText: 'How to select',
  },
  1: {
    step: 'Editing user name',
    imagePath: '/assets/users-instructions/users-edit-username.gif',
    altText: 'How to edit.',
  },
  2: {
    step: 'Saving or discarding changes',
    imagePath: '/assets/users-instructions/users-confirm-changes.gif',
    altText: 'How to save or discard edit.',
  },
  3: {
    step: 'Adding a user',
    imagePath: '/assets/users-instructions/users-add-user.gif',
    altText: 'How to add user.',
  },
  4: {
    step: 'Searching for a user',
    imagePath: '/assets/users-instructions/users-search-user.gif',
    altText: 'How to search.',
  },
};

export const MOUNTS_STEPPER_INSTRUCTIONS = {
  0: {
    step: 'Changing pages',
    imagePath: '/assets/mounts-instructions/mounts-change-page.gif',
    altText: 'How to change pages',
  },
  1: {
    step: 'Changing rows',
    imagePath: '/assets/mounts-instructions/mounts-change-row.gif',
    altText: 'How to change rows',
  },
  2: {
    step: 'Filtering mounts',
    imagePath: '/assets/mounts-instructions/mounts-expansion-filter.gif',
    altText: 'How to filter by expansion.',
  },
};

export const HELP_CATEGORIES_INSTRUCTIONS = [
  {
    categoryName: 'User Mounts',
    instructions: USER_MOUNTS_STEPPER_INSTRUCTIONS,
  },
  {
    categoryName: 'Users',
    instructions: USERS_STEPPER_INSTRUCTIONS,
  },
  {
    categoryName: 'Mounts',
    instructions: MOUNTS_STEPPER_INSTRUCTIONS,
  },
];
