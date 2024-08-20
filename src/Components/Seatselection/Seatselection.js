
import React, { useState } from 'react';
import './Seatselection.css';

const SeatSelection = () => {
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const seatPrice = 150; 

    const seats = Array.from({ length: 50 }, (_, i) => i + 1);

    const handleSeatClick = (seat) => {
        if (selectedSeats.includes(seat)) {
            setSelectedSeats(selectedSeats.filter(s => s !== seat));
            setTotalPrice(totalPrice - seatPrice);
        } else {
            setSelectedSeats([...selectedSeats, seat]);
            setTotalPrice(totalPrice + seatPrice);
        }
    };

    return (
        <div className="seat-selection">
            <h1>Select Your Seats</h1>
            <div className="seats">
                {seats.map(seat => (
                    <div
                        key={seat}
                        className={`seat ${selectedSeats.includes(seat) ? 'selected' : ''}`}
                        onClick={() => handleSeatClick(seat)}
                    >
                        {seat}
                    </div>
                ))}
            </div>
            <div className="payment-details">
                <h2>Payment Details</h2>
                <p>Selected Seats: {selectedSeats.join(', ')}</p>
                <p>Total Price: ₹{totalPrice}</p>
                <button>Proceed to Payment</button>
            </div>
        </div>
    );
};

export default SeatSelection;
