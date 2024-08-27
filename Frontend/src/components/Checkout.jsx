import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Checkout = ({ cart }) => {
  const [formData, setFormData] = useState({
    shipping: { name: '', address: '', city: '', state: '', zip: '' },
    billing: { name: '', address: '', city: '', state: '', zip: '' },
    payment: { cardNumber: '', expiration: '', cvv: '' },
  });
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();

  const handleChange = (section, field, value) => {
    setFormData({
      ...formData,
      [section]: {
        ...formData[section],
        [field]: value,
      },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log(formData);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    navigate('/orders', { state: { cart } });
  };

  return (
    <Container>
      <Title>Checkout</Title>
      <Form onSubmit={handleSubmit}>
        <SectionGroup>
          <Section>
            <h3>Shipping Details</h3>
            <Input
              type="text"
              placeholder="Name"
              value={formData.shipping.name}
              onChange={(e) => handleChange('shipping', 'name', e.target.value)}
              required
            />
            <Input
              type="text"
              placeholder="Address"
              value={formData.shipping.address}
              onChange={(e) => handleChange('shipping', 'address', e.target.value)}
              required
            />
            <Input
              type="text"
              placeholder="City"
              value={formData.shipping.city}
              onChange={(e) => handleChange('shipping', 'city', e.target.value)}
              required
            />
            <Input
              type="text"
              placeholder="State"
              value={formData.shipping.state}
              onChange={(e) => handleChange('shipping', 'state', e.target.value)}
              required
            />
            <Input
              type="text"
              placeholder="Zip Code"
              value={formData.shipping.zip}
              onChange={(e) => handleChange('shipping', 'zip', e.target.value)}
              required
            />
          </Section>
          <Section>
            <h3>Billing Information</h3>
            <Input
              type="text"
              placeholder="Name"
              value={formData.billing.name}
              onChange={(e) => handleChange('billing', 'name', e.target.value)}
              required
            />
            <Input
              type="text"
              placeholder="Address"
              value={formData.billing.address}
              onChange={(e) => handleChange('billing', 'address', e.target.value)}
              required
            />
            <Input
              type="text"
              placeholder="City"
              value={formData.billing.city}
              onChange={(e) => handleChange('billing', 'city', e.target.value)}
              required
            />
            <Input
              type="text"
              placeholder="State"
              value={formData.billing.state}
              onChange={(e) => handleChange('billing', 'state', e.target.value)}
              required
            />
            <Input
              type="text"
              placeholder="Zip Code"
              value={formData.billing.zip}
              onChange={(e) => handleChange('billing', 'zip', e.target.value)}
              required
            />
          </Section>
        </SectionGroup>
        <Section>
          <h3>Payment Method</h3>
          <Input
            type="text"
            placeholder="Card Number"
            value={formData.payment.cardNumber}
            onChange={(e) => handleChange('payment', 'cardNumber', e.target.value)}
            required
          />
          <Input
            type="text"
            placeholder="Expiration Date (MM/YY)"
            value={formData.payment.expiration}
            onChange={(e) => handleChange('payment', 'expiration', e.target.value)}
            required
          />
          <Input
            type="text"
            placeholder="CVV"
            value={formData.payment.cvv}
            onChange={(e) => handleChange('payment', 'cvv', e.target.value)}
            required
          />
        </Section>
        <OrderSummary>
          <h3>Order Summary</h3>
          {cart.map((item, index) => (
            <p key={index}>{item.name}: ${item.price.toFixed(2)}</p>
          ))}
          <Total>Total: ${cart.reduce((total, item) => total + item.price, 0).toFixed(2)}</Total>
        </OrderSummary>
        <Button type="submit">Place Order</Button>
      </Form>
      {showModal && (
        <Modal>
          <ModalContent>
            <h2>Order Confirmation</h2>
            <p>Order placed and will be delivered in a period of 3-6 days.</p>
            <CloseButton onClick={handleCloseModal}>Close</CloseButton>
          </ModalContent>
        </Modal>
      )}
    </Container>
  );
};

const Container = styled.div`
  padding: 50px;
  background-color: #333333;
  font-family: Arial, sans-serif;
  max-width: 900px;
  margin: 0 auto;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  text-align: center;
  font-size: 36px;
  color: #ffffff;
  margin-bottom: 40px;
  font-family: 'Dancing Script', cursive;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const SectionGroup = styled.div`
  display: flex;
  gap: 20px;
`;

const Section = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #fff;

  h3 {
    margin-bottom: 10px;
    font-size: 20px;
    color: #555;
    text-align: center;
  }
`;

const Input = styled.input`
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

const OrderSummary = styled.div`
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #fff;

  h3 {
    margin-bottom: 10px;
    font-size: 20px;
    color: #555;
  }

  p {
    margin: 5px 0;
  }
`;

const Total = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin-top: 10px;
`;

const Button = styled.button`
  padding: 15px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background-color: #0056b3;
  }
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: #fff;
  padding: 30px;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  h2 {
    margin-bottom: 15px;
    font-size: 24px;
    color: #333;
  }

  p {
    margin-bottom: 20px;
    font-size: 18px;
    color: #666;
  }
`;

const CloseButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export default Checkout;
