import { useNavigate } from "react-router-dom";
import BookingForm from "../../components/BookingForm/BookingForm"
import Header from "../../components/Header/Header"
import useBooking from "../../hooks/useBooking"
import type { BookingRequest } from "../../interfaces/interfaces";
import "./bookingPage.css"

function BookingPage() {
  const { submitBooking, error } = useBooking();
  const navigate = useNavigate();

  async function handleSubmit(data: BookingRequest) {
    const booking = await submitBooking(data);
    if (booking) {
      navigate("/confirmation", { state: booking });
    }
  }
  return (
    <section className="booking__page page">
      <Header title="Booking" />
      <BookingForm 
      onSubmit={handleSubmit}
      apiError={error}
      />
    </section>
  )
}

export default BookingPage