import { useState } from "react";
import Shoeform from "../ShoeForm/Shoeform";
import type { BookingRequest } from "../../interfaces/interfaces"

interface BookingFormProps {
    onSubmit: (data: BookingRequest) => void;
}

function BookingForm({ onSubmit }: BookingFormProps) {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [people, setPeople] = useState(1);
    const [lanes, setLanes] = useState(1);
    const [shoes, setShoes] = useState<number[]>([]);

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
            <h2 className="booking__title">When, what & who</h2>
            
            <label className="date__label">
                Date
                <input
                type="date"
                value={date}
                onChange={e => setDate(e.target.value)}
                required
                />
            </label>

            <label className="time__label">
                Time
                <input
                type="time"
                value={time}
                onChange={e => setTime(e.target.value)}
                required
                />
            </label>

            <label className="people__label">
                Number of awesome bowlers
                <input
                type="number"
                value={people}
                onChange={e => setPeople(Number(e.target.value))}
                min={1}
                max={people * 4}
                required
                />
            </label>

            <label className="lanes__label">
                Number of lanes
                <input
                type="number"
                value={lanes}
                onChange={e => setLanes(Number(e.target.value))}
                min={1}
                required
                />
            </label>
        </section>

        <section className="shoe__section">
            <Shoeform 
            people={people}
            shoes={shoes}
            setShoes={setShoes}
            />
        </section>

        <button className="submit__button" type="submit">
            Striiiiiike!
        </button>
    </form>
  );
}

export default BookingForm
