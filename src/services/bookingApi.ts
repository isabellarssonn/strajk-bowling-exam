import { type BookingRequest, type BookingResponse } from "../interfaces/interfaces";

const API_KEY = import.meta.env.VITE_API_KEY;

async function createBooking(
  data: BookingRequest
): Promise<BookingResponse> {
  const response = await fetch("https://731xy9c2ak.execute-api.eu-north-1.amazonaws.com/booking", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      "x-api-key": API_KEY,
    },
    body: JSON.stringify(data),
  });

  if(!response.ok) {
    throw new Error('Unable to complete booking, try again!')
  }

  return response.json();
}

export default createBooking