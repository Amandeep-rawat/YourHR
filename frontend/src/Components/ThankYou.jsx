// src/Components/ThankYou.jsx
import React from 'react';

const ThankYou = () => {
  return (
    <section className='container mx-auto p-4'>
      <div className='bg-green-100 p-8 rounded-lg shadow-md text-center'>
        <h1 className='text-3xl font-semibold mb-4'>Thank You!</h1>
        <p className='text-lg'>Your form has been submitted successfully. We will get in touch with you soon.</p>
      </div>
    </section>
  );
};

export default ThankYou;
