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

const BarHeroSection = styled.section`
  margin-bottom: 100px;
`;
const BarHeroContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    filter: brightness(50%);
  }

  h1 {
    position: absolute;
    background: none;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    color: white;
  }
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
      <BarHeroSection>
        <BarHeroContainer>
          <h1>Drinks & Cocktails</h1>

          <img src="https://images.unsplash.com/photo-1615887023516-9b6bcd559e87?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          <img src="https://images.unsplash.com/photo-1615887023544-3a566f29d822?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          <img src="https://images.unsplash.com/photo-1615887584283-91f1be7fdc34?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </BarHeroContainer>
      </BarHeroSection>
      <BarSection>
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
