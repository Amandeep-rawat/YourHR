// models/Signup.js
import mongoose from 'mongoose';

const signupSchema = new mongoose.Schema({
  Username: { type: String, required: true },
  Email: { type: String, required: true },
  JobTitle: { type: String, required: true },
  MobileNumber: { type: String, required: true },
  CollegeName: { type: String, required: true },
  State: { type: String, required: true },
  Resume: { type: String, required: true } // You might store the file path or URL
});

const Signup = mongoose.model('Signup', signupSchema);

export default Signup;
