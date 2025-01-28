import React, { useState } from "react";
import styled from "styled-components";
import DateTimePicker from "react-datetime-picker";

const BookingSection = styled.section``;

const BookingContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
`;

const DatePickerStyled = styled.div`
  .react-datetime-picker {
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 8px;
  }

  .react-datetime-picker__wrapper {
    border: none;
  }

  .react-datetime-picker__inputGroup {
    background-color: transparent !important;
    min-width: 200px;
  }

  .react-datetime-picker__button {
    color: #333;
    background-color: transparent !important;
  }

  .react-datetime-picker__button:hover {
    color: #007bff;
  }
`;

function Reservation() {
  const [guests, setGuest] = useState(0);
  const [date, setDate] = useState(new Date());

  const guestCount = () => {
    setGuest(guests + 1);
  };

  const guestDecriment = () => {
    setGuest(guests - 1);
  };

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  return (
    <BookingSection>
      <BookingContainer>
        <div className="guests">
          <h2>Guests</h2>
          <p>{guests}</p>
          <button onClick={guestCount}>+</button>
          <button onClick={guestDecriment}>-</button>
        </div>
        <DatePickerStyled>
          <h2>Date-Time</h2>
          <DateTimePicker onChange={handleDateChange} value={date} />
        </DatePickerStyled>
      </BookingContainer>
    </BookingSection>
  );
}

export default Reservation;
