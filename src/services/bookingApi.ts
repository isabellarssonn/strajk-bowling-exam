import { type BookingRequest, type BookingResponse } from "../interfaces/interfaces";

async function createBooking(
  data: BookingRequest
): Promise<BookingResponse> {
  const response = await fetch("https://731xy9c2ak.execute-api.eu-north-1.amazonaws.com/booking", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      "x-api-key": "strajk-1Cqgm3S6nlMechWO",
    },
    body: JSON.stringify(data),
  });

  if(!response.ok) {
    throw new Error('Kunde inte genomföra bokning, försök igen!')
  }

  return response.json();
}

export default createBooking