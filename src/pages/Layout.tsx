import React from 'react'
import { NavLink, Outlet } from 'react-router'

function Layout() {
  return (
    <div>Layout
      <header>
        <h1>Webáruház</h1>
        <nav>
          <NavLink to="/" end>Publikus felület</NavLink>

          <NavLink to="/admin" end>Addmin</NavLink>

          <NavLink to="/kosar" end>Kosár</NavLink>
        </nav>
      </header>
      <main>
        <Outlet/>
      </main>
    </div>
  )
}

export default Layout