# YourHR

**YourHR** is a web application designed to streamline the job application process by connecting job seekers with potential employers. The application features user registration, resume uploads, and a confirmation page for successful submissions. Built with a React frontend and a Node.js backend, YourHR offers a user-friendly experience with modern design and functionality.

## Features

- **User Registration**: Users can register by filling out a detailed form with their personal information and job preferences.
- **Resume Upload**: Supports uploading resumes in PDF, DOC, and DOCX formats.
- **Thank You Page**: A confirmation page displayed after a successful form submission.
- **Typewriter Effect**: Showcases job-related phrases on the homepage for a dynamic user experience.

## Project Structure

### Frontend

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
