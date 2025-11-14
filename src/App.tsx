import { createBrowserRouter, RouterProvider } from "react-router-dom"
import BookingPage from "./pages/BookingPage/BookingPage"
import ConfirmationPage from "./pages/ConfirmationPage/ConfirmationPage"
import ErrorPage from "./pages/ErrorPage/ErrorPage"

const router = createBrowserRouter([
  {
    path: "/",
    element: <BookingPage />,
    errorElement: <ErrorPage />
  },
  {
    path: "/confirmation",
    element: <ConfirmationPage />
  }
])

function App() {
  return (
    <section className="app">
      <RouterProvider router={router} />
    </section>
  )
}

export default App