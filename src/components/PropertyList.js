import React, { useEffect, useState } from 'react';
import { fetchProperties } from '../services/api';

const PropertyList = () => {
  const [properties, setProperties] = useState([]); // Ensure this is initialized as an empty array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getProperties = async () => {
      try {
        const data = await fetchProperties();
        setProperties(data); 
      } catch (error) {
        setError('Failed to fetch properties');
      } finally {
        setLoading(false);
      }
    };

    getProperties();
  }, []);

  if (loading) {
    return <div>Loading properties...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h2>Property Listings</h2>
      {properties.length === 0 ? (
        <p>No properties available</p>
      ) : (
        <div>
          {properties.map((property) => (
            <div key={property.id}>
              <h3>{property.title}</h3>
              <p>{property.description}</p>
              <p>Price: ${property.price}</p>
              <img style={{ width: '500px', height: 'auto' }} src={property.image} alt={property.title} />
              </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PropertyList;
