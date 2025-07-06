# REAL-TIME-COLLABORATIVE-DOCUMENT-EDITOR

COMPANY: CODTECH IT SOLUTIONS

NAME: MACHARLA ARAVIND

INTERN ID: CT06DF238

DOMAIN: FULL STACK WEB DEVELOPMENT

DURATION: 6 WEEKS

MENTOR: NEELA SANTOSH

## Project Title: Real-Time Collaborative Document Editor Using React and Node.js
📘 Project Description:
This project is a real-time collaborative document editor, developed as part of Task 3 of the Full Stack Web Development Internship at CodTech. The goal of this task was to create a document editing application where multiple users can edit the same document at the same time and see each other's changes instantly. This kind of system mimics tools like Google Docs, where real-time collaboration is essential.As a full-stack mini project, this task involves both frontend and backend integration, including the use of frameworks and technologies like React.js, Node.js, and Socket.IO for real-time communication. The project also supports persistent data storage using a database like MongoDB or PostgreSQL, making it a complete full-stack system.On the frontend, I used React.js, a popular JavaScript library for building interactive UIs. The interface allows users to open a shared document and type into an editor pane. Every keystroke is broadcast to other connected users using WebSockets. When another user makes a change, the frontend receives a live update and reflects the change instantly — making it a truly collaborative experience.On the backend, I built a Node.js server with Express and Socket.IO. Socket.IO handles the live connection between users, transmitting messages such as document updates in real-time. Every edit is pushed through the socket and broadcast to all other connected clients. For data persistence, I integrated a MongoDB database to save documents periodically or on user request, so that content is not lost if users leave the session.The project folder was organized clearly, with separate folders for client (React frontend), server (Node backend), and configuration files. I worked with npm, nodemon, and development tools on macOS, including Terminal and VS Code (or optionally TextEdit and Finder if working without IDEs). I also used concurrently to run both server and client from a single terminal command during development.
This task helped me understand the core concepts behind real-time web applications, collaborative systems, and how to manage live data using state management in React and socket communication in Node.js. I learned how to deal with race conditions (e.g., what happens if two users type at the same time), debounce keystrokes to reduce bandwidth, and store shared document states in the backend for consistency.
Key technical learnings from this task include:
React hooks for state updates and rendering
WebSockets and Socket.IO for real-time sync
Backend event handling using Express
MongoDB for storing and retrieving documents
Middleware to sanitize and validate real-time inputs
Authentication (optional) for identifying users
By completing this task, I was able to simulate a scaled-down version of tools like Google Docs and Microsoft Word Online. Though simplified, the project demonstrated the power of full stack development when combining frontend frameworks, real-time technology, and backend databases. It also gave me insight into production-level challenges like conflict resolution, offline syncing, and backend efficiency.
I successfully built and tested a live collaborative editor where multiple users can connect and edit a document together in real-time. Changes are synchronized instantly across all connected clients. The project architecture allows for future improvements like login systems, document history, user cursors, and version control.
This task was a challenging but rewarding experience that pushed me to think about systems design, full-stack communication, and the real-world use cases of WebSockets. It prepared me for building scalable, interactive applications in the real world.

#OUTPUT
