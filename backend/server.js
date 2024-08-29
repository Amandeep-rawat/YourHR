import express from "express";
import path from "path";
import cors from "cors";
import multer from "multer";
import mongoose from 'mongoose';
import { fileURLToPath } from 'url'; // For ES6 module
import Signup from "./models/Signup.js"; // Import your Signup model
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env file

const app = express();
const port = process.env.PORT || 3000; // Use environment port if available

// Get the current directory of the file
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Static files access
app.use(express.static(path.join(__dirname, '../frontend/dist'))); // Adjust path as necessary

// Middleware to handle CORS and JSON data
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configure multer for handling file uploads
const upload = multer({ dest: 'uploads/' }); // Files will be uploaded to the 'uploads' directory

// Function to connect to MongoDB
async function connectToMongoDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('MongoDB connected');
  } catch (err) {
    console.error('MongoDB connection error:', err);
    process.exit(1); // Exit the process if unable to connect to MongoDB
  }
}

// Connect to MongoDB and start the server
async function startServer() {
  await connectToMongoDB();

  // Serve the frontend app
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/dist/index.html')); // Adjust path as necessary
  });

  // Endpoint to handle signup form submissions
  app.post('/api/signup', upload.single('Resume'), async (req, res) => {
    try {
      const existingUser = await Signup.findOne({ Email: req.body.Email });

      if (existingUser) {
        return res.status(400).json({
          message: 'You have already applied for a job.',
        });
      }

      // Create a new signup record
      const newSignup = new Signup({
        Username: req.body.Username,
        Email: req.body.Email,
        JobTitle: req.body.JobTitle,
        MobileNumber: req.body.MobileNumber,
        CollegeName: req.body.CollegeName,
        State: req.body.State,
        Resume: req.file.path // Save the file path in the database
      });

      // Save to the database
      await newSignup.save();

      // Send success response
      res.json({
        message: 'Signup data received and saved successfully!',
        receivedData: req.body,
        receivedFile: req.file
      });
    } catch (error) {
      console.error('Error saving signup data:', error);

      // Send error response
      res.status(500).json({
        message: 'Error saving signup data',
        error
      });
    }
  });

  // Start the server
  app.listen(port, () => {
    console.log(`YourHR app listening on port ${port}`);
  });
}

startServer(); // Start the server
