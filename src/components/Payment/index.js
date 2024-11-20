import React, { useState } from 'react';
import { Link } from "react-router-dom";

function Payment() {
  const [selectedBank, setSelectedBank] = useState('');

  const handleWalletRedirect = (walletName) => {
    let url;
    switch (walletName) {
      case 'GoPay':
        url = 'https://gopay.co.id';
        break;
      case 'OVO':
        url = 'https://www.ovo.id/';
        break;
      case 'Dana':
        url = 'https://www.dana.id/';
        break;
      default:
        url = '/';
    }
    window.open(url, '_blank');
  };

  const handleBankSelection = (event) => {
    setSelectedBank(event.target.value);
  };

  return (
    <div className="payment">
      <div className="page-header">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2>Payment</h2>
            </div>
            <div className="col-12">
              <Link to="/">Home</Link>
              <Link to="/payment">Payment</Link>
            </div>
          </div>
        </div>
      </div>


      <div className="container">
        <div className="section-header text-center">
          <p>Secure and Easy</p>
          <h2>Choose Your Payment Method</h2>
        </div>

        <div className="payment-options row">

          <div className="col-md-6">
            <div className="payment-item">
              <i className="fas fa-wallet"></i>
              <h3>Digital Wallet</h3>
              <p>Pay conveniently using your favorite e-wallet, such as GoPay, OVO, or Dana.</p>
              <button
                className="btn btn-custom"
                onClick={() => handleWalletRedirect('GoPay')}
              >
                Pay with GoPay
              </button>
              <button
                className="btn btn-custom"
                onClick={() => handleWalletRedirect('OVO')}
              >
                Pay with OVO
              </button>
              <button
                className="btn btn-custom"
                onClick={() => handleWalletRedirect('Dana')}
              >
                Pay with Dana
              </button>
            </div>
          </div>

          <div className="col-md-6">
            <div className="payment-item">
              <i className="fas fa-university"></i>
              <h3>Bank Transfer</h3>
              <p>Select your bank and follow the transfer instructions:</p>
              <select
                className="form-control"
                onChange={handleBankSelection}
                value={selectedBank}
              >
                <option value="">Choose a Bank</option>
                <option value="BCA">Bank BCA</option>
                <option value="Mandiri">Bank Mandiri</option>
                <option value="BRI">Bank BRI</option>
                <option value="BNI">Bank BNI</option>
              </select>
              {selectedBank && (
                <div className="bank-details">
                  <h4>Transfer Details:</h4>
                  <p>
                    Bank: {selectedBank}
                    <br />
                    Account Number: <strong>123-456-789</strong>
                    <br />
                    Account Name: <strong>Labubu Car Wash</strong>
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="payment-instructions">
          <h3>How to Pay</h3>
          <ol>
            <li>Select your preferred payment method.</li>
            <li>Follow the instructions provided for the selected method.</li>
            <li>Once the payment is made, you will receive a confirmation via email or SMS.</li>
          </ol>
          <p>
            If you have any issues, please <a href="/contact">contact us</a>.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Payment;
