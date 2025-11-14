import Logo from "../../components/Logo/Logo"
import "./loadingPage.css"

function LoadingPage() {
  return (
    <section className="loading__page page">
        <Logo large/>
        <h1 className="loading__h1">Strajk</h1>
        <p className="loading__p">Bowling</p>
    </section>
  )
}

export default LoadingPage