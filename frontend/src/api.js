const BASE_URL = import.meta.env.VITE_API_URL;

const Cocktail_URL = `${BASE_URL}/api/cocktails`;
const Dine_URL = `${BASE_URL}/api/dine`;
const Reservation_URL = `${BASE_URL}/api/reservation`;

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

export const ReservationAPI = async (bookingData) => {
  try {
    const response = await fetch(Reservation_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookingData),
    });
    console.log("Booking Data:", bookingData);

    if (!response.ok) {
      throw new Error("Failed to create reservation");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error posting reservation:", error.message);
  }
};
