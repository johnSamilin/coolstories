import { Link } from "gatsby"
import React from "react"

import "./footer.css"

export const Footer = ({ lang = "ru" }) => (
  <footer>
    <Link to="/">{lang === "ru" ? "Содержание" : "Index"}</Link>
    <a href="mailto:alexandalexapps@outlook.com">Mail</a>
    <a href="https://www.linkedin.com/in/asaltykov/">Linkedin</a>
    <a href="https://github.com/johnSamilin">Github</a>
    <a href="https://habr.com/ru/users/john_samilin/posts/">Habr</a>
  </footer>
)
