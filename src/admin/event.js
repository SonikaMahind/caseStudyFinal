import React, { useState } from 'react';
import "../Styles/event.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';

function Event() {
  const [events, setEvents] = useState([
    {
      id: 1,
      name: 'Holi Event',
      category: 'Traditional',
      startDate: '15th March, 2025 - 11:00 am',
      endDate: '15th March, 2025 - 6:00 pm',
      venue: 'Hoodi, Bangalore',
      tickets: 60,
      price: 1500,
      status: 'active',
    },
    {
      id: 2,
      name: 'Diwali Celebration',
      category: 'Festival',
      startDate: '5th Nov, 2025 - 5:00 pm',
      endDate: '5th Nov, 2025 - 10:00 pm',
      venue: 'Indiranagar, Bangalore',
      tickets: 100,
      price: 2000,
      status: 'active',
    },
  ]); // Sample events data
  const [deleteSuccess, setDeleteSuccess] = useState(false); // State for success message
  const navigate = useNavigate();

  const handleAdd=(eventId)=>{
    navigate('/addEvent')
  }

  const handleEditClick = (eventId) => {
    navigate(`/editEvent/${eventId}`); // Navigate to edit page with eventId
  };

  const handleViewClick = (eventId) => {
    navigate(`/viewEvent/${eventId}`); // Navigate to view event details
  };

  const handleDeleteClick = async (eventId) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this event?");
    
    if (confirmDelete) {
      try {
        // Send DELETE request to the backend API
        const response = await fetch(`/api/events/${eventId}`, {
          method: 'DELETE',
        });

        if (response.ok) {
          // If successful, remove the event from the state
          const updatedEvents = events.filter(event => event.id !== eventId);
          setEvents(updatedEvents);

          // Show delete success message
          setDeleteSuccess(true);

          // Hide success message after 3 seconds
          setTimeout(() => {
            setDeleteSuccess(false);
          }, 3000);
        } else {
          console.error('Failed to delete event');
        }
      } catch (error) {
        console.error('Error deleting event:', error);
      }
    }
  };

  return (
    <div className="event">
      <h1>Events</h1>
        <button className='btnadd' onClick={handleAdd}>Add</button>
      {deleteSuccess && (
        <div className="success-message">Event deleted successfully!</div>
      )}
      <table className="events-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Category</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Venue</th>
            <th>No. of Tickets</th>
            <th>Price per person</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event, index) => (
            <tr key={event.id}>
              <td>{index + 1}</td>
              <td>{event.name}</td>
              <td>{event.category}</td>
              <td>{event.startDate}</td>
              <td>{event.endDate}</td>
              <td>{event.venue}</td>
              <td>{event.tickets}</td>
              <td>{event.price}</td>
              <td>{event.status}</td>
              <td>
                <div className="action-buttons">
                  <button className="action-button view" onClick={() => handleViewClick(event.id)}>
                    <FontAwesomeIcon icon={faEye} />
                  </button>
                  <button className="action-button edit" onClick={() => handleEditClick(event.id)}>
                    <FontAwesomeIcon icon={faPen} />
                  </button>
                  <button
                    className="action-button delete"
                    onClick={() => handleDeleteClick(event.id)}
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Event;
