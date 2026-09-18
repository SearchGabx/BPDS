# BPDS - Atlantico Option Scholarship Program

Team: Gabriel Arenas Quijano, Laura Isabella Truyol Camacho, Leandro Aaron Mendoza Navarro, Sebastián David Barrios Barrios y Jesús David Estrada Machacón.

## Project Overview

BPDS is a management platform designed to track and manage pending applications for the Atlantico Option Scholarship Program. This system provides institutional support for managing the commitments and administrative tasks of the program's directorate board.

<img width="445" height="449" alt="image" src="https://github.com/user-attachments/assets/6f66f3a9-70b0-430f-b082-8807a5b93e7a" />

## Overview

This project allows users to:

- create new tasks
- mark tasks as completed
- edit task descriptions
- delete tasks from the active list
- keep deleted tasks in a dedicated trash area
- permanently remove tasks from the trash when they are no longer needed

The interface is intentionally simple and focused on clarity, making it suitable for daily operational tracking.

## Main functionality

### 1. Task creation
Users can add tasks using an input field and a button. Each new task is stored with:
- a unique ID
- the task text
- a completion status
- a deleted flag

  <img width="458" height="459" alt="image" src="https://github.com/user-attachments/assets/b6e6b069-8b73-4b6d-9b77-a42ae2aa35df" />


### 2. Task tracking
The app displays the current list of active tasks. Each task can be:
- marked as done or undone
- edited
- removed from the active list

### 3. Completion status
Tasks can be checked off when completed. The interface shows the number of completed tasks versus the total number of active tasks.

<img width="447" height="460" alt="image" src="https://github.com/user-attachments/assets/45519ee9-3717-4fd8-8c6c-392e2c52d516" />


### 4. Task editing
Each task can be edited in place. This allows users to correct wording or adjust task details without creating a duplicate item.

<img width="449" height="455" alt="image" src="https://github.com/user-attachments/assets/e249aad1-7055-48bb-9ab9-80feab06c47b" />


### 5. Task deletion
When a task is deleted, it is not immediately lost from the system. Instead, it is moved to a separate trash section.

<img width="449" height="477" alt="image" src="https://github.com/user-attachments/assets/081a4e39-5097-4b75-b46f-3c483295152e" />


## Deleted tasks feature

<img width="437" height="107" alt="image" src="https://github.com/user-attachments/assets/4fc54af1-6378-4ef7-bc82-9e25d3e7b595" />


The app includes a soft-delete workflow through a deletedTasks feature.

Instead of removing a task permanently as soon as it is deleted, the system:
- moves the task to a trash area
- keeps it stored separately from the active task list
- allows the user to review deleted tasks
- provides a permanent deletion action for cleanup

This is useful because it prevents accidental loss of information while still keeping the main task list clean and focused.

The deletedTasks collection is tracked separately from the active task list, and both are persisted in the app data store. This ensures that task status remains consistent even after the page reloads.

## Persistence

The application stores task information in a local JSON file. This allows the data to persist across sessions without requiring a backend database.

The app loads the saved data on startup and writes the latest task state whenever the active or deleted task lists change.

## Use case

This tool is especially suited for:
- internal follow-up lists
- scholarship program administration
- tracking pending actions
- coordinating repeated tasks among team members
- preserving a history of removed items before final cleanup

## Getting started

Install dependencies:

```bash
npm install

## Getting Started

First, run the development server:

```bash
npm run juju
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for V[...]

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app[...])

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
