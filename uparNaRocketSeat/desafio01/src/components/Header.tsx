
import logo from '../assets/Logo.svg'

import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <img src={logo} alt="logo" />
    </header>
  )
}
