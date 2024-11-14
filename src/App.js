const App = () => {
  return (
    <div>
  {/* Top Bar Start */}
  <div className="top-bar">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-4 col-md-12">
          <div className="logo">
            <a href="index.html">
              <h1>Auto<span>Wash</span></h1>
              {/* <img src="img/logo.jpg" alt="Logo"> */}
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
        <a href="#" className="navbar-brand">MENU</a>
        <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
          <div className="navbar-nav mr-auto">
            <a href="index.html" className="nav-item nav-link active">Home</a>
            <a href="about.html" className="nav-item nav-link">About</a>
            <a href="service.html" className="nav-item nav-link">Service</a>
            <a href="price.html" className="nav-item nav-link">Price</a>
            <a href="location.html" className="nav-item nav-link">Washing Points</a>
            <div className="nav-item dropdown">
              <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Pages</a>
              <div className="dropdown-menu">
                <a href="blog.html" className="dropdown-item">Blog Grid</a>
                <a href="single.html" className="dropdown-item">Detail Page</a>
                <a href="team.html" className="dropdown-item">Team Member</a>
                <a href="booking.html" className="dropdown-item">Schedule Booking</a>
              </div>
            </div>
            <a href="contact.html" className="nav-item nav-link">Contact</a>
          </div>
          <div className="ml-auto">
            <a className="btn btn-custom" href="#">Get Appointment</a>
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
            <img src="img/carousel-1.jpg" alt="Image" />
          </div>
          <div className="carousel-text">
            <h3>Washing &amp; Detailing</h3>
            <h1>Keep your Car Newer</h1>
            <p>
              Lorem ipsum dolor sit amet elit. Phasellus ut mollis mauris. Vivamus egestas eleifend dui ac
            </p>
            <a className="btn btn-custom" href>Explore More</a>
          </div>
        </div>
        <div className="carousel-item">
          <div className="carousel-img">
            <img src="img/carousel-2.jpg" alt="Image" />
          </div>
          <div className="carousel-text">
            <h3>Washing &amp; Detailing</h3>
            <h1>Quality service for you</h1>
            <p>
              Morbi sagittis turpis id suscipit feugiat. Suspendisse eu augue urna. Morbi sagittis orci sodales
            </p>
            <a className="btn btn-custom" href>Explore More</a>
          </div>
        </div>
        <div className="carousel-item">
          <div className="carousel-img">
            <img src="img/carousel-3.jpg" alt="Image" />
          </div>
          <div className="carousel-text">
            <h3>Washing &amp; Detailing</h3>
            <h1>Exterior &amp; Interior Washing</h1>
            <p>
              Sed ultrices, est eget feugiat accumsan, dui nibh egestas tortor, ut rhoncus nibh ligula euismod quam
            </p>
            <a className="btn btn-custom" href>Explore More</a>
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
            <img src="img/about.jpg" alt="Image" />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="section-header text-left">
            <p>About Us</p>
            <h2>car washing and detailing</h2>
          </div>
          <div className="about-content">
            <p>
              Lorem ipsum dolor sit amet elit. In vitae turpis. Donec in hendre dui, vel blandit massa. Ut vestibu suscipi cursus. Cras quis porta nulla, ut placerat risus. Aliquam nec magna eget velit luctus dictum
            </p>
            <ul>
              <li><i className="far fa-check-circle" />Seats washing</li>
              <li><i className="far fa-check-circle" />Vacuum cleaning</li>
              <li><i className="far fa-check-circle" />Interior wet cleaning</li>
              <li><i className="far fa-check-circle" />Window wiping</li>
            </ul>
            <a className="btn btn-custom" href>Learn More</a>
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
            <i className="flaticon-car-wash-1" />
            <h3>Exterior Washing</h3>
            <p>Lorem ipsum dolor sit amet elit. Phase nec preti facils ornare velit non metus tortor</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="service-item">
            <i className="flaticon-car-wash" />
            <h3>Interior Washing</h3>
            <p>Lorem ipsum dolor sit amet elit. Phase nec preti facils ornare velit non metus tortor</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="service-item">
            <i className="flaticon-vacuum-cleaner" />
            <h3>Vacuum Cleaning</h3>
            <p>Lorem ipsum dolor sit amet elit. Phase nec preti facils ornare velit non metus tortor</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="service-item">
            <i className="flaticon-seat" />
            <h3>Seats Washing</h3>
            <p>Lorem ipsum dolor sit amet elit. Phase nec preti facils ornare velit non metus tortor</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="service-item">
            <i className="flaticon-car-service" />
            <h3>Window Wiping</h3>
            <p>Lorem ipsum dolor sit amet elit. Phase nec preti facils ornare velit non metus tortor</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="service-item">
            <i className="flaticon-car-service-2" />
            <h3>Wet Cleaning</h3>
            <p>Lorem ipsum dolor sit amet elit. Phase nec preti facils ornare velit non metus tortor</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="service-item">
            <i className="flaticon-car-wash" />
            <h3>Oil Changing</h3>
            <p>Lorem ipsum dolor sit amet elit. Phase nec preti facils ornare velit non metus tortor</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="service-item">
            <i className="flaticon-brush-1" />
            <h3>Brake Reparing</h3>
            <p>Lorem ipsum dolor sit amet elit. Phase nec preti facils ornare velit non metus tortor</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Service End */}
  {/* Facts Start */}
  <div className="facts" data-parallax="scroll" data-image-src="img/facts.jpg">
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-6">
          <div className="facts-item">
            <i className="fa fa-map-marker-alt" />
            <div className="facts-text">
              <h3 data-toggle="counter-up">25</h3>
              <p>Service Points</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="facts-item">
            <i className="fa fa-user" />
            <div className="facts-text">
              <h3 data-toggle="counter-up">350</h3>
              <p>Engineers &amp; Workers</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="facts-item">
            <i className="fa fa-users" />
            <div className="facts-text">
              <h3 data-toggle="counter-up">1500</h3>
              <p>Happy Clients</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="facts-item">
            <i className="fa fa-check" />
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
              <h2><span>$</span><strong>25</strong><span>.99</span></h2>
            </div>
            <div className="price-body">
              <ul>
                <li><i className="far fa-check-circle" />Seats Washing</li>
                <li><i className="far fa-check-circle" />Vacuum Cleaning</li>
                <li><i className="far fa-check-circle" />Exterior Cleaning</li>
                <li><i className="far fa-times-circle" />Interior Wet Cleaning</li>
                <li><i className="far fa-times-circle" />Window Wiping</li>
              </ul>
            </div>
            <div className="price-footer">
              <a className="btn btn-custom" href>Book Now</a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="price-item featured-item">
            <div className="price-header">
              <h3>Premium Cleaning</h3>
              <h2><span>$</span><strong>35</strong><span>.99</span></h2>
            </div>
            <div className="price-body">
              <ul>
                <li><i className="far fa-check-circle" />Seats Washing</li>
                <li><i className="far fa-check-circle" />Vacuum Cleaning</li>
                <li><i className="far fa-check-circle" />Exterior Cleaning</li>
                <li><i className="far fa-check-circle" />Interior Wet Cleaning</li>
                <li><i className="far fa-times-circle" />Window Wiping</li>
              </ul>
            </div>
            <div className="price-footer">
              <a className="btn btn-custom" href>Book Now</a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="price-item">
            <div className="price-header">
              <h3>Complex Cleaning</h3>
              <h2><span>$</span><strong>49</strong><span>.99</span></h2>
            </div>
            <div className="price-body">
              <ul>
                <li><i className="far fa-check-circle" />Seats Washing</li>
                <li><i className="far fa-check-circle" />Vacuum Cleaning</li>
                <li><i className="far fa-check-circle" />Exterior Cleaning</li>
                <li><i className="far fa-check-circle" />Interior Wet Cleaning</li>
                <li><i className="far fa-check-circle" />Window Wiping</li>
              </ul>
            </div>
            <div className="price-footer">
              <a className="btn btn-custom" href>Book Now</a>
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
            <div className="col-md-6">
              <div className="location-item">
                <i className="fa fa-map-marker-alt" />
                <div className="location-text">
                  <h3>Car Washing Point</h3>
                  <p>123 Street, New York, USA</p>
                  <p><strong>Call:</strong>+012 345 6789</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="location-item">
                <i className="fa fa-map-marker-alt" />
                <div className="location-text">
                  <h3>Car Washing Point</h3>
                  <p>123 Street, New York, USA</p>
                  <p><strong>Call:</strong>+012 345 6789</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="location-item">
                <i className="fa fa-map-marker-alt" />
                <div className="location-text">
                  <h3>Car Washing Point</h3>
                  <p>123 Street, New York, USA</p>
                  <p><strong>Call:</strong>+012 345 6789</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="location-item">
                <i className="fa fa-map-marker-alt" />
                <div className="location-text">
                  <h3>Car Washing Point</h3>
                  <p>123 Street, New York, USA</p>
                  <p><strong>Call:</strong>+012 345 6789</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-5">
          <div className="location-form">
            <h3>Request for a car wash</h3>
            <form>
              <div className="control-group">
                <input type="text" className="form-control" placeholder="Name" required="required" />
              </div>
              <div className="control-group">
                <input type="email" className="form-control" placeholder="Email" required="required" />
              </div>
              <div className="control-group">
                <textarea className="form-control" placeholder="Description" required="required" defaultValue={""} />
              </div>
              <div>
                <button className="btn btn-custom" type="submit">Send Request</button>
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
              <img src="img/team-1.jpg" alt="Team Image" />
            </div>
            <div className="team-text">
              <h2>Donald John</h2>
              <p>Engineer</p>
              <div className="team-social">
                <a href><i className="fab fa-twitter" /></a>
                <a href><i className="fab fa-facebook-f" /></a>
                <a href><i className="fab fa-linkedin-in" /></a>
                <a href><i className="fab fa-instagram" /></a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="team-item">
            <div className="team-img">
              <img src="img/team-2.jpg" alt="Team Image" />
            </div>
            <div className="team-text">
              <h2>Adam Phillips</h2>
              <p>Engineer</p>
              <div className="team-social">
                <a href><i className="fab fa-twitter" /></a>
                <a href><i className="fab fa-facebook-f" /></a>
                <a href><i className="fab fa-linkedin-in" /></a>
                <a href><i className="fab fa-instagram" /></a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="team-item">
            <div className="team-img">
              <img src="img/team-3.jpg" alt="Team Image" />
            </div>
            <div className="team-text">
              <h2>Thomas Olsen</h2>
              <p>Worker</p>
              <div className="team-social">
                <a href><i className="fab fa-twitter" /></a>
                <a href><i className="fab fa-facebook-f" /></a>
                <a href><i className="fab fa-linkedin-in" /></a>
                <a href><i className="fab fa-instagram" /></a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="team-item">
            <div className="team-img">
              <img src="img/team-4.jpg" alt="Team Image" />
            </div>
            <div className="team-text">
              <h2>James Alien</h2>
              <p>Worker</p>
              <div className="team-social">
                <a href><i className="fab fa-twitter" /></a>
                <a href><i className="fab fa-facebook-f" /></a>
                <a href><i className="fab fa-linkedin-in" /></a>
                <a href><i className="fab fa-instagram" /></a>
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
        <h2>What our clients say</h2>
      </div>
      <div className="owl-carousel testimonials-carousel">
        <div className="testimonial-item">
          <img src="img/testimonial-1.jpg" alt="Image" />
          <div className="testimonial-text">
            <h3>Client Name</h3>
            <h4>Profession</h4>
            <p>
              Lorem ipsum dolor sit amet elit. Phasel preti mi facilis ornare velit non vulputa. Aliqu metus tortor auctor gravid
            </p>
          </div>
        </div>
        <div className="testimonial-item">
          <img src="img/testimonial-2.jpg" alt="Image" />
          <div className="testimonial-text">
            <h3>Client Name</h3>
            <h4>Profession</h4>
            <p>
              Lorem ipsum dolor sit amet elit. Phasel preti mi facilis ornare velit non vulputa. Aliqu metus tortor auctor gravid
            </p>
          </div>
        </div>
        <div className="testimonial-item">
          <img src="img/testimonial-3.jpg" alt="Image" />
          <div className="testimonial-text">
            <h3>Client Name</h3>
            <h4>Profession</h4>
            <p>
              Lorem ipsum dolor sit amet elit. Phasel preti mi facilis ornare velit non vulputa. Aliqu metus tortor auctor gravid
            </p>
          </div>
        </div>
        <div className="testimonial-item">
          <img src="img/testimonial-4.jpg" alt="Image" />
          <div className="testimonial-text">
            <h3>Client Name</h3>
            <h4>Profession</h4>
            <p>
              Lorem ipsum dolor sit amet elit. Phasel preti mi facilis ornare velit non vulputa. Aliqu metus tortor auctor gravid
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
        <h2>Latest news &amp; articles</h2>
      </div>
      <div className="row">
        <div className="col-lg-4">
          <div className="blog-item">
            <div className="blog-img">
              <img src="img/blog-1.jpg" alt="Image" />
              <div className="meta-date">
                <span>01</span>
                <strong>Jan</strong>
                <span>2045</span>
              </div>
            </div>
            <div className="blog-text">
              <h3><a href="#">Lorem ipsum dolor sit amet</a></h3>
              <p>
                Lorem ipsum dolor sit amet elit. Pellent iaculis blandit lorem, quis convall diam eleife. Nam in arcu sit amet massa ferment quis enim. Nunc  augue velit metus congue eget semper
              </p>
            </div>
            <div className="blog-meta">
              <p><i className="fa fa-user" /><a href>Admin</a></p>
              <p><i className="fa fa-folder" /><a href>Web Design</a></p>
              <p><i className="fa fa-comments" /><a href>15 Comments</a></p>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="blog-item">
            <div className="blog-img">
              <img src="img/blog-2.jpg" alt="Image" />
              <div className="meta-date">
                <span>01</span>
                <strong>Jan</strong>
                <span>2045</span>
              </div>
            </div>
            <div className="blog-text">
              <h3><a href="#">Lorem ipsum dolor sit amet</a></h3>
              <p>
                Lorem ipsum dolor sit amet elit. Pellent iaculis blandit lorem, quis convall diam eleife. Nam in arcu sit amet massa ferment quis enim. Nunc  augue velit metus congue eget semper
              </p>
            </div>
            <div className="blog-meta">
              <p><i className="fa fa-user" /><a href>Admin</a></p>
              <p><i className="fa fa-folder" /><a href>Web Design</a></p>
              <p><i className="fa fa-comments" /><a href>15 Comments</a></p>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="blog-item">
            <div className="blog-img">
              <img src="img/blog-3.jpg" alt="Image" />
              <div className="meta-date">
                <span>01</span>
                <strong>Jan</strong>
                <span>2045</span>
              </div>
            </div>
            <div className="blog-text">
              <h3><a href="#">Lorem ipsum dolor sit amet</a></h3>
              <p>
                Lorem ipsum dolor sit amet elit. Pellent iaculis blandit lorem, quis convall diam eleife. Nam in arcu sit amet massa ferment quis enim. Nunc  augue velit metus congue eget semper
              </p>
            </div>
            <div className="blog-meta">
              <p><i className="fa fa-user" /><a href>Admin</a></p>
              <p><i className="fa fa-folder" /><a href>Web Design</a></p>
              <p><i className="fa fa-comments" /><a href>15 Comments</a></p>
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
            <p><i className="fa fa-map-marker-alt" />123 Street, New York, USA</p>
            <p><i className="fa fa-phone-alt" />+012 345 67890</p>
            <p><i className="fa fa-envelope" />info@example.com</p>
            <div className="footer-social">
              <a className="btn" href><i className="fab fa-twitter" /></a>
              <a className="btn" href><i className="fab fa-facebook-f" /></a>
              <a className="btn" href><i className="fab fa-youtube" /></a>
              <a className="btn" href><i className="fab fa-instagram" /></a>
              <a className="btn" href><i className="fab fa-linkedin-in" /></a>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="footer-link">
            <h2>Popular Links</h2>
            <a href>About Us</a>
            <a href>Contact Us</a>
            <a href>Our Service</a>
            <a href>Service Points</a>
            <a href>Pricing Plan</a>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="footer-link">
            <h2>Useful Links</h2>
            <a href>Terms of use</a>
            <a href>Privacy policy</a>
            <a href>Cookies</a>
            <a href>Help</a>
            <a href>FQAs</a>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="footer-newsletter">
            <h2>Newsletter</h2>
            <form>
              <input className="form-control" placeholder="Full Name" />
              <input className="form-control" placeholder="Email" />
              <button className="btn btn-custom">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div className="container copyright">
      <p>© <a href="#">Your Site Name</a>, All Right Reserved. Designed By <a href="https://htmlcodex.com">HTML Codex</a></p>
    </div>
  </div>
  {/* Footer End */}
  {/* Back to top button */}
  <a href="#" className="back-to-top"><i className="fa fa-chevron-up" /></a>
  {/* Pre Loader */}
  <div id="loader" className="show">
    <div className="loader" />
  </div>
  {/* JavaScript Libraries */}
  {/* Contact Javascript File */}
  {/* Template Javascript */}
</div>

  );
};

export default App;
