import {useState, useEffect } from "react";

interface ShoeFormProps {
    people: number;
    shoes: number[];
    setShoes: (sizes: number[]) => void;
}

function Shoeform({ people, shoes, setShoes}: ShoeFormProps) {
    const [error, setError] = useState<string | null>(null);

    function updateShoeSize(index: number, size: number) {
        const updated = [...shoes];
        updated[index] = size;
        setShoes(updated);
    }

    function removeShoe(index: number) {
        const newShoes = shoes.filter((_, i) => i !== index);
        setShoes(newShoes);
    }

    function addShoe() {
        setShoes([...shoes, 0]);
    }

    useEffect(() => {
        if (shoes.length !== people) {
            setError(`Number of shoe (${shoes.length}) does not match the number of players (${people})`);
        } else {
            setError(null);
        }
    }, [shoes, people]);

  return (
    <section className="shoe__form">
        <h2 className="shoes__title">Shoes</h2>
        {shoes.map((size, i) => (
            <div key={i} className="shoe__row">
                Shoe size / person {i + 1}
                <input
                type="number"
                value={size || ""}
                onChange={e => updateShoeSize(i, Number(e.target.value))}
                required
                />
                <button className="remove__btn" type="button" onClick={() => removeShoe(i)}>-</button>
            </div>
        ))}
        <button className="add__btn" type="button" onClick={addShoe}>+</button>
        {error && <p className="error__msg">{error}</p>}
    </section>
  )
}

export default Shoeform