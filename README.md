# Customer Feedback Portal with User Authentication

This project is a web application for managing customer feedback with user authentication. It consists of a frontend built with React and a backend created using Node.js, Express.js, and MongoDB. Users can register, log in, and provide feedback, while authenticated users can manage their feedback and admins have additional privileges.

## Features

- User authentication (registration, login) using JWT tokens
- CRUD operations for managing customer feedback
- User roles (Admin, Regular User) with different access permissions
- Secure password hashing using bcrypt
- Backend API with Node.js and Express.js
- MongoDB integration for data storage

## Installation and Setup

### Frontend Setup

1. Clone the frontend repository:

   ```bash
   git clone <frontend-repo-link>
   cd frontend-directory
   npm install
   npm start

1.Access the frontend application by opening it in a web browser.
### Backend Setup
Clone the backend repository:
git clone <git clone https://github.com/kriti4666/basaal_backend>
cd backend-directory
npm install

2.Configure environment variables:

Create a .env file and set up required environment variables (e.g., MongoDB URI, JWT secret)
Start the server:
npm start

### Usage

1.Register a new account or log in if already registered.
2.Provide feedback through the form.
3.View, update, or delete feedback based on user roles.

### Backend API Endpoints

•/user/register: POST request to register a new user
•/user/login: POST request to log in and obtain an authentication token
•/feedback: GET, POST, PUT, DELETE requests for managing feedback (requires authentication)

Contributor Name : Kriti

Repository Links
Frontend link : https://659bd81029d2ab4444ca0ee6--effortless-bonbon-b55995.netlify.app/
Backend link : https://basal-backend.onrender.com/
