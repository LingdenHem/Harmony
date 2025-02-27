import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { DineAPI } from "../api";

const DineHeroSection = styled.section`
  margin-bottom: 50px;
`;

const DineHeroContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;

  img {
    width: 100%;
    object-fit: contain;
    filter: brightness(60%);
  }

  h1 {
    position: absolute;
    background: none;
    color: white;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
  }
`;
const DineSection = styled.section``;

const DineContainer = styled.div`
  padding-bottom: 30px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  width: 100%;
  justify-content: center;
  align-items: center;

  .dine-items {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 80%;
    justify-self: center;
  }

  .dine-items p {
    width: 100%;
  }

  @media (max-width: 1060px) {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 400px) {
    .description {
      width: 80%;
    }
  }
`;

function Dine() {
  const [dine, setDine] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDineData = async () => {
      try {
        const response = await DineAPI();
        setDine(response.data);
      } catch (error) {
        setError("Failed to fetch Dine data");
      }
    };
    fetchDineData();
  }, []);
  return (
    <>
      <DineHeroSection>
        <DineHeroContainer>
          <h1>Our Menu</h1>

          <img src="https://images.unsplash.com/photo-1548285181-3103ce5d3db2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          <img src="https://images.unsplash.com/photo-1621871908119-295c8ce5cee4?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          <img src="https://images.unsplash.com/photo-1648146298949-6b94f62164da?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </DineHeroContainer>
      </DineHeroSection>
      <DineSection>
        <DineContainer>
          {error && <p>{error}</p>}
          {dine.length === 0 ? (
            <p>No Dine data available</p>
          ) : (
            dine.map((dine, index) => (
              <div className="dine-items" key={index}>
                <h2>{dine.name}</h2>

                <p>{dine.ingredients}</p>
                <p style={{ fontWeight: "bold" }}>{dine.price}</p>
              </div>
            ))
          )}
        </DineContainer>
      </DineSection>
    </>
  );
}

export default Dine;
