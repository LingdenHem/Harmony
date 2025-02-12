import React from "react";
import styled from "styled-components";

const HeroSection = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const HeroContent = styled.div`
  text-align: center;
  position: relative;

  .image-container {
    position: relative;

    img {
      width: 100%;
      height: 50%;
      object-fit: cover;
      filter: brightness(50%);
    }
  }
  .hero-section-images {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    z-index: 1;
    background: none;
  }

  .hero-section-images img {
    width: 300px;
    height: 300px;
    object-fit: cover;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    filter: none;

    @media (max-width: 768px) {
      width: 200px;
      height: 200px;
    }

    @media (max-width: 480px) {
      width: 150px;
      height: 150px;
    }
  }

  h1 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: none;
    color: white;
    width: 60%;
    @media (max-width: 1060px) {
      font-size: 35px;
    }

    @media (max-width: 768px) {
      font-size: 30px;
    }

    @media (max-width: 480px) {
      font-size: 20px;
    }
  }
`;

const AboutSection = styled.section`
  display: flex;
  justify-content: center;
`;
const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding-top: 250px;
  width: 50%;
  text-align: center;

  h2 {
    display: inline-block;
    position: relative;
  }

  h2::after {
    content: " are the foundation of what we create";
    display: block;
  }

  @media (max-width: 1060px) {
    width: 50%;
  }

  @media (max-width: 768px) {
    padding-top: 150px;
    width: 90%;
  }
`;

const AboutImagesSection = styled.section`
  margin-top: 250px;

  @media (max-width: 1060px) {
    margin-top: 100px;
  }
`;
const AboutImagesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 2fr);
  padding: 0 20px 20px 20px;
  gap: 50px;
  img {
    width: 100%;
    object-fit: cover;
  }

  @media (max-width: 550px) {
    display: flex;
    flex-direction: column;
  }
`;
function App() {
  return (
    <>
      <HeroSection>
        <HeroContent>
          <div className="image-container">
            <img
              src="https://images.unsplash.com/photo-1555529536-a60ea7a7a093?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="image-of-a-kitchen"
            />
            <div className="hero-section-images">
              <img src="https://media.istockphoto.com/id/1305322350/photo/professional-sushi-chef-carefully-adding-final-touch-with-dedication-to-his-perfect-tuna-sushi.jpg?s=170667a&w=0&k=20&c=lA2uwRxQvUvoNgHZLvErpaF11PwzvAEyExCjGUQRP0Q=" />
            </div>
          </div>
          <h1> Experience Japanese cuisine with a touch of elegance</h1>
        </HeroContent>
      </HeroSection>
      <AboutSection>
        <AboutContent>
          <h2> Organic ingredients </h2>
          <p>
            At the heart of everything we create lies a commitment to quality
            and sustainability. Using only organic ingredients, we ensure that
            every dish, product, or offering is crafted with care and respect
            for both our customers and the environment. By choosing organic, we
            prioritize natural flavors, nutrient-rich ingredients, and
            eco-friendly practices, delivering exceptional quality while
            supporting a healthier, more sustainable world.
          </p>
        </AboutContent>
      </AboutSection>
      <AboutImagesSection>
        <AboutImagesContainer>
          <img src="https://img.freepik.com/free-photo/woman-holding-vegetables-basket-front-view_23-2149893509.jpg?t=st=1737482814~exp=1737486414~hmac=ae3ae132c858b5d53c486a6f0e22405266c160d97e03a250282724a443f6529d&w=1060" />
          <img src="https://img.freepik.com/free-photo/high-angle-woman-holding-basket_23-2149893534.jpg?t=st=1737482853~exp=1737486453~hmac=18f6ce0a8d0651355e3e2ba461ab8113335ec50ec12e2e1272a1a057bec43172&w=1060" />
        </AboutImagesContainer>
      </AboutImagesSection>
    </>
  );
}

export default App;
