import { useState } from "react";
import Shoeform from "../ShoeForm/Shoeform";
import type { BookingRequest } from "../../interfaces/interfaces"
import "./bookingForm.css"

interface BookingFormProps {
    onSubmit: (data: BookingRequest) => void;
    apiError?: string | null;
}

function BookingForm({ onSubmit, apiError }: BookingFormProps) {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [people, setPeople] = useState(1);
    const [lanes, setLanes] = useState(1);
    const [shoes, setShoes] = useState<number[]>([0]);
    const [formError, setFormError] = useState<string | null>(null);


    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setFormError(null);

        if (people > lanes * 4) {
            setFormError(`You can only have 4 people per lane. With ${lanes} lane(s), the maximum is ${lanes * 4} people.`);
            return;
        }

        if (shoes.length !== people) {
            setFormError(`Number of shoes (${shoes.length}) does not match the number of bowlers (${people}).`);
            return;
        }
        
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

        {formError && <p className="error__msg">{formError}</p>}
        {apiError && <p className="error__msg">{apiError}</p>}

        <button className="submit__button" type="submit">
            Striiiiiike!
        </button>
    </form>
  );
}

export default BookingForm
