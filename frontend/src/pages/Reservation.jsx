import React, { useState } from "react";
import styled from "styled-components";
import { ReservationAPI } from "../api";

const ReservationSection = styled.section`
  margin-top: 50px;
`;

const ReservationContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 100px;

  @media (max-width: 1095px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  h2 {
    text-align: center;
  }
`;
const GuestContainer = styled.div``;

const DateContainer = styled.div``;

const Days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const Times = [
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
  "19:00",
];

const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  list-style: none;

  @media (max-width: 420px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ListItem = styled.li`
  padding: 10px;
  margin: 5px 0;
  text-align: center;
  border-radius: 8px;
  cursor: pointer;
  background-color: ${(props) => (props.selected ? "grey" : "#f0f0f0")};
  color: ${(props) => (props.selected ? "white" : "black")};
`;

const BookButton = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;

const Styledbutton = styled.button`
  width: 100px;
  margin-bottom: 50px;
`;
const TimeContainer = styled.div``;
export default function Reservation() {
  const [unavailableTimes, setUnavailableTimes] = useState([]);

  const [selectedGuests, setSelectedGuests] = useState(null);
  const [selectedDays, setSelectedDays] = useState(null);
  const [selectedTimes, setSelectedTimes] = useState(null);

  const fetchUnavailableTimes = async (day) => {
    try {
      const response = await fetch(`/api/unavailable-times/${day}`);
      const data = await response.json();
      setUnavailableTimes(data);
    } catch (error) {
      console.error("Error fetching unavailable times:", error);
    }
  };

  const handleDayClick = (day) => {
    setSelectedDays(day);
    fetchUnavailableTimes(day);
  };

  const handleBooking = async () => {
    if (!selectedGuests || !selectedDays || !selectedTimes) {
      alert("Please select all fields");
      return;
    }

    const bookingData = {
      guestCount: selectedGuests,
      reservationDay: selectedDays,
      reservationTime: selectedTimes,
    };

    try {
      const response = await ReservationAPI(bookingData);
      if (response) {
        alert(
          `Thank you! Your reservation for ${selectedGuests} guests on ${selectedDays} at ${selectedTimes} has been successfully created.`
        );
        setSelectedGuests(null);
        setSelectedDays(null);
        setSelectedTimes(null);
      } else {
        throw new Error("Failed to create reservation.");
      }
    } catch (error) {
      console.error("Error during booking:", error.message);
      alert("Failed to book reservation. Please try again.");
    }
  };

  return (
    <>
      <ReservationSection>
        <ReservationContainer>
          <GuestContainer>
            <h2>Guests</h2>
            <List>
              {Array.from({ length: 8 }, (_, i) => i + 1).map((num) => (
                <ListItem
                  key={num}
                  selected={selectedGuests === num}
                  onClick={() => setSelectedGuests(num)}>
                  {num}
                </ListItem>
              ))}
            </List>
          </GuestContainer>
          <DateContainer>
            <h2>Date</h2>
            <List>
              {Days.map((day, index) => (
                <ListItem
                  key={index}
                  selected={selectedDays === day}
                  onClick={() => handleDayClick(day)}>
                  {day}
                </ListItem>
              ))}
            </List>
          </DateContainer>

          <TimeContainer>
            <h2>Time</h2>
            <List>
              {Times.map((time, index) => (
                <ListItem
                  key={index}
                  selected={selectedTimes === time}
                  disabled={unavailableTimes.includes(time)}
                  onClick={() =>
                    !unavailableTimes.includes(time) && setSelectedTimes(time)
                  }
                  style={{
                    textDecoration: unavailableTimes.includes(time)
                      ? "line-through"
                      : "none",
                    cursor: unavailableTimes.includes(time)
                      ? "not-allowed"
                      : "pointer",
                    color: unavailableTimes.includes(time) ? "#aaa" : "inherit",
                  }}>
                  {time}
                </ListItem>
              ))}
            </List>
          </TimeContainer>
        </ReservationContainer>
        <BookButton>
          <Styledbutton onClick={handleBooking}>Book</Styledbutton>
        </BookButton>
      </ReservationSection>
    </>
  );
}
