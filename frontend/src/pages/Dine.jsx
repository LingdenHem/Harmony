import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { DineAPI } from "../api";

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
      <DineSection>
        <DineHeader>
          <h1>Dine</h1>
        </DineHeader>
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
