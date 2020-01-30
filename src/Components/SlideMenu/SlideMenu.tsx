import React from 'react'
import style from './SlideMenu.module.scss'

const SlideMenu: React.FC = () => {
  return (
    <div className={style.slideMenu}>
      <h1 className={style.label}>Мы гоотовим шашлык из:</h1>
      <div className={`${style.slideMenu_body} ${style.slideMenu_body_margin}`}>
        <div className={style.slideMenu__pork}>
          <div className={style.shadow}>
            <span className={style.shadow__title}>Свинины</span>
          </div>
        </div>
        <div className={style.slideMenu__mutton}>
          <div className={style.shadow}>
            <span className={style.shadow__title}>Баранины</span>
          </div>
        </div>
        <div className={style.slideMenu__bird}>
          <div className={style.shadow}>
            <span className={style.shadow__title}>Птицы</span>
          </div>
        </div>
        <div className={style.slideMenu__fish}>
          <div className={style.shadow}>
            <span className={style.shadow__title}>Рыбы</span>
          </div>
        </div>
        <div className={style.slideMenu__vegetables}>
          <div className={style.shadow}>
            <span className={style.shadow__title}>Овощей</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SlideMenu
