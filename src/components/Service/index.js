import { getDatabase, ref, onValue } from "firebase/database";
import React, { useState, useEffect } from "react";

const Service = () => {
  const [service, setService] = useState({});
  useEffect(() => {
    const db = getDatabase();
    const serviceRef = ref(db, "service");
    onValue(serviceRef, (snapshot) => {
      const data = snapshot.val();
      setService(data);
    });
  }, []);
  return (
    <div className="service">
      <div className="container">
        <div className="section-header text-center">
          <p>{service.miniTitle}</p>
          <h2>{service.Title}</h2>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="service-item">
              <i className="flaticon-car-wash-1" />
              <h3>{service.subTitle1}</h3>
              <p>
                {service.Text1}
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="service-item">
            <i className="flaticon-car-wash"></i>
              <h3>{service.subTitle2}</h3>
              <p>
                {service.Text2}
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="service-item">
              <i className="flaticon-vacuum-cleaner" />
              <h3>{service.subTitle3}</h3>
              <p>
              {service.Text3}
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="service-item">
              <i className="flaticon-seat" />
              <h3>{service.subTitle4}</h3>
              <p>
              {service.Text4}
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="service-item">
              <i className="flaticon-car-service" />
              <h3>{service.subTitle5}</h3>
              <p>
              {service.Text5}
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="service-item">
              <i className="flaticon-car-service-2" />
              <h3>{service.subTitle6}</h3>
              <p>
              {service.Text6}
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="service-item">
              <i className="flaticon-car-wash" />
              <h3>{service.subTitle7}</h3>
              <p>
              {service.Text7}
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="service-item">
              <i className="flaticon-brush-1" />
              <h3>{service.subTitle8}</h3>
              <p>
              {service.Text8}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Service;