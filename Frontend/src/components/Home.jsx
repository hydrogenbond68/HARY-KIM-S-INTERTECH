import styled from 'styled-components';
import { FaShoppingCart } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleShopNow = () => {
    navigate('/products'); 
  };

  return (
    <Container>
      <HeroSection>
        <HeroText>
          <h1>Welcome to Shopify</h1>
          <p id='unique'>#1 <span id="unique2">Trending</span> in 🇰🇪</p>
          <StyledShopButton onClick={handleShopNow}> 
            <FaShoppingCart /> Shop Now
          </StyledShopButton>

        </HeroText>
        <HeroImage src="https://images.unsplash.com/photo-1496147539180-13929f8aa03a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Hero" />
      </HeroSection>

      <ProductShowcase>
        <h2 id='featured'>FEATURED PRODUCTS</h2>
        <ProductGrid>
          <ProductCard>
            <ProductImage src="https://www.apple.com/newsroom/images/product/watch/standard/Apple_watch-experience-for-entire-family-hero_09152020_big.jpg.large.jpg" alt="Product 1" />
            <ProductDetails>
              <h3>APPLE WATCH</h3>
              <p>$200.00</p>
              <Description>
                A high-quality product that meets all your needs and exceeds expectations.
                <CartIcon><FaShoppingCart /></CartIcon>
              </Description>
              <Rating>
                <input type="radio" id="star-1" name="star-radio" value="star-1" />
                <label htmlFor="star-1">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg>
                </label>
                <input type="radio" id="star-2" name="star-radio" value="star-1" />
                <label htmlFor="star-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg>
                </label>
                <input type="radio" id="star-3" name="star-radio" value="star-1" />
                <label htmlFor="star-3">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg>
                </label>
                <input type="radio" id="star-4" name="star-radio" value="star-1" />
                <label htmlFor="star-4">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg>
                </label>
                <input type="radio" id="star-5" name="star-radio" value="star-1" />
                <label htmlFor="star-5">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg>
                </label>
              </Rating>
            </ProductDetails>
          </ProductCard>
          <ProductCard>
            <ProductImage src="https://appleservicecentre.co.ke/wp-content/uploads/2024/04/Apple-Watch-series-6-44mm.jpg" alt="Product 2" />
            <ProductDetails>
              <h3>ORIMO SMARTWATCH</h3>
              <p>$660.00</p>
              <Description>
                Enjoy the best performance and style with this amazing product.
                <CartIcon><FaShoppingCart /></CartIcon>
              </Description>
              <Rating>
                <input type="radio" id="star-1-2" name="star-radio-2" value="star-1" />
                <label htmlFor="star-1-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg>
                </label>
                <input type="radio" id="star-2-2" name="star-radio-2" value="star-1" />
                <label htmlFor="star-2-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg>
                </label>
                <input type="radio" id="star-3-2" name="star-radio-2" value="star-1" />
                <label htmlFor="star-3-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg>
                </label>
                <input type="radio" id="star-4-2" name="star-radio-2" value="star-1" />
                <label htmlFor="star-4-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg>
                </label>
                <input type="radio" id="star-5-2" name="star-radio-2" value="star-1" />
                <label htmlFor="star-5-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg>
                </label>
              </Rating>
            </ProductDetails>
          </ProductCard>
          <ProductCard>
            <ProductImage src="https://www.apple.com/newsroom/images/product/watch/standard/Apple_watch-series7_hero_09142021_big.jpg.slideshow-medium.jpg" alt="Product 2" />
            <ProductDetails>
              <h3>APPLE WATCH:Water Resistant</h3>
              <p>$300.00</p>
              <Description>
                Enjoy the best performance and style with this amazing product.
                <CartIcon><FaShoppingCart /></CartIcon>
              </Description>
              <Rating>
                <input type="radio" id="star-1-2" name="star-radio-2" value="star-1" />
                <label htmlFor="star-1-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg>
                </label>
                <input type="radio" id="star-2-2" name="star-radio-2" value="star-1" />
                <label htmlFor="star-2-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg>
                </label>
                <input type="radio" id="star-3-2" name="star-radio-2" value="star-1" />
                <label htmlFor="star-3-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg>
                </label>
                <input type="radio" id="star-4-2" name="star-radio-2" value="star-1" />
                <label htmlFor="star-4-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg>
                </label>
                <input type="radio" id="star-5-2" name="star-radio-2" value="star-1" />
                <label htmlFor="star-5-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg>
                </label>
              </Rating>
            </ProductDetails>
          </ProductCard>
        </ProductGrid>
      </ProductShowcase>
      

      <LocationSection>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.27991998495!2d-74.25986769193145!3d40.69767006374427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQxJzUxLjYiTiA3NMKwMTUnMTAuOSJX!5e0!3m2!1sen!2sus!4v1627645312273!5m2!1sen!2sus"
          width="100%"
          height="400"
          allowFullScreen=""
          loading="lazy"
          title="Store Location"
        ></iframe>
      </LocationSection>
    </Container>
  );
};

