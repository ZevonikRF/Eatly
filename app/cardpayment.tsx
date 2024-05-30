import React, { useState } from 'react';

const CheckoutForm = () => {
  const [cardDetails, setCardDetails] = useState({
    name: '',
    cardNumber: '',
    validThrough: '',
    cvv: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Validation
    if (name === 'cardNumber' && !/^\d*$/.test(value)) return;
    if (name === 'cvv' && !/^\d*$/.test(value)) return;
    if (name === 'validThrough' && !/^\d*$/.test(value)) return;

    setCardDetails({
      ...cardDetails,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { cardNumber, validThrough, cvv } = cardDetails;

    if (cardNumber.length !== 12) {
      alert('Card number must be 12 digits.');
      return;
    }

    if (validThrough.length !== 4) {
      alert('Valid through must be a 4-digit year.');
      return;
    }

    if (cvv.length !== 3) {
      alert('CVV must be 3 digits.');
      return;
    }

    // Proceed with payment logic here
    alert('Payment successful');
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial', width: '100%', height: '100%', margin: '0 auto', backgroundColor: '#F9EAE1'}}>
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name on Card</label>
          <input
            type="text"
            name="name"
            value={cardDetails.name}
            onChange={handleChange}
            required
            style={{ display: 'block', width: '50%', padding: '10px', margin: '10px 0', borderRadius: '10px', border: '3px solid #ff9d7b' }}
          />
        </div>
        <div>
          <label>Card Number</label>
          <input
            type="text"
            name="cardNumber"
            value={cardDetails.cardNumber}
            onChange={handleChange}
            maxLength="12"
            required
            style={{ display: 'block', width: '50%', padding: '10px', margin: '10px 0', borderRadius: '10px', border: '3px solid #ff9d7b' }}
          />
        </div>
        <div>
          <label>Valid Through (Year)</label>
          <input
            type="text"
            name="validThrough"
            value={cardDetails.validThrough}
            onChange={handleChange}
            maxLength="4"
            required
            style={{ display: 'block', width: '50%', padding: '10px', margin: '10px 0', borderRadius: '10px', border: '3px solid #ff9d7b' }}
          />
        </div>
        <div>
          <label>CVV</label>
          <input
            type="text"
            name="cvv"
            value={cardDetails.cvv}
            onChange={handleChange}
            maxLength="3"
            required
            style={{ display: 'block', width: '50%', padding: '10px', margin: '10px 0', borderRadius: '10px', border: '3px solid #ff9d7b' }}
          />
        </div>
        <button
          type="submit"
          style={{ padding: '10px 20px', backgroundColor: '#FF8C69', color: '#fff', border: 'none', borderRadius: '10px', cursor: 'pointer' }}
        >
          Proceed to payment
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm;
