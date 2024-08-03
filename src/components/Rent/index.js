import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCaretDown } from "react-icons/fa";
import './index.css';

const rentProperties = [
  {
    "id": 1,
    "title": "Apartment",
    "description": "A cozy apartment in the city center with all modern amenities.",
    "price": 10000,
    "image": "https://images.pexels.com/photos/45130/pexels-photo-45130.jpeg",
    "location": "Hyderabad",
    "bedrooms": 2,
    "amenities": ["WiFi", "Air Conditioning", "TV"],
    "availability": "Within 15 days",
    "tenant_type": "Family"
  },
  {
    "id": 2,
    "title": "Villa",
    "description": "A luxury villa with a sea view, perfect for a relaxing getaway.",
    "price": 20000,
    "image": "https://images.pexels.com/photos/164077/pexels-photo-164077.jpeg",
    "location": "Bangalore",
    "bedrooms": 4,
    "amenities": ["Pool", "WiFi", "Breakfast"],
    "availability": "Immediately",
    "tenant_type": "Single"
  },
  {
    "id": 3,
    "title": "Full house",
    "description": "A charming cottage in the countryside, ideal for nature lovers.",
    "price": 30000,
    "image": "https://images.pexels.com/photos/208975/pexels-photo-208975.jpeg",
    "location": "Chennai",
    "bedrooms": 3,
    "amenities": ["Garden", "WiFi", "Fireplace"],
    "availability": "After 30 days",
    "tenant_type": "Family"
  },
  {
    "id": 4,
    "title": "Portions",
    "description": "A stylish loft in a trendy neighborhood, close to restaurants and shops.",
    "price": 10000,
    "image": "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg",
    "location": "Mumbai",
    "bedrooms": 1,
    "amenities": ["WiFi", "Kitchen", "Gym"],
    "availability": "Within 30 days",
    "tenant_type": "Family"
  },
  {
    "id": 5,
    "title": "Apartment",
    "description": "A beautiful apartment beside the beach, perfect for a beach view.",
    "price": 30000,
    "image": "https://images.pexels.com/photos/46221/pexels-photo-46221.jpeg",
    "location": "Hyderabad",
    "bedrooms": 2,
    "amenities": ["Beach Access", "WiFi", "Barbecue"],
    "availability": "Within 15 days",
    "tenant_type": "Family"
  },
  {
    "id": 6,
    "title": "Villa",
    "description": "A luxury villa with a sea view, perfect for a relaxing getaway.",
    "price": 100000,
    "image": "https://images.pexels.com/photos/367529/pexels-photo-367529.jpeg",
    "location": "Bangalore",
    "bedrooms": 4,
    "amenities": ["Hot Tub", "WiFi", "Mini Bar"],
    "availability": "Immediately",
    "tenant_type": "Family"
  },
  {
    "id": 7,
    "title": "Full house",
    "description": "An extravagant house suite with stunning city views.",
    "price": 40000,
    "image": "https://assets.ccbp.in/frontend/static-website/flats-list-d1-img.png",
    "location": "Bangalore",
    "bedrooms": 2,
    "amenities": ["WiFi", "Balcony"],
    "availability": "Immediately",
    "tenant_type": "Family"
  },
  {
    "id": 8,
    "title": "Apartment",
    "description": "A cozy apartment in the city center with all modern amenities.",
    "price": 60000,
    "image": "https://assets.ccbp.in/frontend/static-website/flats-list-card3-img.png",
    "location": "Chennai",
    "bedrooms": 3,
    "amenities": ["Hot Tub", "WiFi", "Mini Bar"],
    "availability": "Within 15 days",
    "tenant_type": "Family"
  },
  {
    "id": 9,
    "title": "Full house",
    "description": "An extravagant penthouse suite with stunning city views.",
    "price": 100000,
    "image": "https://assets.ccbp.in/frontend/static-website/flats-list-card2-img.png",
    "location": "Hyderabad",
    "bedrooms": 4,
    "amenities": ["Balcony", "WiFi", "Mini Bar", "Pool"],
    "availability": "Immediately",
    "tenant_type": "Family"
  },
  {
    "id": 10,
    "title": "Portions",
    "description": "A stylish loft in a trendy neighborhood, close to restaurants and shops.",
    "price": 10000,
    "image": "https://images.pexels.com/photos/367529/pexels-photo-367529.jpeg",
    "location": "Bangalore",
    "bedrooms": 1,
    "amenities": ["Bed", "Attached bathroom", "Mini Kitchen"],
    "availability": "Immediately",
    "tenant_type": "Single"
  },
  {
    "id": 11,
    "title": "Portions",
    "description": "A stylish loft in a trendy neighborhood, close to restaurants and shops.",
    "price": 30000,
    "image": "https://images.pexels.com/photos/367529/pexels-photo-367529.jpeg",
    "location": "Hyderabad",
    "bedrooms": 2,
    "amenities": ["Bed", "Attached bathroom", "Mini Kitchen"],
    "availability": "Immediately",
    "tenant_type": "Family"
  }
];

