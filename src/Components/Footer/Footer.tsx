import React from 'react'
import style from './Footer.module.scss'

const Footer: React.FC = () => {
  return (
    <div className={`${style.footer} ${style.footer_margin}`}>
      <h5>@creating by Sla4ka</h5>
    </div>
  )
}

export default Footer
