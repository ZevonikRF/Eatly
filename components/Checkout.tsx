import React, { useState } from 'react';

const Checkout: React.FC = () => {
  const [paymentMethod, setPaymentMethod] = useState<string>('card');
  const [deliveryMethod, setDeliveryMethod] = useState<string>('pickup');
  const [total, setTotal] = useState<number>(20000); // Example total amount in IDR
  const deliveryPrice = 5000; // Delivery price in IDR

  const handlePaymentMethodChange = (method: string) => {
    setPaymentMethod(method);
  };

  const handleDeliveryMethodChange = (method: string) => {
    setDeliveryMethod(method);
    // If delivery method is 'delivery', add delivery price to the total
    if (method === 'delivery') {
      setTotal(total + deliveryPrice);
    } else {
      // If delivery method is not 'delivery', remove delivery price from the total
      setTotal(total - deliveryPrice);
    }
  };

  const applyVoucher = () => {
    // Logic to apply voucher
    alert('Voucher applied');
  };

  const styles = {
    container: {
      flex: 1,
      backgroundColor: '#fff8f2',
      height: '400px', // Set a fixed height for the container
      overflow: 'auto', // Enable scrolling if content exceeds the height
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingTop: 50,
      paddingHorizontal: 20,
    },
    section: {
      marginBottom: '20px',
    },
    sectionHeader: {
      fontSize: '1.2em',
      color: '#333',
      marginBottom: '10px',
    },
    options: {
      display: 'flex',
      flexDirection: 'column' as 'column',
    },
    option: {
      display: 'flex',
      alignItems: 'center',
      padding: 10,
      backgroundColor: '#fff',
      border: '1px solid #ddd',
      borderRadius: 15,
      marginBottom: '10px',
      cursor: 'pointer',
    },
    selectedOption: {
      borderColor: '#ff7e47',
    },
    icon: {
      marginRight: '10px',
    },
    voucherContainer: {
      display: 'flex',
      alignItems: 'center',
      padding: 10,
      backgroundColor: '#fff',
      border: '1px solid #ddd',
      borderRadius: 10,
      cursor: 'pointer',
      color: '#ff7e47',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 5,
      elevation: 3,
    },
    price: {
      marginLeft: 'auto',
    },
    total: {
      fontSize: '1.5em',
      color: '#333',
      textAlign: 'right' as 'right',
    },
    paymentButton: {
      width: '100%',
      padding: '15px',
      backgroundColor: '##fff8f2',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      fontSize: '1em',
      cursor: 'pointer',
    },
    paymentButtonHover: {
      backgroundColor: '#ff5722',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Payment</h1>

      <section style={styles.section}>
        <h2 style={styles.sectionHeader}>Payment method</h2>
        <div style={styles.options}>
          <label
            style={{
              ...styles.option,
              ...(paymentMethod === 'card' ? styles.selectedOption : {}),
            }}
          >
            <input
              type="radio"
              name="paymentMethod"
              value="card"
              checked={paymentMethod === 'card'}
              onChange={() => handlePaymentMethodChange('card')}
            />
            <span style={styles.icon}>💳</span>
            Card
          </label>
          <label
            style={{
              ...styles.option,
              ...(paymentMethod === 'virtual' ? styles.selectedOption : {}),
            }}
          >
            <input
              type="radio"
              name="paymentMethod"
              value="virtual"
              checked={paymentMethod === 'virtual'}
              onChange={() => handlePaymentMethodChange('virtual')}
            />
            <span style={styles.icon}>🏦</span>
            Virtual account
          </label>
        </div>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionHeader}>Apply voucher</h2>
        <div style={styles.voucherContainer} onClick={applyVoucher}>
          <span style={styles.icon}>🎫</span>
          Apply Voucher
        </div>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionHeader}>Delivery method</h2>
        <div style={styles.options}>
          <label
            style={{
              ...styles.option,
              ...(deliveryMethod === 'pickup' ? styles.selectedOption : {}),
            }}
          >
            <input
              type="radio"
              name="deliveryMethod"
              value="pickup"
              checked={deliveryMethod === 'pickup'}
              onChange={() => handleDeliveryMethodChange('pickup')}
            />
            Pick up
          </label>
          <label
            style={{
              ...styles.option,
              ...(deliveryMethod === 'delivery' ? styles.selectedOption : {}),
            }}
          >
            <input
              type="radio"
              name="deliveryMethod"
              value="delivery"
              checked={deliveryMethod === 'delivery'}
              onChange={() => handleDeliveryMethodChange('delivery')}
            />
            Delivery <span style={styles.price}>Rp 5000</span>
          </label>
        </div>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionHeader}>Total</h2>
        <div style={styles.total}>
          Rp {total.toLocaleString('id-ID')}
        </div>
      </section>

      <button
        style={styles.paymentButton}
        onMouseOver={(e) => {
          (e.target as HTMLButtonElement).style.backgroundColor = styles.paymentButtonHover.backgroundColor;
        }}
        onMouseOut={(e) => {
          (e.target as HTMLButtonElement).style.backgroundColor = styles.paymentButton.backgroundColor;
        }}
      >
        Proceed to payment
      </button>
    </div>
  );
};

export default Checkout;