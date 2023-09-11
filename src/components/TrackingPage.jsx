// src/components/TrackingPage.js
import React, { useState } from 'react';

function TrackingPage() {
  const [trackingCode, setTrackingCode] = useState('');
  const [trackingResult, setTrackingResult] = useState('');

  const handleTrackingSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would implement logic to fetch tracking data here.
    // For this example, we'll simulate a tracking result.
    const sampleTrackingResult = `Status: In Transit\nEstimated Delivery Date: 2023-09-30`;
    setTrackingResult(sampleTrackingResult);
  };

  return (
    <div className="container mt-5">
      <h1>Track Your Shipment</h1>
      <form onSubmit={handleTrackingSubmit}>
        <div className="form-group">
          <label htmlFor="trackingCode">Enter Tracking Code:</label>
          <input
            type="text"
            className="form-control"
            id="trackingCode"
            value={trackingCode}
            onChange={(e) => setTrackingCode(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">Track</button>
      </form>
      {trackingResult && (
        <div className="mt-3">
          <h3>Tracking Result</h3>
          <div className="card">
            <div className="card-body">
              <pre>{trackingResult}</pre>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default TrackingPage;
