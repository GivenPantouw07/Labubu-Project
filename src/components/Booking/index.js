import { Link, useNavigate } from "react-router-dom";
import { getDatabase, ref, onValue } from "firebase/database";
import React, { useState, useEffect } from "react";

const Booking = () => {
  const Navigate = useNavigate();
  const [selectedDateTime, setSelectedDateTime] = useState("");
  const [error, setError] = useState("");

  const locations = [
    {
      name: "Labubu Car Wash - Point 1",
      address: "Jalan Sudirman No. 10, Jakarta, Indonesia",
      phone: "+62 812 3456 7890",
    },
    {
      name: "Labubu Car Wash - Point 2",
      address: "Jalan Ahmad Yani No. 45, Bandung, Indonesia",
      phone: "+62 813 9876 5432",
    },
    {
      name: "Labubu Car Wash - Point 3",
      address: "Jalan Diponegoro No. 22, Surabaya, Indonesia",
      phone: "+62 811 2345 6789",
    },
    {
      name: "Labubu Car Wash - Point 4",
      address: "Jalan Gatot Subroto No. 5, Yogyakarta, Indonesia",
      phone: "+62 819 8765 4321",
    },
  ];

  const handlePayNow = (event) => {
    event.preventDefault();

    const selectedDay = new Date(selectedDateTime).getDay();
    const selectedTime = new Date(selectedDateTime).getHours();

    if (selectedDay === 0 || selectedDay === 6) {
      setError("Labubu Car Wash is closed on weekends.");
      return;
    }

    if (selectedTime < 8 || selectedTime >= 17) {
      setError(
        "Please select a time between 8:00 AM and 5:00 PM, Monday to Friday."
      );
      return;
    }

    setError("");
    Navigate("/payment");
  };

  const [booking, setBooking] = useState({});
  useEffect(() => {
    const db = getDatabase();
    const bookingRef = ref(db, "booking");
    onValue(bookingRef, (snapshot) => {
      const data = snapshot.val();
      setBooking(data);
    });
  }, []);
  return (
    <div>
      {/* Page Header */}
      <div className="page-header">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2>{booking.navbarTitle}</h2>
            </div>
            <div className="col-12">
              <Link to="/">{booking.navbar_subTitle1}</Link>
              <Link to="/booking">{booking.navbar_subTitle2}</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Location Section */}
      <div className="location">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="section-header text-left">
                <p>{booking.miniTitle}</p>
                <h2>{booking.Title}</h2>
              </div>
              <div className="row">
                {locations.map((locations, index) => (
                  <div className="col-md-6" key={index}>
                    <div className="location-item">
                      <i className="fa fa-map-marker-alt" />
                      <div className="location-text">
                        <h3>{locations.name}</h3>
                        <p>{locations.address}</p>
                        <p>
                          <strong>{booking.text}</strong>
                          {locations.phone}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Booking Form */}
            <div className="col-lg-5">
              <div className="location-form">
                <h3>{booking.form_Title}</h3>
                <form>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="datetime-local"
                      className="form-control"
                      placeholder="Preferred Time"
                      required
                      value={selectedDateTime}
                      onChange={(e) => setSelectedDateTime(e.target.value)}
                    />
                  </div>
                  {error && <p style={{ color: "white" }}>{error}</p>}
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      placeholder="Additional Details"
                      rows="3"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-custom"
                    onClick={handlePayNow}
                  >
                    {booking.button}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
