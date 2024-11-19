import { getDatabase, ref, onValue } from "firebase/database";
import React, { useState, useEffect } from "react";

const Payment = () => {
  const [selectedBank, setSelectedBank] = useState("");

  const handleWalletRedirect = (walletName) => {
    let url;
    switch (walletName) {
      case "GoPay":
        url = "https://gopay.co.id";
        break;
      case "OVO":
        url = "https://www.ovo.id/";
        break;
      case "Dana":
        url = "https://www.dana.id/";
        break;
      default:
        url = "/";
    }
    window.open(url, "_blank");
  };

  const handleBankSelection = (event) => {
    setSelectedBank(event.target.value);
  };

  const [payment, setPayment] = useState({});
  useEffect(() => {
    const db = getDatabase();
    const paymentRef = ref(db, "payment");
    onValue(paymentRef, (snapshot) => {
      const data = snapshot.val();
      setPayment(data);
    });
  }, []);
  return (
    <div className="payment">
      <div className="page-header">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2>{payment.navbar_Title}</h2>
            </div>
            <div className="col-12">
              <a href="/">{payment.navbar_subTitle1}</a>
              <a href="/payment">{payment.navbar_subTitle2}</a>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="section-header text-center">
          <p>{payment.miniTitle}</p>
          <h2>{payment.Title}</h2>
        </div>

        <div className="payment-options row">
          <div className="col-md-6">
            <div className="payment-item">
              <i className="fas fa-wallet"></i>
              <h3>{payment.subTitle1}</h3>
              <p>{payment.Text1}</p>
              <button
                className="btn btn-custom"
                onClick={() => handleWalletRedirect("GoPay")}
              >
                {payment.button1}
              </button>
              <button
                className="btn btn-custom"
                onClick={() => handleWalletRedirect("OVO")}
              >
                {payment.button2}
              </button>
              <button
                className="btn btn-custom"
                onClick={() => handleWalletRedirect("Dana")}
              >
                {payment.button3}
              </button>
            </div>
          </div>

          <div className="col-md-6">
            <div className="payment-item">
              <i className="fas fa-university"></i>
              <h3>{payment.subTitle2}</h3>
              <p>{payment.Text2}</p>
              <select
                className="form-control"
                onChange={handleBankSelection}
                value={selectedBank}
              >
                <option value="">{payment.placeholder}</option>
                <option value="BCA">{payment.option1}</option>
                <option value="Mandiri">{payment.option2}</option>
                <option value="BRI">{payment.option3}</option>
                <option value="BNI">{payment.option4}</option>
              </select>
              {selectedBank && (
                <div className="bank-details">
                  <h4>{payment.subTitle2_1}</h4>
                  <p>
                    {payment.subTitle2_Text3} {selectedBank}
                    <br />
                    {payment.subTitle2_Text1}{" "}
                    <strong>{payment.subTitle2_Text1_1}</strong>
                    <br />
                    {payment.subTitle2_Text2}{" "}
                    <strong>{payment.subTitle2_Text2_1}</strong>
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="payment-instructions">
          <h3>{payment.heading}</h3>
          <ol>
            <li>{payment.heading_Text1}</li>
            <li>{payment.heading_Text2}</li>
            <li>{payment.heading_Text3}</li>
          </ol>
          <p>
            {payment.Text3} <a href="/contact">{payment.Text3_1}</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Payment;