const Rent = () => {
  const navigate = useNavigate();

  const [dropdownLocation, setDropdownLocation] = useState(false);
  const [dropdownBedrooms, setDropdownBedrooms] = useState(false);
  const [dropdownPricerange, setDropdownPricerange] = useState(false);
  const [dropdownHousetype, setDropdownHousetype] = useState(false);
  const [dropdownAvailability, setDropdownAvailability] = useState(false);
  const [dropdownTenant, setDropdownTenant] = useState(false);

  const [selectedLocation, setSelectedLocation] = useState('Bangalore');
  const [selectedBedrooms, setSelectedBedrooms] = useState('');
  const [selectedPricerange, setSelectedPricerange] = useState('');
  const [selectedHousetype, setSelectedHousetype] = useState('');
  const [selectedAvailability, setSelectedAvailability] = useState('');
  const [selectedTenant, setSelectedTenant] = useState('');

  const handleSelect = (location) => {
    setSelectedLocation(location);
    setDropdownLocation(false);
  };

  const handleSelectBedroom = (bedroom) => {
    setSelectedBedrooms(bedroom);
    setDropdownBedrooms(false);
  };

  const handleSelectPricerange = (pricerange) => {
    setSelectedPricerange(pricerange);
    setDropdownPricerange(false);
  };

  const handleSelectHousetype = (housetype) => {
    setSelectedHousetype(housetype);
    setDropdownHousetype(false);
  };

  const handleSelectAvailability = (availability) => {
    setSelectedAvailability(availability);
    setDropdownAvailability(false);
  };

  const handleSelectTenant = (tenant) => {
    setSelectedTenant(tenant);
    setDropdownTenant(false);
  };

  const toggleDropdown = (setter) => () => {
    setter(prev => !prev);
  };

  const handleSearch = () => {
    const filtered = rentProperties.filter(property => {
      return (
        (selectedLocation ? property.location === selectedLocation : true) &&
        (selectedBedrooms ? property.bedrooms.toString() === selectedBedrooms : true) &&
        (selectedPricerange ? property.price.toString() === selectedPricerange : true) &&
        (selectedHousetype ? property.title === selectedHousetype : true) &&
        (selectedAvailability ? property.availability === selectedAvailability : true) &&
        (selectedTenant ? property.tenant_type === selectedTenant : true)
      );
    });
    console.log('Filtered Properties:', filtered);
    navigate('/filteredProperties', { state: { filteredProperties: filtered } });
    console.log({
      selectedLocation,
      selectedBedrooms,
      selectedPricerange,
      selectedHousetype,
      selectedAvailability,
      selectedTenant,
    });
  };

  return (
    <div className='rent-container'>
      <div className='top-container'>
        <h1 className='rent-head'>Easy Buy</h1>
        <p className='description'>World's largest site for property search</p>
      </div>

      <div className='rent-cont'>
        <h1 className='rent-head'>RENT</h1>
      </div>

      <div className='filter-container'>
        <div className='top-filter'>
          <div className='location-container'>
            <div className='location-header'>
              <input
                type="text"
                className='location-input'
                placeholder="Location"
                value={selectedLocation}
                readOnly
                onClick={toggleDropdown(setDropdownLocation)}
              />
              <FaCaretDown className="down-arrow" onClick={toggleDropdown(setDropdownLocation)} />
            </div>
            {dropdownLocation && (
              <div className='dropdown'>
                <p className='dropdown-item' onClick={() => handleSelect('Bangalore')}>Bangalore</p>
                <p className='dropdown-item' onClick={() => handleSelect('Hyderabad')}>Hyderabad</p>
                <p className='dropdown-item' onClick={() => handleSelect('Chennai')}>Chennai</p>
                <p className='dropdown-item' onClick={() => handleSelect('Mumbai')}>Mumbai</p>
              </div>
            )}
          </div>

          <div className='location-container'>
            <div className='location-header' onClick={toggleDropdown(setDropdownBedrooms)}>
              <h1 className='heading'>Bedrooms: {selectedBedrooms}</h1>
              <FaCaretDown className="down-arrow" />
            </div>
            {dropdownBedrooms && (
              <div className='dropdown'>
                <p className='dropdown-item' onClick={() => handleSelectBedroom('1')}>1</p>
                <p className='dropdown-item' onClick={() => handleSelectBedroom('2')}>2</p>
                <p className='dropdown-item' onClick={() => handleSelectBedroom('3')}>3</p>
                <p className='dropdown-item' onClick={() => handleSelectBedroom('4')}>4</p>
              </div>
            )}
          </div>

          <div className='location-container'>
            <div className='location-header' onClick={toggleDropdown(setDropdownPricerange)}>
              <h1 className='heading'>Price Range: {selectedPricerange}</h1>
              <FaCaretDown className="down-arrow" />
            </div>
            {dropdownPricerange && (
              <div className='dropdown price-range'>
                <p className='dropdown-item' onClick={() => handleSelectPricerange('10000')}>10000</p>
                <p className='dropdown-item' onClick={() => handleSelectPricerange('20000')}>20000</p>
                <p className='dropdown-item' onClick={() => handleSelectPricerange('30000')}>30000</p>
                <p className='dropdown-item' onClick={() => handleSelectPricerange('40000')}>40000</p>
                <p className='dropdown-item' onClick={() => handleSelectPricerange('50000')}>50000</p>
                <p className='dropdown-item' onClick={() => handleSelectPricerange('60000')}>60000</p>
                <p className='dropdown-item' onClick={() => handleSelectPricerange('70000')}>70000</p>
                <p className='dropdown-item' onClick={() => handleSelectPricerange('80000')}>80000</p>
                <p className='dropdown-item' onClick={() => handleSelectPricerange('90000')}>90000</p>
                <p className='dropdown-item' onClick={() => handleSelectPricerange('100000')}>100000</p>
              </div>
            )}
          </div>
        </div>

        <div className='down-filter'>
          <div className='location-container'>
            <div className='location-header' onClick={toggleDropdown(setDropdownHousetype)}>
              <h1 className='heading'>House Type: {selectedHousetype}</h1>
              <FaCaretDown className="down-arrow" />
            </div>
            {dropdownHousetype && (
              <div className='dropdown'>
                <p className='dropdown-item' onClick={() => handleSelectHousetype('Apartment')}>Apartment</p>
                <p className='dropdown-item' onClick={() => handleSelectHousetype('Villa')}>Villa</p>
                <p className='dropdown-item' onClick={() => handleSelectHousetype('Hostel')}>Hostel</p>
                <p className='dropdown-item' onClick={() => handleSelectHousetype('Full House')}>Full House</p>
              </div>
            )}
          </div>

          <div className='location-container'>
            <div className='location-header' onClick={toggleDropdown(setDropdownAvailability)}>
              <h1 className='heading'>Availability: {selectedAvailability}</h1>
              <FaCaretDown className="down-arrow" />
            </div>
            {dropdownAvailability && (
              <div className='dropdown'>
                <p className='dropdown-item' onClick={() => handleSelectAvailability('Immediately')}>Immediately</p>
                <p className='dropdown-item' onClick={() => handleSelectAvailability('Within 15 days')}>Within 15 days</p>
                <p className='dropdown-item' onClick={() => handleSelectAvailability('Within 30 days')}>Within 30 days</p>
                <p className='dropdown-item' onClick={() => handleSelectAvailability('After 30 days')}>After 30 days</p>
              </div>
            )}
          </div>

          <div className='location-container'>
            <div className='location-header' onClick={toggleDropdown(setDropdownTenant)}>
              <h1 className='heading'>Tenant: {selectedTenant}</h1>
              <FaCaretDown className="down-arrow" />
            </div>
            {dropdownTenant && (
              <div className='dropdown'>
                <p className='dropdown-item' onClick={() => handleSelectTenant('Single')}>Single</p>
                <p className='dropdown-item' onClick={() => handleSelectTenant('Family')}>Family</p>
              </div>
            )}
          </div>
        </div>
      </div>
     <div className='search'> 
        <button className='search-button' onClick={handleSearch}>Search</button>
     </div>
     
    </div>
  );
};

export default Rent;
