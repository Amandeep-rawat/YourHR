# YourHR

**YourHR** is a web application designed to streamline the job application process by connecting job seekers with potential employers. The application features user registration, resume uploads, and a confirmation page for successful submissions. Built with a React frontend and a Node.js backend, YourHR offers a user-friendly experience with modern design and functionality.

## Features

- **User Registration**: Users can register by filling out a detailed form with their personal information and job preferences.
- **Resume Upload**: Supports uploading resumes in PDF, DOC, and DOCX formats.
- **Thank You Page**: A confirmation page displayed after a successful form submission.
- **Typewriter Effect**: Showcases job-related phrases on the homepage for a dynamic user experience.

## Project Structure

### Frontend

- **Folder**: `frontend`
  - **Components**:
    - **Navbar**: Includes navigation links for Home and Signup pages. Uses FontAwesome icons for enhanced visual appeal.
    - **Hero**: Features a full-screen background image, Typewriter effect, and a call-to-action button for user registration.
    - **Signup**: Contains the registration form for user details and resume upload, with validation using `react-hook-form`.
    - **ThankYou**: Displays a thank-you message post form submission.
  
  - **Libraries**:
    - **React**: Library for building user interfaces.
    - **React Router DOM**: Manages routing within the application.
    - **React Hook Form**: Handles form validation and submission.
    - **Typewriter Effect**: Adds dynamic text animation on the homepage.
    - **FontAwesome**: Provides icons used throughout the application. (CDN used for icons).

  - **Scripts**:
    - **`dev`**: Starts the development server.
    - **`build`**: Builds the production-ready application.
    - **`lint`**: Runs ESLint for code quality checks.
    - **`preview`**: Previews the production build.

### Backend

- **Folder**: `backend`
  - **Setup**:
    - **Express**: Web framework for Node.js used for handling server routes and middleware.
    - **Mongoose**: Provides MongoDB object modeling and schema management.
    - **Multer**: Middleware for handling file uploads and storing them in the `uploads` directory.
  
  - **Models**:
    - **Signup**: Mongoose schema for storing user registration details and resume file paths.
  
  - **Server**:
    - **server.js**: The main server file that sets up the Express application, connects to MongoDB, and defines the API routes.
  
  - **Error Handling**:
    - **Error Handling**: Includes middleware for handling errors that occur during request processing, ensuring that appropriate error messages are sent to the client.

## Deployment

- **Frontend Deployment**: The frontend is deployed on [Render](https://render.com). It is built and served as a static site from the `frontend/dist` directory.

- **Backend Deployment**: The backend is also deployed on [Render](https://render.com). It handles API requests and connects to MongoDB for storing user data and resume files.

- **Environment Variables**: 
  - **Frontend**: Uses environment variables set on Render to configure the API URL for making requests to the backend.
  - **Backend**: Uses environment variables for configuration, including the MongoDB connection string and server port.

## How It Works

1. **Frontend and Backend Separation**: The project consists of two separate folders—`frontend` and `backend`. The frontend handles user interactions and is built with React. The backend is a Node.js server that handles API requests and communicates with MongoDB.

2. **Deployment**: Both the frontend and backend are deployed on Render. The frontend is served as a static site from the `frontend/dist` directory, while the backend runs as a server that listens for API requests.

3. **API Calls**: The frontend makes API calls to the backend using the URL provided in the environment variables. For example, if the backend URL is `https://yourhr-backend.render.com`, the frontend will use this URL to make requests like `https://yourhr-backend.render.com/api/signup`.

4. **Port Handling**: Render manages the port internally for both the frontend and backend. The URL provided by Render for the deployed application does not include the port number, as it is abstracted away.

5. **File Uploads**: The backend uses the `uploads` directory to temporarily store uploaded files before processing and saving them.



Getting Started
To run the application on your local machine, follow these steps:

1. Set Up the Frontend
Navigate to the Frontend Directory:

cd frontend
Create a .env File:

In the frontend directory, create a .env file and set the following variable:
VITE_API_URL=http://localhost:<port-number>
Replace <port-number> with the port your backend server is running on (e.g., 3000).

Install Dependencies:

npm install



Build the Frontend:

npm run build

This will create the production-ready build of your frontend application.

Navigate Back to the Root Directory:
cd ..

2. Set Up the Backend

Navigate to the Backend Directory:
cd backend

Install Dependencies:
npm install

Create a .env File:
In the backend directory, create a .env file and set the following variables:
PORT=<port-number>
MONGODB_URI=your-mongodb-connection-string

Replace <port-number> with the port you want your backend server to run on (e.g., 3000).
Replace your-mongodb-connection-string with your MongoDB connection string.
3. Running the Application
Start the Backend Server:
npm start
or node server.js

Serve the Frontend:

If you're serving the frontend locally, you can use:
npm run dev

This assumes you have configured your frontend to serve locally. For a production build, you'll need to serve the static files created by npm run build.

Deployment
Frontend Deployment
Deploy Frontend: You can deploy your frontend on platforms like Vercel, Netlify, or GitHub Pages.

Set Environment Variable: Configure the environment variable VITE_API_URL in the deployment platform settings to point to your backend URL.

Backend Deployment
Deploy Backend: You can deploy your backend on platforms like Render, Heroku, or Railway.

Set Environment Variable: Configure environment variables such as PORT and MONGODB_URI in the deployment platform settings.

