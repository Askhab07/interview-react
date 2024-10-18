import React, { useState } from 'react';

const QuizForm = () => {
  const [formData, setFormData] = useState({
    id: '',
    category: '',
    question: '',
    answer: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbx2gHOHMA7LHMC7d4bi0ukpT3Tb6SlAyCik2JqS0voKRIVRiAEhJBiCaKeSSRk0CSah/exec', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (!response.ok) {
        // Handle HTTP errors
        const errorMessage = await response.text(); // Get error message from response
        throw new Error(`HTTP error! status: ${response.status}, message: ${errorMessage}`);
      }
      const result = await response.json();
      if (result.status === 'success') {
        alert('Data submitted successfully!');
      } else {
        alert('Failed to submit data.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while submitting the data.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>ID:</label>
        <input type="text" name="id" value={formData.id} onChange={handleChange} required />
      </div>
      <div>
        <label>Category:</label>
        <input type="text" name="category" value={formData.category} onChange={handleChange} required />
      </div>
      <div>
        <label>Question:</label>
        <input type="text" name="question" value={formData.question} onChange={handleChange} required />
      </div>
      <div>
        <label>Answer:</label>
        <input type="text" name="answer" value={formData.answer} onChange={handleChange} required />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default QuizForm;