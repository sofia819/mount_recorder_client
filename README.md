# Mount Recorder Client

Created by Web Static Initiative members:
[Sofia Lee](https://www.linkedin.com/in/sofia-lee-58b75114b/)
[Evan Monroy](https://www.linkedin.com/in/evan-monroy-917b4a162/)

## Table of contents

- [General info](#general-info)
- [Technologies](#technologies)
- [Setup](#setup)

## General info

This project is the front end for the mount recorder application.
It displays users, mounts, and which mounts users own.
It hosts a variety of reporting options for all the above categories.
It comes with a detailed help section with instructions on the apps use.

## Technologies

Project is created with:

- "node": "12.8.1"
- "npm": "6.14.5"
- "@material-ui/core": "^4.11.0"
- "react": "^16.13.1"
- "wretch": "^1.7.2"

## Setup

To run this project, install it locally using npm:

```
$ cd ../mount_recorder_client
$ npm install
$ npm start
```

This application requires a backend to function as intended,
with the purpose built back end located in this repository:
[Mount Recorder Server](https://github.com/sofia819/mount_recorder_server)

The backend can be replaced as long as the middleware calls are updated to
match your backend.
