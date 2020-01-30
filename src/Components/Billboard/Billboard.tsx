import React, { useEffect, useState } from 'react'
import style from './Billboard.module.scss'
import Typed from 'react-typed'

const Billboard: React.FC = () => {
  return (
    <div className={style.cover}>
      <div className={style.billboard}>
        <div className={style.typed}>
          <div>Мы готовим и доставляем</div>
          <div>
            <Typed
              className={style.typed__line}
              strings={['Шашлык, люля, рыбу, грибы и многое другое']}
              startDelay={400}
              typeSpeed={100}
              loop={false}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Billboard
