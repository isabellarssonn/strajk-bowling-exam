import logoImg from "../../assets/logo.svg"
import "./logo.css"

interface LogoProps {
    large?: boolean;
}

function Logo({ large = false }: LogoProps) {
  return (
    <img src={logoImg} alt="logoImg" className={large ? "logo__large" : "logo__small"}></img>
  )
}

export default Logo