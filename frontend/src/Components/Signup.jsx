import React from 'react';
import { useForm } from 'react-hook-form';
import boyimage from "../assets/boyimage.png"
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import tick from "../assets/svg/tick.svg"
const Signup = () => {
  const [formSubmissionStatus, setFormSubmissionStatus] = useState(null)
  const navigate = useNavigate(); // Initialize useNavigate

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ mode: 'onChange' });

  const onSubmit = async (data) => {
    const formData = new FormData();

    // Append each form field to the FormData object
    formData.append('Username', data.Username);
    formData.append('Email', data.Email);
    formData.append('JobTitle', data.JobTitle);
    formData.append('MobileNumber', data.MobileNumber);
    formData.append('CollegeName', data.CollegeName);
    formData.append('State', data.State);
    formData.append('Resume', data.Resume[0]); // Assuming the resume field is a file input

    try {
      // Send the POST request to the backend
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/signup`, {
        method: 'POST',
        body: formData,
      });

      // Handle the response
      if (response.ok) {
        let result = await response.json();
        setFormSubmissionStatus("success");
        navigate('/thank-you'); // Redirect to Thank You page
      } else {
        const errorResult = await response.json();
        console.error('Error submitting form:', errorResult.message || 'Unknown error');
        setFormSubmissionStatus("error");
        alert(errorResult.message || 'An error occurred'); // Display error message to the user
      }
    } catch (error) {
      console.error('Error:', error.message);
      setFormSubmissionStatus("error");
    }
  };


  return (
    <section className='container mx-auto p-4'>
      <div className='container mx-auto bg-slate-800 max-sm:p-4  p-8 max-[500px]:p-3 rounded-lg shadow-md'>
        <form onSubmit={handleSubmit(onSubmit)} className='bg-white p-6 border border-gray-300 rounded-lg'>
          <img width={"130px"} height={"80px"} className='m-auto' src={boyimage} alt="" />

          <h1 className='text-center text-green-800 text-3xl font-semibold mb-4  max-[500px]:text-2xl'>
            Register to Begin Your Journey to the Perfect Job
          </h1>
          <div className='question'>
            <h4 className='font-medium text-lg'>Q. Why do you need to fill this form?</h4>
            <p className='font-light'><span className='font-bold'>A. </span>When filling out this form, it's important to provide your details because it allows us to match you with job opportunities that align with your skills, qualifications, and career goals. By sharing this information, you're taking a crucial step towards connecting with potential employers who are looking for candidates like you. This process also enables us to offer personalized job recommendations that can significantly improve your chances of landing the perfect role and advancing your career. Your input is essential in helping us understand your aspirations and needs, so we can assist you in achieving your professional goals.</p>

            <div className="benefits py-4">
              <h3 className='font-bold'>Benefits:</h3>
              <ul className='list-none'>


                <li className='flex items-center gap-2'> <img src={tick} width={"16px"} alt="" />  Earn a professional certification upon completion.</li>
                <li className='flex items-center gap-2'><img src={tick} width={"16px"} alt="" />Gain hands-on experience in real-world projects.</li>
                <li className='flex items-center gap-2'><img src={tick} width={"16px"} alt="" />Enjoy flexible work hours that fit your schedule.</li>

              </ul>
            </div>
          </div>

          <div className='mb-4'>
            <label htmlFor='Username' className='block text-gray-700 mb-2'>Username</label>
            <input placeholder='Your answer'
              className='border border-gray-400 p-2 w-full'
              {...register('Username', { required: 'Username is required', minLength: { value: 3, message: 'Name should be greater than 2 characters' } })}
              type='text'
              id='Username'
            />
            {errors.Username && <div className='text-red-600 mt-1'><i className="fa-solid fa-circle-exclamation mr-1"></i>{errors.Username.message}</div>}
          </div>

          <div className='mb-4'>
            <label htmlFor='Email' className='block text-gray-700 mb-2'>Email</label>
            <input placeholder='Your answer'
              className='border border-gray-400 p-2 w-full'
              {...register('Email', { required: 'Email is required', pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Invalid email address' } })}
              type='email'
              id='Email'
            />
            {errors.Email && <div className='text-red-600 mt-1'><i className="fa-solid fa-circle-exclamation mr-1"></i>{errors.Email.message}</div>}
          </div>

          <div className='mb-4'>
            <label htmlFor='JobTitle' className='block text-gray-700 mb-2'>Job Title</label>
            <select
              className='border border-gray-400 p-2 w-full'
              {...register('JobTitle', { required: 'Job title is required' })}
              id='JobTitle'
            >
              <option value=''>Select a job title</option>
              <option value='Web development'>Web development</option>
              <option value='App development'>App development</option>
              <option value='Finance'>Finance</option>
              <option value='Marketing'>Marketing</option>
              <option value='Engineering'>Engineering</option>
              <option value="Data Science">Data Science</option>
              <option value="Content Writing">Content Writing</option>
              <option value="Graphic Design">Graphic Design</option>
              <option value="Digital Marketing">Digital Marketing</option>
              <option value="Artificial Intelligence">Artificial Intelligence</option>
              <option value="Machine Learning">Machine Learning</option>

              {/* Add more options as needed */}
            </select>
            {errors.JobTitle && <div className='text-red-600 mt-1'><i className="fa-solid fa-circle-exclamation mr-1"></i>{errors.JobTitle.message}</div>}
          </div>

          <div className='mb-4'>
            <label htmlFor='MobileNumber' className='block text-gray-700 mb-2'>Mobile Number</label>
            <input placeholder='Your answer'
              className='border border-gray-400 p-2 w-full'
              {...register('MobileNumber', { required: 'Mobile number is required', pattern: { value: /^[0-9]{10}$/, message: 'Invalid mobile number' } })}
              type='tel'
              id='MobileNumber'
            />
            {errors.MobileNumber && <div className='text-red-600 mt-1'><i className="fa-solid fa-circle-exclamation mr-1"></i>{errors.MobileNumber.message}</div>}
          </div>

          <div className='mb-4'>
            <label htmlFor='CollegeName' className='block text-gray-700 mb-2'>College Name</label>
            <input placeholder='Your answer'
              className='border border-gray-400 p-2 w-full'
              {...register('CollegeName', { required: 'College name is required' })}
              type='text'
              id='CollegeName'
            />
            {errors.CollegeName && <div className='text-red-600 mt-1'><i className="fa-solid fa-circle-exclamation mr-1"></i>{errors.CollegeName.message}</div>}
          </div>

          <div className='mb-4'>
            <label htmlFor='State' className='block text-gray-700 mb-2'>State</label>
            <input placeholder='Your answer'
              className='border border-gray-400 p-2 w-full'
              {...register('State', { required: 'State is required' })}
              type='text'
              id='State'
            />
            {errors.State && <div className='text-red-600 mt-1'><i className="fa-solid fa-circle-exclamation mr-1"></i>{errors.State.message}</div>}
          </div>
          {/* Resume Upload */}
          <div className='mb-4'>
            <label htmlFor='Resume' className='block text-gray-700 mb-2'>Upload Resume</label>
            <input placeholder='Your answer'
              className='border border-gray-400 p-2 w-full'
              {...register('Resume', { required: 'Please upload your resume' })}
              type='file'
              id='Resume'
              accept='.pdf,.doc,.docx'
            />
            {errors.Resume && <div className='text-red-600 mt-1'><i className="fa-solid fa-circle-exclamation mr-1"></i>{errors.Resume.message}</div>}
          </div>

          <div className="ending">
            <h2 className='font-semibold' >Any queries? (if any)</h2>
            <p className=''>we're here with a smile to asist you </p>
          </div>
          <div className="mycont mt-4 mb-3">
            <h2 className='font-semibold' >Whatsapp: <span className='font-light'>+91________</span></h2>
            <h2 className='font-semibold'>Email: <span className='font-light'>example@outlook.com</span></h2>
          </div>
          {/* Submit Button */}
          <button
            type='submit'
            disabled={isSubmitting}
            className={`bg-green-700 text-white px-4 py-2 rounded-lg ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-green-900'}`}
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>

          {formSubmissionStatus === 'success' && (
            <div className="mt-4 text-green-600">Form submitted successfully!</div>
          )}

          {formSubmissionStatus === 'error' && (
            <div className="mt-4 text-red-600">There was an error submitting the form. Please try again.</div>
          )}

        </form>
      </div>
    </section>
  );
};

export default Signup;
