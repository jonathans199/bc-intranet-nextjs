import { NavDropdown } from "react-bootstrap"

export default function AroundBCTab() {
  return (
    <NavDropdown title="AROUND BC" id="nav-dropdown">
      <NavDropdown.Item href="restaurants">RESTAURANTS</NavDropdown.Item>
      <NavDropdown.Divider />
      <span className="mx-2 text-warning">COMING SOON </span>
      <NavDropdown.Item href="#">PARKS</NavDropdown.Item>
      <NavDropdown.Item href="#">CAFES</NavDropdown.Item>
      <NavDropdown.Item href="#">SHOPPING</NavDropdown.Item>
    </NavDropdown>
  )
}
