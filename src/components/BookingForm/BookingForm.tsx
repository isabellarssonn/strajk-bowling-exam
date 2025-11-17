import { useState } from "react";
import Shoeform from "../ShoeForm/Shoeform";
import type { BookingRequest } from "../../interfaces/interfaces"
import "./bookingForm.css"

interface BookingFormProps {
    onSubmit: (data: BookingRequest) => void;
}

function BookingForm({ onSubmit }: BookingFormProps) {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [people, setPeople] = useState(1);
    const [lanes, setLanes] = useState(1);
    const [shoes, setShoes] = useState<number[]>([0]);

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        
        const when = `${date}T${time}`;

        onSubmit({
            when,
            lanes,
            people,
            shoes,
        });
    }

  return (
    <form className="booking__form" onSubmit={handleSubmit}>
        <section className="booking__section">
            <div className="title__section">
                <span className="line"></span>
                <h2 className="booking__title">When, what & who</h2>
                <span className="line"></span>
            </div>
            
            <div className="when__row">
                <div className="input__wrapper">
                    <label className="label">Date</label>
                        <input
                        className="input"
                        type="date"
                        value={date}
                        onChange={e => setDate(e.target.value)}
                        required
                        />
                </div>
                
                <div className="input__wrapper">
                    <label className="label">Time</label>
                        <input
                        className="input"
                        type="time"
                        value={time}
                        onChange={e => setTime(e.target.value)}
                        required
                        />
                </div>
            </div>

            <div className="input__wrapper">
                <label className="label">Number of awesome bowlers</label>
                    <input
                    className="input"
                    type="number"
                    value={people}
                    onChange={e => setPeople(Number(e.target.value))}
                    min={1}
                    max={lanes * 4}
                    required
                    />
            </div>

            <div className="input__wrapper">
                <label className="label">Number of lanes</label>
                    <input
                    className="input"
                    type="number"
                    value={lanes}
                    onChange={e => setLanes(Number(e.target.value))}
                    min={1}
                    required
                    />
                </div>
        </section>

        
        <Shoeform 
        people={people}
        shoes={shoes}
        setShoes={setShoes}
        />

        <button className="submit__button" type="submit">
            Striiiiiike!
        </button>
    </form>
  );
}

export default BookingForm
