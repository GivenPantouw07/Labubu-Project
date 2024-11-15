const App = () => {
  return (
    <div>
      {/* Top Bar Start */}
      <div className="top-bar">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4 col-md-12">
              <div className="logo">
                {/* Ensure the href is valid. If it should navigate to the homepage, use a valid URL or React Router Link */}
                <a href="/home">
                  {" "}
                  {/* Updated href to a valid path */}
                  <h1>
                    Auto<span>Wash</span>
                  </h1>
                  {/* Uncomment and use a descriptive alt attribute if using an image */}
                  {/* <img src="img/logo.jpg" alt="AutoWash Logo" /> */}
                </a>
              </div>
            </div>
            <div className="col-lg-8 col-md-7 d-none d-lg-block">
              <div className="row">
                <div className="col-4">
                  <div className="top-bar-item">
                    <div className="top-bar-icon">
                      <i className="far fa-clock" />
                    </div>
                    <div className="top-bar-text">
                      <h3>Opening Hour</h3>
                      <p>Mon - Fri, 8:00 - 9:00</p>
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="top-bar-item">
                    <div className="top-bar-icon">
                      <i className="fa fa-phone-alt" />
                    </div>
                    <div className="top-bar-text">
                      <h3>Call Us</h3>
                      <p>+012 345 6789</p>
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="top-bar-item">
                    <div className="top-bar-icon">
                      <i className="far fa-envelope" />
                    </div>
                    <div className="top-bar-text">
                      <h3>Email Us</h3>
                      <p>info@example.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Top Bar End */}
      {/* Nav Bar Start */}
      <div className="nav-bar">
        <div className="container">
          <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
            <a href="/menu" className="navbar-brand">
              {" "}
              {/* Updated href to a valid path */}
              MENU
            </a>
            <button
              type="button"
              className="navbar-toggler"
              data-toggle="collapse"
              data-target="#navbarCollapse"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse justify-content-between"
              id="navbarCollapse"
            >
              <div className="navbar-nav mr-auto">
                <a href="/home" className="nav-item nav-link active">
                  {" "}
                  {/* Updated href */}
                  Home
                </a>
                <a href="/about" className="nav-item nav-link">
                  {" "}
                  {/* Updated href */}
                  About
                </a>
                <a href="/service" className="nav-item nav-link">
                  {" "}
                  {/* Updated href */}
                  Service
                </a>
                <a href="/price" className="nav-item nav-link">
                  {" "}
                  {/* Updated href */}
                  Price
                </a>
                <a href="/location" className="nav-item nav-link">
                  {" "}
                  {/* Updated href */}
                  Washing Points
                </a>
                <div className="nav-item dropdown">
                  <a
                    href="/pages" // Updated to a valid URL
                    className="nav-link dropdown-toggle"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Pages
                  </a>
                  <div className="dropdown-menu">
                    <a href="/blog" className="dropdown-item">
                      Blog Grid
                    </a>
                    <a href="/single" className="dropdown-item">
                      Detail Page
                    </a>
                    <a href="/team" className="dropdown-item">
                      Team Member
                    </a>
                    <a href="/booking" className="dropdown-item">
                      Schedule Booking
                    </a>
                  </div>
                </div>
                <a href="/contact" className="nav-item nav-link">
                  {" "}
                  {/* Updated href */}
                  Contact
                </a>
              </div>
              <div className="ml-auto">
                <a className="btn btn-custom" href="/appointment">
                  {" "}
                  {/* Updated href */}
                  Get Appointment
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
      {/* Nav Bar End */}
      {/* Carousel Start */}
      <div className="carousel">
        <div className="container-fluid">
          <div className="owl-carousel">
            <div className="carousel-item">
              <div className="carousel-img">
                <img
                  src="img/carousel-1.jpg"
                  alt="A car being washed and detailed"
                />{" "}
                {/* Updated alt text */}
              </div>
              <div className="carousel-text">
                <h3>Washing &amp; Detailing</h3>
                <h1>Keep your Car Newer</h1>
                <p>
                  Lorem ipsum dolor sit amet elit. Phasellus ut mollis mauris.
                  Vivamus egestas eleifend dui ac
                </p>
                <a className="btn btn-custom" href="/explore-more">
                  {" "}
                  {/* Updated href */}
                  Explore More
                </a>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-img">
                <img src="img/carousel-2.jpg" alt="Quality car service" />{" "}
                {/* Updated alt text */}
              </div>
              <div className="carousel-text">
                <h3>Washing &amp; Detailing</h3>
                <h1>Quality service for you</h1>
                <p>
                  Morbi sagittis turpis id suscipit feugiat. Suspendisse eu
                  augue urna. Morbi sagittis orci sodales
                </p>
                <a className="btn btn-custom" href="/quality-service">
                  {" "}
                  {/* Updated href */}
                  Explore More
                </a>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-img">
                <img
                  src="img/carousel-3.jpg"
                  alt="Exterior and interior car washing"
                />{" "}
                {/* Updated alt text */}
              </div>
              <div className="carousel-text">
                <h3>Washing &amp; Detailing</h3>
                <h1>Exterior &amp; Interior Washing</h1>
                <p>
                  Sed ultrices, est eget feugiat accumsan, dui nibh egestas
                  tortor, ut rhoncus nibh ligula euismod quam
                </p>
                <a className="btn btn-custom" href="/interior-exterior-washing">
                  {" "}
                  {/* Updated href */}
                  Explore More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Carousel End */}
      {/* About Start */}
      <div className="about">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-img">
                <img
                  src="img/about.jpg"
                  alt="A car being washed and detailed"
                />{" "}
                {/* Updated alt text */}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="section-header text-left">
                <p>About Us</p>
                <h2>Car Washing and Detailing</h2>{" "}
                {/* Capitalized for consistency */}
              </div>
              <div className="about-content">
                <p>
                  Lorem ipsum dolor sit amet elit. In vitae turpis. Donec in
                  hendre dui, vel blandit massa. Ut vestibulum suscipit cursus.
                  Cras quis porta nulla, ut placerat risus. Aliquam nec magna
                  eget velit luctus dictum.
                </p>
                <ul>
                  <li>
                    <i className="far fa-check-circle" />
                    Seats Washing
                  </li>
                  <li>
                    <i className="far fa-check-circle" />
                    Vacuum Cleaning
                  </li>
                  <li>
                    <i className="far fa-check-circle" />
                    Interior Wet Cleaning
                  </li>
                  <li>
                    <i className="far fa-check-circle" />
                    Window Wiping
                  </li>
                </ul>
                <a className="btn btn-custom" href="/learn-more">
                  {" "}
                  {/* Updated href */}
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* About End */}
      {/* Service Start */}
      <div className="service">
        <div className="container">
          <div className="section-header text-center">
            <p>What We Do?</p>
            <h2>Premium Washing Services</h2>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="service-item">
                <i className="flaticon-car-wash-1" aria-hidden="true" />{" "}
                {/* Added aria-hidden for decorative icons */}
                <h3>Exterior Washing</h3>
                <p>
                  Thorough cleaning of your vehicle's exterior, ensuring a
                  spotless shine and protection against the elements.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="service-item">
                <i className="flaticon-car-wash" aria-hidden="true" />
                <h3>Interior Washing</h3>
                <p>
                  Comprehensive interior cleaning, including vacuuming and
                  dusting, to keep your car looking and smelling fresh.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="service-item">
                <i className="flaticon-vacuum-cleaner" aria-hidden="true" />
                <h3>Vacuum Cleaning</h3>
                <p>
                  Deep vacuuming of seats and carpets to remove dirt and debris,
                  ensuring a clean and comfortable ride.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="service-item">
                <i className="flaticon-seat" aria-hidden="true" />
                <h3>Seats Washing</h3>
                <p>
                  Specialized cleaning of seats, removing stains and odors for a
                  refreshed interior experience.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="service-item">
                <i className="flaticon-car-service" aria-hidden="true" />
                <h3>Window Wiping</h3>
                <p>
                  Crystal-clear window cleaning to enhance visibility and safety
                  while driving.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="service-item">
                <i className="flaticon-car-service-2" aria-hidden="true" />
                <h3>Wet Cleaning</h3>
                <p>
                  Effective wet cleaning methods to tackle tough stains and
                  dirt, ensuring a thorough clean.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="service-item">
                <i className="flaticon-car-wash" aria-hidden="true" />
                <h3>Oil Changing</h3>
                <p>
                  Professional oil change service to keep your engine running
                  smoothly and efficiently.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="service-item">
                <i className="flaticon-brush-1" aria-hidden="true" />
                <h3>Brake Repairing</h3> {/* Fixed spelling error */}
                <p>
                  Expert brake repair services to ensure your vehicle's safety
                  and performance on the road.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Service End */}
      {/* Facts Start */}
      <div
        className="facts"
        data-parallax="scroll"
        data-image-src="img/facts.jpg"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="facts-item">
                <i className="fa fa-map-marker-alt" aria-hidden="true" />{" "}
                {/* Added aria-hidden for decorative icons */}
                <div className="facts-text">
                  <h3 data-toggle="counter-up">25</h3>
                  <p>Service Points</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="facts-item">
                <i className="fa fa-user" aria-hidden="true" />
                <div className="facts-text">
                  <h3 data-toggle="counter-up">350</h3>
                  <p>Engineers &amp; Workers</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="facts-item">
                <i className="fa fa-users" aria-hidden="true" />
                <div className="facts-text">
                  <h3 data-toggle="counter-up">1500</h3>
                  <p>Happy Clients</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="facts-item">
                <i className="fa fa-check" aria-hidden="true" />
                <div className="facts-text">
                  <h3 data-toggle="counter-up">5000</h3>
                  <p>Projects Completed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Facts End */}
      {/* Price Start */}
      <div className="price">
        <div className="container">
          <div className="section-header text-center">
            <p>Washing Plan</p>
            <h2>Choose Your Plan</h2>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="price-item">
                <div className="price-header">
                  <h3>Basic Cleaning</h3>
                  <h2>
                    <span>$</span>
                    <strong>25</strong>
                    <span>.99</span>
                  </h2>
                </div>
                <div className="price-body">
                  <ul>
                    <li>
                      <i className="far fa-check-circle" />
                      Seats Washing
                    </li>
                    <li>
                      <i className="far fa-check-circle" />
                      Vacuum Cleaning
                    </li>
                    <li>
                      <i className="far fa-check-circle" />
                      Exterior Cleaning
                    </li>
                    <li>
                      <i className="far fa-times-circle" />
                      Interior Wet Cleaning
                    </li>
                    <li>
                      <i className="far fa-times-circle" />
                      Window Wiping
                    </li>
                  </ul>
                </div>
                <div className="price-footer">
                  <a className="btn btn-custom" href>
                    Book Now
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="price-item featured-item">
                <div className="price-header">
                  <h3>Premium Cleaning</h3>
                  <h2>
                    <span>$</span>
                    <strong>35</strong>
                    <span>.99</span>
                  </h2>
                </div>
                <div className="price-body">
                  <ul>
                    <li>
                      <i className="far fa-check-circle" />
                      Seats Washing
                    </li>
                    <li>
                      <i className="far fa-check-circle" />
                      Vacuum Cleaning
                    </li>
                    <li>
                      <i className="far fa-check-circle" />
                      Exterior Cleaning
                    </li>
                    <li>
                      <i className="far fa-check-circle" />
                      Interior Wet Cleaning
                    </li>
                    <li>
                      <i className="far fa-times-circle" />
                      Window Wiping
                    </li>
                  </ul>
                </div>
                <div className="price-footer">
                  <a className="btn btn-custom" href>
                    Book Now
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="price-item">
                <div className="price-header">
                  <h3>Complex Cleaning</h3>
                  <h2>
                    <span>$</span>
                    <strong>49</strong>
                    <span>.99</span>
                  </h2>
                </div>
                <div className="price-body">
                  <ul>
                    <li>
                      <i className="far fa-check-circle" />
                      Seats Washing
                    </li>
                    <li>
                      <i className="far fa-check-circle" />
                      Vacuum Cleaning
                    </li>
                    <li>
                      <i className="far fa-check-circle" />
                      Exterior Cleaning
                    </li>
                    <li>
                      <i className="far fa-check-circle" />
                      Interior Wet Cleaning
                    </li>
                    <li>
                      <i className="far fa-check-circle" />
                      Window Wiping
                    </li>
                  </ul>
                </div>
                <div className="price-footer">
                  <a className="btn btn-custom" href>
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Price End */}
      {/* Location Start */}
      <div className="location">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="section-header text-left">
                <p>Washing Points</p>
                <h2>Car Washing &amp; Care Points</h2>
              </div>
              <div className="row">
                {/* You can replace the repetitive blocks with a map function if using a framework */}
                {Array.from({ length: 4 }, (_, index) => (
                  <div className="col-md-6" key={index}>
                    <div className="location-item">
                      <i className="fa fa-map-marker-alt" aria-hidden="true" />{" "}
                      {/* Added aria-hidden */}
                      <div className="location-text">
                        <h3>Car Washing Point</h3>
                        <p>123 Street, New York, USA</p>
                        <p>
                          <strong>Call:</strong>
                          <a href="tel:+0123456789"> +012 345 6789</a>{" "}
                          {/* Added tel link */}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-5">
              <div className="location-form">
                <h3>Request for a car wash</h3>
                <form>
                  <div className="control-group">
                    <label htmlFor="name">Name</label> {/* Added label */}
                    <input
                      type="text"
                      id="name"
                      className="form-control"
                      placeholder="Name"
                      required
                    />
                  </div>
                  <div className="control-group">
                    <label htmlFor="email">Email</label> {/* Added label */}
                    <input
                      type="email"
                      id="email"
                      className="form-control"
                      placeholder="Email"
                      required
                    />
                  </div>
                  <div className="control-group">
                    <label htmlFor="description">Description</label>{" "}
                    {/* Added label */}
                    <textarea
                      id="description"
                      className="form-control"
                      placeholder="Description"
                      required
                    />
                  </div>
                  <div>
                    <button className="btn btn-custom" type="submit">
                      Send Request
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Location End */}
      {/* Team Start */}
      <div className="team">
        <div className="container">
          <div className="section-header text-center">
            <p>Meet Our Team</p>
            <h2>Our Engineers &amp; Workers</h2>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="team-item">
                <div className="team-img">
                  <img src="img/team-1.jpg" alt="Donald John, Engineer" />{" "}
                  {/* Descriptive alt attribute */}
                </div>
                <div className="team-text">
                  <h2>Donald John</h2>
                  <p>Engineer</p>
                  <div className="team-social">
                    <a
                      href="https://twitter.com/donaldjohn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-twitter" />
                    </a>
                    <a
                      href="https://www.facebook.com/donaldjohn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/donaldjohn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-linkedin-in" />
                    </a>
                    <a
                      href="https://www.instagram.com/donaldjohn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-instagram" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="team-item">
                <div className="team-img">
                  <img src="img/team-2.jpg" alt="Adam Phillips, Engineer" />{" "}
                  {/* Descriptive alt attribute */}
                </div>
                <div className="team-text">
                  <h2>Adam Phillips</h2>
                  <p>Engineer</p>
                  <div className="team-social">
                    <a
                      href="https://twitter.com/adamphillips"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-twitter" />
                    </a>
                    <a
                      href="https://www.facebook.com/adamphillips"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/adamphillips"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-linkedin-in" />
                    </a>
                    <a
                      href="https://www.instagram.com/adamphillips"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-instagram" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="team-item">
                <div className="team-img">
                  <img src="img/team-3.jpg" alt="Thomas Olsen, Worker" />{" "}
                  {/* Descriptive alt attribute */}
                </div>
                <div className="team-text">
                  <h2>Thomas Olsen</h2>
                  <p>Worker</p>
                  <div className="team-social">
                    <a
                      href="https://twitter.com/thomasolsen"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-twitter" />
                    </a>
                    <a
                      href="https://www.facebook.com/thomasolsen"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/thomasolsen"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-linkedin-in" />
                    </a>
                    <a
                      href="https://www.instagram.com/thomasolsen "
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-instagram" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="team-item">
                <div className="team-img">
                  <img src="img/team-4.jpg" alt="James Alien, Worker" />{" "}
                  {/* Descriptive alt attribute */}
                </div>
                <div className="team-text">
                  <h2>James Alien</h2>
                  <p>Worker</p>
                  <div className="team-social">
                    <a
                      href="https://twitter.com/jamesalien"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-twitter" />
                    </a>
                    <a
                      href="https://www.facebook.com/jamesalien"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/jamesalien"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-linkedin-in" />
                    </a>
                    <a
                      href="https://www.instagram.com/jamesalien"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-instagram" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Team End */}
      {/* Testimonial Start */}
      <div className="testimonial">
        <div className="container">
          <div className="section-header text-center">
            <p>Testimonial</p>
            <h2>What Our Clients Say</h2>
          </div>
          <div className="owl-carousel testimonials-carousel">
            <div className="testimonial-item">
              <figure>
                <img src="img/testimonial-1.jpg" alt="Client Name" />{" "}
                {/* Descriptive alt attribute */}
                <figcaption>
                  <h3>Client Name</h3>
                  <h4>Profession</h4>
                </figcaption>
              </figure>
              <div className="testimonial-text">
                <p>
                  Lorem ipsum dolor sit amet elit. Phasel preti mi facilis
                  ornare velit non vulputa. Aliqu metus tortor auctor gravid.
                </p>
              </div>
            </div>
            <div className="testimonial-item">
              <figure>
                <img src="img/testimonial-2.jpg" alt="Client Name" />
                <figcaption>
                  <h3>Client Name</h3>
                  <h4>Profession</h4>
                </figcaption>
              </figure>
              <div className="testimonial-text">
                <p>
                  Lorem ipsum dolor sit amet elit. Phasel preti mi facilis
                  ornare velit non vulputa. Aliqu metus tortor auctor gravid.
                </p>
              </div>
            </div>
            <div className="testimonial-item">
              <figure>
                <img src="img/testimonial-3.jpg" alt="Client Name" />
                <figcaption>
                  <h3>Client Name</h3>
                  <h4>Profession</h4>
                </figcaption>
              </figure>
              <div className="testimonial-text">
                <p>
                  Lorem ipsum dolor sit amet elit. Phasel preti mi facilis
                  ornare velit non vulputa. Aliqu metus tortor auctor gravid.
                </p>
              </div>
            </div>
            <div className="testimonial-item">
              <figure>
                <img src="img/testimonial-4.jpg" alt="Client Name" />
                <figcaption>
                  <h3>Client Name</h3>
                  <h4>Profession</h4>
                </figcaption>
              </figure>
              <div className="testimonial-text">
                <p>
                  Lorem ipsum dolor sit amet elit. Phasel preti mi facilis
                  ornare velit non vulputa. Aliqu metus tortor auctor gravid.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Testimonial End */}
      {/* Blog Start */}
      <div className="blog">
        <div className="container">
          <div className="section-header text-center">
            <p>Our Blog</p>
            <h2>Latest News &amp; Articles</h2>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="blog-item">
                <div className="blog-img">
                  <img src="img/blog-1.jpg" alt="Blog post about web design" />{" "}
                  {/* Descriptive alt attribute */}
                  <div className="meta-date">
                    <time dateTime="2045-01-01">
                      <span>01</span>
                      <strong>Jan</strong>
                      <span>2045</span>
                    </time>
                  </div>
                </div>
                <div className="blog-text">
                  <h3>
                    <a href="/blog/post-1">Lorem Ipsum Dolor Sit Amet</a>{" "}
                    {/* Valid href */}
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet elit. Pellent iaculis blandit
                    lorem, quis convall diam eleife. Nam in arcu sit amet massa
                    ferment quis enim. Nunc augue velit metus congue eget
                    semper.
                  </p>
                </div>
                <div className="blog-meta">
                  <p>
                    <i className="fa fa-user" />
                    <a href="/blog/author/admin">Admin</a> {/* Valid href */}
                  </p>
                  <p>
                    <i className="fa fa-folder" />
                    <a href="/blog/category/web-design">Web Design</a>{" "}
                    {/* Valid href */}
                  </p>
                  <p>
                    <i className="fa fa-comments" />
                    <a href="/blog/post-1#comments">15 Comments</a>{" "}
                    {/* Valid href */}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="blog-item">
                <div className="blog-img">
                  <img
                    src="img/blog-2.jpg"
                    alt="Blog post about UI/UX design"
                  />{" "}
                  {/* Descriptive alt attribute */}
                  <div className="meta-date">
                    <time dateTime="2045-01-01">
                      <span>01</span>
                      <strong>Jan</strong>
                      <span>2045</span>
                    </time>
                  </div>
                </div>
                <div className="blog-text">
                  <h3>
                    <a href="/blog/post-2">Lorem Ipsum Dolor Sit Amet</a>{" "}
                    {/* Valid href */}
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet elit. Pellent iaculis blandit
                    lorem, quis convall diam eleife. Nam in arcu sit amet massa
                    ferment quis enim. Nunc augue velit metus congue eget
                    semper.
                  </p>
                </div>
                <div className="blog-meta">
                  <p>
                    <i className="fa fa-user" />
                    <a href="/blog/author/admin">Admin</a> {/* Valid href */}
                  </p>
                  <p>
                    <i className="fa fa-folder" />
                    <a href="/blog/category/web-design">Web Design</a>{" "}
                    {/* Valid href */}
                  </p>
                  <p>
                    <i className="fa fa-comments" />
                    <a href="/blog/post-2#comments">15 Comments</a>{" "}
                    {/* Valid href */}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="blog-item">
                <div className="blog-img">
                  <img
                    src="img/blog-3.jpg"
                    alt="Blog post about responsive design"
                  />{" "}
                  {/* Descriptive alt attribute */}
                  <div className="meta-date">
                    <time dateTime="2045-01-01">
                      <span>01 </span>
                      <strong>Jan</strong>
                      <span>2045</span>
                    </time>
                  </div>
                </div>
                <div className="blog-text">
                  <h3>
                    <a href="/blog/post-3">Lorem Ipsum Dolor Sit Amet</a>{" "}
                    {/* Valid href */}
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet elit. Pellent iaculis blandit
                    lorem, quis convall diam eleife. Nam in arcu sit amet massa
                    ferment quis enim. Nunc augue velit metus congue eget
                    semper.
                  </p>
                </div>
                <div className="blog-meta">
                  <p>
                    <i className="fa fa-user" />
                    <a href="/blog/author/admin">Admin</a> {/* Valid href */}
                  </p>
                  <p>
                    <i className="fa fa-folder" />
                    <a href="/blog/category/web-design">Web Design</a>{" "}
                    {/* Valid href */}
                  </p>
                  <p>
                    <i className="fa fa-comments" />
                    <a href="/blog/post-3#comments">15 Comments</a>{" "}
                    {/* Valid href */}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Blog End */}
      {/* Footer Start */}
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="footer-contact">
                <h2>Get In Touch</h2>
                <address>
                  <p>
                    <i className="fa fa-map-marker-alt" />
                    123 Street, New York, USA
                  </p>
                  <p>
                    <i className="fa fa-phone-alt" />
                    +012 345 67890
                  </p>
                  <p>
                    <i className="fa fa-envelope" />
                    <a href="mailto:info@example.com">info@example.com</a>
                  </p>
                </address>
                <div className="footer-social">
                  <a
                    className="btn"
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-twitter" />
                  </a>
                  <a
                    className="btn"
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a
                    className="btn"
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-youtube" />
                  </a>
                  <a
                    className="btn"
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-instagram" />
                  </a>
                  <a
                    className="btn"
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-linkedin-in" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-link">
                <h2>Popular Links</h2>
                <a href="/about-us">About Us</a>
                <a href="/contact-us">Contact Us</a>
                <a href="/services">Our Services</a>
                <a href="/service-points">Service Points</a>
                <a href="/pricing-plan">Pricing Plan</a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-link">
                <h2>Useful Links</h2>
                <a href="/terms-of-use">Terms of Use</a>
                <a href="/privacy-policy">Privacy Policy</a>
                <a href="/cookies">Cookies</a>
                <a href="/help">Help</a>
                <a href="/faqs">FAQs</a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-newsletter">
                <h2>Newsletter</h2>
                <form>
                  <label htmlFor="full-name">Full Name</label>
                  <input
                    className="form-control"
                    id="full-name"
                    placeholder="Full Name"
                    required
                  />
                  <label htmlFor="email">Email</label>
                  <input
                    className="form-control"
                    id="email"
                    type="email"
                    placeholder="Email"
                    required
                  />
                  <button className="btn btn-custom" type="submit">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="container copyright">
          <p>
            © <a href=" ">Your Site Name</a>, All Rights Reserved. Designed By{" "}
            <a
              href="https://htmlcodex.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              HTML Codex
            </a>
          </p>
        </div>
      </div>
      {/* Footer End */}
      {/* Back to top button */}
      <button
        className="back-to-top"
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <i className="fa fa-chevron-up" />
      </button>
      {/* Pre Loader */}
      <div
        id="loader"
        className="loader-container"
        aria-live="polite"
        aria-busy="true"
      >
        <div className="loader" />
      </div>
      {/* JavaScript Libraries */}
      {/* Contact Javascript File */}
      {/* Template Javascript */}
    </div>
  );
};

export default App;
