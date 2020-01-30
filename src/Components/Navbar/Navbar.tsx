import React from 'react'
import style from './Navbar.module.scss'
import { Link } from 'react-router-dom'

interface NavbarProps {
  move: boolean
}

const Navbar: React.FC<NavbarProps> = ({ move }: NavbarProps) => {
  return (
    <nav
      className={`${style.navbar} ${style.navbar_position} ${
        move ? style.navbar_color : ''
      }`}
    >
      <div className={style.container}>
        <div className={style.container__logo}>
          <img src="logo.svg" alt="shashlichnaya1" />
        </div>
        <div className={style.container__navigation}>
          <ul>
            <li>
              <Link to={'/menu'}>Меню</Link>
            </li>
            <li>
              <Link to={'/deliveryInfo'}>Доставка и оплата</Link>
            </li>
            <li>
              <Link to={'/contacts'}>Контакты</Link>
            </li>
          </ul>
        </div>
        <div className={style.container__cart}>Корзина</div>
      </div>
    </nav>
  )
}

export default Navbar
