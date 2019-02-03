streams-client
============

This is a Twitch clone using React and Redux which allows for creating accounts and creating, editing, and deleting video streams.


## Features
- Create streams
- Edit streams
- Delete streams


### Dependencies:
- axios
- flv.js
- lodash
- react
- react-dom
- react-redux
- react-router-dom
- react-scripts
- redux
- redux-form
- redux-thunk
- semantic-ui-css

---

## Setup
Clone this repo to your desktop and run `npm install` to install all the dependencies.

### Servers 
You will need to also clone: 
streams-server: https://github.com/jasonbland/streams-rtmp
streams-api: https://github.com/jasonbland/streams-api.

### Streaming Platform
You will need to also install OBS for streaming the video.

---

## Usage
After you clone this repo to your desktop, go to its root directory and run `npm install` to install its dependencies.

Once the dependencies are installed, you can run `npm start` to start the application.

In separate terminal windows run each server with `node start`.

Log in, create new stream, record the stream id, Open OBS and go to `Settings > Stream > Custom Streaming Server` and enter URL as rtmp://localhost/live and Stream Key and the stream id shown in the client url. You should not be streaming!

---


