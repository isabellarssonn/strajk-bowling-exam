import { createBrowserRouter, RouterProvider } from "react-router-dom"
import BookingPage from "./pages/BookingPage/BookingPage"
import ConfirmationPage from "./pages/ConfirmationPage/ConfirmationPage"
import ErrorPage from "./pages/ErrorPage/ErrorPage"
import LoadingPage from "./pages/LoadingPage/LoadingPage"

const router = createBrowserRouter([
  {
    path: "/",
    element: <BookingPage />,
    errorElement: <ErrorPage />
  },
  {
    path: "/confirmation",
    element: <ConfirmationPage />
  },
  {
    path: "/loading",
    element: <LoadingPage />
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