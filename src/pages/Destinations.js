import React, { useState } from 'react';
import '../styles/style.css';

const Destinations = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [bookingData, setBookingData] = useState({
    destination: '',
    date: '',
    members: 1,
    name: '',
    email: '',
    phone: ''
  });

  const destinations = [
    {
      id: 1,
      title: 'Tropical Paradise',
      location: 'Maldives',
      description: 'Experience the ultimate luxury in our overwater bungalows with private pools and direct lagoon access. Perfect for honeymooners and those seeking tranquility.',
      price: '₹1,30,000',
      image: 'place1.jpeg',
      category: 'beach'
    },
    {
      id: 2,
      title: 'Mountain Retreat',
      location: 'Swiss Alps',
      description: 'Stay in cozy chalets with breathtaking mountain views. Enjoy skiing, hiking, and spa treatments in this winter wonderland.',
      price: '₹2,50,000',
      image: 'place2.jpeg',
      category: 'mountain'
    },
    {
      id: 3,
      title: 'Cultural Journey',
      location: 'Kyoto, Japan',
      description: 'Immerse yourself in traditional Japanese culture with temple stays, tea ceremonies, and cherry blossom viewing in this historic city.',
      price: '₹2,00,000',
      image: 'place3.jpeg',
      category: 'cultural'
    },
    {
      id: 4,
      title: 'Safari Adventure',
      location: 'Serengeti, Tanzania',
      description: 'Witness the Great Migration and stay in luxury tented camps with expert guides for an unforgettable wildlife experience.',
      price: '₹3,50,000',
      image: 'place4.jpeg',
      category: 'adventure'
    },
    {
      id: 5,
      title: 'European Explorer',
      location: 'Paris, France',
      description: 'Discover the romance of Paris with guided tours of iconic landmarks, gourmet dining, and Seine River cruises.',
      price: '₹2,20,000',
      image: 'place5.jpeg',
      category: 'city'
    },
    {
      id: 6,
      title: 'Island Getaway',
      location: 'Bali, Indonesia',
      description: 'Relax in private villas with infinity pools, enjoy spa treatments, and explore ancient temples in this tropical paradise.',
      price: '₹1,50,000',
      image: 'place6.jpeg',
      category: 'beach'
    },
    {
      id: 7,
      title: 'Northern Lights Expedition',
      location: 'Reykjavik, Iceland',
      description: 'Chase the aurora borealis, soak in geothermal lagoons, and explore glaciers and volcanoes in this unique destination.',
      price: '₹3,00,000',
      image: 'place7.jpeg',
      category: 'adventure'
    }
  ];

  const filteredDestinations = activeTab === 'all' 
    ? destinations 
    : destinations.filter(dest => dest.category === activeTab);

  const handleBookingChange = (e) => {
    const { name, value } = e.target;
    setBookingData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleBookingSubmit = (e, destination) => {
    e.preventDefault();
    
    // Create booking object
    const newBooking = {
      id: Date.now(), // unique ID
      destinationId: destination.id,
      destinationTitle: destination.title,
      location: destination.location,
      price: destination.price,
      date: bookingData.date,
      members: bookingData.members,
      name: bookingData.name,
      email: bookingData.email,
      phone: bookingData.phone,
      bookedAt: new Date().toISOString()
    };

    // Get existing bookings from local storage
    const existingBookings = JSON.parse(localStorage.getItem('travelBookings')) || [];
    
    // Add new booking
    const updatedBookings = [...existingBookings, newBooking];
    
    // Save to local storage
    localStorage.setItem('travelBookings', JSON.stringify(updatedBookings));

    alert(`Booking request received for ${destination.title}!\nWe'll contact you shortly at ${bookingData.email} to confirm your trip.`);
    
    // Reset form
    setBookingData({
      destination: '',
      date: '',
      members: 1,
      name: '',
      email: '',
      phone: ''
    });
  };

  return (
    <div className="destinations">
      <div className="container">
        <h1 className="section-title">Explore Our Destinations</h1>
        
        <div className="filter-tabs" style={{ marginBottom: '30px', display: 'flex', justifyContent: 'center', gap: '10px' }}>
          <button 
            className={`btn ${activeTab === 'all' ? 'active' : ''}`} 
            onClick={() => setActiveTab('all')}
            style={{ background: activeTab === 'all' ? '#003580' : '#febb02' }}
          >
            All Destinations
          </button>
          <button 
            className={`btn ${activeTab === 'beach' ? 'active' : ''}`} 
            onClick={() => setActiveTab('beach')}
            style={{ background: activeTab === 'beach' ? '#003580' : '#febb02' }}
          >
            Beach
          </button>
          <button 
            className={`btn ${activeTab === 'mountain' ? 'active' : ''}`} 
            onClick={() => setActiveTab('mountain')}
            style={{ background: activeTab === 'mountain' ? '#003580' : '#febb02' }}
          >
            Mountain
          </button>
          <button 
            className={`btn ${activeTab === 'cultural' ? 'active' : ''}`} 
            onClick={() => setActiveTab('cultural')}
            style={{ background: activeTab === 'cultural' ? '#003580' : '#febb02' }}
          >
            Cultural
          </button>
          <button 
            className={`btn ${activeTab === 'adventure' ? 'active' : ''}`} 
            onClick={() => setActiveTab('adventure')}
            style={{ background: activeTab === 'adventure' ? '#003580' : '#febb02' }}
          >
            Adventure
          </button>
          <button 
            className={`btn ${activeTab === 'city' ? 'active' : ''}`} 
            onClick={() => setActiveTab('city')}
            style={{ background: activeTab === 'city' ? '#003580' : '#febb02' }}
          >
            City
          </button>
        </div>
        
        <div className="destination-grid">
          {filteredDestinations.map(destination => (
            <div key={destination.id} className="destination-card">
              <img 
                src={require(`../assets/images/${destination.image}`)} 
                alt={destination.title} 
                className="destination-img" 
              />
              <div className="destination-content">
                <h3 className="destination-title">{destination.title}, {destination.location}</h3>
                <p className="destination-description">{destination.description}</p>
                <p className="destination-price">From {destination.price} per person</p>
                
                <div className="booking-form">
                  <h4>Book This Trip</h4>
                  <form onSubmit={(e) => handleBookingSubmit(e, destination)}>
                    <input 
                      type="text" 
                      name="name" 
                      placeholder="Your Name" 
                      value={bookingData.name}
                      onChange={handleBookingChange}
                      required 
                    />
                    <input 
                      type="email" 
                      name="email" 
                      placeholder="Email Address" 
                      value={bookingData.email}
                      onChange={handleBookingChange}
                      required 
                    />
                    <input 
                      type="tel" 
                      name="phone" 
                      placeholder="Phone Number" 
                      value={bookingData.phone}
                      onChange={handleBookingChange}
                      required 
                    />
                    <input 
                      type="date" 
                      name="date" 
                      value={bookingData.date}
                      onChange={handleBookingChange}
                      required 
                    />
                    <select 
                      name="members" 
                      value={bookingData.members}
                      onChange={handleBookingChange}
                      required
                    >
                      {[1, 2, 3, 4, 5, 6].map(num => (
                        <option key={num} value={num}>{num} {num === 1 ? 'Person' : 'People'}</option>
                      ))}
                    </select>
                    <button type="submit" className="btn">Request Booking</button>
                  </form>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Destinations;