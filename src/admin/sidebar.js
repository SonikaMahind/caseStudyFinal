import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "../Styles/sidebar.css";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Toggle Button */}
      <button className="menu-toggle-btn" onClick={toggleSidebar}>
        ☰
      </button>

      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? 'active' : ''}`}>
        <h2>Event Manager</h2>
        <ul className="sidebarmenu">
          <li><Link to="/">Dashboard</Link></li>
          <li><Link to="/event">Events</Link></li>
          <li><Link to="/booking">Bookings</Link></li>
          <li><Link to="/users">Users</Link></li>
        </ul>
        <Link to="/login"><button className="logout-btn">Logout</button></Link>
      </div>
    </>
  );
}

export default Sidebar;
