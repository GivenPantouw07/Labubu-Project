import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FadeLoader } from "react-spinners";
import { getDatabase, ref, set, onValue } from "firebase/database";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import { CSSTransition } from "react-transition-group";



dayjs.extend(utc);
dayjs.extend(timezone);


const Booking = () => {
  const Navigate = useNavigate();
  const [selectedDateTime, setSelectedDateTime] = useState("");
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [additionalDetails, setAdditionalDetails] = useState("");
  const [isBookingAdded, setIsBookingAdded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showContent, setShowContent] = useState(true);
  const [booking, setBooking] = useState({});

  

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
  
  useEffect(() => {
    const db = getDatabase();
    const bookingRef = ref(db, "booking");
    onValue(bookingRef, (snapshot) => {
      const data = snapshot.val();
      setBooking(data);
    });
  }, []);

  const writeBookingData = (name, email, dateTime, details) => {
    const db = getDatabase();
  
    const formattedDateTime = dayjs(dateTime)
      .tz("Asia/Jakarta")
      .format("YYYY-MM-DD HH:mm:ss");
  
    const timestamp = dayjs().format("YYYYMMDDHHmmss");
    const readableKey = `${name.replace(/\s+/g, "_")}_${timestamp}`;
  
    const bookingRef = ref(db, `/booking/${readableKey}`);
  
    return set(bookingRef, {
      username: name,
      email: email,
      bookingTime: formattedDateTime, 
      additionalDetails: details,
    })
    .then(() => {
      console.log("Booking data has been saved.");
    })
    .catch((error) => {
      console.error("Error writing booking data: ", error);
    });
  };


  const handleAddBooking = async(event) => {
    event.preventDefault();

    const selectedDay = dayjs(selectedDateTime).day();
    const selectedTime = dayjs(selectedDateTime).hour();

    setError("");

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

    if (!name || !email || !selectedDateTime) {
      setError("All fields are required.");
      return;
    }
    
    setIsLoading(true);

    try {
      await writeBookingData(name, email, selectedDateTime, additionalDetails);
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setIsBookingAdded(true);
      console.log("Booking added successfully");

      setName("");
      setEmail("");
      setSelectedDateTime("");
      setAdditionalDetails("");
      } catch (error) {
        console.error("Error adding booking: ", error);
        setError("Failed to add booking. Please try again.");
      } finally {
        setIsLoading(false);
      }
  };

  const handlePayNow = (event) => {
    event.preventDefault();

    const selectedDay = dayjs(selectedDateTime).day();
    const selectedTime = dayjs(selectedDateTime).hour();

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
    Navigate("/payment");
  };

  return (
    <div>
      <div className="page-header">
        <div className="container">
        <CSSTransition in={setShowContent} timeout={500} classNames="fade" unmountOnExit appear>
          <div className="row">
            <div className="col-12">
              <h2>{booking.navbarTitle}</h2>
            </div>
            <div className="col-12">
              <Link to="/">{booking.navbar_subTitle1}</Link>
              <Link to="/booking">{booking.navbar_subTitle2}</Link>
            </div>
          </div>
        </CSSTransition>
        </div>
      </div>

      {/* Location Section */}
      <div className="location">
        {isLoading ? (
          <div className="loading-overlay">
            <div className="loading-box">
              <FadeLoader color="#36d7b7" loading={isLoading} size={100} />
              <p>Loading... Please wait.</p>
            </div>
          </div>
        ) : (
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
                      value={name} 
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      required
                      value={email} 
                      onChange={(e) => setEmail(e.target.value)}
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
                      value={additionalDetails} 
                      onChange={(e) => setAdditionalDetails(e.target.value)}
                    ></textarea>
                  </div>
                  <div className="form-buttons">
                    <button
                      type="submit"
                      className="btn btn-custom mb-3"
                      onClick={handleAddBooking}
                    >
                      {booking.button_Add}
                    </button>

                    <button
                      type="submit"
                      className="btn btn-custom"
                      onClick={handlePayNow}
                      disabled={!isBookingAdded}
                    >
                      {booking.button_gtp}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};
export default Booking;
