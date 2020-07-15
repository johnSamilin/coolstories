import { Link } from "gatsby"
import React from "react"

import './lang-selector.css'

const LangSelector = ({ lang = 'ru', path = '' }) => (
  <div className="lang-selector">
    <Link to={`${lang === 'ru' ? '/en' : ''}/${path}`}>{lang === 'ru' ? 'in English' : 'По-русски'}</Link>
  </div>
)

export default LangSelector
