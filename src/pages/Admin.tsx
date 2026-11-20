import React from 'react'
import { Link } from 'react-router'

function Admin() {
  return (
    <section>
      <h2>Admin oldal, új termék</h2>
      <p>Itt veszünk fel új termékek.</p>
      <Link to="uj-termekek">Új termék</Link>
    </section>
  )
}

export default Admin