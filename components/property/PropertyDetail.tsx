// components/property/PropertyDetail.tsx
import React from "react";
import { PropertyProps } from "@/interfaces/index";
import BookingSection from "./BookingSection";
import ReviewSection from "./ReviewSection";

const PropertyDetail: React.FC<{ property: PropertyProps }> = ({ property }) => {
  return (
    <div className="container mx-auto p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Left Section: Details */}
      <div className="lg:col-span-2">
        <h1 className="text-4xl font-bold">{property.name}</h1>
        <div className="flex items-center space-x-2 mt-2">
          <span className="text-yellow-500">{property.rating} stars</span>
          <span>{property.address.city}, {property.address.country}</span>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 gap-4 mt-4">
          {property.images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`${property.name} image ${idx + 1}`}
              className={`w-full ${idx === 0 ? "col-span-2 h-96" : "h-48"} object-cover rounded-lg`}
            />
          ))}
        </div>

        {/* Description */}
        <div className="mt-6">
          <h2 className="text-2xl font-semibold">Description</h2>
          <p className="mt-2">{property.description}</p>
        </div>

        {/* Amenities */}
        <div className="mt-6">
          <h2 className="text-2xl font-semibold">What this place offers</h2>
          <ul className="flex flex-wrap gap-2 mt-2">
            {property.category.map((amenity, index) => (
              <li key={index} className="bg-gray-200 p-2 rounded-md">{amenity}</li>
            ))}
          </ul>
        </div>

        {/* Reviews */}
        <ReviewSection reviews={property.reviews} />
      </div>

      {/* Right Section: Booking */}
      <BookingSection price={property.price} />
    </div>
  );
};

export default PropertyDetail;
