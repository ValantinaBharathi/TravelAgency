import React from 'react';
import '../styles/style.css';

const FAQ = () => {
  return (
    <div className="container content-page">
      <h1>Frequently Asked Questions</h1>
      
      <h2>Booking Questions</h2>
      <div className="faq-item">
        <h3>How do I make a booking?</h3>
        <p>You can book directly through our website by selecting your destination, travel dates, and preferences. Alternatively, you can call our travel consultants at +1 (123) 456-7890 for personalized assistance.</p>
      </div>
      
      <div className="faq-item">
        <h3>Can I modify my booking after it's confirmed?</h3>
        <p>Yes, most bookings can be modified depending on the terms of your reservation. Please contact our customer service team as soon as possible to request changes. Modification fees may apply.</p>
      </div>
      
      <div className="faq-item">
        <h3>What payment methods do you accept?</h3>
        <p>We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers. Some restrictions may apply depending on your country of residence.</p>
      </div>
      
      <h2>Cancellation & Refunds</h2>
      <div className="faq-item">
        <h3>What is your cancellation policy?</h3>
        <p>Cancellation policies vary depending on the service provider (hotels, airlines, tour operators). The specific cancellation terms for your booking will be displayed during the reservation process and included in your confirmation email.</p>
      </div>
      
      <div className="faq-item">
        <h3>How long does it take to process a refund?</h3>
        <p>Refunds typically take 7-10 business days to process after cancellation approval. The time it takes for the refund to appear in your account depends on your bank or credit card company.</p>
      </div>
      
      <h2>Travel Documents</h2>
      <div className="faq-item">
        <h3>What travel documents do I need?</h3>
        <p>Requirements vary by destination but typically include a valid passport (with at least 6 months validity), visas (if required), and any necessary health certificates. We provide detailed information about required documents for your specific trip after booking.</p>
      </div>
      
      <div className="faq-item">
        <h3>Do you assist with visa applications?</h3>
        <p>Yes, we provide visa assistance for most destinations. Our team can guide you through the application process and provide the necessary supporting documents for your visa application.</p>
      </div>
      
      <h2>Travel Insurance</h2>
      <div className="faq-item">
        <h3>Do you offer travel insurance?</h3>
        <p>Yes, we strongly recommend purchasing comprehensive travel insurance. We offer several insurance options that can be added during the booking process or purchased separately.</p>
      </div>
      
      <div className="faq-item">
        <h3>What does travel insurance typically cover?</h3>
        <p>Coverage varies by plan but generally includes trip cancellation/interruption, medical expenses, emergency evacuation, lost luggage, and travel delays. Please review the specific policy details before purchasing.</p>
      </div>
      
      <h2>During Your Trip</h2>
      <div className="faq-item">
        <h3>What if I need assistance during my trip?</h3>
        <p>We provide 24/7 emergency support for all our travelers. The contact number for our emergency support team is included in your travel documents.</p>
      </div>
      
      <div className="faq-item">
        <h3>Can I change my itinerary while traveling?</h3>
        <p>In most cases, yes. Contact our support team or your local representative (details provided in your travel documents) to discuss changes. Additional costs may apply.</p>
      </div>
      
      <div className="faq-item">
        <h3>Still have questions?</h3>
        <p>Our customer service team is available 24/7 to assist you. Call us at +1 (123) 456-7890 or email support@travelease.com.</p>
      </div>
    </div>
  );
};

export default FAQ;