import React, { useState, useEffect } from 'react';
import "../Styles/booking.css";

function Booking() {
  const [tickets, setTickets] = useState([]); // Store ticket data
  const [filter, setFilter] = useState('booked'); // Filter by 'booked' or 'cancelled'

  useEffect(() => {
    // Fetch tickets from API when the component mounts or filter changes
    const fetchTickets = async () => {
      try {
        let response;
        if (filter === 'booked') {
          // Fetch booked tickets from the API
          response = await fetch('/api/bookedTickets');
        } else if (filter === 'cancelled') {
          // Fetch cancelled tickets from the API
          response = await fetch('/api/cancelledTickets');
        }
        
        const data = await response.json();
        setTickets(data);
      } catch (error) {
        console.error('Error fetching tickets:', error);
      }
    };

    fetchTickets();
  }, [filter]); // Re-run this effect when filter changes

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter); // Update the filter state when buttons are clicked
  };

  return (
    <div className="booking">
      <h1>Booking Ticket Details</h1>
      
      <div className="filter-buttons">
        <button 
          className={`filter-button ${filter === 'booked' ? 'active' : ''}`} 
          onClick={() => handleFilterChange('booked')}
        >
          Booked
        </button>
        <button 
          className={`filter-button ${filter === 'cancelled' ? 'active' : ''}`} 
          onClick={() => handleFilterChange('cancelled')}
        >
          Cancelled
        </button>
      </div>

      <table className="bookingtable">
        <thead>
          <tr>
            <th>Sr. No.</th>
            <th>User Name</th>
            <th>Event Name</th>
            <th>Event Category</th>
            <th>No. of Tickets</th>
            <th>Time</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {tickets.length > 0 ? (
            tickets.map((ticket, index) => (
              <tr key={ticket.id}>
                <td>{index + 1}</td>
                <td>{ticket.userName}</td>
                <td>{ticket.eventName}</td>
                <td>{ticket.eventCategory}</td>
                <td>{ticket.tickets}</td>
                <td>{ticket.time}</td>
                <td>{ticket.price}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7">No {filter} tickets found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Booking;
