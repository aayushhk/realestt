import React, { useEffect, useState } from "react";

const PropertyCards = () => {
  const [properties, setProperties] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProperties, setFilteredProperties] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/properties")
      .then((res) => res.json())
      .then((data) => {
        setProperties(data);
        setFilteredProperties(data);  // Initially display all properties
      })
      .catch((err) => console.error("Error fetching properties:", err));
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    if (event.target.value === "") {
      setFilteredProperties(properties);
    } else {
      const filtered = properties.filter((property) =>
        property.name.toLowerCase().includes(event.target.value.toLowerCase())
      );
      setFilteredProperties(filtered);
    }
  };

  return (
    <div className="p-6 bg-primary-light text-white">
      {/* Back Button */}
      <div className="mb-4">
        <button
          className="bg-accent-gold text-black px-4 py-2 rounded-lg hover:bg-accent-teal transition focus:outline-none focus:ring-2 focus:ring-accent-teal"
          onClick={() => window.location.href = '/'}
        >
          ← Back to Home
        </button>
      </div>

      {/* Header */}
      <header className="mb-6 text-center">
        <h1 className="text-4xl font-semibold mb-2 text-accent-gold">🏡 Property Listings</h1>
        <p className="text-lg text-primary-mid">
          Browse through our available properties and view in 3D!
        </p>
      </header>

      {/* Search and Filters */}
      <div className="flex justify-between mb-6">
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search properties..."
            className="p-3 rounded-lg bg-primary-mid text-black focus:outline-none focus:ring-2 focus:ring-accent-teal"
            value={searchTerm}
            onChange={handleSearch}
          />
          <select className="p-3 rounded-lg bg-primary-mid text-black focus:outline-none focus:ring-2 focus:ring-accent-teal">
            <option>All Locations</option>
            {/* Add location options here for filtering */}
            <option>Location 1</option>
            <option>Location 2</option>
          </select>
        </div>
        <button className="bg-accent-teal text-black p-3 rounded-lg hover:bg-accent-gold transition focus:outline-none focus:ring-2 focus:ring-accent-gold">
          Filter
        </button>
      </div>

      {/* Property Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProperties.map((property) => (
          <div
            key={property.id}
            className="bg-primary-mid rounded-2xl shadow-xl p-6 hover:shadow-2xl transition"
          >
            {/* Property Image */}
            <img
              src={property.image_url || "https://via.placeholder.com/400x300?text=No+Image"}
              alt={property.name}
              className="w-full h-48 object-cover rounded-lg mb-4 border-4 border-accent-gold"
            />
            <h2 className="text-2xl font-semibold mb-2 text-accent-gold">{property.name}</h2>
            <p className="text-primary-light mb-1">
              <span className="font-semibold">Location:</span> {property.location}
            </p>
            <p className="text-primary-light mb-1">
              <span className="font-semibold">ID:</span> {property.id}
            </p>
            <p className="text-blue-600 break-words mb-2">
              <span className="font-semibold">3D Model URL:</span>
              <a
                href={property.model_url}
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                {property.model_url}
              </a>
            </p>

            {/* View in 3D Button */}
            <div className="mt-4">
              <button
                className="bg-accent-teal text-black p-3 rounded-lg hover:bg-accent-gold transition w-full focus:outline-none focus:ring-2 focus:ring-accent-teal"
                onClick={() => window.location.href = '/about'}
              >
                View in 3D
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyCards;