const Container = styled.div`
  font-family: 'Arial', sans-serif;
`;

const HeroSection = styled.section`
  position: relative;
  text-align: center;
  color: white;
  height: 90vh;
`;

const HeroText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
    font-family: 'Dancing Script',Playwrite CU;
     h1 {
    font-size: 8rem; 
    font-weight :bold;
  }

  #unique{
    font-weight :bold;
    font-family:'Dancing Script',Playwrite CU;
    font-size: 3rem;
  }
    #unique2{
    font-weight :bold;
    color:red;
    font-size:3rem;
`;


// const ShopButton = styled.button`
//   background-color: #007bff;
//   color: white;
//   border: none;
//   padding: 10px 20px;
//   font-size: 18px;
//   cursor: pointer;
//   display: flex;
//   align-items: center;
//   gap: 10px;
// `;
const StyledShopButton = styled.button`
  cursor: pointer;
  position: relative;
  padding: 10px 24px;
  font-size: 25px;
  font-weight: 800;
  border-radius: 34px;
  background: linear-gradient(45deg, #000000, #ffffff); /* Black to white gradient */
  color: white; /* Default text color */
  background-color: transparent;
  transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
  overflow: hidden;
  display: flex;
  align-items: center;
  gap: 10px;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    margin: auto;
    width: 50px;
    height: 50px;
    border-radius: inherit;
    background-color: rgba(255, 255, 255, 0.2); /* Semi-transparent white */
    transform: scale(0);
    z-index: -1;
    transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
  }

  &:hover::before {
    transform: scale(3);
  }

  &:hover {
    color: black; /* Text color on hover */
    transform: scale(1.1);
    box-shadow: 0 0px 20px rgba(193, 163, 98, 0.4);
  }

  &:active {
    transform: scale(1);
  }
`;



const HeroImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(60%);
`;

const ProductShowcase = styled.section`
  padding: 50px 20px;
  background-color: #f9f9f9;
  text-align: center;
  #featured{
 font-family:'Dancing Script',Playwrite CU;
 font-size: 50px;
 margin-bottom:20px;
  }
`;

const ProductGrid = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
`;

const ProductCard = styled.div`
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 20px;
  width: 300px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 5px;
`;

const ProductDetails = styled.div`
  text-align: left;
`;

const Description = styled.p`
  font-size: 14px;
  color: #555;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CartIcon = styled.span`
  cursor: pointer;
  font-size: 20px;
  color: #007bff;
`;

const Rating = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;

  input {
    display: none;
  }

  label {
    cursor: pointer;
    svg {
      fill: #ccc;
      width: 24px;
      height: 24px;
    }
  }

  input:checked ~ label svg,
  input:hover ~ label svg {
    fill: #ff9800;
  }
`;

const LocationSection = styled.section`
  padding: 50px 20px;
  background-color: #f9f9f9;
  text-align: center;
`;

export default Home;