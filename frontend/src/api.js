const Cocktail_URL = "/api/cocktails";
const Dine_URL = "/api/dine";

export const CocktailsAPI = async () => {
  try {
    const response = await fetch(Cocktail_URL);

    if (!response.ok) {
      throw new Error("Failed to fetch cocktails. Please try again.");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data", error.message);
  }
};

export const DineAPI = async () => {
  try {
    const response = await fetch(Dine_URL);
    if (!response.ok) {
      throw new Error("Failed to fetch dine. Please try again.");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data", error.message);
  }
};
