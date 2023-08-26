import { HeaderContainer } from './styles'

import logoIgnite from '../../assets/timer-logo.svg'
import { Scroll, Timer } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <span>
        <img src={logoIgnite} alt="" />
      </span>
      <nav>
        <NavLink to="/" end title="Timer">
          <Timer size="24" />
        </NavLink>
        <NavLink to="/history" end title="History">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
