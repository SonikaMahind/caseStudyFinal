import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import "../Styles/eventView.css"; 
import { useNavigate } from 'react-router-dom';

function EventView() {
  const { eventId } = useParams(); // Get the eventId from the URL
  const [eventData, setEventData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEventData = async () => {
      const data = await getEventData(eventId); // Fetch event data using eventId
      setEventData(data);
    };

    fetchEventData();
  }, [eventId]);

  const handleBackClick = (eventId) => {
    navigate(`/event`); // Navigate to edit page with eventId
  };

  const getEventData = async (id) => {
    // Simulate fetching event data from a database
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          title: 'Sample Event',
          description: 'This is a detailed description of the sample event.',
          startdate: '2023-10-01',
          startTime: '10:00',
          enddate: '2023-10-01',
          endTime: '12:00',
          location: 'Sample Location',
          category: 'Sample Category',
          price: '20',
          ticketsAvailable: '100',
          promocode: 'SAVE20',
          image: 'https://financesonline.com/uploads/2017/10/ev.jpg'
        });
      }, 1000);
    });
  };

  if (!eventData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="eventview">
      <button onClick={handleBackClick}>Back</button>
      <h2>{eventData.title}</h2>
      <img src={eventData.image} alt={eventData.title} className="eventviewimage" />
      <p><strong>Description:</strong> {eventData.description}</p>
      <p><strong>Category:</strong> {eventData.category}</p>
      <p><strong>Start Date:</strong> {eventData.startdate}</p>
      <p><strong>Start Time:</strong> {eventData.startTime}</p>
      <p><strong>End Date:</strong> {eventData.enddate}</p>
      <p><strong>End Time:</strong> {eventData.endTime}</p>
      <p><strong>Location:</strong> {eventData.location}</p>
      <p><strong>Price:</strong> {eventData.price} ₹</p>
      <p><strong>Tickets Available:</strong> {eventData.ticketsAvailable}</p>
      <p><strong>Promocode:</strong> {eventData.promocode}</p>
      
    </div>
  );
}

export default EventView;
