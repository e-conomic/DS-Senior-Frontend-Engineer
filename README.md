# e-conomic Senior Frontend Engineer hiring task</h1>

<a href="https://www.buymeacoffee.com/VishwaGauravIn" target="_blank">
  <img alt="" src="https://skillicons.dev/icons?i=ts,tailwind,react" style="vertical-align:center" />
</a>

## 👋 Introduction

As a part of the e-conomic recruitment process we ask our candidates to complete a practical development challenge. The challenge consists of two parts:

You solve the provided task, and send the results to us.
We host a session where you present your solution to us, and we all have a nice talk about it.

The task is to implement a simple time logger web application that solves the following three user stories:

- As a freelancer I want to be able to register how I spend time on my projects, so that I can provide my customers with an overview of my work.
- As a freelancer I want to be able to get an overview of my time registrations per project, so that I can create correct invoices for my customers.
- As a freelancer I want to be able to sort my projects by their deadline, so that I can prioritise my work.

Individual time registrations should be 30 minutes or longer, and once a project is complete it can no longer receive new registrations. You do not need to create an actual invoice.

We ask that you clone this repository to complete the task, rather than fork it. You can either push it to a repository on your own account, or simply send us the project in a zip if you prefer. We recommend removing installed dependencies such as the node_modules directory prior to zipping, to keep the file size down.

When presenting the solution please bring your own laptop if you have one. If you do not, please inform us before the meeting so that we can prepare.

## 💡 Considerations

What we're looking for is to see if you have the ability to transform a set of user requirements into a working solution, preferably creating some nice and clean code along the way. We will appreciate if your solution:

- Works, obviously.
- Contains readable, bug free code
- Is appropriately covered by tests
- Follows sensible structured design patterns and thought proceses
- Validates user input and contains test coverage for these use cases
- The frontend is typed using typescript

We want to see that you have thought about the design of your application, and considered how it might scale as it's complexity increases:

- Consider how your application might scale as it grows in use, and in number of developers working on it
- Summarise any significant architectural decisions you take, to discuss in the presentation

## ℹ️ Questions & Info

If you have any **questions** or **concerns**, please feel free to ask.

We realize there are a lot of moving parts to an application like this. To help, we have provided a basic setup to get you started with a Vite + React client, which includes some basic components and simple styling.

You are welcome to use this scaffold or start your own project from scratch. You are also free to change or remove any part of this code — it is meant purely as a starting point to help you get going. Styling and graphic design are not the main focus; we are assessing your ability to design and architect software — so focus on that.
Don’t worry about authentication — you can assume your application is already authenticated.

## 🖥 How to Run The Scaffold Project Locally

Prerequisites:

- Node v24 or newer installed.

Steps to run locally:

1. Clone the project.
2. Run `npm install`.
3. Start the mock API server (in one terminal): `npm run server`  
   It serves at `http://localhost:7029` and provides e.g. `GET /api/projects/get-all`.
4. Start the dev client (in another terminal): `npm run dev`  
   The Vite app will be available at the URL shown (typically `http://localhost:5173`).

Happy coding!
