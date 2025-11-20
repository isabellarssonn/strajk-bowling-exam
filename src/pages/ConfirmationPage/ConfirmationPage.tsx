import { useLocation, useNavigate } from "react-router-dom"
import BookingDetails from "../../components/BookingDetails/BookingDetails"
import Header from "../../components/Header/Header"
import "./confirmationPage.css"

export default function ConfirmationPage() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const booking = state?.bookingDetails;

  return (
    <section className="confirmation__page">
      <Header title={booking ? "See you soon!" : "No bookings yet"} />

      {booking ? (
        <>
          <BookingDetails booking={booking} />
          <div className="total__section">
            <p className="total">total</p>
            <p className="price">{booking.price} sek</p>
          </div>
          <button className="confirmation__btn" onClick={() => navigate("/")}>Sweet, lets go!</button>
        </>
      ) : (
        <p className="error-page__msg">There are no bookings available at the moment.</p> 
      )}
    </section>
  )
}