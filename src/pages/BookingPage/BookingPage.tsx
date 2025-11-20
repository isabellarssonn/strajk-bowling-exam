import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { type BookingRequest } from "../../interfaces/interfaces";
import BookingForm from "../../components/BookingForm/BookingForm"
import Header from "../../components/Header/Header"
import useBooking from "../../hooks/useBooking"
import LoadingPage from "../LoadingPage/LoadingPage";
import "./bookingPage.css"

function BookingPage() {
  const { submitBooking, error } = useBooking();
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  async function handleSubmit(data: BookingRequest) {
    const booking = await submitBooking(data);
    if (booking) {
      navigate("/confirmation", { state: booking });
    }
  }

  if (isLoading) return <LoadingPage visible={true} />;

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