// src/components/ServicesPage.js
import React from 'react';

function ServicesPage() {
  return (
    <div className="container mt-5">
      <h1>Our Logistics Services</h1>
      <div className="row">
        <div className="col-md-6">
          <h2>Shipping & Delivery</h2>
          <p>We offer fast and reliable shipping and delivery services to meet your needs.</p>
        </div>
        <div className="col-md-6">
          <h2>Warehousing & Storage</h2>
          <p>Secure and spacious warehousing solutions to store your goods.</p>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-6">
          <h2>Supply Chain Management</h2>
          <p>We optimize your supply chain for efficiency and cost-effectiveness.</p>
        </div>
        <div className="col-md-6">
          {/* Add more services here */}
        </div>
      </div>
    </div>
  );
}

export default ServicesPage;
