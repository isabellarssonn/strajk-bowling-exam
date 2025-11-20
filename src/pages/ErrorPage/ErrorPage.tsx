import Header from "../../components/Header/Header"
import "./errorPage.css"

function ErrorPage() {
  return (
    <section className="error__page">
      <Header title="Error" />
      <p className="error-page__msg">Something went wrong...</p>
    </section>
  )
}

export default ErrorPage