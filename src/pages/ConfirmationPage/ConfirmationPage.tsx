import { useLocation, useNavigate } from "react-router-dom"
import BookingDetails from "../../components/BookingDetails/BookingDetails"
import Header from "../../components/Header/Header"
import "./confirmationPage.css"

export default function ConfirmationPage() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const booking = state?.bookingDetails;

  if (!booking) {
    return (
      <section className="confirmation__page">
        <Header title="No bookings yet" />
        <p>There are no bookings available at the moment.</p>
      </section>
    )
  }

  return (
    <section className="confirmation__page">
      <Header title="See you soon!" />
      <BookingDetails booking={booking} />
      <div className="total__section">
        <p className="total">total</p>
        <p className="price">{booking.price} sek</p>
      </div>
      <button className="confirmation__btn" onClick={() => navigate("/")}>Sweet, lets go!</button>
    </section>
  )
}
