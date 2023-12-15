# Note Management App

## Introduction

This React application is a simple and efficient note management system. It allows users to create, view, update, and delete notes. The application uses `axios` for making API calls to a backend service.

## Setup

To get this application up and running on your local machine, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Run `npm install` to install the necessary dependencies.
4. Once the dependencies are installed, start the application by running `npm start`.

## Main Features

### Note Creation

- Users can add new notes using the `Add` component.
- New notes are sent to the backend API and added to the list.

### Note Viewing

- All notes are fetched from the backend API and displayed on the main page.

### Note Update

- Each note can be updated.
- The `Edit` component is used to modify the content of a note.
- Updates are sent to the backend API to reflect the changes.

### Note Deletion

- Notes can be deleted individually.
- A delete action makes an API call to remove the note from the backend.

## Usage

Upon launching the application, users are presented with a list of notes. They can add a new note using the `Add` component. Each note is displayed with options to edit or delete. Editing a note is done through the `Edit` component, and deleting a note is as simple as clicking the delete button associated with that note.

## Dependencies

- React
- axios

## API Endpoints

The application interacts with the following API endpoints:

- GET `https://notepadapi.onrender.com/app/notes`: Fetches all notes.
- POST `https://notepadapi.onrender.com/app/notes`: Creates a new note.
- PUT `https://notepadapi.onrender.com/app/notes/:id`: Updates a specific note.
- DELETE `https://notepadapi.onrender.com/app/notes/:id`: Deletes a specific note.

---

Enjoy using the Note Management App to keep track of your important notes!
