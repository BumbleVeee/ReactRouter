import { Link } from "react-router"


function Public() {
  return (
    <section>
      <h2>Publikus felület</h2>
      <p>Itt jelennek meg a termékek.</p>
      <Link to="/termek/5">5-ös termék megtekintése</Link>
    </section>
  )
}

export default Public