import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { CocktailsAPI } from "../api";

const BarSection = styled.section`
  margin-left: 100px;
`;

const BarContainer = styled.div`
  padding-bottom: 30px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
`;

const Barheader = styled.header`
  margin-bottom: 50px;
`;

function Bar() {
  const [cocktails, setCocktails] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCocktailData = async () => {
      try {
        const response = await CocktailsAPI();
        setCocktails(response.data);
      } catch (err) {
        setError("Failed to fetch cocktails. Please try again.");
      }
    };
    fetchCocktailData();
  }, []);

  return (
    <>
      <BarSection>
        <Barheader>
          <h1>Drinks & Cocktails</h1>
        </Barheader>
        <BarContainer>
          {error && <p>{error}</p>}
          {cocktails.length === 0 ? (
            <p>No cocktails available</p>
          ) : (
            cocktails.map((cocktail, index) => (
              <div key={index}>
                <h2>{cocktail.name}</h2>
                <p>{cocktail.ingredients}</p>
                <p>{cocktail.price}</p>
              </div>
            ))
          )}
        </BarContainer>
      </BarSection>
    </>
  );
}

export default Bar;
