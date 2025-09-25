import { Link } from "react-router";

export default function NavBar() {
  return (
    <nav>
      <Link to="/" style={{ marginRight: "10px" }}>
        Home
      </Link>
      <Link to="/Injuries" style={{ marginRight: "10px" }}>
        Injuries List
      </Link>
      <Link to="/Posts" style={{ marginRight: "10px" }}>
        Posts
      </Link>
    </nav>
  );
}
