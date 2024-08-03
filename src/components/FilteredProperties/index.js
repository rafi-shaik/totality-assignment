import React from 'react';
import { useLocation } from 'react-router-dom';
import { useBookings } from '../../Context/BookingContext';
import './index.css';

const FilteredProperties = () => {
  const location = useLocation();
  const { bookings, addBooking } = useBookings();

  const filteredProperties = location.state?.filteredProperties || [];

  return (
    <div className="filtered-properties-container">
      <h1  className='booking-head'>Filtered Properties</h1>
      {filteredProperties.length > 0 ? (
        <div className="property-list">
          {filteredProperties.map((property) => {
            const isBooked = bookings.some((booking) => booking.id === property.id);

            return (
              <div key={property.id} className="property-card">
                <img src={property.image} alt={property.title} className='book-img' />
                <div className="property-details">
                  <h2>{property.title}</h2>
                  <p>{property.description}</p>
                  <p>Price: {property.price}</p>
                  <p>Location: {property.location}</p>
                  <p>Bedrooms: {property.bedrooms}</p>
                  <p>Amenities: {property.amenities.join(', ')}</p>
                  <p>Availability: {property.availability}</p>
                  <p>Tenant Type: {property.tenant_type}</p>
                  <button onClick={() => addBooking(property)} disabled={isBooked}>
                    {isBooked ? 'Booked' : 'Book'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <p>No properties found.</p>
      )}
    </div>
  );
};

export default FilteredProperties;
