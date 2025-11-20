import { useState } from "react";
import { type BookingRequest, type BookingResponse } from "../interfaces/interfaces";
import createBooking from "../services/bookingApi";

export default function useBooking() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [booking, setBooking] = useState<BookingResponse | null>(null);

    async function submitBooking(data: BookingRequest) {
        setLoading(true);
        setError(null);

        try {
            const response = await createBooking(data);
            setBooking(response);
            return response;
        } catch (error: unknown) {
            if (error instanceof Error) {
                setError(error.message);
            } else {
                setError("Ett fel uppstod");
            }
            return null;
        } finally {
            setLoading(false);
        }
    }

  return { submitBooking, loading, error, booking };
}