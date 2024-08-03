import React from "react";
import { useBookings } from "../../Context/BookingContext";
import { useCart } from "../../Context/CartContext";
import "./index.css";

const Bookings = () => {
  const { bookings } = useBookings();
  const { addToCart, cart } = useCart();

  return (
    <div className="bookings">
      <h1 className="booking-head">My Bookings</h1>
      {bookings && bookings.length > 0 ? (
        bookings.map((property) => {
          const isAdded = cart.some((item) => item.id === property.id);

          return (
            <div key={property.id} className="property-card">
              <div className="img-container">
                {" "}
                <img
                  className="book-img"
                  src={property.image}
                  alt={property.title}
                />{" "}
              </div>

              <div className="des-cont">
                <h2 className="title">{property.title}</h2>
                <p className="loca">{property.location}</p>
                <p className="loca">{property.description}</p>
                <p className="loca">Price:{property.price}\-</p>
                <p className="loca">Bedrooms:{property.bedrooms}</p>
                <p className="loca">Availability:{property.availability}</p>
                <p className="loca">Tenant type:{property.tenant_type}</p>

                <button
                  className="add-to-cart"
                  onClick={() => addToCart(property)}
                  disabled={isAdded}
                >
                  {isAdded
                    ? " Added to Cart. Please check the cart."
                    : "Add to Cart"}
                </button>
              </div>
            </div>
          );
        })
      ) : (
        <p>No bookings yet.</p>
      )}
    </div>
  );
};

export default Bookings;
