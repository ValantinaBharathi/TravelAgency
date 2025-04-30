import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/style.css';

const ViewBookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const savedBookings = JSON.parse(localStorage.getItem('travelBookings')) || [];
    setBookings(savedBookings);
  }, []);

  const handleCancelBooking = (id) => {
    const updatedBookings = bookings.filter(booking => booking.id !== id);
    localStorage.setItem('travelBookings', JSON.stringify(updatedBookings));
    setBookings(updatedBookings);
  };

  const extractNumericPrice = (priceString) => {
    const numericString = priceString.replace(/[₹,]/g, '');
    return parseInt(numericString, 10);
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <div className="container content-page">
      <h1>Your Bookings</h1>

      {bookings.length === 0 ? (
        <div className="no-bookings">
          <p>You don't have any bookings yet.</p>
          <Link to="/destinations" className="btn">Explore Destinations</Link>
        </div>
      ) : (
        <div className="bookings-grid">
          {bookings.map(booking => {
            const perPersonPrice = extractNumericPrice(booking.price);
            const totalPrice = perPersonPrice * booking.members;

            return (
              <div key={booking.id} className="booking-card">
                <div className="booking-header">
                  <h3>{booking.destinationTitle}</h3>
                  <span className="booking-price">
                    Total Price: <strong>{formatCurrency(totalPrice)}</strong>
                  </span>
                </div>
                <div className="booking-details">
                  <p><strong>Location:</strong> {booking.location}</p>
                  <p><strong>Travel Date:</strong> {new Date(booking.date).toLocaleDateString()}</p>
                  <p><strong>Travelers:</strong> {booking.members}</p>
                  <p><strong>Status:</strong> <span className="status-confirmed">Confirmed</span></p>
                </div>
                <div className="booking-actions">
                  <button 
                    onClick={() => handleCancelBooking(booking.id)}
                    className="btn btn-cancel"
                  >
                    Cancel Booking
                  </button>
                  <Link to={`/destinations#${booking.destinationId}`} className="btn">
                    View Details
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ViewBookings;
