import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // For navigation
import "../Styles/eventAddForm.css"; // Ensure this file contains your custom styles


function EventAddForm() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    startTime: '',
    endTime: '',
    location: '',
    category: '',
    price: '',
    ticketsAvailable: '',
    promocode: '',
    image: ''
  });

  const [isModalOpen, setModalOpen] = useState(false); // State to manage modal visibility
  const navigate = useNavigate(); // For navigation

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleBackClick = (eventId) => {
    navigate(`/event`); // Navigate to edit page with eventId
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    
    try {
      await addEventToDatabase(formData); 
      setModalOpen(true);
    } catch (error) {
      console.error('Error adding event:', error);
    }
  };

  const addEventToDatabase = async (data) => {
   
    console.log('Adding event to database:', data);
    return new Promise((resolve) => setTimeout(resolve, 1000));
  };

  useEffect(() => {
    if (isModalOpen) {
      const timer = setTimeout(() => {
        navigate('/event'); 
      }, 2000); 

      return () => clearTimeout(timer); 
    }
  }, [isModalOpen, navigate]);

  return (
    <div className="eventaddform">
      <button className='backbutton' onClick={handleBackClick}>Back</button>
      <h2>Add New Event</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Event Name:
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Category:
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Start Date:
          <input
            type="date"
            name="date"
            value={formData.startdate}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Start Time:
          <input
            type="time"
            name="startTime"
            value={formData.startTime}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          End Date:
          <input
            type="date"
            name="endDate" // Changed name to endDate to differentiate
            value={formData.enddate}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          End Time:
          <input
            type="time"
            name="endTime"
            value={formData.endTime}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Location:
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Price:
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Total Tickets:
          <input
            type="number"
            name="ticketsAvailable"
            value={formData.ticketsAvailable}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Promocode:
          <input
            type="text"
            name="promocode"
            value={formData.promocode}
            onChange={handleChange}
          />
        </label>
        <label>
          Description:
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Event Image URL:
          <input
            type="url"
            name="image"
            value={formData.image}
            onChange={handleChange}
          />
        </label>
        <button type="submit" className="submit-btn">Add Event</button>
      </form>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
          <img src='https://cdn-icons-png.flaticon.com/256/148/148767.png' alt="Success Icon" />
            <h3>Success!</h3>
            <p>The event has been successfully added.</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default EventAddForm;
