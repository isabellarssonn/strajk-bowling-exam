import Logo from '../Logo/Logo'
import "./header.css"

interface HeaderProps {
    title: string
}

function Header({ title }: HeaderProps) {
  return (
    <section className='header'>
        <Logo />
        <h1 className='header__title'>{title}</h1>
    </section>
  )
}

export default Header