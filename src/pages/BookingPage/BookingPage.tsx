import { useNavigate } from "react-router-dom";
import BookingForm from "../../components/BookingForm/BookingForm"
import Header from "../../components/Header/Header"
import useBooking from "../../hooks/useBooking"
import type { BookingRequest } from "../../interfaces/interfaces";
import "./bookingPage.css"

function BookingPage() {
  const {submitBooking} = useBooking();
  const navigate = useNavigate();

  async function handleSubmit(data: BookingRequest) {
    const result = await submitBooking(data);
    if (result) {
      navigate("/confirmation", { state: result });
    }
  }
  return (
    <section className="booking__page page">
      <Header title="Booking" />
      <BookingForm onSubmit={handleSubmit}/>
    </section>
  )
}

export default BookingPage