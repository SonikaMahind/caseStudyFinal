import React from 'react';
import "../Styles/booking.css";

function Booking() {
  return (
    <div className="booking">
      <h1>Booking Ticket Details</h1>
      
      <table className="bookingtable">
        <thead>
          <tr>
            <th>Sr. No.</th>
            <th>User Name</th>
            <th>Event Name</th>
            <th>Event Category</th>
            <th>No. of tickets</th>
            <th>Time</th>
            <th>Price</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>aricka</td>
            <td>Holi Event</td>
            <td>Traditional</td>
            <td>5</td>
            <td>15th March, 2025 - 11:00 am</td>
            <td>1500/person</td>
            <td>Booked</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Booking;