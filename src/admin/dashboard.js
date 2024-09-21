import React from "react";
import "../Styles/dashboard.css";
import TicketsChart from "./TicketChart";

function Dashboard() {
  return (
    <div className="dashboard">
      <h1>Welcome To Event Manager Dashboard</h1>
      <div className="box">
      <div className="box-item">
    <h2>Total Number of Events Category</h2>
    <h4>28</h4>
  </div>
  <div className="box-item">
    <h2>Total Number of Upcoming Events</h2>
    <h4>28</h4>
  </div>
  <div className="box-item">
    <h2>Total Number of Registered Users</h2>
    <h4>28</h4>
  </div>
  <div className="box-item">
    <h2>Total Number of Sold Tickets</h2>
    <h4>28</h4>
  </div>

  <div>
        <h2>Tickets by Category</h2>
        <div className="chart"><TicketsChart /></div>
      </div>
    </div>
    </div>
  );
};

export default Dashboard;
