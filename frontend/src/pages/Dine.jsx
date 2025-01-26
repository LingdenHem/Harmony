import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { DineAPI } from "../api";

const DineHeroSection = styled.section`
  margin-bottom: 100px;
`;

const DineHeroContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, 1fr);

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
const DineSection = styled.section`
  margin-left: 100px;
`;

const DineContainer = styled.div`
  padding-bottom: 30px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
`;

const DineHeader = styled.header`
  margin-bottom: 50px;
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
        <DineHeader></DineHeader>
        <DineContainer>
          {error && <p>{error}</p>}
          {dine.length === 0 ? (
            <p>No Dine data available</p>
          ) : (
            dine.map((dine, index) => (
              <div key={index}>
                <h2>{dine.name}</h2>
                <p>{dine.ingredients}</p>
                <p>{dine.price}</p>
              </div>
            ))
          )}
        </DineContainer>
      </DineSection>
    </>
  );
}

export default Dine;
