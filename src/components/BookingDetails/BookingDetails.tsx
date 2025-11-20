import { type BookingResponse } from "../../interfaces/interfaces"
import "./bookingDetails.css"

function formatWhen(iso: string) {
    const date = new Date(iso);

    return date.toLocaleString("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
        day: "numeric",
        month: "short",
    });
}

function shorterId(id: string) {
  return id.slice(0, 10).toUpperCase();
}

interface BookingProps {
    booking: BookingResponse;
}

function BookingDetails({ booking }: BookingProps) {
  return (
    <section className="booking__details">
        <div className="title__section">
            <span className="line"></span>
            <h2 className="booking__title">Booking details</h2>
            <span className="line"></span>
        </div>

        <div className="details__row">
            <p className="details__title">When</p>
            <p className="details__info">{formatWhen(booking.when)}</p>
        </div>
        <div className="details__row">
            <p className="details__title">Who</p>
            <p className="details__info">{booking.people} pers</p>
        </div>
        <div className="details__row">
            <p className="details__title">Lanes</p>
            <p className="details__info">{booking.lanes} {booking.lanes === 1 ? "lane" : "lanes"}</p>
        </div>
        <div className="details__row">
            <p className="details__title">Booking number</p>
            <p className="details__info">{shorterId(booking.bookingId)}</p>
        </div>
    </section>
  )
}

export default BookingDetails