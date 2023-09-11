// src/components/Homepage.js
import React from 'react';

function Homepage() {
  return (
    <div className="container mt-5">
      <h1>Welcome to Our Logistics Services</h1>
      <p className="lead">Providing reliable logistics solutions worldwide.</p>
      <div className="row">
        <div className="col-md-6">
          <h2>Our Services</h2>
          <ul className="list-group">
            <li className="list-group-item">Shipping & Delivery</li>
            <li className="list-group-item">Warehousing & Storage</li>
            <li className="list-group-item">Supply Chain Management</li>
          </ul>
        </div>
        <div className="col-md-6">
          <h2>Why Choose Us</h2>
          <p>We are committed to delivering your goods on time, every time.</p>
          <p>Our team of experts ensures the safety and security of your shipments.</p>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
