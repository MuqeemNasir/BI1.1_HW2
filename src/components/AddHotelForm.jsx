import { useState } from "react";
const BASE_URL = import.meta.env.VITE_API_URL;

const AddHotelForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    location: "",
    rating: "",
    reviews: "",
    website: "",
    phoneNumber: "",
    checkInTime: "",
    checkOutTime: "",
    amenities: "",
    priceRange: "",
    reservationsNeeded: false,
    isParkingAvailable: false,
    isWifiAvailable: false,
    isPoolAvailable: false,
    isSpaAvailable: false,
    isRestaurantAvailable: false,
    photos: "",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    let newValue = value;

    if (name === "rating") {
      newValue = value === "" ? "" : parseInt(value, 10);
    }

    if(type === "checkbox"){
        newValue = checked
    }

    setFormData((prev) => ({
      ...prev,
      [name]: newValue,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const payload = {
        ...formData,
        category: formData.category ? [formData.category] : [],
        reviews: formData.reviews ? formData.reviews.split(",").map(r => r.trim()) : [],
        amenities: formData.amenities ? formData.amenities.split(",").map(a => a.trim()) : [],
        photos: formData.photos ? formData.photos.split(",").map(p => p.trim()) : [],
    }

    try {
      const response = await fetch(`${BASE_URL}/hotels`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "Failed to add hotel.");
      }
      

      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
      }, 3000);

      setFormData({
        name: "",
        category: "",
        location: "",
        rating: "",
        reviews: "",
        website: "",
        phoneNumber: "",
        checkInTime: "",
        checkOutTime: "",
        amenities: "",
        priceRange: "",
        reservationsNeeded: false,
        isParkingAvailable: false,
        isWifiAvailable: false,
        isPoolAvailable: false,
        isSpaAvailable: false,
        isRestaurantAvailable: false,
        photos: "",
      });
    } catch (error) {
      console.log("Failed to add hotel.", error);
    }
  };

  return (
    <div>
      <h2>Add New Hotel</h2>
      {success ? (
        <p style={{ color: "green" }}>Hotel Added Successfully</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>Name: </label>
          <br />
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <br />
          <br />
          <label>Category: </label>
          <select name="category" value={formData.category} onChange={handleChange}>
            <option value="">Select Options</option>
            <option value="Budget">Budget</option>
            <option value="Mid-Range">Mid-Range</option>
            <option value="Luxury">Luxury</option>
            <option value="Boutique">Boutique</option>
            <option value="Resort">Resort</option>
            <option value="Other">Other</option>
          </select>
          <br />
          <br />
          <label>Location: </label>
          <br />
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
          />
          <br />
          <br />
          <label>Rating: </label>
          <br />
          <input
            type="number"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
          />
          <br />
          <br />
          <label>Reviews: </label>
          <br />
          <input
            type="text"
            name="reviews"
            value={formData.reviews}
            onChange={handleChange}
          />
          <br />
          <br />
          <label>Website: </label>
          <br />
          <input
            type="text"
            name="website"
            value={formData.website}
            onChange={handleChange}
          />
          <br />
          <br />
          <label>Phone Number: </label>
          <br />
          <input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
          <br />
          <br />
          <label>Check In Time: </label>
          <br />
          <input
            type="text"
            name="checkInTime"
            value={formData.checkInTime}
            onChange={handleChange}
          />
          <br />
          <br />
          <label>Check Out Time: </label>
          <br />
          <input
            type="text"
            name="checkOutTime"
            value={formData.checkOutTime}
            onChange={handleChange}
          />
          <br />
          <br />
          <label>Amenities:</label>
          <br />
          <input type="text" name="amenities" value={formData.amenities} onChange={handleChange} />
          <br /><br />
          <label>Price Range: </label>
          <select name="priceRange" value={formData.priceRange} onChange={handleChange}>
            <option value="">Select Price Range</option>
            <option value="$$ (11-30)">11-30</option>
            <option value="$$$ (31-60)">31-60</option>
            <option value="$$$$ (61+)">61 and above</option>
            <option value="Other">Other</option>
          </select>
          <br />
          <br />
          <label>
            <input
              type="checkbox"
              name="reservationsNeeded"
              checked={formData.reservationsNeeded}
              onChange={handleChange}
            />{" "}
            Reservations Needed
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              name="isParkingAvailable"
              checked={formData.isParkingAvailable}
              onChange={handleChange}
            />{" "}
            Parking Available
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              name="isWifiAvailable"
              checked={formData.isWifiAvailable}
              onChange={handleChange}
            />{" "}
            WiFi Available
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              name="isPoolAvailable"
              checked={formData.isPoolAvailable}
              onChange={handleChange}
            />{" "}
            Pool Available
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              name="isSpaAvailable"
              checked={formData.isSpaAvailable}
              onChange={handleChange}
            />{" "}
            Spa Available
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              name="isRestaurantAvailable"
              checked={formData.isRestaurantAvailable}
              onChange={handleChange}
            />{" "}
            Restaurant Available
          </label>
          <br />
          <br />
          <label>Photos: </label>
          <br />
          <input
            type="text"
            name="photos"
            value={formData.photos}
            onChange={handleChange}
          />
          <br />
          <br />
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default AddHotelForm;
